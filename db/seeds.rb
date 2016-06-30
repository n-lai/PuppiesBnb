# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Puppy.create({
    name: 'Bobo',
    image_url: 'http://4.bp.blogspot.com/-ztclFmyJyWY/Ufa-2dxtV4I/AAAAAAAADQA/cgSvE7dmHiY/s1600/DSCN0520.JPG',
    temperament: 'happy',
    breed: 'corgi',
    description: "Loves to play, extremely friendly, plays well with other dogs",
    owner_id: 1,
    price: 50,
    lat: 37.746263,
    lng: -122.254846
  })

Puppy.create({
    name: 'Apollo',
    image_url: 'https://s-media-cache-ak0.pinimg.com/736x/ea/a8/50/eaa850615c4ec815a80211e1fc79cb57.jpg',
    temperament: 'cautious',
    breed: 'german shepherd',
    description: "A bit anti-social, protective, doesn't do well with other dogs",
    owner_id: 2,
    price: 75,
    lat: 37.787644,
    lng: -122.488012
  })

Puppy.create({
    name: 'Elsa',
    image_url: 'http://www.thepomeranianhusky.com/wp-content/gallery-bank/gallery-uploads/o_19oeve7u6nad9vm12au2ug69ba.jpg',
    temperament: 'cheerful',
    breed: 'husky',
    description: "Playful, loves humans, doesn't play well with other dogs",
    owner_id: 3,
    price: 100,
    lat: 37.804948,
    lng: -122.443760
  })

Puppy.create({
    name: 'Lucy',
    image_url: 'https://s-media-cache-ak0.pinimg.com/564x/97/fc/0a/97fc0a5c0f407b3ee217602b0c556ee5.jpg',
    temperament: 'happy',
    breed: 'corgi',
    description: "Not very active, extremely friendly, plays well with other dogs",
    owner_id: 2,
    price: 50,
    lat: 37.362742,
    lng: -122.012256
  })

Puppy.create({
    name: 'Duke',
    image_url: 'http://www.golden-retriever.com/wp-content/uploads/2015/07/cute-baby-golden-retriever-puppiescute-puppy-golden-retrievers-photo-23976164-fanpop-pet-care-8teqauxk.jpg',
    temperament: 'hyper',
    breed: 'golden retreiver',
    description: "Extremely friendly, very active, loves to cuddle",
    owner_id: 1,
    price: 75,
    lat: 37.433403,
    lng: -122.142426
  })
