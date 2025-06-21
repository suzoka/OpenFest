/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../css/main.scss';
import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import DefaultLayout from '../layouts/Default.jsx'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

createInertiaApp({
  progress: { color: '#8E42E0' },
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => {
  const pages = import.meta.glob('../pages/**/*.jsx', { eager: true })
  const page = pages[`../pages/${name}.jsx`]
  if (!page) throw new Error(`Page not found: ${name}`)
  page.default.layout = page.default.layout || (page => <DefaultLayout children={page} />)
  return page
},
  setup({ el, App, props }) {
    hydrateRoot(el, <App {...props} />)
  },
});
