#Users
User.create({
  name: 'Guest',
  username: 'guest',
  password: 'password',
  email: 'guest@guest.com',
  profile_img_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467676830/guest_vbtyyg.png'
})

User.create({
  name: 'David',
  username: 'davidtennant',
  password: '123456',
  email: 'david@puppies.com',
  profile_img_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467677358/0c501dd635b40346848eb2fe6031febc_ofkywx.jpg'
})

User.create({
  name: 'Anna',
  username: 'annakendrick',
  password: '123456',
  email: 'anna@puppies.com',
  profile_img_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467735467/1416952168285.cached_mibwwx.jpg'
})

User.create({
  name: 'Matti',
  username: 'matti',
  password: '123456',
  email: 'matti@puppies.com',
  profile_img_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467677989/hqdefault_euddtz.jpg'
})

User.create({
  name: 'Christen',
  username: 'christenpress',
  password: '123456',
  email: 'christen@puppies.com',
  profile_img_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467678122/christen-press-2_cybtpi.jpg'
})

# SF Bay Area
# Puppy.create({
#     name: 'Bobo',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467676277/DSCN0520_lv89yb.jpg',
#     temperament: 'happy',
#     breed: 'corgi',
#     description: "Loves to play, extremely friendly, plays well with other dogs",
#     owner_id: 4,
#     price: 50,
#     lat: 37.746263,
#     lng: -122.254846
#   })

puppy_species = ['german shepherd', 'golden_retriever', 'corgi', 'labrador', 'beagle', 'doberman_pinscher', 'toy_poodle', 'maltese', 'yorkshire_terrier', 'husky']

temperament = ['active', 'neutral', 'passive']

description = [
  'A bit anti-social, protective, doesn\'t do well with other dogs',
  'Playful, loves humans, plays well with other dogs',
  'Not very active, extremely friendly, plays well with other dogs',
  'Quiet, obedient, gets along well with other dogs',
  'Extremely friendly, very active, loves to cuddle'
]

image_urls = {
  'german shepherd' => [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741103/rn5iBh-ARszvIsb-QqkDJANrEPcVeGT7lYHIePP5ay1MwoueiK77goSO93S1pnr0ZA_h900_ifh4ni.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741040/163_dr8ymw.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467739323/whitepuppy-5_czr4gr.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467736788/12-Week-Black-German-Shepherd-Puppy_ikldmm.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467676346/eaa850615c4ec815a80211e1fc79cb57_ariifc.jpg'
   ],
  'golden retriever' => [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741232/Golden-Retriever-Puppy_o2y1mc.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741188/latest_iacnhy.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741172/maxresdefault_mxkgo6.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467737991/maxresdefault_yzhehg.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467676393/cute-baby-golden-retriever-puppiescute-puppy-golden-retrievers-photo-23976164-fanpop-pet-care-8teqauxk_ot93us.jpg'
   ],
  'corgi' => [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467740952/Pembroke-Welsh-Corgi-Puppies-Lying-Down_zjkokg.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467739566/8526274448_de5a7c894e_b_mgn6ta.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467736870/SqxETOr_blbhga.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467676379/97fc0a5c0f407b3ee217602b0c556ee5_oeojrh.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467676277/DSCN0520_lv89yb.jpg'
   ],
  'labrador' => [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741286/happy-labrador_u6w7pn.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741307/Labrador-Retriever-Puppy_unqbog.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741358/labrador-puppy_rgdupe.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741398/yellow-labrador-puppy-garden_kusm03.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741421/labrador-retrievers-most-popular-purebred-in-america_o3giml.jpg'
   ],
  'beagle'=> [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741491/shutterstock_167095736_hm9bvh.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741483/185065-849x565-beagle-puppy-on-the-beach_lichoq.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741473/2651-fe45ba4415c9e5f9bf891ad1951a2ebe_rqtty5.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467739494/l-Adorable-cute-beagle-puppy-in-hands_o5urds.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467738132/i5yrGuU_xk2ehv.jpg'
   ],
  'doberman_pinscher' => [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741751/Doberman-Pinscher-Beagle-Mix-Puppy-Pictures_swab0z.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741728/2562263721_e8d175cbd5_y9wwwb.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741721/doberman-pinscher-puppy-photo_rwmbns.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741680/doberman-doberman-pinscher-puppies-breed_nf3ylc.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741639/shutterstock_111725009_lrveqf.jpg'
   ],
  'toy poodle' => [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741845/coffee_poodle03.jpg_w450_yjchje.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741833/article-2305310-192703C7000005DC-123_634x560_donoaw.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741805/brown-toy-poodle-puppies_ivxmvg.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741795/poodle-328-b_vewbvs.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741790/poodle-toy-poodle-puppy-shoot-breed_bwtjrt.jpg'
   ],
  'maltese' => [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741872/Maltese_v6fs6q.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741916/latest_fzzjjr.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741909/lovely_white_puppy_dog_83181_k78ife.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741897/8589130485031-maltese-puppy-wallpaper-hd_pj0gty.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741883/Cuddly-Fluffy-Maltese-Puppy-cute-puppies-13986010-700-525_in3rsk.jpg'
   ],
  'yorkshire terrier' => [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467742037/22_zjx7jp.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741991/yorkshire_terrier_puppy_2-1680x1050_xuzd0p.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741972/yorkshire-terrier-puppy-1239-2560x1600_yne8s9.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741958/425530-Kycb_ff4i64.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741944/yorkshire-yorkshire-terrier-puppies-boy-left-warrington-breed_ahhxt8.jpg'
   ],
  'husky' => [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467742201/Husky-Puppy_u6nhrj.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467742328/husky-puppy-waldek-dabrowski_y3t1qv.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467742269/happy-husky-pup_e09cei.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467676359/o_19oeve7u6nad9vm12au2ug69ba_ut7uqa.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467742775/latest_ze0a4j.jpg'
   ]
}



