import axios from "axios";
import { url_base } from "../constants/url_base";

// Requisiçao para pegar todos os serviços salvos no backend
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