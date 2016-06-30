class AddBreedToPuppies < ActiveRecord::Migration
  def change
    add_column :puppies, :breed, :string, null: false
  end
end
