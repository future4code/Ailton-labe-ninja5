import axios from "axios";
import { url_base } from "../constants/url_base";

// Requisiçao para pegar todos os serviços salvos no backend (usada em App.js)
export const getAllJobs = (funcao) => {
    axios.get(`${url_base}/jobs`, {
        headers: {
            Authorization: '8edd7464-7802-4bcd-a411-fdf55999ce37'
        }
    }).then((response) => {
        funcao(response.data.jobs)
    }).catch((error) => {
        console.log(error.response)
    })
}

// Requisição para pegar serviços a partir da id (usada em DetalhesCard.js)
export const getJobById = (id, funcao) => {
    axios.get(`${url_base}/jobs/${id}`, {
        headers: {
            Authorization: '8edd7464-7802-4bcd-a411-fdf55999ce37'
        }
    }).then((response) => {
        funcao(response.data)
    }).catch((error) => {
        console.log(error.response)
    })
}