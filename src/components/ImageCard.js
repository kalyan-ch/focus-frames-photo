import React, { Component, createRef } from "react";

class ImageCard extends Component {

  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = createRef();
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans: spans });
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  render() {
    const { url } = this.props;
    console.log(this.state.spans);
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt='focus-frames' src={url} />
      </div>
    );
  }

}

export default ImageCard;