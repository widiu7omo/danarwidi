import React from "react"
import Moto from "./moto"
import { Link } from "gatsby"

export default function Header(props) {
  return <div>
    <div className="flex justify-between items-center sticky">
      <div className="text-5xl font-title"><Link to={"/"}>{props.textHeader}</Link></div>
      <div>
        <button><img src={props.theme} alt="theme"/></button>
      </div>
    </div>
    <Moto/>
  </div>
}