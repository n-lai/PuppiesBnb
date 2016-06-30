const React = require('react');
const PuppyMap = require('./puppy_map');
const PuppyIndex = require('./puppy_index');

const Search = React.createClass({
  render() {
    return(
      <div className='search'>
        <PuppyMap />
        <PuppyIndex />
      </div>
    );
  }
});

module.exports = Search;
