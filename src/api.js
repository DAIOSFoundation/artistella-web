
const BASE_URL = "https://api-mainnet.magiceden.io/rpc";


export const main = {
        Carousel: () =>
                fetch('https://api-mainnet.magiceden.io/featured_carousels').then((res) => res.json())
        ,
        Upcoming: () =>
                fetch('https://api-mainnet.magiceden.io/upcoming_launches').then((res) => res.json())
        ,
        Popular: () =>
                fetch('https://api-mainnet.magiceden.io/popular_collections').then((res) => res.json())
        ,

}

export const itemList = {
        Skull: () => fetch(`${BASE_URL}/getListedNFTsByQuery?q={"$match":{"collectionSymbol":"skeleton_crew_skulls"},"$sort":{"createdAt":-1},"$skip":0,"$limit":20}`)
        .then((res) => res.json()),

}

export const itemDetail = {
        mint: ({ queryKey }) => {
                const [_, mintAdress ] = queryKey;
                return fetch(
                `${BASE_URL}/getNFTByMintAddress/${mintAdress}`)
                .then((res) => res.json())},
}

