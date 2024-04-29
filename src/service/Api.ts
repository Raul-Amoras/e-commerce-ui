import axios from "axios";

export function Api(){
    return axios.create({
        baseURL: 'http://localhost:3333'
    })
}