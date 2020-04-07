import axios from 'axios';





export async function getMask(y, x, setStores) {
   
    const response = await axios.get(
      `https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=${y}&lng=${x}`
      // `https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?`
      
    );
    const stores = response.data.stores
    return setStores(stores)
    
  }

  
