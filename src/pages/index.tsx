import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { ProductCard } from '../components/ProductCard/ProductCard';
import styles from "./home.module.scss";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className={styles.productList}>
      { data.vendure.products.items.map(item => <ProductCard product={item} key={item.id} />) }
    </section>
  </Layout>
)

export const query = graphql`
  {
    vendure {
      products {
        items {
          id
          name
          slug
          description
          featuredAsset {
            id
            preview
          }
          variants {
            id
            priceWithTax
            currencyCode
          }
        }
      }
    }
  }`;

export default IndexPage
