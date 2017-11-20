import React from 'react';
import { Carousel, CarouselSlide, Image, Heading } from 'rebass';

import HomeImage1 from '../res/home/crsl_mr2_pose.jpg';
import HomeImage2 from '../res/home/crsl_okazaki_hri.jpg';
import HomeImage3 from '../res/home/crsl_pepper_conv.jpg';
import HomeImage4 from '../res/home/crsl_learning_brain.jpg';

// -----------------------------------------------------------------------------
// ---------------------------- Auto Scroll Carousel ---------------------------
// -----------------------------------------------------------------------------
class AutoscrollCarousel extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      currIndex: 0
    };
    this.loop = null;
  }
  componentDidMount() {
    // Start auto scroll
    if (this.loop === null) {
      this.loop =
        setInterval(() => { this.scrollNext(); }, this.props.intervalMs);
    }
  }
  componentWillUnmount() {
    // Stop auto scroll
    clearInterval(this.loop);
    this.loop = null;
  }
  scrollNext() {
    var nextIndex = (this.state.currIndex + 1) % this.props.imgs.length;
    this.setState({currIndex: nextIndex});
  }
  createCarousel(imgSrc, key) {
    return (
      <CarouselSlide style={{boxSizing: 'border-box'}} p={0} key={key}>
        <Image src={imgSrc} />
      </CarouselSlide>
    );
  }
  render() {
    var carousels = [];
    this.props.imgs.forEach((src, i) => {
      carousels.push(this.createCarousel(src, i));
    });
    // NOTE: Carousel's index is applied to div wrongly in Rebass.
    // TODO: Add something to control.
    return (<Carousel index={this.state.currIndex}>{carousels}</Carousel>);
  }
}

// -----------------------------------------------------------------------------
// --------------------------------- Component ---------------------------------
// -----------------------------------------------------------------------------
export class ContentHome extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      imgs: [HomeImage1, HomeImage2, HomeImage3, HomeImage4]
    };
  }
  render() {
    return (
      <div>
        <AutoscrollCarousel imgs={this.state.imgs} intervalMs={2000} />
        <div style={{textAlign: 'center'}}>
          <Heading p={3}>{this.props.texts['home_imailab']}</Heading>
        </div>
      </div>
    );
  }
}
