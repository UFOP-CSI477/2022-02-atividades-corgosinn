class CreateProdutos < ActiveRecord::Migration[7.0]
  def change
    create_table :produtos do |t|
      t.string :etiqueta
      t.references :doacao, null: false, foreign_key: true
      t.datetime :validade

      t.timestamps
    end
  end
end
