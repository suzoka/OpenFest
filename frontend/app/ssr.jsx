import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'
import DefaultLayout from '../layouts/Default'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

export default function render(page) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
      const pages = import.meta.glob('../pages/**/*.jsx', { eager: true })
      let page = pages[`../pages/${name}.jsx`]
      page.default.layout = page.default.layout || (page => <DefaultLayout children={page} />)
      return page
    },
    setup: ({ App, props }) => <App {...props} />,
  })
}
