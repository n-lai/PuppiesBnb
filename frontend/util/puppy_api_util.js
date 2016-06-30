const PuppyApiUtil = {
  fetchAllPuppies(bounds, cb) {
    $.ajax({
      method: 'GET',
      url: '/api/puppies',
      data: { bounds },
      success: function(puppies) {
        cb(puppies);
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

  createPuppy(puppy, cb) {
    $.ajax({
      method: 'POST',
      url: '/api/puppies',
      data: { puppy },
      success: function(puppy) {
        cb(puppy);
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
  }
};

module.exports = PuppyApiUtil;