# 100.times do |i|
#
#   puppy_breed = puppy_species.sample
#   location = Geocoder.search(Faker::Internet.ip_v4_address).first
#
#   Puppy.create({
#                name: Faker::Name.first_name,
#                temperament: temperament.sample,
#                breed: puppy_breed,
#                image_url: image_urls[puppy_breed.to_sym].sample,
#                description: description.sample,
#                lat: location.latitude,
#                lng: location.longitude,
#                owner_id: Faker::Number.between(2, 5),
#                price: Faker::Number.between(10, 100)
#   })
# end

20.times do |i|

  puppy_breed = puppy_species.sample
  location = Geocoder.search('San Francisco, CA').first

  Puppy.create({
               name: Faker::Name.first_name,
               temperament: temperament.sample,
               breed: puppy_breed,
               image_url: image_urls[puppy_breed.to_sym].sample,
               description: description.sample,
               lat: rand(location.viewport[0]...location.viewport[2]),
               lng: rand(location.viewport[1]...location.viewport[3]),
               owner_id: Faker::Number.between(2, 5),
               price: Faker::Number.between(10, 100)
  })
end

20.times do |i|

  puppy_breed = puppy_species.sample
  location = Geocoder.search('Seattle, WA').first

  Puppy.create({
               name: Faker::Name.first_name,
               temperament: temperament.sample,
               breed: puppy_breed,
               image_url: image_urls[puppy_breed.to_sym].sample,
               description: description.sample,
               lat: rand(location.viewport[0]...location.viewport[2]),
               lng: rand(location.viewport[1]...location.viewport[3]),
               owner_id: Faker::Number.between(2, 5),
               price: Faker::Number.between(10, 100)
  })
end

20.times do |i|

  puppy_breed = puppy_species.sample
  location = Geocoder.search('NY').first

  Puppy.create({
               name: Faker::Name.first_name,
               temperament: temperament.sample,
               breed: puppy_breed,
               image_url: image_urls[puppy_breed.to_sym].sample,
               description: description.sample,
               lat: rand(location.viewport[0]...location.viewport[2]),
               lng: rand(location.viewport[1]...location.viewport[3]),
               owner_id: Faker::Number.between(2, 5),
               price: Faker::Number.between(10, 100)
  })
end

