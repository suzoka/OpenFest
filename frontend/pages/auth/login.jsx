import { Head, useForm } from '@inertiajs/react'

export default function Login({errors}) {
  const form = useForm({ email: '', password: '' })

  const submitForm = (e) => {
    e.preventDefault()
    form.post('/login')
  }

  return (
    <>
      <Head title="Login" />
      <form onSubmit={submitForm}>
        <input type="email" name="email" placeholder="Email" onChange={e => form.setData('email', e.target.value)} />
        <input type="password" name="password" placeholder="Password" onChange={e => form.setData('password', e.target.value)} />
        <button type="submit" disabled={form.processing}>Login</button>
      </form>
    </>
  )
}
