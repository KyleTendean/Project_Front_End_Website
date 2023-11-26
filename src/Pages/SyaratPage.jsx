import { Container, Row, Col, } from 'react-bootstrap';
import FaqComponents from '../components/FaqComponents';



const SyaratPage = () => {
  return (
    <div className='syarat-ketentuan-page'>
      <div className='syarat-ketentuan'>
        <Container>
          <Row>
            <Col>
            <h1 className='fw-bold text-center mb-2 animate__animated 
          animate__fadeInUp animate__delay-1s'>Syarat & Ketentuan</h1>
            <p className='text-center animate__animated 
          animate__fadeInUp animate__delay-1s'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row className='pt-5'>
            <Col>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatibus 
              ullam quidem laborum sunt possimus sed dicta assumenda necessitatibus. 
              Alias ut impedit explicabo omnis. Et qui perferendis aut. Eum sed omnis similique, 
              veniam quia nesciunt quasi id consequatur amet. Veniam laudantium incidunt maxime 
              officia doloribus esse vero magnam nulla repellat!</p>
            </Col>
          </Row>
          <Row>
            <Col>
            
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponents/>
    </div>
  )
};

export default SyaratPage;
