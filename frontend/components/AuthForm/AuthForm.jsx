import React, { useState } from 'react'
import { RocketLaunch, EyeClosed, Eye } from '@phosphor-icons/react'
import { Link, useForm } from '@inertiajs/react'

import styles from './AuthForm.module.scss'
import Heading from '@/Heading/Heading.jsx'
import Button from '@/Button/Button.jsx'

const AuthForm = ({ errors, mode = 'login' }) => {
  const [showPassword, setShowPassword] = useState(false)

  const isLogin = mode === 'login'

  const form = useForm({
    email: '',
    password: '',
    ...(isLogin ? {} : { password_confirmation: '' }),
  })

  const handleChange = (field) => (e) => {
    form.setData(field, e.target.value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const submitForm = (e) => {
    e.preventDefault()
    form.post(isLogin ? '/login' : '/register')
  }

  return (
    <div className={styles.auth}>
      <form className={styles.authForm} onSubmit={submitForm}>
        <Heading as="h1" className={styles.authForm__title}>
          {isLogin ? 'Connexion' : 'Inscription'}
        </Heading>

        <div className={styles.authForm__formGroup}>
          {errors?.invalid && <div className={styles.authForm__error}>{errors.invalid}</div>}

          <div>
            <label htmlFor="email" className={styles.authForm__label}>
              Adresse mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.data.email}
              onChange={handleChange('email')}
              className={styles.authForm__input}
            />
          </div>

          <div>
            <label htmlFor="password" className={styles.authForm__label}>
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
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={styles.iconEye}
                aria-label="Afficher ou masquer le mot de passe"
              >
                {showPassword ? <Eye size={24} /> : <EyeClosed size={24} />}
              </button>
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="password_confirmation" className={styles.authForm__label}>
                  Confirmation du mot de passe
                </label>
                <div className={styles.inputWithIcon}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password_confirmation"
                    name="password_confirmation"
                    required
                    value={form.data.password_confirmation}
                    onChange={handleChange('password_confirmation')}
                    className={styles.authForm__input}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className={styles.iconEye}
                    aria-label="Afficher ou masquer le mot de passe"
                  >
                    {showPassword ? <Eye size={24} /> : <EyeClosed size={24} />}
                  </button>
                </div>
                <small className={styles.authForm__hint}>
                  Votre mot de passe doit comporter des chiffres, des lettres majuscules et
                  minuscules et des caractères spéciaux.
                </small>
              </div>
            )}
          </div>
        </div>

        {isLogin && (
          <Link href="/forgot-password" className={styles.authForm__forgotPassword}>
            Mot de passe oublié ?
          </Link>
        )}

        <Button type="primary" color="violet" variant="text" as="button" disabled={form.processing}>
          {isLogin ? (
            <>
              Connexion <img src="/images/arrow.svg" alt="" />
            </>
          ) : (
            <>
              Inscription <RocketLaunch size={24} />
            </>
          )}
        </Button>
        <hr className={styles.authForm__separator} />

        {isLogin ? (
          <>
            <p className={styles.authForm__noAccount}>Pas de compte festival ?</p>
            <Link href="/register" className={styles.authForm__registerLink}>
              <Button
                type="secondary"
                color="red"
                variant="text"
                as="button"
                className={styles.authForm__registerButton}
              >
                Inscription <RocketLaunch size={24} />
              </Button>
            </Link>
          </>
        ) : (
          <p className={styles.authForm__alreadyAccount}>
            <Link href="/login">J’ai déjà un compte.</Link>
          </p>
        )}
      </form>
    </div>
  )
}

export default AuthForm
