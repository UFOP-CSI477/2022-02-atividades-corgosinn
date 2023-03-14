class CreatePessoas < ActiveRecord::Migration[7.0]
  def change
    create_table :pessoas do |t|
      t.string :nome
      t.string :rua
      t.string :numero
      t.string :complemento
      t.string :documento
      t.references :cidade, null: false, foreign_key: true
      t.references :tipo_sanguinio, null: false, foreign_key: true

      t.timestamps
    end
  end
end
