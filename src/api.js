

const BASE_URL = "https://api-mainnet.magiceden.io/rpc/getListedNFTsByQuery";


export const Skull = () => fetch(`${BASE_URL}?q={"$match":{"collectionSymbol":"skeleton_crew_skulls"},"$sort":{"createdAt":-1},"$skip":0,"$limit":6}`)
        .then((res) => res.json());