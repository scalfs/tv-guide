import { CastCredits, PeopleSearchResult } from '../types/tvmaze'
import api from './api'

const searchPeople = async (query: string) => {
  const response = await api.get<PeopleSearchResult[]>('/search/people', {
    params: { query }
  })
  return response.data
}

const fetchCastCredits = async (personId: number) => {
  const response = await api.get<CastCredits[]>(
    `people/${personId}/castcredits`,
    { params: { embed: 'show' } }
  )
  return response.data
}

export default { searchPeople, fetchCastCredits }
