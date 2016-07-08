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


puppy_species = ['german_shepherd', 'golden_retriever', 'corgi', 'labrador', 'beagle', 'doberman_pinscher', 'toy_poodle', 'maltese', 'yorkshire_terrier', 'husky']

temperament = ['active', 'neutral', 'passive']

description = [
  'A bit anti-social, protective, doesn\'t do well with other dogs',
  'Playful, loves humans, plays well with other dogs',
  'Not very active, extremely friendly, plays well with other dogs',
  'Quiet, obedient, gets along well with other dogs',
  'Extremely friendly, very active, loves to cuddle'
]

image_urls = {
  german_shepherd: [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467958886/all-white-german-shepherd-puppies_fx5veg.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1467958966/german-shepherd-puppies-wallpaper-4_nwuzct.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1467741103/rn5iBh-ARszvIsb-QqkDJANrEPcVeGT7lYHIePP5ay1MwoueiK77goSO93S1pnr0ZA_h900_ifh4ni.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741040/163_dr8ymw.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1467736788/12-Week-Black-German-Shepherd-Puppy_ikldmm.jpg'
   ],

  golden_retriever: [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467959335/desktop-golden-dog-images-wallpaper_itvsn1.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467959291/golden-retriever-puppy-wallpaperpomeranian-puppy-beagle-puppy-cute-cute-pomeranian-puppy-dog-cv-gfztf-golden-retriever-1108503767_zzwuhl.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467959123/Puppy-sam_u8oubi.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741232/Golden-Retriever-Puppy_o2y1mc.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467676393/cute-baby-golden-retriever-puppiescute-puppy-golden-retrievers-photo-23976164-fanpop-pet-care-8teqauxk_ot93us.jpg'
   ],

  corgi: [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467956499/corgi-puppies-sacramento_t6memo.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467740952/Pembroke-Welsh-Corgi-Puppies-Lying-Down_zjkokg.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467739566/8526274448_de5a7c894e_b_mgn6ta.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1467736870/SqxETOr_blbhga.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1467676277/DSCN0520_lv89yb.jpg'
   ],

  labrador: [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741307/Labrador-Retriever-Puppy_unqbog.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741421/labrador-retrievers-most-popular-purebred-in-america_o3giml.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741398/yellow-labrador-puppy-garden_kusm03.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741286/happy-labrador_u6w7pn.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467958671/cute-labrador-puppies-1_wxbnzr.jpg'
   ],

  beagle: [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467959609/1024px-Beagle_puppy_sitting_on_grass_y7snsf.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467959550/latest_g32wuf.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467959441/VfzhZAs_h16ozk.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741483/185065-849x565-beagle-puppy-on-the-beach_lichoq.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1467738132/i5yrGuU_xk2ehv.jpg'
   ],

  doberman_pinscher: [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1467960069/maxresdefault_ur7yih.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1467959942/miniature-pinscher-x-chihuahua-puppies-54901bc93cbea_a1kkmo.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467959754/miniature_pinscher_puppy_with_light_eyes_wallpaper_gtjf97.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741751/Doberman-Pinscher-Beagle-Mix-Puppy-Pictures_swab0z.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741721/doberman-pinscher-puppy-photo_rwmbns.jpg'
   ],

  toy_poodle: [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467960343/cream-toy-poodles-pcc-2111711093_matgty.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467960299/5Bwallcoo.com_5D_03_months_44_350A_qxvum7.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467960254/1.11.06Azuki_20in_20bag_xvima1.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1467741795/poodle-328-b_vewbvs.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741790/poodle-toy-poodle-puppy-shoot-breed_bwtjrt.jpg'
   ],

  maltese: [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467960548/maltese-pedigree-puppies-55be7a297aca9_bsgjir.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467960586/maltese-puppies-wallpaper-wallpaper-1628025552_ypcqcg.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467960663/lovely_white_puppy_dog_83253_imbeod.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467960522/xxs-minature-maltese-puppies-55df7d7676519_pbsvhd.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1467741897/8589130485031-maltese-puppy-wallpaper-hd_pj0gty.jpg'
   ],

  yorkshire_terrier: [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467960819/postadsuk.com-1-yorkshire-terrier-miniature-puppy-pets-for-sale_f8iy0r.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1467741991/yorkshire_terrier_puppy_2-1680x1050_xuzd0p.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1467741972/yorkshire-terrier-puppy-1239-2560x1600_yne8s9.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1467741958/425530-Kycb_ff4i64.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1467741944/yorkshire-yorkshire-terrier-puppies-boy-left-warrington-breed_ahhxt8.jpg'
   ],

  husky: [
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467742201/Husky-Puppy_u6nhrj.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467742328/husky-puppy-waldek-dabrowski_y3t1qv.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467961007/Cute-Siberian-Husky-Puppies-46-HD-Wallpaper-1024x768_pewn3g.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467742775/latest_ze0a4j.jpg',
    'http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,w_1024/v1467676359/o_19oeve7u6nad9vm12au2ug69ba_ut7uqa.jpg'
   ]
}

