import {useEffect, useState} from "react";
import {requestToken, search} from "./service";

const Spotify = () => {
    const [token, setToken] = useState()
    const [items, setItems] = useState([])
    const getTheToken = async () => {
        const token = await requestToken()
        setToken(token)
    }
    const searchArtist = async () => {
        const token = await requestToken()
        const items = await search(token)
        setItems(items)
    }
    useEffect(() => {
        searchArtist()
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
export default Spotify