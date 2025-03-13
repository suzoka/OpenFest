import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Tag from '#models/tag'


export enum AdviceDisabilityType {
  PMR = 'pmr',
  CIMP = 'cimp',
  SENSORIAL = 'sensorial',
}

export enum AdviceCategory {
  BOOKING = 'booking',
  TRANSPORT = 'transport',
  RECEPTION = 'reception',
  DISCOVERY = 'discovery',
  HEALTH = 'health',
  RESTAURATION = 'restauration',
  PLACE = 'place',
  EVENT = 'event',
  ACCOMODATION = 'accomodation',
  BACKHOME = 'backhome',
}

export default class Advice extends BaseModel {
  public static table = 'advices'

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare title: string

  @column()
  declare description: string | null

  @column()
  declare content: string | null

  @column({ columnName: 'disability_type' })
  declare disabilityType: AdviceDisabilityType

  @column()
  declare category: AdviceCategory

  @column({ columnName: 'is_published' })
  declare isPublished: boolean

  @column.dateTime({ columnName: 'published_at' })
  declare publishedAt: DateTime | null

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  declare updatedAt: DateTime | null

  @manyToMany(() => Tag, {
    localKey: 'id',
    pivotForeignKey: 'advice_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'tag_id',
  })
  declare tags: ManyToMany<typeof Tag>
}
