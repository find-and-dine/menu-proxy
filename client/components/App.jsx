/* eslint-disable react/prop-types */
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { id } = this.props;
    this.state = {
      restaurantID: id,
    };
  }

  render() {
    const { restaurantID } = this.state;
    return (
      <div>
        Hello World,
        {' '}
        { restaurantID }
      </div>
    );
  }
}

export default App;
