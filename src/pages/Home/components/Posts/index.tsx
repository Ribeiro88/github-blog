import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


import { PostCard } from "./PostCard";
import { PostsContainer, PostsListContainer, SearchFormContainer, SearchFormHeader, SearchFormHeaderPublications, SearchFormHeaderTitle } from "./styles";
import { api } from "../../../../lib/api";

export interface PostProps {
  id?: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function fetchUserIssuesData(query: string = "") {
    const response = await api.get("search/issues", {
      params: {
        q: `repo:Ribeiro88/github-blog ${query}`,
      }
    });
    
    setPosts(response.data.items)
  }

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchUserIssuesData(data.query)
  }

  useEffect(() => {
    fetchUserIssuesData()
  }, [])

 
  return (
    <PostsContainer>
      <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
        <SearchFormHeader>
          <SearchFormHeaderTitle>Publicações</SearchFormHeaderTitle>
          <SearchFormHeaderPublications>
            {posts.length === 1 ? `${posts.length} publicação` : `${posts.length} publicações`}
          </SearchFormHeaderPublications>
        </SearchFormHeader>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
        />
      </SearchFormContainer>

      <PostsListContainer>
        {posts.map(post => {
          return (
            <PostCard key={post.id} number={post.number} title={post.title} body={post.body} created_at={post.created_at} />
          )
        })}
      </PostsListContainer>
    </PostsContainer>
  );
}