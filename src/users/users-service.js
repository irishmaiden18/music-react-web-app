import axios from "axios";

const USER_API_URL = 'http://localhost:4000/users'
const BASE_API_URL = 'http://localhost:4000'

const api = axios.create({withCredentials: true});

export const findUserById = async (uid) => {
    const response = await api.get(`${USER_API_URL}/${uid}`)
    const user = response.data
    return user
}

export const register = async (user) => {
    const response = await api.post(`${BASE_API_URL}/register`, user)
    const newUser = response.data
    return newUser
}

export const login = async (user) => {
    const response = await api.post(`${BASE_API_URL}/login`, user)
    return response.data
}

export const logout = async () => {
    const response = await api.post(`${BASE_API_URL}/logout`)
    return response.data
}
export const profile = async () => {
    const response = await api.post(`${BASE_API_URL}/profile`)
    return response.data
}

//export const editprofile = async (user) => {
//    const response = await api.put(`${BASE_API_URL}/edit-profile`, user)
//    const updateUser = response.data
//    return updateUser
//}

export const findAllUsers = async () => {
    const response = await axios.get(USER_API_URL)
    return response.data
}

export const createUser = () => {

}

export const deleteUser = async(uid) => {
console.log("In Service")
console.log(`${uid}`)
const response = await axios.delete(`${USER_API_URL}/${uid}`)
const status = response.data
    return uid;
}

export const updateUser = async(user) => {
//    uid = `${user.users._id}`
     console.log(user)
    const response = await axios.put(`${USER_API_URL}/${user.users._id}`, user)
        const updateUser = response.data
//        console.log(uid)
        return updateUser

}

//export const updateTuit = async (tuit) => {
//  const response = await axios
//    .put(`${TUITS_API}/${tuit._id}`, tuit);
//  return tuit;
//}