20.times do |i|

  puppy_breed = puppy_species.sample
  location = Geocoder.search('Houston, TX').first

  Puppy.create({
               name: Faker::Name.first_name,
               temperament: temperament.sample,
               breed: puppy_breed,
               image_url: image_urls[puppy_breed.to_sym].sample,
               description: description.sample,
               lat: rand(location.viewport[0]...location.viewport[2]),
               lng: rand(location.viewport[1]...location.viewport[3]),
               owner_id: Faker::Number.between(2, 5),
               price: Faker::Number.between(10, 100)
  })
end

20.times do |i|

  puppy_breed = puppy_species.sample
  location = Geocoder.search('Tokyo').first

  Puppy.create({
               name: Faker::Name.first_name,
               temperament: temperament.sample,
               breed: puppy_breed,
               image_url: image_urls[puppy_breed.to_sym].sample,
               description: description.sample,
               lat: rand(location.viewport[0]...location.viewport[2]),
               lng: rand(location.viewport[1]...location.viewport[3]),
               owner_id: Faker::Number.between(2, 5),
               price: Faker::Number.between(10, 100)
  })
end

20.times do |i|

  puppy_breed = puppy_species.sample
  location = Geocoder.search('Seoul').first

  Puppy.create({
               name: Faker::Name.first_name,
               temperament: temperament.sample,
               breed: puppy_breed,
               image_url: image_urls[puppy_breed.to_sym].sample,
               description: description.sample,
               lat: rand(location.viewport[0]...location.viewport[2]),
               lng: rand(location.viewport[1]...location.viewport[3]),
               owner_id: Faker::Number.between(2, 5),
               price: Faker::Number.between(10, 100)
  })
end

20.times do |i|

  puppy_breed = puppy_species.sample
  location = Geocoder.search('Barcelona').first

  Puppy.create({
               name: Faker::Name.first_name,
               temperament: temperament.sample,
               breed: puppy_breed,
               image_url: image_urls[puppy_breed.to_sym].sample,
               description: description.sample,
               lat: rand(location.viewport[0]...location.viewport[2]),
               lng: rand(location.viewport[1]...location.viewport[3]),
               owner_id: Faker::Number.between(2, 5),
               price: Faker::Number.between(10, 100)
  })
end

20.times do |i|

  puppy_breed = puppy_species.sample
  location = Geocoder.search('London').first

  Puppy.create({
               name: Faker::Name.first_name,
               temperament: temperament.sample,
               breed: puppy_breed,
               image_url: image_urls[puppy_breed.to_sym].sample,
               description: description.sample,
               lat: rand(location.viewport[0]...location.viewport[2]),
               lng: rand(location.viewport[1]...location.viewport[3]),
               owner_id: Faker::Number.between(2, 5),
               price: Faker::Number.between(10, 100)
  })
end

20.times do |i|

  puppy_breed = puppy_species.sample
  location = Geocoder.search('Sydney').first

  Puppy.create({
               name: Faker::Name.first_name,
               temperament: temperament.sample,
               breed: puppy_breed,
               image_url: image_urls[puppy_breed.to_sym].sample,
               description: description.sample,
               lat: rand(location.viewport[0]...location.viewport[2]),
               lng: rand(location.viewport[1]...location.viewport[3]),
               owner_id: Faker::Number.between(2, 5),
               price: Faker::Number.between(10, 100)
  })
end

20.times do |i|

  puppy_breed = puppy_species.sample
  location = Geocoder.search('Munich').first

  Puppy.create({
               name: Faker::Name.first_name,
               temperament: temperament.sample,
               breed: puppy_breed,
               image_url: image_urls[puppy_breed.to_sym].sample,
               description: description.sample,
               lat: rand(location.viewport[0]...location.viewport[2]),
               lng: rand(location.viewport[1]...location.viewport[3]),
               owner_id: Faker::Number.between(2, 5),
               price: Faker::Number.between(10, 100)
  })
end

20.times do |i|

  puppy_breed = puppy_species.sample
  location = Geocoder.search('Amsterdam').first

  Puppy.create({
               name: Faker::Name.first_name,
               temperament: temperament.sample,
               breed: puppy_breed,
               image_url: image_urls[puppy_breed.to_sym].sample,
               description: description.sample,
               lat: rand(location.viewport[0]...location.viewport[2]),
               lng: rand(location.viewport[1]...location.viewport[3]),
               owner_id: Faker::Number.between(2, 5),
               price: Faker::Number.between(10, 100)
  })
