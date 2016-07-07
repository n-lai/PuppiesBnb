const React = require('react');

const PuppyListingItem = React.createClass({
  render() {
    return (
      <div className='puppy-listing-item'>
        <header>
          {this.props.puppy.name}
        </header>
        <section>
          <img onClick={this.redirect} className='puppy-listing-item-pic' src={this.props.puppy.image_url} />
          <span>{this.props.puppy.breed}</span>
        </section>
      </div>
    
    );
  }
});

module.exports = PuppyListingItem;
