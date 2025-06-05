import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, beforeSave, beforeCreate } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Tag from '#models/tag'
import meiliClient from '../../config/meilisearch.js'
import { afterCreate, afterUpdate, afterDelete } from '@adonisjs/lucid/orm'


export enum AdviceDisability {
  PMR = 'pmr',
  CIMP = 'cimp',
  DS = 'ds',
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

export const adviceCategoryLabels: Record<AdviceCategory, string> = {
  [AdviceCategory.BOOKING]: `Prise d'informations, Réservation`,
  [AdviceCategory.TRANSPORT]: `Transport jusqu'à l'événement`,
  [AdviceCategory.RECEPTION]: `Arrivée sur site`,
  [AdviceCategory.DISCOVERY]: `Découverte de l'événement`,
  [AdviceCategory.HEALTH]: `Sanitaires`,
  [AdviceCategory.RESTAURATION]: `Bar et restauration`,
  [AdviceCategory.PLACE]: `Autres lieux sur site`,
  [AdviceCategory.EVENT]: `L'événement`,
  [AdviceCategory.ACCOMODATION]: `Hébergement sur place ou alentour`,
  [AdviceCategory.BACKHOME]: `Retour chez soi`,
}

export const adviceCategoryIcons: Record<AdviceCategory, string> = {
  [AdviceCategory.BOOKING]: `Ticket`,
  [AdviceCategory.TRANSPORT]: `TrainSimple`,
  [AdviceCategory.RECEPTION]: `FlagBannerFold`,
  [AdviceCategory.DISCOVERY]: `MapTrifold`,
  [AdviceCategory.HEALTH]: `ToiletPaper`,
  [AdviceCategory.RESTAURATION]: `ForkKnife`,
  [AdviceCategory.PLACE]: `MapPinArea`,
  [AdviceCategory.EVENT]: `Confetti`,
  [AdviceCategory.ACCOMODATION]: `Bed`,
  [AdviceCategory.BACKHOME]: `House`,
}

export const adviceCategoryOptions: Array<{value: string, label: string, icon: string}> = Object.values(AdviceCategory).map((value) => ({
  value: value,
  label: adviceCategoryLabels[value],
  icon: adviceCategoryIcons[value]
}))

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

  @column({ columnName: 'for_pmr' })
  declare forPmr: boolean

  @column({ columnName: 'for_cimp' })
  declare forCimp: boolean

  @column({ columnName: 'for_ds' })
  declare forDs: boolean

  @column()
  declare category: AdviceCategory

  @column({ columnName: 'is_published' })
  declare isPublished: boolean

  @column.dateTime({ columnName: 'published_at' })
  declare publishedAt: DateTime | null

  @column()
  declare slug: string

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

  @manyToMany(() => Advice, {
    pivotTable: 'similar_advices',
    pivotForeignKey: 'advice_id',
    pivotRelatedForeignKey: 'similar_advice_id',
  })
  declare similarAdvices: ManyToMany<typeof Advice>

  @beforeCreate()
  public static async onCreate (advice: Advice) {
    advice.slug = advice.title
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9\-]/g, '')
      .toLowerCase()
  }
  @beforeSave()
  public static async onPublication (advice: Advice) {
    if (advice.$dirty.isPublished) {
      if  (advice.isPublished) {
        advice.publishedAt = DateTime.now()
      } else {
        advice.publishedAt = null
      }

    }
  }

  @afterCreate()
  public static async indexAfterCreate(advice: Advice) {
    await meiliClient.index('advices').addDocuments([advice])
  }

  @afterUpdate()
  public static async indexAfterUpdate(advice: Advice) {
    await advice.load('tags')
    await meiliClient.index('advices').addDocuments([advice])
  }

  @afterDelete()
  public static async removeFromIndex(advice: Advice) {
    await advice.load('tags')
    await meiliClient.index('advices').deleteDocument(advice.id)
  }

  public static async reindexAll() {
    const advices = await this.query().preload('tags')
    const documents = advices.map(advice => advice.serialize())
    await meiliClient.index('advices').addDocuments(documents)
  }

  public static async search(query: string) {
    const searchResults = await meiliClient.index('advices').search(query, {
      limit: 20,
      attributesToRetrieve: ['id', 'title', 'slug', 'description', 'content', 'disabilityType', 'category'],
    })

    return searchResults.hits as Advice[]
  }
}
