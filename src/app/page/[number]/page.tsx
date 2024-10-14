
import PostsLists from "@/app/components/PostsLists"
import PostsPagination from "@/app/components/PostsPagination";
import { notFound } from "next/navigation";
import { allPosts, Post } from "contentlayer/generated";
import {getPagination} from"@/utils/pagination"

// Ordenar los posts por fecha de forma descendente
const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date));

interface Props{
  params:{
    number: string;
  }
}

//genera pagina statica decirle a next que se genere las paginas estaticas
//crea las paginas 
export const generateStaticParams = () => {
  //slug 01 blog forma estatica 
  //return:[{
       //slug:  01 blog
  //}]
  //forma dinamica
   return Array.from({length:posts.length}).map((_, index)=>({
         number:`${index + 1}`,
   }))
  
};


const LayoutPage = ({params}:Props) => {

  let arrayCurrentPosts;
  let currentItems
  let totalPagesNumber;

  try {

    const{currentItems,totalPages} = getPagination(posts,2,params.number);
    arrayCurrentPosts=currentItems
    totalPagesNumber=totalPages
    
  } catch (error) {
    notFound(); 
    
  }


  return (
    <div>
      <h1 className="text-center my-4 text-4xl">Posts</h1>
      <div className="grid gap-4 text-center">
        <PostsLists posts={arrayCurrentPosts}/>
        {
          totalPagesNumber >1 && <PostsPagination totalPages={totalPagesNumber} 
          currentPage={ parseInt(params.number)}/>
        }
        
      </div>
    </div>
  )
}

export default LayoutPage       