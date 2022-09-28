import { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostContainer, PostContent, PostFooter, PostFooterInfoBox, PostFooterInfoBoxText, PostHeader, PostHeaderLinks, PostHeaderTitle } from "./styles";
import { api } from "../../lib/api";
import { formatDate } from "../../utils/formatDate";

interface PostProps {
  id: number;
  html_url: string;
  title: string;
  user: {
    login: string;
  },
  created_at: string;
  comments: number;
  body: string;
};


export function Post() {
  const { postNumber } = useParams();
  const [postData, setPostData] = useState<PostProps[]>([]);

  const fetchPostData =  useCallback(async () => {
    const response = await api.get(`/repos/Ribeiro88/github-blog/issues/${postNumber}`);

    setPostData([response.data])
  }, []);

  useEffect(() => {
    fetchPostData()
  }, [])

  return (
    <PostContainer>
      {postData.map(post => {
        return (
          <Fragment key={post.id}>
            <PostHeader>
              <PostHeaderLinks>
                <a href="/">
                  <FontAwesomeIcon icon={faChevronLeft} />
                  Voltar
                </a>
                <a href={post.html_url}>
                  Ver no GitHub
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </PostHeaderLinks>
              <PostHeaderTitle>{post.title}</PostHeaderTitle>
              <PostFooter>
                <PostFooterInfoBox>
                  <FontAwesomeIcon icon={faGithub} />
                  <PostFooterInfoBoxText>{post.user.login}</PostFooterInfoBoxText>
                </PostFooterInfoBox>
                <PostFooterInfoBox>
                  <FontAwesomeIcon icon={faCalendarDay} />
                  <PostFooterInfoBoxText>{formatDate(post.created_at)}</PostFooterInfoBoxText>
                </PostFooterInfoBox>
                <PostFooterInfoBox>
                  <FontAwesomeIcon icon={faComment} />
                  <PostFooterInfoBoxText>
                    {`${post.comments} ${
                      post.comments >= 1
                        ? "comentário"
                        : "comentários"
                    }`}
                  </PostFooterInfoBoxText>
                </PostFooterInfoBox>
              </PostFooter>
            </PostHeader>
            <PostContent>
              <ReactMarkdown>{post.body}</ReactMarkdown>
            </PostContent>
          </Fragment>
        )
      })}
    </PostContainer>
  )
}