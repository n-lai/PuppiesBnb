# Phase 4: Profile, Booking, Review, and ReviewIndex Components

## Rails
### Models
* Booking
* Review

### Controllers
* Api::BookingsController (create, destroy, show)
* Api::ReviewsController (create, destroy, show)

### Views

## Flux
### Views (React Components)
* ReviewIndex
* Review
* Booking
* Profile

### Stores
* Reviews
* Bookings

### Actions
* ApiActions.receiveAllReviews
* ApiActions.receiveSingleReviews
* ApiActions.removeReview
* ReviewActions.fetchAllReviews
* ReviewActions.fetchSingleReview
* ReviewActions.deleteReview
* ApiActions.receiveAllBookings
* ApiActions.receiveSingleBooking
* ApiActions.removeBooking
* ReviewActions.fetchAllBookings
* ReviewActions.fetchSingleBooking
* ReviewActions.editBooking
* ReviewActions.deleteBooking


### ApiUtil
* ApiUtil.fetchAllReviews
* ApiUtil.createReview
* ApiUtil.destroyReview
* ApiUtil.fetchAllBookings
* ApiUtil.createBooking
* ApiUtil.editBooking
* ApiUtil.destroyBooking

## Gems/Libraries
