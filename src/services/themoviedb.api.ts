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
  getMoviesByRate: (starNumber: number) =>
    axios
      .get(`${baseUrl}/3/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          /**
           * NOTE:
           * the lower limit should be multiply by 2 and then subtracted
           * 2 to be between 0-8
           * the upper limit is multiply by 2 to between 2-10
           */
          'vote_average.gte': starNumber * 2 - 2,
          'vote_average.lte': starNumber * 2,
          page: 500,
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
  Search: (query: string) =>
    axios
      .get(`${baseUrl}/3/search/movie`, {
        params: { query, api_key: process.env.REACT_APP_API_KEY },
      })
      .then((res) => res.data)
      .catch((error) => console.log(error)),
}
