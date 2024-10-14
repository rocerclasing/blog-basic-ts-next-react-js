"use client";

import { useRouter } from 'next/navigation'

interface Props{
    children:React.ReactNode;
}

const ButtonBack = ({children}:Props) => {

    const router = useRouter()

  return (
    <>
    <button type="button"onClick={()=>router.back()}>
        {children}
    </button>

    
    </>
  )
}

export default ButtonBack