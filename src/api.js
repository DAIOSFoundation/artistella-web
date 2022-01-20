

const BASE_URL = "https://api-mainnet.magiceden.io/rpc/getListedNFTsByQuery";

export const Skull = () => fetch(`${BASE_URL}?q={"$match":{"collectionSymbol":"skeleton_crew_skulls"},"$sort":{"createdAt":-1},"$skip":0,"$limit":6}`)
        .then((res) => res.json());

export const Carousel = () =>fetch('https://api-mainnet.magiceden.io/featured_carousels').then((res)=>res.json());

export const Upcoming = () =>fetch('https://api-mainnet.magiceden.io/upcoming_launches').then((res)=>res.json());

export const  Popular = () =>fetch('https://api-mainnet.magiceden.io/popular_collections').then((res)=>res.json());
