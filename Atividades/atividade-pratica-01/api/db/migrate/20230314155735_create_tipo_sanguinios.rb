class CreateTipoSanguinios < ActiveRecord::Migration[7.0]
  def change
    create_table :tipo_sanguinios do |t|
      t.string :tipo
      t.string :fator

      t.timestamps
    end
  end
end
