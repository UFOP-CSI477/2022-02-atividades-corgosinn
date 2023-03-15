class AddLocalColetumToDoacaos < ActiveRecord::Migration[7.0]
  def change
    add_reference :doacaos, :local_coletum, null: false, foreign_key: true
  end
end
