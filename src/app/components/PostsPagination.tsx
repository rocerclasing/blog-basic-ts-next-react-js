import Link from "next/link";

interface Props{
  totalPages:number,
  currentPage?:number;
  
}

const PostsPagination = ({totalPages,currentPage =1}:Props) => {
  return (
    <div className="flex gap-4">

        <Link href={`/page/${currentPage -1}`} 
              className={`${currentPage ===  1 ? 
                "text-gray-600 pointer-events-none" 
                : "text-blue-700"
                }`}>Prev</Link>
        {
          Array.from({length:totalPages}).map((_, index) => (

                    <Link

                        className={`${currentPage === index + 1 ? 
                          "text-gray-600  pointer-events-none" 
                          : "text-blue-700"
                          }`}
                        href={`/page/${index + 1}`} 
                        key={index}>{index + 1}
                     
                    
                    </Link>

               
            
          ))

        }
        <Link href={`/page/${currentPage + 1}`} 

               className={`${currentPage ===totalPages ? 
                "text-gray-600 pointer-events-none" 
                : "text-blue-700"
                }`}
              >Next</Link>


    </div>
  )
}

export default PostsPagination