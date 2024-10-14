
import { getPagination } from "@/utils/pagination";
import PostsLists from "../components/PostsLists";
import PostsPagination from "../components/PostsPagination";
import { allPosts, Post } from "contentlayer/generated";

// Ordenar los posts por fecha de forma descendente
const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date));

// SEO
export const metadata = {
  title: "Listar todos los posts",
  description: "Descripción de los posts - Generado por create next app",
};

const Page = () => {
  // Obtener los posts actuales y el número total de páginas desde la paginación
  const { currentItems, totalPages } = getPagination(posts); // Pass postsPerPage = 10 and currentPage = 1

  return (
    <div>
      <h1 className="text-center my-4 text-4xl">Posts</h1>
      <div className="grid gap-4 text-center">
        {/* Listar los posts paginados */}
        <PostsLists posts={currentItems} />
        {/* Mostrar la paginación solo si hay más de una página */}
        {totalPages > 1 && <PostsPagination totalPages={totalPages} />}
      </div>
    </div>
  );
};

export default Page;