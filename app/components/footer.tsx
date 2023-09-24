"use client";

import { Col, Row } from 'antd';
import './estilos.scss';
//icons

import { AiFillMail, AiFillLinkedin } from 'react-icons/ai';
import { BsMessenger, BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';

const Footer = () => {

    return (
        <footer>
            <Row>
                <Col span={24}>
                    <div className="info my-4">
                        <b>¿Qué esperas para contactarme?</b>

                    </div>
                </Col>
                <Col span={6}>
                    <p className='info-light'>
                        <AiFillMail />
                        <b>Mi correo:</b>
                        miguelhuayhuac2@gmail.com
                    </p>
                </Col>
                <Col span={6}>
                    <p className='info-light'>
                        <Link target='_blank' className='link' passHref href={"https://api.whatsapp.com/send?phone=59169848691&text=¡Hola! Quiero saber más sobre tus servicios."}>
                            <BsWhatsapp />
                            <b>Escríbeme al WhatsApp: </b>
                            +591 69848691
                        </Link>
                    </p>
                </Col>
                <Col span={6}>
                    <p className='info-light'>
                        <Link target='_blank' className='link' passHref href={"https://www.messenger.com/t/100056301607149?text=Hola%2C%20estoy%20interesado%20con%20tus%20servicios%20freelance%2C%20%C2%BFpuedes%20darme%20m%C3%A1s%20informaci%C3%B3n%3F"}>
                            <BsMessenger />
                            <b>Escríbeme por Messenger</b>

                        </Link>
                    </p>
                </Col>
                <Col span={6}>
                    <p className='info-light'>
                        <Link target='_blank' className='link' passHref href={"https://www.linkedin.com/messaging/compose?recipient=miguel-huayhua"}>
                            <AiFillLinkedin />
                            <b>Escríbeme por LinkedIn</b>
                        </Link>
                    </p>
                </Col>
                <Col span={24}>
                    <p style={{ textAlign: 'center', color: '#BBB' }}>
                        MIKEHUAY ©2023 Creado por Miguel Huayhua
                    </p>
                </Col>

            </Row>
        </footer>
    )
}

export default Footer;