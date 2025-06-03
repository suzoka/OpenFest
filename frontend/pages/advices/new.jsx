import { Head, useForm } from '@inertiajs/react'

export default function Home({ adviceDisabilities, adviceCategories, errors }) {
  const form = useForm({
    isPublished: false,
  })

  const submitForm = (e) => {
    e.preventDefault()
    form.put('/advices')
  }

  console.log('errors', errors)

  return (
    <>
      <Head title="Create advice" />
      <form onSubmit={submitForm}>
        <input type="text" name="title" onChange={e => form.setData('title', e.target.value)} />
        <br />
        <br />
        <textarea name="description" id="description" onChange={e => form.setData('description', e.target.value)} />
        <br /><br />
        <input type="checkbox" name="forPmr" onChange={e => form.setData('forPmr', e.target.checked)} />
        <label htmlFor="forPmr">Personne à mobilité réduite</label>
        <br /><br />
        <input type="checkbox" name="forCimp" onChange={e => form.setData('forCimp', e.target.checked)} />
        <label htmlFor="forCimp">Handicape cognitif, intellectuel, psychique</label>
        <br /><br />
        <input type="checkbox" name="forDs" onChange={e => form.setData('forDs', e.target.checked)} />
        <label htmlFor="forDs">Déficience sensoriel, visuelle ou auditif</label>
        <br /><br />
        <select name="category" onChange={e => form.setData('category', e.target.value)}>
          <option value=""></option>
          {adviceCategories.map((category, index) => (
            <option key={index} value={category.value}>{category.label}</option>
          ))}
        </select>
        <br /><br />
        <input type="text" name="slug" onChange={e => form.setData('slug', e.target.value)} />
        <br /><br />
        <button type="submit" disabled={form.processing}>Submit</button>
      </form>
    </>
  )
}
