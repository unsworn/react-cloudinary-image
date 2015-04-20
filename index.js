var React = require('react');


var CloudinaryImage = React.createClass({
  propTypes: {
    urlBase: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
  },

  render: function() {
    var urlParams = [
      this.props.width && 'w_' + this.props.width,
      this.props.height && 'h_' + this.props.height 
    ];

    // Make comma-separated string of existing props ('w_123,h_456')
    var urlParamsStr = urlParams
      .filter(function(param) {return param})
      .join(',');

    // Add trailing '/' if we have any params  
    urlParamsStr = urlParamsStr && urlParamsStr.concat('/');
      
    var url = this.props.urlBase + urlParamsStr + this.props.id;
    //console.log('url', url)

    //return React.createElement('div', null, 'hello cloudinary'); 
    return <img src={url} alt="" /> 
  }
});

module.exports = CloudinaryImage;
