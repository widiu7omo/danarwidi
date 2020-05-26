import React from "react"
import Header from "../components/header"
import Dark from "../../static/dark.svg"
import Svg from "../components/svg"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  let colors = ["blue", "yellow", "red", "gray"]
  return <div className="container mx-auto px-12 pt-10 flex flex-col h-full">
    <Header textHeader="Danar Widi" theme={Dark}/>
    <div>
      <Svg/>
      <Navigation/>
      <div className="mr-30 lg:pr-40 md:pr-40 my-12 flex justify-between items-center">
        {
          data.allMarkdownRemark.nodes.map(post => {
            let randomIndex = Math.floor(Math.random() * (colors.length - 1))
            return (
              <div className={`bg-${colors[randomIndex]}-300 rounded p-5 mr-4 shadow-md hover:shadow-2xl`}
                   key={post.id}>
                <div className="flex justify-between">
                  <div className="text-lg font-mono font-bold">{post.frontmatter.title}
                  </div>
                </div>
                <div className="text-base mt-3">{post.excerpt}</div>
                <div className="flex justify-between mt-3">
                  <div className="font-bold"><Link to={"/"}>Read
                    More...</Link>
                  </div>
                  <div className="text-gray-700 text-sm">{post.frontmatter.date}</div>
                </div>
              </div>)
          })
        }
      </div>
    </div>
    <Footer/>
  </div>
}
export const query = graphql`
    query {
        allMarkdownRemark {
            nodes {
                id
                frontmatter {
                    date(locale: "ID", fromNow: true)
                    title
                }
                excerpt
            }
            totalCount
        }
    }
`