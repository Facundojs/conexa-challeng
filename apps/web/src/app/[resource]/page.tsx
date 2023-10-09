interface Props {
  params: { resource: string }
}

export default function Page({ params }: Props) {
  return <div>My Post: {params.resource}</div>
}