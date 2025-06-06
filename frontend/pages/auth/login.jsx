import AuthForm from '@/AuthForm/AuthForm.jsx'

export default function Login({ errors }) {
  return (
    <>
      <AuthForm mode="login" errors={errors} />
    </>
  )
}
