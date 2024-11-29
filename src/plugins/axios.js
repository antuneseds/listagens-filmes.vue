import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNThlZTU5ZjkyMTg3M2M0ODE3ZTlmYjM0ZDdhMmZkMSIsIm5iZiI6MTczMjg5MDMxNC4zNzI0MDM5LCJzdWIiOiI2NzM0YjYxZTAyMjU3NzM2YmRkOWVkODgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8WB47WLxfGyG2wwPDKgbAWLLQ4HPF-nUULd09hTH1fw`,
  },
})

export default api