import React, { Component } from 'react';
import { carouselData } from '../../data'

// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: '',
      selectedIndex: 0,
      carouselImages: []
    }
  }
  componentDidMount(){
    this.setState({
      carouselImages: carouselData,
      selectedIndex: 0,
      selected: carouselData[0]
    });
  }

  leftClick = () => {
    const length = this.state.carouselImages.length;
    let index = this.state.selectedIndex;
    index--;
    if (index === -1) {index = length - 1}
    this.setState({
      selected: this.state.carouselImages[index],
      selectedIndex: index
    })
  }

  rightClick = () => {
    const length = this.state.carouselImages.length;
    let index = this.state.selectedIndex;
    index++;
    if (index === length) {index = 0}
    this.setState({
      selected: this.state.carouselImages[index],
      selectedIndex: index
    })
  }

  selectedImage = () => {
    return <img src={this.state.selected} alt="Carousel card" style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}