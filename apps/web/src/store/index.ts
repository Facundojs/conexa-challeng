import { Resource, ResourceType } from '../types/resources'
import { create } from 'zustand'

type Index = `${ResourceType}.${number}`

type Store = {
  fetchPage<R>(resource: ResourceType, page: number): Promise<R[]>
  // fetchOne(id: number): Promise<R>
  data: Map<Index, Resource[]>
}

export const useResourceStore = create<Store>()((set, get) => ({
  data: new Map<Index, Resource[]>(),
  async fetchPage(resource: ResourceType, page: number) {
    const index: Index = `${resource}.${page}`
    const existing = get().data.get(index)

    if (existing)
      return existing

    const response = await fetch(`http://localhost:3001/${resource}?page=${page}`)

    const { results } = await response.json()

    set(state => ({
      data: state.data.set(index, results)
    }))

    return results
  }

}))

