const PuppyApiUtil = {
  fetchAllPuppies(params, cb) {
    $.ajax({
      method: 'GET',
      url: '/api/puppies',
      data: params,
      success: function(puppies) {
        cb(puppies);
      }
    });
  },

  fetchUserPuppies(id, cb) {
    $.ajax({
      method: 'GET',
      url: '/api/puppies?user=' + id,
      success(response) {
        cb(response);
      }
    });
  },

  fetchPuppy(id, cb) {
    $.ajax({
      method: 'GET',
      url: '/api/puppies/' + id,
      success: function(puppy) {
        cb(puppy);
      }
    });
  },

  createPuppy(puppy, success, error) {
    $.ajax({
      method: 'POST',
      url: '/api/puppies',
      data: { puppy },
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("puppy", errors);
      }
    });
  },

  updatePuppy(puppy, cb) {
    $.ajax({
      method: 'PATCH',
      url: '/api/puppies/' + puppy.id,
      data: { puppy },
      success: function(puppy) {
        cb(puppy);
      }
    });
  },

  deletePuppy(id, cb) {
    $.ajax({
      method: 'DELETE',
      url: '/api/puppies' + id,
      success: function(puppy) {
        cb(puppy);
      }
    });
  },

  createReview(review, cb) {
    $.ajax({
      method: 'POST',
      url: '/api/reviews',
      data: { review },
      success(response) {
        cb(response);
      }
    });
  }
};

module.exports = PuppyApiUtil;
