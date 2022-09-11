import { Show } from '../types/tvmaze'
import api from './api'

export { default as shows } from './shows'

const fetchShows = async (page: number) => {
  const response = await api.get<Show[]>('/shows', { params: { page } })
  return response.data
}

const searchShows = async (q: string) => {
  const response = await api.get<Show[]>('/search/shows', { params: { q } })
  return response.data
}

export default { fetchShows, searchShows }
