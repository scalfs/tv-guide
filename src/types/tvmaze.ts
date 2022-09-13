export interface Show {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  runtime: number
  averageRuntime: number
  premiered: string
  ended: string
  officialSite: string
  schedule: { time: string; days: string[] }
  rating: { average: number }
  weight: number
  network: Network
  webChannel: string | null
  dvdCountry: string | null
  externals: Externals
  image: Image | null
  summary: string
  updated: number
}

export interface Person {
  id: number
  url: string
  name: string
  country: Country | null
  birthday: string | null
  deathday: string | null
  gender: string
  image: Image
  updated: number
}

type SearchResult<Entity> = { score: number } & Entity
export type PeopleSearchResult = SearchResult<{ person: Person }>
export type ShowsSearchResult = SearchResult<{ show: Show }>

export interface CastCredits {
  self: boolean
  voice: boolean
  _embedded: { show: Show }
}

export interface Image {
  medium: string
  original: string
}

interface Externals {
  tvrage: number
  thetvdb: number
  imdb: string
}

interface Network {
  id: number
  name: string
  country: Country
  officialSite: string
}

interface Country {
  name: string
  code: string
  timezone: string
}
