import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Objetos = () => {
  const carros = [
    {
      marca: "Audi",
      modelo: "A3",
      ano: 2020,
      placa: "BGE 0458",
      foto: "https://cdn.motor1.com/images/mgl/Q00jN/s1/audi-a3-limousine-2020.jpg",
    },
    {
      marca: "Ford",
      modelo: "Ranger",
      ano: 2010,
      placa: "SDR 0898",
      foto: "https://quatrorodas.abril.com.br/wp-content/uploads/2018/02/raptor-stills-outdoor-3-print-1-e1518017860323.jpg?quality=70&strip=info",
    },
    {
      marca: "Vw",
      modelo: "Gol",
      ano: 2018,
      placa: "BGE 9658",
      foto: "https://cdn.motor1.com/images/mgl/o3M6L/s1/gol.jpg",
    },
    {
      marca: "Fiat",
      modelo: "Uno",
      ano: 2015,
      placa: "BGE 0441",
      foto: "https://quatrorodas.abril.com.br/wp-content/uploads/2020/07/Fiat-Uno-Drive-1-1-C%C3%B3pia.jpg?quality=70&strip=info",
    },
    {
      marca: "Subaru",
      modelo: "Impreza",
      ano: 2018,
      placa: "BGE 7584",
      foto: "https://www.assobrav.com.br/wp-content/uploads/2018/01/97d0d6d903.jpeg",
    },
    {
        marca: "BMW",
        modelo: "Série 8",
        ano: 2021,
        placa: "M IA 2686",
        foto: "https://1.bp.blogspot.com/-QjRhLuO1ni4/XQmPZGXROaI/AAAAAAAAVLc/g1kDrkR9HjA3wSKQ3d_0u76h-EWLrp-JQCLcBGAs/s1600/BMW-Serie-8-Grand-Coupe%2B%25284%2529.jpg",
    },
    {
        marca: "VW",
        modelo: "Polo",
        ano: 2020,
        placa: "OPQJ 2896",
        foto: "https://motortudo.com/wp-content/uploads/2020/04/Ficha-T%C3%A9cnica-Volkswagen-Polo-1.6-2020.jpg",
    },
    {
        marca: "Hyundai",
        modelo: "i30",
        ano: 2021,
        placa: "OCDJ 2896",
        foto: "https://listacarros2021.com.br/wp-content/uploads/ficha-tecnica-hyundai-i30.jpg"
    },
    {
      marca: "Mercedes-AMG",
      modelo: "GT 63 S",
      ano: 2021,
      placa: "JJDJ 2896",
      foto: "https://quatrorodas.abril.com.br/wp-content/uploads/2019/12/003_mercedes-amg-gt-4-63-s-e1578940328126.jpg"
    },
    {
      marca: "Porsche",
      modelo: "918 SPYDER",
      ano: 2021,
      placa: "JSTE 2896",
      foto: "https://quatrorodas.abril.com.br/wp-content/uploads/2016/03/QR-679-PORSCHE-01.tif-e1608730650918.jpg?quality=70&strip=info"
    },
    {
      marca: "Masserati",
      modelo: "Ghibli Hybrid",
      ano: 2021,
      placa: "STEI 2896",
      foto: "https://s2.glbimg.com/nUB4nUwdYVu-ZvjGxuwqzDWGtcM=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/q/6/RCXdJ1QXArHrwUUzNGDw/2020-07-16-maserati-ghibli-2021-hybrid-dianteira-estatica.jpg"
    },
    {
      marca: "Lamborghini",
      modelo: "Veneno",
      ano: 2019,
      placa: "NSTE 2896",
      foto: "https://s2.glbimg.com/s64TYb1Xhf5qz_P9stTrN4Eddzs=/fit-in/940x590/e.glbimg.com/og/ed/f/original/2013/03/04/lamborghini_veneno6.jpg"
    }

  ];
  return (
    <>
      <h1>Objetos de Carros</h1>
      <hr />

      <Row>
        {carros.map((carro, i) => (
          <Col key={i} md={3} className="mb-3">
            <Card>
              <Card.Img variant="top" src={carro.foto} />
              <Card.Body>
                <Card.Title>
                  {carro.marca} - {carro.modelo}
                </Card.Title>
                <hr />
                <Card.Text>
                  <p>Placa: {carro.placa}</p>
                  <p>Ano de Fabricação: {carro.ano}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Objetos;
