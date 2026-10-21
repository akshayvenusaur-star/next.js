"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function dash() {
  let router=useRouter();
  let back=()=>{
    router.push('/')
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
    <button onClick={back}className='bg-blue-500 rounded text-white font bold py-2 px-4'>Back</button>
     <h1> i am from dash</h1>
   </div>
  )
}
