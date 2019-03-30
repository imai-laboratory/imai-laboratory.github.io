import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Carousel, CarouselSlide, Image, Heading } from 'rebass';

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
  render() {
    return (
      <div id="content_home">
        <section id="hero-welcome" className="hero-img hero is-large is-dark is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                {this.props.texts['home_imailab']}
              </h1>
            </div>
          </div>
        </section>
        <section className="hero is-medium is-dark is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                {this.props.texts['menu_research']}
              </h1>
              <RouteLink to='/research' key='/research' className="button is-primary mr-2">
                <strong>About</strong>
              </RouteLink>
              <RouteLink to='/publication' key='/publication' className="button is-primary mr-2">
                <strong>Publications</strong>
              </RouteLink>
              <RouteLink to='/activity' key='/activity' className="button is-primary">
                <strong>Activities</strong>
              </RouteLink>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
