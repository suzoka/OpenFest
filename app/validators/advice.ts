import vine from '@vinejs/vine'
import { AdviceCategory } from '#models/advice'

export const createAdviceValidator = vine.compile(
  vine.object({
    title: vine
      .string()
      .unique({
        table: 'advices',
        column: 'slug',
      }),
    description: vine.string().optional(),
    content: vine.string().optional(),
    category: vine.enum(Object.values(AdviceCategory)),
    forPmr: vine.boolean().optional(),
    forCimp: vine.boolean().optional(),
    forDs: vine.boolean().optional(),
    isPublished: vine.boolean(),
  })
)
