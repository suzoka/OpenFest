import { Head } from '@inertiajs/react'

export default function Home({ advice }) {
  return (
    <>
      <Head title={advice.title} />
      <p>conseil : {advice.title}</p>
      <br />
      <p>description : {advice.description}</p>
      <br />
      <p>content : {advice.content}</p>
      <br />
      <p>étape : {advice.category}</p>
      <br />
      <p>similaire : {advice.similarAdvices.map((a)=>a.title).join(', ')}</p>
    </>
  )
}
