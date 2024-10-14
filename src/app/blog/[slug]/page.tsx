import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}
//genera pagina statica decirle a next que se genere las paginas estaticas
//crea las paginas 
export const generateStaticParams = () => {
  //slug 01 blog forma estatica 
  //return:[{
       //slug:  01 blog
  //}]
  //forma dinamica
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
};
//SEO
// saltar error ?
export const generateMetadata = ({ params }: Props) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    title: post?.title,
    description: post?.description,
  };
};

const PostLayout = ({ params }: Props) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

  let MDXContent;
  if (!post) {
    return notFound();;
  } else {
    MDXContent = getMDXComponent(post.body.code);
  }

  return (
    <div>
      <time>
        {new Date(post.date).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <article>
        <MDXContent />
      </article>
    </div>
  );
};
export default PostLayout;
