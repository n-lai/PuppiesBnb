# PuppiesBnb

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

PuppiesBnb is a web application inspired by AirBnb that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Puppies
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Bookings
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Puppies Search (by location & availability)
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Puppy Reviews
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days, W1 We 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] Host on Heroku
- [ ] Rails User JSON API
- [ ] Front-end authentication
- [ ] Guest Demo Login
- [ ] Style front-end authentication

### Phase 2: Puppies Model, Seed Data, Puppy Components (1 day, W1 Th 6pm)

**Objective:** Puppies can be created, read, edited and destroyed through
the API.

- [ ] Puppy CRUD JSON API
- [ ] Some Puppy Seed Data
- [ ] Puppy Index Component
- [ ] Puppy Index Item Component
- [ ] Puppy Detail Component

### Phase 3: Map, Filters, NavBar, and Search Components (2 days, W2 M 6pm)

**Objective:** Puppies can be searched according to location and availability and filtered according to temperament

- [ ] Map Component
- [ ] Filters Component
- [ ] Style Map and Filters
- [ ] NavBar Component
- [ ] Search Component

### Phase 4: Start Styling (0.5 days, W2 M 12pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Reviews (1 day, W2 Tu 12pm)

**Objective:** Reviews belong to Puppies, and can be viewed according to puppy.

- [ ] create `Review` model
- build out API, Flux loop, and components for:
  - [ ] Review CRUD
  - [ ] adding reviews requires a puppy
- Use CSS to style new views

### Phase 6: Rentals (1 days, W2 Th 12pm)

**Objective:** Puppies can be rented by other users.

- [ ] create `Puppy Rental` model and join table
- build out API, Flux loop, and components for:
  - [ ] rental CRUD
  - [ ] renting a puppy requires that puppy isn't already rented for that time slot
- [ ] Style new elements


### Phase 7: Styling Cleanup and Seeding (1 day, W2 F 6pm)

**objective:** Make the site feel more cohesive.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] User/Owner profiles
- [ ] Pagination / infinite scroll for Puppies Index
- [ ] Messaging

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
