import React from "react"
import { Link } from "gatsby"

export default function Navigation(props) {
  console.log(props)
  let active = false ? "bg-yellow-400" : "hover:bg-yellow-300"
  return <div>
    <ul className={"flex mt-6 font-title text-lg"}>
      <li className={"mr-3"}><Link className={"rounded px-3 py-2 " + active} to={"/blog"}>Blog</Link></li>
      <li className={"mr-3"}><Link className={"rounded px-3 py-2 " + active} to={"/projects"}>Projects</Link>
      </li>
      <li className={"mr-3"}><Link className={"rounded px-3 py-2 " + active} to={"/about"}>About</Link></li>
    </ul>
  </div>
}