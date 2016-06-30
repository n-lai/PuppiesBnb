class Puppy < ActiveRecord::Base
  validates :name, :lat, :lng, :image_url, :description, :temperament, :price, :breed, :owner_id, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'User'

  def self.in_bounds(bounds)
    min_lat = bounds['southWest']['lat'].to_f
    max_lat = bounds['northEast']['lat'].to_f
    min_lng = bounds['southWest']['lng'].to_f
    max_lng = bounds['northEast']['lng'].to_f

    puppies = Puppy.find_by_sql(<<-SQL)
      SELECT
        *
      FROM
        puppies
      WHERE
        lat BETWEEN #{min_lat} AND #{max_lat}
      AND
        lng BETWEEN #{min_lng} AND #{max_lng}
      SQL
  end
end
