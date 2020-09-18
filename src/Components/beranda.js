import React from 'react'
import Carousel from "react-bootstrap/Carousel"
class Beranda extends React.Component {
    render(){
        return(
            <div>
               <div class="alert alert-danger" role="alert">
  <center><h2>BERSATU LAWAN COVID-19</h2></center></div>

  <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      value src="image/slide1.png" 
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      value src="image/slide2.png"
      alt="Second slide"
    />
    <Carousel.Caption>
    <a class="btn btn-danger btn-lg" href="https://covid19.go.id/" role="button">NEWS UPDATE</a>
      <h3><p>Stay Safe and Stay Healthy</p></h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      value src="image/slide3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    <a class="btn btn-danger btn-lg" href="https://news.google.com/covid19/map?hl=id&mid=%2Fm%2F02j71&gl=ID&ceid=ID%3Aid" role="button">INFORMASI GLOBAL</a>
      <h4><p>Lekas Sembuh Bumiku</p></h4>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </div>
        )
    }
}
export default Beranda;

