const SessionApiUtil = {
  signup(user, success, error) {
    $.ajax({
      method: 'POST',
      url: '/api/user',
      dataType: 'json',
      data: { user },
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("signup", errors);
      }
    });
  },

  login(user, success, error) {
    $.ajax({
      method: 'POST',
      url: '/api/session',
      data: { user },
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("login", errors);
      }
    });
  },

  logout(success) {
    $.ajax({
      method: 'DELETE',
      url: '/api/session',
      success,
      error: function() {
        console.log("Logout Error in SessionApiUtil#logout");
      }
    });
  }
};

module.exports = SessionApiUtil;
