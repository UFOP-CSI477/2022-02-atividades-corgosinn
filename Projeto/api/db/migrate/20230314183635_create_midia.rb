class CreateMidia < ActiveRecord::Migration[5.2]
  def change
    create_table :midia do |t|
      t.references :user, foreign_key: true, null: false
      t.string :title , null: false
      t.string :creator, null: false
      t.float :rate, null: false
      t.string :comment
      t.string :image_url, null: false

      t.timestamps
    end
  end
end
