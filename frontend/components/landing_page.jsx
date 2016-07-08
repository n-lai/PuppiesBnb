const React = require('react');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const NavBar = require('./navbar');
const Slider = require('react-slick');

const LandingPage = React.createClass({

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this._redirect);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  _redirect() {
    hashHistory.push({
      pathname: '/api/puppies',
      query: { lat: 37.7749, lng: -122.4194 }
    });

  },

  _handleGuestLogin(e) {
    e.preventDefault();
    SessionActions.login({ username: 'guest', password: 'password' });
  },

  render() {

    const settings = {
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      draggable: false
    };

    const style1 = {
      backgroundImage: 'url(http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467741972/yorkshire-terrier-puppy-1239-2560x1600_yne8s9.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    const style2 = {
      backgroundImage: 'url(http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467740952/Pembroke-Welsh-Corgi-Puppies-Lying-Down_zjkokg.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    const style3 = {
    backgroundImage: 'url(http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467739566/8526274448_de5a7c894e_b_mgn6ta.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    const style4 = {
      backgroundImage: 'url(http://res.cloudinary.com/dl8lhjvx0/image/upload/v1467742201/Husky-Puppy_u6nhrj.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    return (
      <div className='landing-page-container'>
        <Slider className='slick-container' {...settings} >
          <div className='slick-image' style={style1}></div>
          <div className='slick-image' style={style2}></div>
          <div className='slick-image' style={style3}></div>
          <div className='slick-image' style={style4}></div>
        </Slider>
        <div className='landing-page-header'>
          <h1>Be Happy</h1>
          <span>Rent a puppy and experience all the joy without the commitment</span>
          <button onClick={this._handleGuestLogin} className='landing-login-button'>Guest Log In</button>
        </div>
      </div>
    );
  }
});

module.exports = LandingPage;
