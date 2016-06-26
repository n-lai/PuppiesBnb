# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

- Time Permitting
  - `GET /users/puppies`
  - `GET /users/puppy_rentals`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Puppies

- `GET /api/puppies`
  - Puppies index/search
- `POST /api/puppies`
- `GET /api/puppies/:id`
- `PATCH /api/puppies/:id`
- `DELETE /api/puppies/:id`


### Reviews

- A puppy's reviews will be included in the puppy show template
- `POST /api/puppies/:puppie_id/reviews`: add review to puppy
- `DELETE /api/puppies/:puppie_id/reviews/:review_id`: remove review from puppy by
  name