cities = ['San Francisco, CA', 'Houston, TX', 'Seattle, WA', 'NY', 'Los Angeles, CA', 'San Diego, CA', 'Sydney', 'Barcelona', 'Tokyo', 'Seoul', 'Munich', 'Amsterdam', 'London', 'Paris' ]

cities.each do |city|
  20.times do |i|

    puppy_breed = puppy_species.sample
    location = Geocoder.search(city).first

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
end

# 20.times do |i|
#
#   puppy_breed = puppy_species.sample
#   location = Geocoder.search('Seattle, WA').first
#
#   Puppy.create({
#                name: Faker::Name.first_name,
#                temperament: temperament.sample,
#                breed: puppy_breed,
#                image_url: image_urls[puppy_breed.to_sym].sample,
#                description: description.sample,
#                lat: rand(location.viewport[0]...location.viewport[2]),
#                lng: rand(location.viewport[1]...location.viewport[3]),
#                owner_id: Faker::Number.between(2, 5),
#                price: Faker::Number.between(10, 100)
#   })
# end
#
# 20.times do |i|
#
#   puppy_breed = puppy_species.sample
#   location = Geocoder.search('NY').first
#
#   Puppy.create({
#                name: Faker::Name.first_name,
#                temperament: temperament.sample,
#                breed: puppy_breed,
#                image_url: image_urls[puppy_breed.to_sym].sample,
#                description: description.sample,
#                lat: rand(location.viewport[0]...location.viewport[2]),
#                lng: rand(location.viewport[1]...location.viewport[3]),
#                owner_id: Faker::Number.between(2, 5),
#                price: Faker::Number.between(10, 100)
#   })
# end
#
# 20.times do |i|
#
#   puppy_breed = puppy_species.sample
#   location = Geocoder.search('Houston, TX').first
#
#   Puppy.create({
#                name: Faker::Name.first_name,
#                temperament: temperament.sample,
#                breed: puppy_breed,
#                image_url: image_urls[puppy_breed.to_sym].sample,
#                description: description.sample,
#                lat: rand(location.viewport[0]...location.viewport[2]),
#                lng: rand(location.viewport[1]...location.viewport[3]),
#                owner_id: Faker::Number.between(2, 5),
#                price: Faker::Number.between(10, 100)
#   })
# end
#
# 20.times do |i|
#
#   puppy_breed = puppy_species.sample
#   location = Geocoder.search('Tokyo').first
#
#   Puppy.create({
#                name: Faker::Name.first_name,
#                temperament: temperament.sample,
#                breed: puppy_breed,
#                image_url: image_urls[puppy_breed.to_sym].sample,
#                description: description.sample,
#                lat: rand(location.viewport[0]...location.viewport[2]),
#                lng: rand(location.viewport[1]...location.viewport[3]),
#                owner_id: Faker::Number.between(2, 5),
#                price: Faker::Number.between(10, 100)
#   })
# end
#
# 20.times do |i|
#
#   puppy_breed = puppy_species.sample
#   location = Geocoder.search('Seoul').first
#
#   Puppy.create({
#                name: Faker::Name.first_name,
#                temperament: temperament.sample,
#                breed: puppy_breed,
#                image_url: image_urls[puppy_breed.to_sym].sample,
#                description: description.sample,
#                lat: rand(location.viewport[0]...location.viewport[2]),
#                lng: rand(location.viewport[1]...location.viewport[3]),
#                owner_id: Faker::Number.between(2, 5),
#                price: Faker::Number.between(10, 100)
#   })
# end
#
# 20.times do |i|
#
#   puppy_breed = puppy_species.sample
#   location = Geocoder.search('Barcelona').first
#
#   Puppy.create({
#                name: Faker::Name.first_name,
#                temperament: temperament.sample,
#                breed: puppy_breed,
#                image_url: image_urls[puppy_breed.to_sym].sample,
#                description: description.sample,
#                lat: rand(location.viewport[0]...location.viewport[2]),
#                lng: rand(location.viewport[1]...location.viewport[3]),
#                owner_id: Faker::Number.between(2, 5),
#                price: Faker::Number.between(10, 100)
#   })
# end
#
# 20.times do |i|
#
#   puppy_breed = puppy_species.sample
#   location = Geocoder.search('London').first
#
#   Puppy.create({
#                name: Faker::Name.first_name,
#                temperament: temperament.sample,
#                breed: puppy_breed,
#                image_url: image_urls[puppy_breed.to_sym].sample,
#                description: description.sample,
#                lat: rand(location.viewport[0]...location.viewport[2]),
#                lng: rand(location.viewport[1]...location.viewport[3]),
#                owner_id: Faker::Number.between(2, 5),
#                price: Faker::Number.between(10, 100)
#   })
# end
#
# 20.times do |i|
#
#   puppy_breed = puppy_species.sample
#   location = Geocoder.search('Sydney').first
#
#   Puppy.create({
#                name: Faker::Name.first_name,
#                temperament: temperament.sample,
#                breed: puppy_breed,
#                image_url: image_urls[puppy_breed.to_sym].sample,
#                description: description.sample,
#                lat: rand(location.viewport[0]...location.viewport[2]),
#                lng: rand(location.viewport[1]...location.viewport[3]),
#                owner_id: Faker::Number.between(2, 5),
#                price: Faker::Number.between(10, 100)
#   })
# end
#
# 20.times do |i|
#
#   puppy_breed = puppy_species.sample
#   location = Geocoder.search('Munich').first
#
#   Puppy.create({
#                name: Faker::Name.first_name,
#                temperament: temperament.sample,
#                breed: puppy_breed,
#                image_url: image_urls[puppy_breed.to_sym].sample,
#                description: description.sample,
#                lat: rand(location.viewport[0]...location.viewport[2]),
#                lng: rand(location.viewport[1]...location.viewport[3]),
#                owner_id: Faker::Number.between(2, 5),
#                price: Faker::Number.between(10, 100)
#   })
# end
#
# 20.times do |i|
#
#   puppy_breed = puppy_species.sample
#   location = Geocoder.search('Amsterdam').first
#
#   Puppy.create({
#                name: Faker::Name.first_name,
#                temperament: temperament.sample,
#                breed: puppy_breed,
#                image_url: image_urls[puppy_breed.to_sym].sample,
#                description: description.sample,
#                lat: rand(location.viewport[0]...location.viewport[2]),
#                lng: rand(location.viewport[1]...location.viewport[3]),
#                owner_id: Faker::Number.between(2, 5),
#                price: Faker::Number.between(10, 100)
#   })
# end
#
# 20.times do |i|
#
#   puppy_breed = puppy_species.sample
#   location = Geocoder.search('Toronto').first
#
#   Puppy.create({
#                name: Faker::Name.first_name,
#                temperament: temperament.sample,
#                breed: puppy_breed,
#                image_url: image_urls[puppy_breed.to_sym].sample,
#                description: description.sample,
#                lat: rand(location.viewport[0]...location.viewport[2]),
#                lng: rand(location.viewport[1]...location.viewport[3]),
#                owner_id: Faker::Number.between(2, 5),
#                price: Faker::Number.between(10, 100)
#   })
# end
