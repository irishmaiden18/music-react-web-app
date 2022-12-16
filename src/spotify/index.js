import {useEffect, useState} from "react";
import {requestToken, search} from "./service";

const Spotify = () => {
    const [token, setToken] = useState(null)
    const [items, setItems] = useState([])
    const getTheToken = async () => {
        const token = await requestToken()
        setToken(token)
    }

    var debounce = false;
    let token1 = null;
    var items1 = null;

    const searchSong = async (term) => {
        if (token1==null && !debounce) {
            debounce = true;
            console.log("if statement executes");
            token1 = await requestToken()
            setToken(token1)
            console.log("passed request: " + token1);
            debounce = false;
        }
        if(token1 != null) {
            console.log("toekn in search: " + token1);
            items1 = await search(token1, term)
            setItems(items1)
            console.log('items: ', items1);
            return items1;
        }

    }
    useEffect(() => {
        //getTheToken();
        console.log("initial token: " + token);
        searchSong("over the rainbow")
    }, [])
    return(
        <>
            <h1>Spotify</h1>
            <pre>
                {JSON.stringify(token, null, 2)}
            </pre>
            <pre>
                {JSON.stringify(items1, null, 2)}
            </pre>
        </>
    )
}
export default Spotify;