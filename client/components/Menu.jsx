/* eslint-disable react/prop-types */
import React from 'react';
import Axios from 'axios';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    const { restaurantID } = this.props;
    this.state = {
      menuHTML: '',
      restaurantID,
    };
    this.getHTML = this.getHTML.bind(this);
  }

  componentDidMount() {
       
  }

  getHTML(id) {
    Axios.get(`localHost:3002/${id}`)
      .then((data) => this.setState({ menuHTML: data }))
      // eslint-disable-next-line no-console
      .catch(console.log);
  }
}

export default Menu;
