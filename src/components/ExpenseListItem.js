import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import Modal from 'react-modal'
import facebook1 from '../images/facebook1.png'
import instagram1 from '../images/instagram1.png'
import star from '../images/star.png'
import AOS from "aos";
import "aos/dist/aos.css";



export class ExpenseListItem extends Component {

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

<></>

    )
  }
}

export default ExpenseListItem;
