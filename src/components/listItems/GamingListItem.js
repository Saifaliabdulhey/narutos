import React, { Component, useEffect } from 'react'
import numeral from 'numeral';

import AOS from "aos";
import "aos/dist/aos.css";



export class GamingListItem extends Component {

  constructor(props) {
    super(props)

    this.state = ({ modal: false })

  }

  openModal = () => {
    this.setState({ modal: true })
  }

  closeModal = () => {
    this.setState({ modal: false })
  }

  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
    });
  }


  render() {
    return (
        <div class="table-row">
        <div class="table-cell brand first-cell">
          <p>{this.props.img}</p>
        </div>
        <div class="table-cell">
          <p>{this.props.description}</p>
        </div>
        <div class="table-cell last-cell">
          <a href="https://youtu.be/99vHH_6F0Ko">{this.props.cpu}</a>
        </div>
        <div class="table-cell last-cell">
          <a href="https://youtu.be/99vHH_6F0Ko">Watch Now</a>
        </div>
        <div class="table-cell last-cell">
          <a href="https://youtu.be/99vHH_6F0Ko">{this.props.ram}</a>
        </div>
        <div class="table-cell last-cell">
          <a href="https://youtu.be/99vHH_6F0Ko">{this.props.storage}</a>
        </div>
        <div class="table-cell last-cell">
          <a href="https://youtu.be/99vHH_6F0Ko">{this.props.graphics}</a>
        </div>
        <div class="table-cell last-cell">
          <a href="https://youtu.be/99vHH_6F0Ko">Watch Now</a>
        </div>
        <div class="table-cell last-cell">
          <a href="https://youtu.be/99vHH_6F0Ko">Watch Now</a>
        </div>
        <div class="table-cell last-cell">
          <a href="https://youtu.be/99vHH_6F0Ko">Watch Now</a>
        </div>
        <div class="table-cell last-cell">
          <a class="price" href="https://youtu.be/99vHH_6F0Ko">{numeral(this.props.amount / 100).format('$0,0')}</a>
        </div>
        <div class="table-cell last-cell">
          <a  href="https://youtu.be/99vHH_6F0Ko">Watch Now</a>
        </div>
      </div>
    )
  }
}

export default GamingListItem;
