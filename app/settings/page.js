"use client"
import { useRouter } from 'next/navigation'

export default function Dash() {
  const router = useRouter();
  let back = () => {
    router.push('/')
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <button onClick={back} className='bg-blue-500 rounded text-white p-2 m-4'>
        Go to Home
      </button>
      <h1>i am from dash</h1>
    </div>
  )
}