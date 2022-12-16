import axios from "axios";
import {Buffer} from "buffer";

const api = axios.create({withCredentials: true})

const client_id = '46273ede126540ecb96db32d50d5f08c';
const client_secret = '6cf520362bff407ebab1afd5c0e11b94';



let formData = new FormData();
formData.append('grant_type', 'client_credentials');

let authOptions = {
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

// request.post(authOptions, function(error, response, body) {
//     if (!error && response.statusCode === 200) {
//         var token = body.access_token;
//     }
// });

export const requestToken = async () => {
//    const response = await api.post('https://accounts.spotify.com/api/token', {}, authOptions)

     return fetch('https://accounts.spotify.com/api/token', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/x-www-form-urlencoded',
             'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
         },
         body: 'grant_type=client_credentials'
     }).then(function(response) {
         console.log('response: ' +JSON.stringify(response) )
         return response.json();
     }).then(function(data) {
         console.log("data: " + JSON.stringify(data));
         console.log('Access token:', data.access_token);
         return data.access_token
    }).catch(function(error) {
         console.error('Error:', error);
    });

    // const response1 = await fetch('https://accounts.spotify.com/api/token', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    //     },
    //     body: 'grant_type=client_credentials'
    // })
    // console.log('response: ' +JSON.stringify(response1) );




//     const response = await fetch('https://accounts.spotify.com/api/token', {
//         method: 'post',
// //        body: formData,
//         form: {
//             grant_type: 'client_credentials'
//         },
//         headers: {
//             'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
//             'content-type': 'application/json'
//         }
//     })
//     const token = await response.json()
//     console.log(token)
//     return token
}

export const search = async (ACCESS_TOKEN, query) => {

    console.log("query:" + query);
    console.log("token:" + ACCESS_TOKEN);

    return fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
        headers: {
            'Authorization': 'Bearer ' + ACCESS_TOKEN
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log('Songs:', data.tracks.items);
        return data.tracks.items
    }).catch(function(error) {
        console.error('Error:', error);
    });


    // const {data} = await axios.get("https://api.spotify.com/v1/search", {
    //     headers: {
    //         'Authorization': 'Bearer ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    //     },
    //     params: {
    //         q: 'ACDC',
    //         type: "artist"
    //     }
    // })
    // return data
}