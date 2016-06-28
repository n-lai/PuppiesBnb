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

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin
- [ ] have app deployed to Heroku

### Phase 2: Puppies Model, API, and basic APIUtil (1.5 days, W1 Th 12pm)

**Objective:** Puppies can be created, read, edited and destroyed through
the API.

- [ ] create `Puppy` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for puppies (`PuppiesController`)
- [ ] jBuilder views for puppies

### Phase 3: Flux Architecture and Router (1.5 days, W1 F 6pm)

**Objective:** Puppies can be created, read, edited and destroyed with the user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each puppy component, building out the flux loop as needed.
  - [ ] `PuppiesIndex`
  - [ ] `PuppyIndexItem`
  - [ ] `PuppyForm`

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
