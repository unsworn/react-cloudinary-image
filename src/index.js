import React from 'react';

export default class CloudinaryImage extends React.Component {
  static propTypes = {
    urlBase: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    width: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),  
    height: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]), 
    crop: React.PropTypes.string,
    alt: React.PropTypes.string,
    title: React.PropTypes.string
  }

  render() {
    // Sanity check
    if (!this.props.id || !this.props.urlBase) return null;

    //const width = parseInt(this.props.width);

    const urlParams = [
      this.props.width && 'w_' + this.props.width,
      this.props.height && 'h_' + this.props.height,
      this.props.crop && 'c_' + this.props.crop,
    ];

    // Make comma-separated string of existing props ('w_123,h_456')
    let urlParamsStr = urlParams
      .filter(function(param) {return param})
      .join(',');

    // Add trailing '/' if we have any params  
    urlParamsStr = urlParamsStr && urlParamsStr.concat('/');

    // Url: 'http://res.cloudinary.com/unsworn/image/upload/w_880,h_880/wyxezhkr'
    const url = this.props.urlBase + urlParamsStr + this.props.id;

    // Set optional <img> props 
    let optImgProps = {};
    // Strange, but width and height properties messes up the display size
    //if (this.props.width) optImgProps.width = this.props.width;
    //if (this.props.height) optImgProps.height = this.props.height;
    if (this.props.title) optImgProps.title = this.props.title;

    return (
      <img 
        alt={this.props.alt || ' '}
        src={url}
        {...optImgProps}
      />
    );
  }
}
