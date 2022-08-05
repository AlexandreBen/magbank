import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon} from '@fortawesome/react-fontawsome';
import {
    faCreditCard,
    faMobile,
    faShoppingCard,
    faWallet,
} from '@fortawesome/free-solid-svg-icon';
 import creditCard from '../assets/credit-card.jpg';
 import './CreditCard.scss';


 const CreditCard = () => (
    <Container className='my-5'>
        <Row>
            <Col xs={12} lg={7} className='mb-5 mb-lg-0 px-5 px-lg-0'>
                <Row>
                    <h2 className='display-4 my-5'>Cartão de crédito</h2>
                </Row>

                <Row>
                    <Col xs={12} lg={6} className='mb-4'>
                        <Row>
                            <Col  xs={12} className='dflex justify-content-center'>
                                <FontAwesomeIcon
                                icon={faCreditCard}
                                size='2x' 
                                color='#f05656'
                                />
                            </Col>
                            <Col xs={10} className='h5 text-muted'>
                              Crédido Pessoal
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={6} className='mb-4'>
                        <Row>
                            <Col  xs={12} className='dflex justify-content-center'>
                                <FontAwesomeIcon
                                icon={faCreditCard}
                                size='2' 
                                color='#f05656'
                                />
                            </Col>
                            <Col xs={10} className='h5 text-muted'>
                             APP
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={6} className='mb-4'>
                        <Row>
                            <Col  xs={12} className='dflex justify-content-center'>
                                <FontAwesomeIcon
                                icon={faCreditCard}
                                size='2' 
                                color='#f05656'
                                />
                            </Col>
                            <Col xs={10} className='h5 text-muted'>
                              Pagamentos Online
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={6} className='mb-4'>
                        <Row>
                            <Col  xs={12} className='dflex justify-content-center'>
                                <FontAwesomeIcon
                                icon={faCreditCard}
                                size='2' 
                                color='#f05656'
                                />
                            </Col>
                            <Col xs={10} className='h5 text-muted'>
                              Pagamento Digital
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={5}>
                <image src={creditCard} alt='magbank Credit Card Example' fluid/>
            </Col>
        </Row>
    </Container>
 );

 export default CreditCard;