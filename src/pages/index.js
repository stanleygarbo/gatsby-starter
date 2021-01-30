import React from "react"
import Heading from "../components/Heading"
import Layout from "../components/layout"
import Posts from "../components/Posts"
import SEO from "../components/seo"
import SubscribeForm from "../components/SubscribeForm"
import {useStaticQuery,graphql} from 'gatsby'
import About from "../components/About"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query{
      file(name: {eq: "PageImageWithLogo-final"}) {
        publicURL
      }
      allContentfulBlogPost{
        edges{
          node{
            title
            datePublished(formatString:"MMMM Do, YYYY")
            summary
            slug
            blogBanner{
              title
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
      allContentfulTutorialPost{
        edges{
          node{
            banner{
              title
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            title
            datePublished(formatString:"MMMM Do, YYYY")
            slug
            summary
          }
        }
      }
    }    
  `)
  
  return (
    <Layout>
      <SEO 
        title="Home" 
        image={data.file.publicURL} 
        description='A place for aspiring developers to enhance their skill.'
        canonicalHref='https://www.coderko.tech' 
        lang='en'
      />
      <Heading/>
      <Posts title='Blogs' type='blogs' data={data.allContentfulBlogPost.edges} />
      <Posts title='Tutorials' type='tutorials' data={data.allContentfulTutorialPost.edges} />
      <SubscribeForm />
      <About/>
    </Layout>
  )
}

export default IndexPage
