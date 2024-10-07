import Carousel from 'react-bootstrap/Carousel';
import Pictureframe from './pictureframe';
import b1 from './images/bg1.webp';
import b2 from './images/bg2.avif';
import b3 from './images/bg3.jpg';



function Slider() {
  return (
    <Carousel >
      <Carousel.Item interval={1000}>
        <Pictureframe imageUrl={b1}/>
        <Carousel.Caption>
        
        <h3 style={{
  backgroundColor: "black", // Light background color
  padding: "10px 20px", // Padding inside the box
  border: "2px solid #000", // A solid border
  borderRadius: "20px", // Rounded corners
  textAlign: "center", // Center-align the text
  width: "fit-content", // Shrink to fit the content
  margin: "20px auto", // Centering the box horizontally with margin
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" // Adding shadow for a 3D effect
}}>
  Shop With Us
</h3>

          <p>spent less time in purscahe and be more productive.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Pictureframe imageUrl={b2}/>
        <Carousel.Caption>
        <h3 style={{
  backgroundColor: "black", // Light background color
  padding: "10px 20px", // Padding inside the box
  border: "2px solid #000", // A solid border
  borderRadius: "20px", // Rounded corners
  textAlign: "center", // Center-align the text
  width: "fit-content", // Shrink to fit the content
  margin: "20px auto", // Centering the box horizontally with margin
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" // Adding shadow for a 3D effect
}}>
  Shop With Us
</h3>

          
          <p>Get what you want in a single click</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Pictureframe imageUrl={b3} />
        <Carousel.Caption>
        <h3 style={{
  backgroundColor: "black", // Light background color
  padding: "10px 20px", // Padding inside the box
  border: "2px solid #000", // A solid border
  borderRadius: "20px", // Rounded corners
  textAlign: "center", // Center-align the text
  width: "fit-content", // Shrink to fit the content
  margin: "20px auto", // Centering the box horizontally with margin
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" // Adding shadow for a 3D effect
}}>
  Shop With Us
</h3>

          <p>
           Be smater with our smart website.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;