import React from "react"
import { graphql } from "gatsby"

export default function About({ data }) {
  return <h2>{data.site.siteMetadata.title}</h2>
}
export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`