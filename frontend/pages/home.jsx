import { Head } from '@inertiajs/react'
import { useForm } from '@inertiajs/react'

export default function Home({advice, adviceDisabilities}) {
  const form = useForm({
    title: '',
  })

  const submitForm = (e) => {
    e.preventDefault()
    form.post('advice')
  }

  return (
    <>
      <Head title="Homepage" />
      <p>coucou</p>
      <p>{advice.title}</p>
      <form onSubmit={submitForm}>
        <input type="text" name="title" onChange={e => form.setData('title', e.target.value)} />
        <br />
        <br />
        <select name="disabilityType" onChange={e => form.setData('disabilityType', e.target.value)}>
        {adviceDisabilities.map((disability, index) => (
          <option key={index} value={disability.value}>{disability.label}</option>
        ))}
        </select>
        <button type="submit" disabled={form.processing}>Submit</button>
      </form>
    </>
  )
}
