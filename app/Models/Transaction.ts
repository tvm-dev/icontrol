import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public date: string

  @column()
  public type: string

  @column()
  public description: string

  @column()
  public value: string

  @column()
  public category: string

  @column()
  public details: string

  @column()
  public form_payment: string

  @column()
  public status: string

  @column()
  public user_id: string

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime
}
