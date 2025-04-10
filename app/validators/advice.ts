import vine from '@vinejs/vine'
import { AdviceDisability, AdviceCategory } from '#models/advice'

export const createAdviceValidator = vine.compile(
  vine.object({
    title: vine.string(),
    description: vine.string().optional(),
    content: vine.string().optional(),
    category: vine.enum(Object.values(AdviceCategory)),
    disabilityType: vine.enum(Object.values(AdviceDisability)),
    isPublished: vine.boolean(),
    slug: vine
      .string()
      .unique({
        table: 'advices',
        column: 'slug',
      })
      .transform((value) =>
        value
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '')
      ),
  })
)
