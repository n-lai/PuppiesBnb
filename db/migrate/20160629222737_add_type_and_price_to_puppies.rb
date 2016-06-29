class AddTypeAndPriceToPuppies < ActiveRecord::Migration
  def change
    add_column :puppies, :type, :string, null: false
    add_column :puppies, :price, :integer, null: false
  end
end
