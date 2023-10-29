export default {
    API :  process.env.NEXT_PUBLIC_BACKEND_URL,
    NAME : "Siddhan Jhawar",
    KEY: process.env.NEXT_PUBLIC_BACKEND_API_KEY,
    GET: "Get",
    POST: "POST",
    AUTHORIZATION: {headers: {Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_KEY}`}}
}