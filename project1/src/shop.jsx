import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function ExuseEffect() {
  const [record, setRecord] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setRecord(json);
      })
      .catch((err) => console.log(err));
  }, []);

  // Filter the records based on the search term
  const filteredRecords = record.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-5">
    
      <Row className="mb-4">
        <Col >
          <Form.Control
            type="text"
            placeholder="Search for products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
      </Row>

      <Row>
        {filteredRecords.length > 0
          ? filteredRecords.map((item) => (
              <Col md={4} className="mb-4" key={item.id}>
                <div className="card h-100">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      {item.description.substring(0, 100)}...
                    </p>
                    <p className="card-text"><strong>Price:</strong> ${item.price}</p>
                    <button className="btn btn-primary">Add to Cart</button>
                    <br />
                    <br />
                    <button className="btn btn-primary">Buy now</button>
                  </div>
                </div>
              </Col>
            ))
          : <p>No products found.</p>}
      </Row>
    </Container>
  );
}

export default ExuseEffect;
