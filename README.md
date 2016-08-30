# PuppiesBnb

[PuppiesBnb live][heroku]

[heroku]: www.puppiesbnb.us

PuppiesBnb is a full-stack web application inspired by AirBnb.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.

![image of splash page] [splash-page]
[splash-page]: docs/splash_page_screenshot.png

## Features & Implementation

### Puppy Rendering

  Puppies are stored in the database through a `puppies` table that contains the columns `name`, `temperament`, `image_url`, `description`, `price`, `breed`, `owner_id`,`lat`, and `lng`. The users and puppies table are joined through `owner_id`.

  `PuppyIndexItem` and `PuppyDetails` use `image_url` to render a picture of each puppy. `PuppyIndexItem` also contains basic details about the puppy, such as name, price, and breed. `PuppyDetails` contain more in depth information about the puppy. In addition to name, price, and breed, it also informs the user of the puppy's temperament, and has a description field where the user describes their puppy.

![image of puppy index][puppy-detail]

[puppy-detail]: docs/puppy_index.png

`PuppiesIndex` render method:

```javascript
  render() {
    return (
      <div className='puppy-index'>
      {
        this.state.puppies.map(puppy => {
          return <PuppyIndexItem key={puppy.id} puppy={puppy} />
        })
      }
      </div>
    );  
  }
```

### Search

Search utilizes the Google Maps API and uses the puppy's `lat` and `lng` attributes to create a marker on the map. The search bar is implemented with Google Places API - specifically, Place Autocomplete. A listener is set on the autocomplete bar and after a user types in an address or a city, the latitude and longitude are extracted from the address information and sent as params to the map component. The map component then generates of a viewport based on those coordinates and creates a marker for each of the puppies that have `lat` and `lng` that fall into viewport.

![image of search] [search-screenshot]
[search-screenshot]: docs/search_screenshot.png

`PuppyMap` Infowindow Click:

```javascript
marker.addListener('click', () => {
  const markerPuppy = marker.puppyId;
  this.infowindow.setContent(content);
  this.infowindow.open(map, marker);

  google.maps.event.addDomListener(document.getElementById('map-pic'), 'click', () => {
    hashHistory.push('/api/puppies/' + markerPuppy)
  })

});
```

### Bookings

Bookings are stored in the database through a `bookings` join table that contains the columns `start_date`, `end_date`, `puppy_id`, and `renter_id`. Bookings belong to both the puppy and user that is renting.

Every time `PuppyDetail` is rendered, the `BookingForm` is also rendered. Users are only allowed to book a puppy if they are logged in (regulated by the `SessionStore`) and puppies are booked by the selection of a start date and end date.

![image of booking form] [booking-form]
[booking-form]: docs/booking_form_screenshot.png


### Reviews

Reviews are stored in the database through a `reviews` table that contains the columns `puppy_id`, `user_id`, `description`, and `rating`. Reviews belong to both the puppy and the user that wrote it. Owners of the puppies cannot review the puppies that belong to them.

On the frontend, the `PuppyDetails` component renders `ReviewsIndex` which is composed of all of the puppy's reviews. Each review is rendered with the `Review` component. There is no need for a `ReviewStore` because the reviews are dependent on the individual puppy so it is taken care of every time `fetchPuppy(id)`is called.

![image of review form] [review-form]
[review-form]: docs/review_form_screenshot.png

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for AirBnb are outlined below.

### User/Host Profiles

As of now, user accounts are very basic and only show the puppies that the user owns. In the future, I plan to allow the user to edit the puppy through the account page. In addition to this, I am also planning on building a bookings page so that the user can see information about the puppies that he's booked (ex: start date, end date, address) There will be a NavBar for the user to switch between his own profile, bookings, and puppies pages.

### Direct Messaging

Another feature I would like to implement is messaging, allowing for the user to contact and communicate with puppy hosts. I am planning to use WebSockets to create a direct line of communication between different users. 
