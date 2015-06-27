import React from 'react';

export default class CloudinaryImage extends React.Component {
  propTypes: {
    urlBase: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    crop: React.PropTypes.string,
  }

  render() {
    console.log(this.props);
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
      
    const url = this.props.urlBase + urlParamsStr + this.props.id;
    
    return (
      <img src={url} {...this.props} />
    );
    //return <img src={url} alt="" /> 
  }
}
