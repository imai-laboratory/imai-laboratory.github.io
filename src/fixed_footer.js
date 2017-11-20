import React from 'react';
import { Fixed, PanelFooter } from 'rebass';

export class FixedFooter extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      width: 100
    };
  }
  componentDidMount() {
    // Add resize event for knowing the width.
    window.addEventListener('resize', this.updateWidth.bind(this));
    // Initial call
    this.updateWidth();
  }
  updateWidth() {
    this.setState({width: this.refs.wrapper.offsetWidth});
  }
  render() {
    return (
      <div ref='wrapper'>
        <Fixed bottom style={{width: this.state.width}}>
          <PanelFooter style={{background: '#374047', color: '#ffffff'}}>
            {this.props.children}
          </PanelFooter>
        </Fixed>
      </div>
    );
  }
}
