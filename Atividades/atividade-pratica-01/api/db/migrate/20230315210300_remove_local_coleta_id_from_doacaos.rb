class RemoveLocalColetaIdFromDoacaos < ActiveRecord::Migration[7.0]
  def change
    remove_reference :doacaos, :local_coleta, null: false, foreign_key: true
  end
end
