import axios from 'axios'
export const baseUrl = 'https://api.themoviedb.org'
export default {
  getConfig: () =>
    axios
      .get(`${baseUrl}/3/configuration`, {
        params: { api_key: process.env.REACT_APP_API_KEY },
      })
      .then((res) => res.data)
      .catch((error) => {
        console.log(error)
      }),
  getPopularMovies: () =>
    axios
      .get(`${baseUrl}/3/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          sort_by: 'popularity.desc',
        },
      })
      .then((res) => res.data)
      .catch((error) => console.log(error)),
  getMovieDetails: (id: number) =>
    axios
      .get(`${baseUrl}/3/movie/${id}`, {
        params: { api_key: process.env.REACT_APP_API_KEY },
      })
      .then((res) => res.data)
      .catch((error) => console.log(error)),
  search: (query: string) =>
    axios
      .get(`${baseUrl}/3/search/movie`, {
        params: { query, api_key: process.env.REACT_APP_API_KEY },
      })
      .then((res) => res.data)
      .catch((error) => console.log(error)),
}
