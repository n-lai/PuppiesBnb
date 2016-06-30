class RemoveTypeFromPuppies < ActiveRecord::Migration
  def change
    remove_column :puppies, :type
  end
end
