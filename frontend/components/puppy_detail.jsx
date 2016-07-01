const React = require('react');
const PuppyStore = require('../stores/puppy_store');
const PuppyActions = require('../actions/puppy_actions');

const PuppyDetail = React.createClass({
  getInitialState() {
    const puppyId = parseInt(this.props.params.puppyId);
    const potentialPuppy = PuppyStore.find(puppyId) || {};
    return { puppy: potentialPuppy }
  },

  componentDidMount() {
    this.puppyListener = PuppyStore.addListener(this._onChange);
    PuppyActions.fetchPuppy(parseInt(this.props.params.puppyId));
  },

  componentWillReceiveProps(newProps) {
    PuppyActions.fetchPuppy(parseInt(newProps.params.puppyId));
  },

  componentWillUnmount() {
    this.puppyListener.remove();
  },

  _onChange() {
    const puppyId = parseInt(this.props.params.puppyId);
    const potentialPuppy = PuppyStore.find(puppyId) || {};
    this.setState({ puppy: potentialPuppy });
  },

  render() {
    const puppy = this.state.puppy;
    if (puppy === undefined ) { return <div></div>; }
    return(
      <div className='puppy-detail-container'>
        <div className='puppy-image-container'>
          <img src={puppy.image_url} />
        </div>
        <div className='random'>
          <div className='puppy-details-header'>
            <div className='puppy-basic-info'>
              <h2 className='puppy-detail-name'>{puppy.name}</h2>
              <h3 className='puppy-detail-breed'>{puppy.breed}</h3>
            </div>
            <div className='booking-form'></div>
          </div>
        </div>

        <div className='puppy-details'>
          {['temperament', 'description' ].map((attr) => {
            return <p key={attr}>{attr}: {puppy[attr]}</p>;
          })}
        </div>
      </div>
    );
  }

});

module.exports = PuppyDetail;
