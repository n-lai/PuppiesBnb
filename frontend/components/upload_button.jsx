const React = require('react');

const UploadButton = React.createClass({
  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results) {
      if (!error) {
        this.props.updateUrl(results[0].url);
      }
    }.bind(this));
  },

  render() {
    return (
      <div className='upload-form'>
        <button className='signup-form-button' onClick={this.upload}>Upload {this.props.buttonName} Picture</button>
      </div>
    );
  }
});

module.exports = UploadButton;
