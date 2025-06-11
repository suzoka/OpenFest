// import { Head, useForm } from '@inertiajs/react'

// export default function Register() {
//   const form = useForm({ name: '', email: '', password: '' })

//   const submitForm = (e) => {
//     e.preventDefault()
//     form.post('/register')
//   }

//   return (
//     <>
//       <Head title="Register" />
//       <form onSubmit={submitForm}>
//         <input type="text" name="name" placeholder="Name" onChange={e => form.setData('name', e.target.value)} />
//         <input type="email" name="email" placeholder="Email" onChange={e => form.setData('email', e.target.value)} />
//         <input type="password" name="password" placeholder="Password" onChange={e => form.setData('password', e.target.value)} />
//         <button type="submit" disabled={form.processing}>Register</button>
//       </form>
//     </>
//   )
// }

import AuthForm from '@/AuthForm/AuthForm.jsx'
import styles from '../../css/pages/_logInOut.module.scss';

export default function Login({ errors }) {

  console.log('errors received:', errors)

  return (
      <main id='main' className={styles.container}>
        <AuthForm mode="register" errors={errors} />
      </main>
    )
}
