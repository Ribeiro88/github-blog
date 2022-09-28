import { PostProps } from "..";
import { formatDate } from "../../../../../utils/formatDate";
import { PostCardContainer, PostCardContent, PostCardHeader, PostCardHeaderDate, PostCardHeaderTitle } from "./styles";

export function PostCard({ number, title, body, created_at }: PostProps) {
  const preview = body.split(" ", 20).join(" ").concat("...");
  const postDate = formatDate(created_at);

  return (
    <PostCardContainer href={`/post/${number}`}>
      <PostCardHeader>
        <PostCardHeaderTitle>{title}</PostCardHeaderTitle>
        <PostCardHeaderDate>{postDate}</PostCardHeaderDate>
      </PostCardHeader>

      <PostCardContent>
        {preview}
      </PostCardContent>
    </PostCardContainer>
  );
}