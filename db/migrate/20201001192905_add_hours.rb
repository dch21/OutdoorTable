class AddHours < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :hours, :string
    change_column_null(:restaurants, :hours, false)
  end
end
