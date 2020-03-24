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
    // eslint-disable-next-line no-console
    console.log(restaurantID);
    return (
      <div>
        <div>
          <img
            className="dummyPhoto"
            src="./resources/1.png"
            alt="1"
          />
        </div>
        <div
          className="photoGallery"
        />
        <div>
          <img
            className="dummyPhoto"
            src="./resources/2.png"
            alt="2"
          />
        </div>
        <div
          id="menu"
          className="menu"
          restaurantID={restaurantID}
        />
        <div>
          <img
            className="dummyPhoto"
            src="./resources/3.png"
            alt="3"
          />
        </div>
      </div>
    );
  }
}

export default App;
