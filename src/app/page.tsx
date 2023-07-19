export default function Home() {

  return (
    <div className="  ">
      <h1 className="font-bold text-2xl"> Welcome! </h1>
      <p> Looking to learn more about what you eat? Enter a food name to see nutritional values and recommendations.</p>
      <form action="" method="get">
        <input type="text" name="query" id="query" className="border-2 border-black p-1" required />
        <input type="submit" id="submit" value="Go" className="border-2 border-black p-1"/>
      </form>


    </div>
  )

}
