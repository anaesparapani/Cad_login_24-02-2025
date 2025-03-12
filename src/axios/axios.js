import axios from "axios";

const api = axios.create({
    baseURL: "http://10.89.240.64:5000/api/v1/",
    headers:{
        'accept':'application/json'
    }
});

const sheets = {
    postLogin:(user)=>api.post("login", user),
    postUser:(user)=>api.post("user", user),
    postOrganizador:(organizador)=>api.post("organizador", organizador),
    postEvento:(evento)=>api.post("evento", evento),
    postIngresso:(ingresso)=>api.post("ingresso",ingresso)
}

export default sheets;