import AuthForm from '@/AuthForm/AuthForm.jsx'

export default function Login({ errors }) {
  console.log('errors received:', errors)
  return <AuthForm mode="login" errors={errors} />
}
