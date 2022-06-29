import axios from "axios";
import { url_base } from "../constants/url_base";

// Requisiçao para pegar todos os serviços salvos no backend
export const getAllJobs = (funcao) => {
    axios.get(`${url_base}/jobs`, {
        headers: {
            Authorization: 'e2190c39-7930-4db4-870b-bed0e5e4b88e'
        }
    }).then((response) => {
        funcao(response.data.jobs)
    }).catch((error) => {
        console.log(error.response)
    })
}