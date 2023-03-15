class AddTypeToMedium < ActiveRecord::Migration[5.2]
  def change
    add_column :midia, :type, :string
  end
end
