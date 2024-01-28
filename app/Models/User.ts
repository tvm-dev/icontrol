import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import hash from '@adonisjs/core/services/hash'


export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public full_name: string
  @column()
  public email: string
  @column()
  public password: string
  @column()
  public cell_phone: string
  @column()
  public plan: string
  @column()
  public user_type: string

  @column()
  public last_login: DateTime

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  @beforeSave()
  static async hashPassword(user: User) {
    if (user.$dirty.password) {
      //let hash = await hash.make('user_password')
      user.password = await hash.make(user.password)
    }
  }
}



