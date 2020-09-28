class AddBoro < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :boro, :string

    change_column_null(:restaurants, :boro, false)
  end
end
