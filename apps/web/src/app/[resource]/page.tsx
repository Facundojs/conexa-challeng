"use server"
import { useResourceStore } from '../../store'
import { useParams } from 'next/navigation'
import { ResourceType } from '../../types/resources'
import { API_URL } from '../../common/config'
import { ResourceList } from '../../components/resource-list'
// import { ResourceList } from '../../components/resource-list'

interface Props {
  params: { resource: ResourceType }
}

export default async function Page({ params }: Props) {
  const req = await fetch(`${API_URL}/${params.resource}`)
  const response = await req.json()

  return <div><ResourceList resource={params.resource} initialData={response.results} /></div>
}