import React from 'react';
import { Box, Heading } from 'rebass';

export class Content404 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Box width={1}>
        <Heading> 404 Not Found </Heading>
      </Box>
    );
  }
}
