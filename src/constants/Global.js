export default {
    API :  process.env.API_URL,
    NAME : "Siddhan Jhawar",
    KEY: process.env.API_KEY,
    GET: "Get",
    POST: "POST",
    AUTHORIZATION: {headers: {Authorization: `Bearer ${process.env.API_KEY}`}}
}