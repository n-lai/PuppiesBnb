class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.integer :puppy_id, null: false
      t.integer :renter_id, null: false

      t.timestamps null: false
    end

    add_index :bookings, :puppy_id
    add_index :bookings, :renter_id

  end
end
