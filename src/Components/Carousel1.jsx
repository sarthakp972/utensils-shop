import Carousel from 'react-bootstrap/Carousel';

function Carousel1() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100  carousel-img"
          src="https://res.cloudinary.com/ddsh6cmqs/image/upload/v1729318620/slideimg/mtd14q3ugfaezeij5nro.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
     
          className="d-block w-100"
          src="https://res.cloudinary.com/ddsh6cmqs/image/upload/v1729318620/slideimg/l0kcke8uhuuyen5fod9j.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/ddsh6cmqs/image/upload/v1729318620/slideimg/w4n9evhxboexxrojcxdf.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;
