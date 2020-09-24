class ChangeReservations2 < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:reservations, :res_date_time, false)
    change_column_null(:reservations, :party_size, false)
    change_column_null(:reservations, :user_id, false)
    change_column_null(:reservations, :restaurant_id, false)
  end
end
