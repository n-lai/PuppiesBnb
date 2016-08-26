class Puppy < ActiveRecord::Base
  validates :name, :lat, :lng, :image_url, :description, :temperament, :price, :breed, :owner_id, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'User'

  has_many :bookings,
    primary_key: :id,
    foreign_key: :puppy_id,
    class_name: 'Booking'

  has_many :reviews,
    primary_key: :id,
    foreign_key: :puppy_id,
    class_name: 'Review'

  def self.in_bounds(bounds)
    min_lat = bounds['southWest']['lat'].to_f
    max_lat = bounds['northEast']['lat'].to_f
    min_lng = bounds['southWest']['lng'].to_f
    max_lng = bounds['northEast']['lng'].to_f

    self.where(
      lat: (min_lat..max_lat),
      lng: (min_lng..max_lng)
    )
  end

end
