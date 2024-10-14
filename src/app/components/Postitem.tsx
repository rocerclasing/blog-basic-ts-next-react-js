import Link from "next/link";

import { Post } from "contentlayer/generated";
import ButtonLink from "./ButtonLink";

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <article className="rounded border p-4">
    <h2 className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-4xl font-bold text-transparent">
      <Link href={post.url}>{post.title}</Link>
    </h2>
    <time>
      {new Date(post.date).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </time>
    <p>{post.description}</p>
    <ButtonLink href={post.url}>Seguir leyendo</ButtonLink>
  </article>
  );
};
export default PostItem;
