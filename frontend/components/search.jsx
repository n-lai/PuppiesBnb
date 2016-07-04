const React = require('react');
const PuppyMap = require('./puppy_map');
const PuppyIndex = require('./puppy_index');
const FilterParams = require('./filter_params');

const Search = React.createClass({
  render() {
    return(
      <div className='search'>
        <div className='index-params'>
          <FilterParams />
          <PuppyIndex />
        </div>

        <PuppyMap />
      </div>
    );
  }
});

module.exports = Search;
