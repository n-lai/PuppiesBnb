const SessionApiUtil = {
  signup(user, cb) {
    $.ajax({
      method: 'POST',
      url: '/api/user',
      data: { user },
      success: function(resp) {
        cb(resp);
      }
    });
  },

  login(user, cb) {
    $.ajax({
      method: 'POST',
      url: '/api/session',
      data: { user },
      success: function(resp) {
        cb(resp);
      }
    });
  },

  logout(user, cb) {
    $.ajax({
      method: 'DELETE',
      url: '/api/session',
      success: function(resp) {
        cb(resp);
      }
    });
  }
};

module.exports = SessionApiUtil;
