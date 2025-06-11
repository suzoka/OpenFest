import AuthForm from '@/AuthForm/AuthForm.jsx'
import styles from '../../css/pages/_logInOut.module.scss';


export default function Login({ errors }) {
  return (
    <main id='main' className={styles.container}>
      <AuthForm mode="login" errors={errors} />
    </main>
  )
}
