json.extract!(
  puppy,
  :id, :name, :lat, :lng, :temperament, :image_url, :description, :breed, :price
)

json.reviews do
  json.partial! 'api/reviews/review', collection: puppy.reviews, as: :review
end
