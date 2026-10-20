import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
  
     <h1> i am from page</h1>
     <Link className='text-yellow-500' href="/dashboard">dashboard</Link>
     <Link  className='text-red-500' href="/settings">settings</Link>
   </div>
  )
}
