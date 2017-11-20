import React from 'react';
import { Box, Subhead, Link } from 'rebass';

const URL = 'http://www.ailab.ics.keio.ac.jp/welcome-junior';

export class ContentB3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3
    };
    // Initial call
    setTimeout(this.countDown.bind(this), 1000);
  }
  countDown() {
    var cnt = this.state.count - 1;
    if (cnt < 0) {
      // Redirect
      location.href = URL;
    } else {
      this.setState({count: cnt});
      setTimeout(this.countDown.bind(this), 1000);
    }
  }
  render() {
    return (
      <Box width={1}>
        <Subhead>
          <Link href={URL}>Welcome Page</Link>
        </Subhead>
        Redirect ({this.state.count} seconds)
      </Box>
    );
  }
}
