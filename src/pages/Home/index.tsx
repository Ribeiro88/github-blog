import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/api";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer, PostsContainer } from "./styles";

export interface IssuesProps {
  number: number;
  title: string;
  body: string;
  created_at: string;
}

export function Home(){
  const [issues, setIssues] = useState<IssuesProps[]>([]);

  const fetchUserIssuesData =  useCallback(async () => {
    const response = await api.get("/repos/Ribeiro88/github-blog/issues");

    setIssues(response.data)
  }, []);

  useEffect(() => {
    fetchUserIssuesData()
  }, [])


  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <PostsContainer>
        {issues.map(issue => {
          return (
            <PostCard key={issue.number} number={issue.number} title={issue.title} body={issue.body} created_at={issue.created_at} />
          )
        })}
      </PostsContainer>
    </HomeContainer>
  )
}