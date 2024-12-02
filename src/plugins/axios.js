import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNThlZTU5ZjkyMTg3M2M0ODE3ZTlmYjM0ZDdhMmZkMSIsIm5iZiI6MTczMTUwNzc0Mi41NTUsInN1YiI6IjY3MzRiNjFlMDIyNTc3MzZiZGQ5ZWQ4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CR9OLjkD_L19BtAlnrrOPchdMW4vFw7xgZRuaWUfiAE`,
  },
})

export default api
