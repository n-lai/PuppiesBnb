class Puppy < ActiveRecord::Base
  validates :name, :lat, :lng, :image_url, :description, :temperament, :price, :breed, :owner_id, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'User'
end
