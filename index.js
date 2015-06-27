var React = require('react');


var CloudinaryImage = React.createClass({
  propTypes: {
    urlBase: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    crop: React.PropTypes.string,
  },

  render: function() {
    var urlParams = [
      this.props.width && 'w_' + this.props.width,
      this.props.height && 'h_' + this.props.height,
      this.props.crop && 'c_' + this.props.crop,
    ];

    // Make comma-separated string of existing props ('w_123,h_456')
    var urlParamsStr = urlParams
      .filter(function(param) {return param})
      .join(',');

    // Add trailing '/' if we have any params  
    urlParamsStr = urlParamsStr && urlParamsStr.concat('/');
      
    var url = this.props.urlBase + urlParamsStr + this.props.id;

    return React.createElement('img', {src: url}); 
    //return <img src={url} alt="" /> 
  }
});

module.exports = CloudinaryImage;
