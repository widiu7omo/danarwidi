import React from "react"
import Header from "../components/header"
import Dark from "../../static/dark.svg"
import Svg from "../components/svg"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { Link } from "gatsby"

const Home = () => {
  return <div className="container mx-auto px-12 pt-10 mb-auto">
    <Svg/>
    <Header textHeader="Danar Widi" theme={Dark}/>
    <Navigation/>
    <div className="max-h-full flex justify-center items-center flex-col h-full max-h-screen p-10 mt-32">
      <div className="text-4xl">Welcome to my site</div>
      <div className="text-base">Here's what i wrote when i want to share something with u guys. I hope usefull for you
        guys.
      </div>
      <Link to="/blog" className="rounded px-3 py-2 mt-4 bg-gray-300 hover:bg-black hover:text-white text-2xl">Discover
      </Link>
    </div>
    <Footer/>
  </div>
}
export default Home
