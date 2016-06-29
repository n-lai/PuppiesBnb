class Puppy < ActiveRecord::Base
  validates :name, :lat, :lng, :image_url, :description, :temperament, :price, :type, :owner_id, presence: true

  belongs_to :owner
end
