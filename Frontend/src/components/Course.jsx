import { Link } from "react-router-dom"
import Cards from "./Cards"
import List from '/src/list.json'


const Course = () => {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl">We're delighted to have you
                 <span className="text-pink-500"> Here:)</span>
           </h1>
           <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quis expedita? Consequuntur velit adipisci fuga eius, ipsam, exercitationem iusto dolorum quod minima earum amet blanditiis eos doloribus eaque facilis architecto?
           </p>
           
           <Link to="/">
           <button className="bg-pink-500 mt-6 px-3 py-2 text-white rounded-md hover:bg-pink-700 duration-300">Back</button>
           </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                List.map((item)=>(

                    <Cards key={item.id} item={item} />

                ))
                
            }
        </div>

    </div>
    </>
  )
}

export default Course