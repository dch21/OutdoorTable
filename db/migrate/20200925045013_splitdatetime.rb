class Splitdatetime < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :res_date_time
    add_column :reservations, :time, :string
    add_column :reservations, :date, :string

    change_column_null(:reservations, :time, false)
    change_column_null(:reservations, :date, false)
  end
end
