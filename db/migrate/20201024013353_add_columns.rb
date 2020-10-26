class AddColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :phone_number, :string
    add_column :reservations, :email, :string
    add_column :reservations, :occasion, :string

    change_column_null(:reservations, :phone_number, false)
    change_column_null(:reservations, :email, false)
  end
end
