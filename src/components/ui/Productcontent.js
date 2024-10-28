import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import espresso from '../../assets/espresso.png';
import Americano from '../../assets/Americano.png';
import Latte from '../../assets/Latte.png';
import Machiatto from '../../assets/Machiatto.png';
import Sandwich from '../../assets/Sandwich.png';
import Breakfast from '../../assets/Breakfast.png';


const Product = () => {
  // Contoh data produk
  const products = [
    { id: 1, name: 'Espresso', description: 'Deskripsi produk 1', imgSrc: espresso },
    { id: 2, name: 'Americano', description: 'Deskripsi produk 2', imgSrc: Americano },
    { id: 3, name: 'Latte Variant', description: 'Deskripsi produk 3', imgSrc: Latte },
    { id: 4, name: 'Machiatto', description: 'Deskripsi produk 4', imgSrc: Machiatto },
    { id: 5, name: 'Club Sandwich', description: 'Deskripsi produk 5', imgSrc: Sandwich },
    { id: 6, name: 'English Breakfast', description: 'Deskripsi produk 6', imgSrc: Breakfast },
  ];

  return (
    <div className="container mt-5">
            <h1 
            style={{ 
                color: 'white', 
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Hitam dengan 50% transparansi
                textAlign: 'center', // Mengatur teks agar berada di tengah
                marginBottom: '1rem', // Margin bawah
                padding: '10px', // Padding untuk memberi ruang di dalam elemen
                borderRadius: '5px' // Membuat sudut membulat
            }} 
            className="text-center mb-4"
        >
            OUR SPECIAL PRODUCT
        </h1>
      <Row className="justify-content-center">
        {products.map(product => (
          <Col md={3} key={product.id} className="mb-3 d-flex justify-content-center"> {/* Mengubah ukuran kolom */}
            <Card style={{ width: '12rem', height: 'auto' }}> {/* Mengatur ukuran kartu */}
              <Card.Img variant="top" src={product.imgSrc} style={{ height: '150px', objectFit: 'cover' }} /> {/* Mengatur tinggi gambar */}
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Product;