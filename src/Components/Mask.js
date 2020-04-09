import axios from 'axios';





export async function getMask(y, x, setStores) {
   
    const response = await axios.get(
      `https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=${y}&lng=${x}&m=1000`
      // `https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?`
      
    );
    const stores = response.data.stores
    const store = stores.map(store=>{
      const { addr, name, lat, lng, remain_stat } = store
      return { addr, name, lat, lng, remain_stat }
    })
    return setStores(store)
}

  
