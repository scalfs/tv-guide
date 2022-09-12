import { CastCredits, PeopleSearchResult } from '@types'

import api from './api'

export const searchPeople = async (query: string) => {
  const response = await api.get<PeopleSearchResult[]>('/search/people', {
    params: { query }
  })
  return response.data
}

export const fetchCastCredits = async (personId: number) => {
  const response = await api.get<CastCredits[]>(
    `people/${personId}/castcredits`,
    { params: { embed: 'show' } }
  )
  return response.data
}
