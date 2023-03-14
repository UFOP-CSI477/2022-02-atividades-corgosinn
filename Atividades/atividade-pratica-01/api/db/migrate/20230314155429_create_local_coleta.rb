class CreateLocalColeta < ActiveRecord::Migration[7.0]
  def change
    create_table :local_coleta do |t|
      t.string :nome
      t.string :rua
      t.string :numero
      t.string :complemento
      t.references :cidade, null: false, foreign_key: true

      t.timestamps
    end
  end
end
