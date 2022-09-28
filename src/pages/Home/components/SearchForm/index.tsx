import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from "../../../../lib/api";

import { SearchFormContainer, SearchFormHeader, SearchFormHeaderPublications, SearchFormHeaderTitle } from "./styles";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
 const [search, setSearch] = useState([]);


  const {
    register,
    handleSubmit
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const fetchUserSearchData =  useCallback(async (query: string) => {
    const issues = await api.get("/search/issues", {
      params: {
        q: `repo:Ribeiro88/github-blog is:issue ${query}`,
      },
    });

    setSearch(issues.data.items)
  }, []);


  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchUserSearchData(data.query)
  }

 
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
        <SearchFormHeader>
          <SearchFormHeaderTitle>Publicações</SearchFormHeaderTitle>
          <SearchFormHeaderPublications>
            {`${search.length} ${
              search.length >= 1
                ? "publicação"
                : "publicações"
            }`}
          </SearchFormHeaderPublications>
        </SearchFormHeader>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
        />
    </SearchFormContainer>
  )
}