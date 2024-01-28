import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('date', 12).notNullable()
      table.string('type', 20 ).notNullable()
      table.string('description', 100).notNullable()
      table.decimal('value', 10).notNullable()
      table.string('category', 50).notNullable()
      table.string('details', 255)
      table.string('form_payment', 10).notNullable()
      table.string('status', 10).notNullable()
      table.string('user_id', 10).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
