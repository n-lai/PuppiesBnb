class CreatePuppies < ActiveRecord::Migration
  def change
    create_table :puppies do |t|
      t.string :name, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :temperament, null: false
      t.string :image_url, null: false
      t.text :description, null: false
      t.integer :owner_id, null: false
      t.timestamps null: false
    end

    add_index :puppies, :owner_id
  end
end
