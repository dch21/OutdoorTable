class ChangeReservations < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:reservations, :res_date_time, true)
    change_column_null(:reservations, :party_size, true)
    change_column_null(:reservations, :user_id, true)
    change_column_null(:reservations, :party_size, true)
  end
end
