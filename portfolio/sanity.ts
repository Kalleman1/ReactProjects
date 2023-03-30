import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
};

//Til at sætte client op til at hente data
export const sanityClient = createClient(config);

//Til at hente image fra sanity og lave det om til et URL.
export const urlFor = (source: any) => 
createImageUrlBuilder(config).image(source);