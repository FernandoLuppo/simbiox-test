import { Response, Request } from "express";
import axios from "axios"

const API_KEY = "78623a6ef0a9f50c44067ab1d8c09dae"
const API_BASE = "https://api.themoviedb.org/3"

const TmDB = {

    trending: async (req:Request, res:Response) => {
        
        await axios.get(`${API_BASE}/trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then()
        .then(json => {res.status(200).send(json.data)})
        .catch((error:Response) => res.status(400).send(error))
        
    },

    topRated: async (req:Request, res:Response) => {
       
        await axios.get(`${API_BASE}/movie/top_rated?api_key=${API_KEY}&language=en-US`)
        .then()
        .then(json => {res.status(200).send(json.data)})
        .catch((error:Response) => res.status(400).send(error))
        
    },

    action: async (req:Request, res:Response) => {
        
        await axios.get(`${API_BASE}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`)
        .then()
        .then(json => {res.status(200).send(json.data)})
        .catch((error:Response) => res.status(400).send(error))
        
    },

    comedy: async (req:Request, res:Response) => {
        
        await axios.get(`${API_BASE}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`)
        .then()
        .then(json => {res.status(200).send(json.data)})
        .catch((error:Response) => res.status(400).send(error))
        
    },

    horror: async (req:Request, res:Response) => {
        
        await axios.get(`${API_BASE}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`)
        .then()
        .then(json => {res.status(200).send(json.data)})
        .catch((error:Response) => res.status(400).send(error))
        
    },

    romance: async (req:Request, res:Response) => {

        await axios.get(`${API_BASE}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`)
        .then()
        .then(json => {res.status(200).send(json.data)})
        .catch((error:Response) => res.status(400).send(error))
        
    },
}
export default TmDB