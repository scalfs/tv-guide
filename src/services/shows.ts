import { Episode, Show, ShowsSearchResult } from '@types'

import api from './api'

export const fetchShows = async ({ pageParam: page = 0 }) => {
  const response = await api.get<Show[]>('/shows', { params: { page } })
  return response.data
}

export const fetchEpisodes = async (showId: number) => {
  const response = await api.get<Episode[]>(`/shows/${showId}/episodes`)
  return response.data
}

export const searchShows = async (query: string) => {
  const response = await api.get<ShowsSearchResult[]>('/search/shows', {
    params: { q: query }
  })
  return response.data.map((result) => result.show)
}
