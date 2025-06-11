import { useState } from 'react'
import { RocketLaunch, EyeClosed, Eye, SignIn } from '@phosphor-icons/react'
import { Link, useForm } from '@inertiajs/react'

import styles from './AuthForm.module.scss'
import Heading from '@/Heading/Heading.jsx'
import Button from '@/Button/Button.jsx'
import Separator from '@/Separator/Separator.jsx'

const AuthForm = ({ errors, mode = 'login' }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
  const isLogin = mode === 'login';
  const form = useForm({
    email: '',
    password: '',
    ...(isLogin ? {} : { password_confirmation: '' }),
  });
  const isPasswordValid = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{4,}$/.test(password)
  };
  const passwordIsValid = isPasswordValid(form.data.password);
  const passwordsMatch = form.data.password === form.data.password_confirmation;

  const handleChange = (field) => (e) => {
    form.setData(field, e.target.value)
  };

  const submitForm = (e) => {
    e.preventDefault()

    if (!isLogin) {
      if (!passwordIsValid || !passwordsMatch) {
        return
      }
    }

    form.post(isLogin ? '/connection' : '/registration')
  };

  return (
    <div className={styles.authForm}>
      {
        isLogin
          ? <Heading as="h1" className={styles.authForm__title}>Connexion</Heading>
          : <Heading as="h1" className={styles.authForm__title}>Inscription</Heading>
      }
      <div className={styles.authForm__wrapper}>
        <form className={styles.authForm__form} onSubmit={submitForm}>

          {errors?.invalid && <div className={styles.authForm__error}>{errors.invalid}</div>}

          {/* Email */}
          <div className={styles.authForm__inputWrapper}>
            <label htmlFor="email" className="bold">
              Adresse mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.data.email}
              onChange={handleChange('email')}
              className={styles.authForm__input}
              placeholder='exemple@email.com'
              required
            />
            {errors?.email && <div className={styles.authForm__error}>{errors.email}</div>}
          </div>

          {/* Password */}
          <div className={styles.authForm__inputWrapper}>
            <label htmlFor="password" className="bold">
              Mot de passe
            </label>
            <div className={styles.inputWithIcon}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                required
                value={form.data.password}
                onChange={handleChange('password')}
                className={styles.authForm__input}
                placeholder='motsdepasse'
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className={styles.iconEye}
                aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
              >
                {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
              </button>
            </div>

            {isLogin ? (

              <Link href="/forgot-password" className={styles.authForm__forgotPassword}>
                Mot de passe oublié ?
              </Link>
            ) : (
              <p
                className={
                  `${styles.authForm__passwordInfo} ` +
                  (form.data.password
                    ? passwordIsValid
                      ? styles.authForm__passwordValid
                      : styles.authForm__passwordInvalid
                    : '')
                }
              >
                Votre mot de passe doit comporter des chiffres, des lettres (majuscule et minuscule)
                et des caractères spéciaux.
              </p>
            )}
          </div>

          {/* Password confirmation */}
          {!isLogin && (
            <div className={styles.authForm__inputWrapper}>
              <label htmlFor="password_confirmation" className="bold">
                Confirmation du mot de passe
              </label>
              <div className={styles.inputWithIcon}>
                <input
                  type={showPasswordConfirmation ? 'text' : 'password'}
                  id="password_confirmation"
                  name="password_confirmation"
                  required
                  value={form.data.password_confirmation}
                  onChange={handleChange('password_confirmation')}
                  className={styles.authForm__input}
                  placeholder='motsdepasse'
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordConfirmation((prev) => !prev)}
                  className={styles.iconEye}
                  aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                >
                  {showPasswordConfirmation ? <Eye size={20} /> : <EyeClosed size={20} />}
                </button>
              </div>
              {!passwordsMatch && form.data.password_confirmation && (
                <div className={styles.authForm__error}>
                  Les mots de passe ne correspondent pas.
                </div>
              )}
            </div>
          )}

          {
            isLogin ? (

              <Button
                type="primary"
                color="violet"
                variant="right"
                as="button"
                disabled={form.processing}
              >
                Connexion
                <SignIn size={24} />
              </Button>
            ) : (
              <Button
                type="primary"
                color="violet"
                variant="right"
                as="button"
                disabled={form.processing || (!passwordIsValid || !passwordsMatch)}
              >
                Inscription
                <RocketLaunch size={24} />
              </Button>
            )
          }
        </form>
        <Separator black fullpage />

        {
          isLogin ? (
            <div className={styles.authForm__noAccount}>
              <p className='p-large'>Pas de compte festival ?</p>
              <Button
                type="secondary"
                color="red"
                variant="right"
                as="link"
                href="/registration"
                className={styles.authForm__registerButton}
              >
                Inscription <RocketLaunch size={24} />
              </Button>
            </div>
          ) : (
            <Link href="/connection" className={styles.authForm__alreadyAccount}>
              J’ai déjà un compte.
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default AuthForm
