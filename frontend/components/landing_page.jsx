const React = require('react');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const NavBar = require('./navbar');
const Slider = require('react-slick');
const FeaturedPlaces = require('./featured_places');

const LandingPage = React.createClass({
  componentWillMount() {
    this.cities = {
      'San Francisco': [37.7749, -122.4194, 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468000417/a-new-moroccan-restaurant-is-coming-to-san-francisco-_1107_40019880_1_14103245_500_bshn3x.jpg'],
      'Paris': [48.855449, 2.341032, 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468000516/paris-eiffeltowerviewsunsetview-500_rtt5aq.jpg'],
      'Seoul': [37.546509, 126.986107, 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468000764/Seoul-Free-Easy_icpcsz.jpg'],
      'Amsterdam': [52.365725, 4.895174, 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468000954/amsterdam2-sq_g7l4ti.jpg'],
      'Barcelona': [41.399093, 2.160331, 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468000791/barcelona-second_e2zpou.jpg'],
      'Sydney': [-33.897160, 151.205064, 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468000823/Sydney-Harbour-Bridge-Getty-Image-AA039819-500x500_d76yvy.jpg'],
      'Tokyo': [35.716201, 139.713125, 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468000850/tumblr_mm2gp6qJhl1re7fvvo1_500-5877_eqkblq.jpg'],
      'New York': [40.740533, -73.998207, 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468022846/New-York-Top-of-the-rock-black-white_pplbvr.jpg'],
      'London': [51.511602, -0.135464, 'http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468000916/Tower_bridge_London_Twilight_-_November_2006_zssunr.jpg']
    };

  },

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

  _handleClick(city) {
    hashHistory.push({
      pathname: '/api/puppies',
      query: { lat: this.cities[city][0], lng: this.cities[city][1] }
    })
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

    const city1={
      backgroundImage: 'url(http://res.cloudinary.com/dl8lhjvx0/image/upload/v1468000516/paris-eiffeltowerviewsunsetview-500_rtt5aq.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }

    return (
      <div className='landing-page-container'>
        <div className='landing-page-carousel'>
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

        <div className='landing-page-features'>
          <h1>Featured Cities</h1>
          <hr/>
          <div className='cities-index'>
            {
              Object.keys(this.cities).map(city => {
                return <FeaturedPlaces key={city} action={this._handleClick} city={city} imgUrl={this.cities[city][2]} />
              })
            }
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LandingPage;
