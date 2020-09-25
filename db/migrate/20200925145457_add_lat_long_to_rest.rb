class AddLatLongToRest < ActiveRecord::Migration[5.2]
  def change
    remove_column :restaurants, :gmaps_place_id
    add_column :restaurants, :lat, :float
    add_column :restaurants, :lng, :float

    change_column_null(:restaurants, :lat, false)
    change_column_null(:restaurants, :lng, false)
  end
end
