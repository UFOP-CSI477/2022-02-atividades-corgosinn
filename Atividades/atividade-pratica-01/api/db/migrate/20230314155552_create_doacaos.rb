class CreateDoacaos < ActiveRecord::Migration[7.0]
  def change
    create_table :doacaos do |t|
      t.references :local_coleta, null: false, foreign_key: true
      t.datetime :data

      t.timestamps
    end
  end
end
