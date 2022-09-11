import { ShowsSearchResult, Show } from '../types/tvmaze'
import api from './api'

const fetchShows = async (page: number) => {
  const response = await api.get<Show[]>('/shows', { params: { page } })
  return response.data
}

const searchShows = async (query: string) => {
  const response = await api.get<ShowsSearchResult[]>('/search/shows', {
    params: { query }
  })
  return response.data
}

export default { fetchShows, searchShows }
