class CreateDistribuicaos < ActiveRecord::Migration[7.0]
  def change
    create_table :distribuicaos do |t|
      t.references :produto, null: false, foreign_key: true
      t.references :unidade, null: false, foreign_key: true
      t.datetime :data

      t.timestamps
    end
  end
end
