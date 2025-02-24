import axios from "axios";

const api = axios.create({
    baseURL: "http://10.89.240.68:5000/api/v1/",
    headers:{
        'accept':'application/json'
    }
});

const sheets = {
    postLogin:(user)=>api.post("login", user)
   
}
const sheets2 = {
    postUser:(user)=>api.post("user", user)
}

export default sheets2;