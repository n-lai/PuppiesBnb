const PuppyApiUtil = {
  fetchAllPuppies(cb) {
    $.ajax({
      method: 'GET',
      url: '/api/puppies',
      success: function(puppies) {
        cb(puppies);
      }
    });
  }
};

module.exports = PuppyApiUtil;
