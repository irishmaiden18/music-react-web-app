import {useEffect, useState} from "react";
import {requestToken, search} from "./service";

const Spotify = () => {
    const [token, setToken] = useState(null)
    const [items, setItems] = useState([])
    const getTheToken = async () => {
        const token = await requestToken()
        setToken(token)
    }
    const searchArtist = async (term) => {
        if (!token) {
            let token = await requestToken()
            setToken(token)
        }
        const items = await search(token, term)
        setItems(items)
    }
    useEffect(() => {
        //getTheToken();
       // console.log("initial token: " + token);
        searchArtist("over the rainbow")
    }, [])
    return(
        <>
            <h1>Spotify</h1>
            <pre>
                {JSON.stringify(token, null, 2)}
            </pre>
            <pre>
                {JSON.stringify(items, null, 2)}
            </pre>
        </>
    )
}
export default Spotify;