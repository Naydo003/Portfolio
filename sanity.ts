import {createClient, groq} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // "pv8y60vp"
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production", // "production"
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // "2022-11-16"   // https://www.sanity.io/docs/api-versioning
  useCdn: process.env.NODE_ENV === "production"      // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) => (
  imageUrlBuilder(sanityClient).image(source)
)

// const data = await sanityClient.fetch(groq`*[]`)   // this gets put in your api to fetch data from Sanity