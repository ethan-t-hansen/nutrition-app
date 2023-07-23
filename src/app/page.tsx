'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {

  const [searchParam, setSearchParam] = useState('');

  const router = useRouter()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?query=${searchParam}`)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam(event.target.value);
  };

  return (
    <div className="  ">
      <h1 className="font-bold text-2xl"> Welcome! </h1>
      <p> Looking to learn more about what you eat? Enter a food name to see nutritional values and recommendations.</p>
      <form onSubmit={handleSubmit}  method="get">
        <input type="text" value={searchParam} placeholder="What are you looking for?" onChange={handleInputChange}
               id="query" className="border-2 border-black p-1" required />
        <input type="submit" id="submit" value="Go" className="border-2 border-black p-1"/>
      </form>


    </div>
  )

}
