import React, { useState } from 'react'
import { RocketLaunch, EyeClosed, Eye } from '@phosphor-icons/react'
import { Link, useForm } from '@inertiajs/react'

import styles from './ConnectionForm.module.scss'
import Heading from '../Titles/Titles.jsx'
import Button from '../Button/Button.jsx'

const ConnectionForm = ({ errors }) => {
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm({
    email: '',
    password: '',
  })

  const handleChange = (field) => (e) => {
    form.setData(field, e.target.value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const submitForm = (e) => {
    e.preventDefault()
    form.post('/login')
  }

  return (
    <div className={styles.connection}>
      <form className={styles.connectionForm} onSubmit={submitForm}>
        <Heading as="h1" className={styles.connectionForm__title}>
          Connexion
        </Heading>

        <div className={styles.connectionForm__formGroup}>
          {/* Email */}
          <label htmlFor="email" className={styles.connectionForm__label}>
            Adresse mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.data.email}
            onChange={handleChange('email')}
            className={styles.connectionForm__input}
          />
          {errors?.email && <div className={styles.connectionForm__error}>{errors.email}</div>}

          {/* Mot de passe */}
          <label htmlFor="password" className={styles.connectionForm__label}>
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
              className={styles.connectionForm__input}
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
          {errors?.password && (
            <div className={styles.connectionForm__error}>{errors.password}</div>
          )}
        </div>

        <Link href="/forgot-password" className={styles.connectionForm__forgotPassword}>
          Mot de passe oublié ?
        </Link>

        <Button type="primary" color="violet" variant="text" as="button" disabled={form.processing}>
          Connexion <img src="/images/arrow.svg" alt="" />
        </Button>

        <hr className={styles.connectionForm__separator} />

        <p className={styles.connectionForm__noAccount}>Pas de compte festival ?</p>

        <Link href="/register" className={styles.connectionForm__registerLink}>
          <Button
            type="secondary"
            color="red"
            variant="text"
            as="button"
            extraClass={styles.connectionForm__registerButton}
          >
            Inscription <RocketLaunch size={24} />
          </Button>
        </Link>
      </form>
    </div>
  )
}

export default ConnectionForm
