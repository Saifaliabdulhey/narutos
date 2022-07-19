import React, { Component, useEffect } from 'react'
import numeral from 'numeral';
import newApple from '../../newApple';

import AOS from "aos";
import "aos/dist/aos.css";



export class NewApple extends Component {

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
      <div>
 {
            newApple.map((item, index) => {
            return <div class="table-row">
            <div class="table-cell brand first-cell">
              <p>xcvcxvcx</p>
            </div>
            <div class="table-cell">
              <p>xcvcv</p>
            </div>
            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">{item.description}</a>
            </div>
            <div class="table-cell last-cell">
              <a className='hz' href="https://youtu.be/99vHH_6F0Ko">cxvcxv</a>
            </div>
            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">vxcvx</a>
            </div>
            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">vxcvcx</a>
            </div>
            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">vxcvcx</a>
            </div>
            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">vxcvcx</a>
            </div>
            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">vxcvcx</a>
            </div>
            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">vcxvcx</a>
            </div>
            <div class="table-cell last-cell">
              <a className='price' href="https://youtu.be/99vHH_6F0Ko">545</a>
            </div>
            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">fgfdgd</a>
            </div>
          </div>
          
          })
        }
      </div>
    )
  }
}

export default NewApple;
