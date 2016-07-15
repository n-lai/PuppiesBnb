const React = require('react');
const PuppyMap = require('./puppy_map');
const PuppyIndex = require('./puppy_index');
const FilterParams = require('./filter_params');

const Search = React.createClass({
  render() {
    $(document).ready(function(){
        $(this).scrollTop(0);
    });
    FilterParams.location = window.location;
    return(
      <div className='search'>
        <div className='index-params'>
          <FilterParams />
          <PuppyIndex />
        </div>

        <div className='map-box'>
          <PuppyMap
            lat={parseFloat(this.props.location.query.lat)}
            lng={parseFloat(this.props.location.query.lng)}
            />
        </div>
      </div>
    );
  }
});

module.exports = Search;
