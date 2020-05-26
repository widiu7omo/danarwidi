import React from "react"
import Header from "../components/header"
import Dark from "../../static/dark.svg"
import Svg from "../components/svg"
import Navigation from "../components/navigation"
import Footer from "../components/footer"


export default function Home() {
  return <div className="container mx-auto px-12 pt-10">
    <Svg/>
    <Header textHeader="Danar Widi" theme={Dark}/>
    <Navigation/>
    <div className="">

    </div>
    <Footer/>
  </div>
}
