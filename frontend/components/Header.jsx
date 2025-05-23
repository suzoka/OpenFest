import React from 'react'
import { Link } from '@inertiajs/react' // si tu utilises Inertia.js

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MonSite</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
            </Link>
          </li>
          <li>
            <Link href="/advices">Conseils</Link>
          </li>
          <li>
            <Link href="/auth/login">Connexion</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
