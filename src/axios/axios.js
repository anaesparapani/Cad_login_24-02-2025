import axios from "axios";

const api = axios.create({
  baseURL: "http://10.89.240.94:5000/api/v1/",
  headers: {
    accept: "application/json",
  },
});

const sheets = {
  postLogin: (user) => api.post("login", user),
  postUser: (user) => api.post("user", user),
  postOrganizador: (organizador) => api.post("organizador", organizador),
  postEvento: (evento) => api.post("evento", evento),
  postIngresso: (ingresso) => api.post("ingresso", ingresso),
  getEventos: () => api.get("evento"),
  getIngressosPorEvento: (idEvento) => api.get(`ingresso/evento/${idEvento}`),
  createIngresso: (dados) => api.post("/ingresso", dados),
};

export default sheets;