end

20.times do |i|

  puppy_breed = puppy_species.sample
  location = Geocoder.search('Toronto').first

  Puppy.create({
               name: Faker::Name.first_name,
               temperament: temperament.sample,
               breed: puppy_breed,
               image_url: image_urls[puppy_breed.to_sym].sample,
               description: description.sample,
               lat: rand(location.viewport[0]...location.viewport[2]),
               lng: rand(location.viewport[1]...location.viewport[3]),
               owner_id: Faker::Number.between(2, 5),
               price: Faker::Number.between(10, 100)
  })
end

# Puppy.create({
#     name: 'Apollo',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467676346/eaa850615c4ec815a80211e1fc79cb57_ariifc.jpg',
#     temperament: 'cautious',
#     breed: 'german shepherd',
#     description: "A bit anti-social, protective, doesn't do well with other dogs",
#     owner_id: 5,
#     price: 75,
#     lat: 37.787644,
#     lng: -122.488012
#   })
#
# Puppy.create({
#     name: 'Elsa',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467676359/o_19oeve7u6nad9vm12au2ug69ba_ut7uqa.jpg',
#     temperament: 'cheerful',
#     breed: 'husky',
#     description: "Playful, loves humans, doesn't play well with other dogs",
#     owner_id: 2,
#     price: 100,
#     lat: 37.804948,
#     lng: -122.443760
#   })
#
# Puppy.create({
#     name: 'Lucy',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467676379/97fc0a5c0f407b3ee217602b0c556ee5_oeojrh.jpg',
#     temperament: 'happy',
#     breed: 'corgi',
#     description: "Not very active, extremely friendly, plays well with other dogs",
#     owner_id: 3,
#     price: 50,
#     lat: 37.362742,
#     lng: -122.012256
#   })
#
# Puppy.create({
#     name: 'Duke',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467676393/cute-baby-golden-retriever-puppiescute-puppy-golden-retrievers-photo-23976164-fanpop-pet-care-8teqauxk_ot93us.jpg',
#     temperament: 'hyper',
#     breed: 'golden retriever',
#     description: "Extremely friendly, very active, loves to cuddle",
#     owner_id: 4,
#     price: 75,
#     lat: 37.433403,
#     lng: -122.142426
#   })
#
# Puppy.create({
#     name: 'Sophie',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467736788/12-Week-Black-German-Shepherd-Puppy_ikldmm.jpg',
#     temperament: 'curious',
#     breed: 'german shepherd',
#     description: "Very active, extremely friendly, plays well with other dogs",
#     owner_id: 5,
#     price: 75,
#     lat: 37.763892,
#     lng:-122.508775
#   })
#
# Puppy.create({
#     name: 'Chloe',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467736870/SqxETOr_blbhga.jpg',
#     temperament: 'cheerful',
#     breed: 'corgi',
#     description: "Loves to play, extremely friendly, plays well with other dogs",
#     owner_id: 2,
#     price: 75,
#     lat: 37.778799,
#     lng: -122.500226
#   })
#
# Puppy.create({
#     name: 'Bailey',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467737991/maxresdefault_yzhehg.jpg',
#     temperament: 'mellow',
#     breed: 'golden retriever',
#     description: "Extremely friendly, very active, loves to cuddle",
#     owner_id: 3,
#     price: 75,
#     lat: 37.728570,
#     lng: -122.410603
#   })
#
# Puppy.create({
#     name: 'Starlight',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467738775/Labrador_Retriever_puppies_345958802erEQmn_fs_joobuq.jpg',
#     temperament: 'hyper',
#     breed: 'labrador',
#     description: "Extremely friendly, very active, loves to cuddle",
#     owner_id: 4,
#     price: 75,
#     lat: 37.762727,
#     lng: -122.450073
#   })
#
# Puppy.create({
#     name: 'Whisper',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467738132/i5yrGuU_xk2ehv.jpg',
#     temperament: 'mellow',
#     breed: 'beagle',
#     description: "Quiet, obedient, gets along well with other dogs",
#     owner_id: 5,
#     price: 75,
#     lat: 37.745487,
#     lng: -122.464563
#   })
#
# ###
#
# Puppy.create({
#     name: 'Toby',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467739276/1e498f4bb5069b00d92f977dc8187f55_u8lex5.jpg',
#     temperament: 'moody',
#     breed: 'pitbull',
#     description: "Loves to eat, somewhat friendly, doesn't play well with other dogs",
#     owner_id: 4,
#     price: 37,
#     lat: 37.746263,
#     lng: -122.254846
#   })
#
# Puppy.create({
#     name: 'Cody',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467739323/whitepuppy-5_czr4gr.jpg',
#     temperament: 'cautious',
#     breed: 'german shepherd',
#     description: "A bit anti-social, protective, doesn't do well with other dogs",
#     owner_id: 5,
#     price: 75,
#     lat: 37.787644,
#     lng: -122.488012
#   })
#
# Puppy.create({
#     name: 'Buster',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467739494/l-Adorable-cute-beagle-puppy-in-hands_o5urds.jpg',
#     temperament: 'cheerful',
#     breed: 'beagle',
#     description: "Playful, loves humans, doesn't play well with other dogs",
#     owner_id: 2,
#     price: 100,
#     lat: 37.804948,
#     lng: -122.443760
#   })
#
# Puppy.create({
#     name: 'Lola',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467676379/97fc0a5c0f407b3ee217602b0c556ee5_oeojrh.jpg',
#     temperament: 'happy',
#     breed: 'corgi',
#     description: "Not very active, extremely friendly, plays well with other dogs",
#     owner_id: 3,
#     price: 50,
#     lat: 37.362742,
#     lng: -122.012256
#   })
#
# Puppy.create({
#     name: 'Zoe',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467676393/cute-baby-golden-retriever-puppiescute-puppy-golden-retrievers-photo-23976164-fanpop-pet-care-8teqauxk_ot93us.jpg',
#     temperament: 'hyper',
#     breed: 'golden retriever',
#     description: "Extremely friendly, very active, loves to cuddle",
#     owner_id: 4,
#     price: 75,
#     lat: 37.433403,
#     lng: -122.142426
#   })
#
# Puppy.create({
#     name: 'Abby',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467736788/12-Week-Black-German-Shepherd-Puppy_ikldmm.jpg',
#     temperament: 'curious',
#     breed: 'german shepherd',
#     description: "Very active, extremely friendly, plays well with other dogs",
#     owner_id: 5,
#     price: 75,
#     lat: 37.763892,
#     lng:-122.508775
#   })
#
# Puppy.create({
#     name: 'Riley',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467736870/SqxETOr_blbhga.jpg',
#     temperament: 'cheerful',
#     breed: 'husky',
#     description: "Loves to play, extremely friendly, plays well with other dogs",
#     owner_id: 2,
#     price: 75,
#     lat: 37.778799,
#     lng: -122.500226
#   })
#
# Puppy.create({
#     name: 'Harley',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467737991/maxresdefault_yzhehg.jpg',
#     temperament: 'mellow',
#     breed: 'labrador',
#     description: "Extremely friendly, very active, loves to cuddle",
#     owner_id: 3,
#     price: 75,
#     lat: 37.728570,
#     lng: -122.410603
#   })
#
# Puppy.create({
#     name: 'Roxy',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467738775/Labrador_Retriever_puppies_345958802erEQmn_fs_joobuq.jpg',
#     temperament: 'hyper',
#     breed: 'labrador',
#     description: "Extremely friendly, very active, loves to cuddle",
#     owner_id: 4,
#     price: 75,
#     lat: 37.762727,
#     lng: -122.450073
#   })
#
# Puppy.create({
#     name: 'Daisy',
#     image_url: 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467738132/i5yrGuU_xk2ehv.jpg',
#     temperament: 'mellow',
#     breed: 'beagle',
#     description: "Quiet, obedient, gets along well with other dogs",
#     owner_id: 5,
#     price: 75,
#     lat: 37.745487,
#     lng: -122.464563


# New York

# Seattle

# Rome

# Seoul

# Tokyo

# Barcelona

# Sydney
