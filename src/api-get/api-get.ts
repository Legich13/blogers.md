import axios from "axios";
// import {apiDefault} from "../types/types.Api"

const usersApi:string = ' https://jsonplaceholder.typicode.com/users'

const postUsersApi  = 'https://jsonplaceholder.typicode.com/posts'

const postUserIdApi = 'https://jsonplaceholder.typicode.com/posts?userId='

const avatarUserApi = 'https://i.pravatar.cc/150?img='


export const getUserApi = () => {
    return axios.get(usersApi)
}

export const getPostsApi = () => {
    return axios.get(postUsersApi)
}

export const getUserIdApi = (postId:any) => {
    return axios.get(postUserIdApi + postId)
}

export const getAvatarUserApi = (userId:any) => {
    return axios.get(avatarUserApi + userId)
}