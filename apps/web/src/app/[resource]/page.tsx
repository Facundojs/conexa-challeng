"use server"
import { ResourceList } from '../../components/resource-list'
import { ResultsEmty } from '../../components/results-empty'
import { ResourceType } from '../../types/resources'
import { API_URL } from '../../common/config'

interface Props {
  params: { resource: ResourceType }
}

export default async function Page({ params }: Props) {
  const req = await fetch(`${API_URL}/${params.resource}`)
  const response = await req.json()

  if (!response.results) return <ResultsEmty />

  return <div><ResourceList initialData={response.results} /></div>
}