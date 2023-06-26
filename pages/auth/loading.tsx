import React,{useEffect} from 'react'
import { useRouter } from 'next/router';

const Loading = () => {
    const router = useRouter();
    useEffect(() => {
      setTimeout(() => {
        router.push("/home")
      }, 2000);
    }, [])
    
  return (
    <div></div>
  )
}

export default Loading;