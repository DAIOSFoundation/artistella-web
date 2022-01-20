
const BASE_URL = "https://api-mainnet.magiceden.io";


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
        Skull: () => fetch(`${BASE_URL}/rpc/getListedNFTsByQuery?q={"$match":{"collectionSymbol":"skeleton_crew_skulls"},"$sort":{"createdAt":-1},"$skip":0,"$limit":20}`)
        .then((res) => res.json()),
      
}

export const itemDetail = {
        mint: ({ queryKey }) => {
                const [_, mintAdress] = queryKey;
                return fetch(
                `${BASE_URL}/rpc/getNFTByMintAddress/${mintAdress}`)
                .then((res) => res.json())},
                
        moreCollection: ({ queryKey }) => {
                  const [_, collectionSymbol] = queryKey;
                  return fetch(
                  `${BASE_URL}/getListedNFTsByQuery?q={"$match":{"collectionSymbol":"${collectionSymbol}"},"$sort":{"createdAt":-1},"$skip":0,"$limit":20}`)
                  .then((res) => res.json())},

}

export const artist = {
      colName: ({ queryKey }) => {
              const [_, col ] = queryKey;
              console.log(col)
              return fetch(
              `${BASE_URL}/collections/${col}`)
              .then((res) => res.json())},
      
      collections: ({ queryKey }) => {
                const [_, collectionName ] = queryKey;
                console.log(collectionName)
                return fetch(
                  
                `${BASE_URL}/rpc/getListedNFTsByQuery?q={"$match":{"collectionSymbol":"${collectionName}"},"$sort":{"createdAt":-1},"$skip":0,"$limit":20}`)
                .then((res) => res.json())},
<<<<<<< HEAD
    
      
      
=======
        moreCollection: ({ queryKey }) => {
                const [_, collectionSymbol] = queryKey;
                return fetch(
                `${BASE_URL}/getListedNFTsByQuery?q={"$match":{"collectionSymbol":"${collectionSymbol}"},"$sort":{"createdAt":-1},"$skip":0,"$limit":20}`)
                .then((res) => res.json())},
>>>>>>> ba531f4acd32f794869f88b73438748916553cb2
}

