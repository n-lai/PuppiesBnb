# Flux Cycles

Use this document to trace an action when it is invoked, through the API/store involved, and to the components that update as a result.

## Puppy Cycles

### Puppies API Request Actions

* `fetchAllPuppies`
  0. invoked from `PuppiesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/puppies` is called.
  0. `receiveAllPuppies` is set as the callback.

* `fetchSinglePuppy`
  0. invoked from `PuppyDetail` `didMount`/`willReceiveProps`
  0. `GET /api/puppies/:id` is called.
  0. `receiveSinglePuppy` is set as the callback.

* `createPuppy`
  0. invoked from new puppy button `onClick`
  0. `POST /api/puppies` is called.
  0. `receiveSinglePuppy` is set as the callback.

* `updatePuppy`
  0. invoked from `PuppyForm` `onSubmit`
  0. `POST /api/puppies` is called.
  0. `receiveSinglePuppy` is set as the callback.

* `destroyPuppy`
  0. invoked from delete puppy button `onClick`
  0. `DELETE /api/puppies/:puppyId` is called.
  0. `removePuppy` is set as the callback.

### Puppies API Response Actions

* `receiveAllPuppies`
  0. invoked from an API callback.
  0. `Puppy` store updates `_puppies` and emits change.

* `receiveSinglePuppy`
  0. invoked from an API callback.
  0. `Puppy` store updates `_puppies[id]` and emits change.

* `removePuppy`
  0. invoked from an API callback.
  0. `Puppy` store removes `_puppies[id]` and emits change.


### Store Listeners

* `PuppiesIndex` component listens to `Puppy` store.
* `PuppyDetail` component listens to `Puppy` store.

## Search Cycles

* `fetchSearchSuggestions`
  0. invoked from `PuppySearchBar` `onChange` when there is text
  0. `GET /api/puppies` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `PuppySearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.

## Review Cycles

* `fetchReviews`
  0. invoked from `ReviewsIndex` `didMount` / `willReceiveProps`
  0. `GET /api/reviews` is called.
  0. `receiveAllReviews` is set as the callback.

* `createReview`
  0. invoked from new review button `onClick`
  0. `POST /api/reviews` is called.
  0. `receiveSingleReview` is set as the callback.

* `destroyReview`
  0. invoked from delete review button `onClick`
  0. `DELETE /api/reviews/:reviewId` is called.
  0. `removePuppy` is set as the callback.

### Reviews API Request Actions

* `receiveAllReviews`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews` and emits change.

* `receiveSingleReview`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews[id]` and emits change.

* `removeReview`
  0. invoked from an API callback.
  0. `Review` store removes `_reviews[id]` and emits change.

### Store Listeners
* `ReviewsIndex` component listens to `Review` Store
* `ReviewDetail` component listens to `Review` Store
* `PuppyDetail` component listens to `Review` Store

## Booking Cycles

* `fetchBookings`
  0. invoked from `BookingsIndex` `didMount` / `willReceiveProps`
  0. `GET /api/bookings` is called.
  0. `receiveAllBookings` is set as the callback.

* `fetchSingleBooking`
  0. invoked from `BookingDetail` `didMount`/`willReceiveProps`
  0. `GET /api/bookings/:id` is called.
  0. `receiveSingleBooking` is set as the callback.

* `createBooking`
  0. invoked from new review button `onClick`
  0. `POST /api/bookings` is called.
  0. `receiveSingleBooking` is set as the callback.

* `destroyBooking`
  0. invoked from delete review button `onClick`
  0. `DELETE /api/bookings/:bookingId` is called.
  0. `removeBooking` is set as the callback.

### Bookings API Request Actions

* `receiveAllBookings`
  0. invoked from an API callback.
  0. `Booking` store updates `_bookings` and emits change.

* `receiveSingleBooking`
  0. invoked from an API callback.
  0. `Booking` store updates `_bookings[id]` and emits change.

* `removeBooking`
  0. invoked from an API callback.
  0. `Booking` store removes `_bookings[id]` and emits change.
