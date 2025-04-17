import axios from "axios";

const jarvis = axios.create({
  baseURL: "http://localhost:3000",
  headers: { api_key: "Homem_de_Ferro" },
});

export default {
  getAllTimes() {
    return new Promise((resolve, reject) => {
      jarvis
        .get("/times")
        .then((response) => {
          resolve(response.data);
        })
        .catch((erro) => {
          reject(erro);
          console.log("Deu erro", erro);
        });
    });
  },
};
