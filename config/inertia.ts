import { defineConfig } from '@adonisjs/inertia'
import type { InferSharedProps, PageProps } from '@adonisjs/inertia/types'

const inertiaConfig = defineConfig({
  /**
   * Path to the Edge view that will be used as the root view for Inertia responses
   */
  rootView: 'inertia_layout',

  /**
   * Data that should be shared with all rendered pages
   */
  sharedData: {
    errors: (ctx) => ctx.inertia.always(() => ctx.session?.flashMessages.get('errors')),
    user: (ctx) => ctx.inertia.always(async () => {
      await ctx.auth.check()
      let user: any = ctx.auth.use('web')?.user

      if (user) {
        await user.load('festivalType')
        await user.load('selectedAdvices')

        const adviceSavedCount = user.selectedAdvices?.length || 0
        const adviceCheckedCount = user.selectedAdvices?.filter((advice: any) => advice.isChecked)?.length || 0

        const serializedUser = user.serialize()

        const { selectedAdvices, ...userFiltered } = serializedUser

        user = {
          ...userFiltered,
          adviceSavedCount,
          adviceCheckedCount,
        }
      }

      return user
    }),
  },

  /**
   * Options for the server-side rendering
   */
  ssr: {
    enabled: true,
    entrypoint: 'frontend/app/ssr.jsx'
  }
})

export default inertiaConfig

declare module '@adonisjs/inertia/types' {
  export interface SharedProps extends InferSharedProps<typeof inertiaConfig>, PageProps {}
}
