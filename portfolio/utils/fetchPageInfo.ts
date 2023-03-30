import { PageInfo } from "@/typings";


//Henter dataen fra backend til frontend
export const fetchPageInfo = async() => {
    const response = await fetch(`http://localhost:3000/api/getPageInfo/api/getPageInfo`)

    const data = await response.json()
    const pageInfo: PageInfo = data.pageInfo

    return pageInfo;
}