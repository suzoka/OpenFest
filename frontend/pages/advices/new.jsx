import { Head, useForm } from '@inertiajs/react'

export default function Home({ adviceDisabilities, adviceCategories, errors }) {
  const form = useForm({
    isPublished: false,
  })

  const submitForm = (e) => {
    e.preventDefault()
    form.put('/advices')
  }

  return (
    <>
      <Head title="Create advice" />
      <form onSubmit={submitForm}>
        <input type="text" name="title" onChange={e => form.setData('title', e.target.value)} />
        <br />
        <br />
        <textarea name="description" id="description" onChange={e => form.setData('description', e.target.value)} />
        <br /><br />
        <select name="disabilityType" onChange={e => form.setData('disabilityType', e.target.value)}>
          <option value=""></option>
          {adviceDisabilities.map((disability, index) => (
            <option key={index} value={disability.value}>{disability.label}</option>
          ))}
        </select>
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
