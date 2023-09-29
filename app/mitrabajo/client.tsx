"use client";
import { Affix, Col, FloatButton, Row, Space, Tag, Timeline } from "antd";
//estilos
import './estilos.scss'
//icons
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Social from "../components/social";
import Footer from "../components/footer";
import { BiTimeFive } from 'react-icons/bi';
import { particlesOptions } from "../data";
import Navbar from "../components/navbar";
//icons
import { SiCsharp, SiVisualbasic, SiSololearn, SiUdemy, SiFrontendmentor, SiHackerrank, SiMicrosoftazure, SiCanva, SiAdobephotoshop, SiMysql, SiExpress } from 'react-icons/si';
import { HiLocationMarker } from 'react-icons/hi';
import { FaAngular, FaFreeCodeCamp, FaLaravel, FaPython, FaVuejs } from 'react-icons/fa';
import { BiLogoRedux, BiLogoReact, BiLogoCss3, BiLogoJavascript, BiLogoMongodb } from 'react-icons/bi';
import { AiFillGoogleCircle, AiFillHtml5, AiOutlineArrowLeft, AiOutlineArrowRight, AiFillApi, AiFillLinkedin, AiFillProject, AiOutlineAntDesign } from 'react-icons/ai';
import { GrNext, GrNode } from 'react-icons/gr';
import { TbBrandGoogle, TbBrandNextjs } from 'react-icons/tb';
import { BsFillBootstrapFill, BsMicrosoft } from 'react-icons/bs';
import { SiOpenai, SiFastapi, SiPostgresql } from 'react-icons/si';
import Card from 'react-animated-3d-card';
import Image from 'next/legacy/image';
const Client = () => {
    const particlesInit = async (main: any) => {
        await loadFull(main);
    };
    return (
        <>
            <Navbar active={2}></Navbar>

            <Social></Social>
            <main >
                <Particles init={particlesInit} options={particlesOptions} />
                <Row>
                    <Col span={24} className="text-white text-center my-2 mb-5"> <h1 className="h3">Lo que hago</h1></Col>
                    <Col span={8}>
                        <Affix offsetTop={100} className="to-right">
                            <Row className="px-5">

                                <Col span={24}>
                                    <p className="parraf text-center fw-semibold">
                                        Soy un experto en desarrollo de sistemas de información capaces de impulsar eficazmente la gestión administrativa de tu negocio. Desde la concepción hasta la implementación, estoy comprometido a trabajar contigo en todas las etapas del proyecto.
                                        <br />
                                        Mi independencia me permite ofrecerte soluciones personalizadas y costos más competitivos. Tengo la experiencia y conocimientos necesarios para convertir tus ideas en sistemas funcionales y, si es posible, superar tus expectativas.

                                    </p>
                                </Col>
                                <Col span={24}>
                                    <Space size={[0, 8]} wrap>
                                        <Tag icon={<TbBrandNextjs className="icon" />} className="tag2">NextJs</Tag>

                                        <Tag icon={<BiLogoMongodb className="icon" />} className="tag2">MongoDB</Tag>
                                        <Tag icon={<BiLogoReact className="icon" />} className="tag2">React</Tag>
                                        <Tag icon={<BsFillBootstrapFill className="icon" />} className="tag2">Bootstrap</Tag>
                                        <Tag icon={<SiMysql className="icon" />} className="tag2">MySql</Tag>
                                        <Tag icon={<GrNode className="icon" />} className="tag2">NodeJs</Tag>
                                        <Tag icon={<FaAngular className="icon" />} className="tag2">Angular</Tag>
                                        <Tag icon={<SiCsharp className="icon" />} className="tag2">CSharp</Tag>
                                        <Tag icon={<FaVuejs className="icon" />} className="tag2">Vue</Tag>
                                        <Tag icon={<SiCsharp className="icon" />} className="tag2">CSharp</Tag>
                                        <Tag icon={<SiCanva className="icon" />} className="tag2">Canva</Tag>
                                        <Tag icon={<SiExpress className="icon" />} className="tag2">Express</Tag>
                                        <Tag icon={<SiFastapi className="icon" />} className="tag2">FastAPI</Tag>
                                        <Tag icon={<FaPython className="icon" />} className="tag2">Python</Tag>
                                    </Space>
                                </Col>
                            </Row>
                        </Affix>
                    </Col>
                    <Col span={16} className="to-up">
                        <Row>
                            <Col span={10} className="position-relative">
                                <div className="decorator"></div>
                                <Image className="image" src={"/assets/mi-trabajo1.jpg"} layout="responsive" width={100}
                                    height={60} alt="logo miguel freelancer"></Image>
                            </Col>
                            <Col span={12}>
                                <p className="parraf px-5">
                                    Desarrollo sistemas de información que facilitan las transacciones a través de tu plataforma. Estos sistemas registran y almacenan los datos generados en tiempo real, proporcionándote un control total sobre tu información de manera organizada y personalizada según tus preferencias.                                </p>
                            </Col>
                            <Col span={10} className="position-relative">
                                <div className="decorator"></div>
                                <Image className="image" src={"/assets/mi-trabajo5.jpg"} layout="responsive" width={100}
                                    height={60} alt="logo miguel freelancer"></Image>
                            </Col>
                            <Col span={12}>
                                <p className="parraf px-5">
                                    Puedes aprovechar la capacidad de generar una amplia variedad de documentos a tu elección, listos para imprimir en cualquier lugar que prefieras. Incluso, tienes la opción de acceder a estos documentos desde tu dispositivo móvil si así lo deseas, brindándote una flexibilidad adicional en su uso.
                                </p>
                            </Col>
                            <Col span={10} className="position-relative">
                                <div className="decorator"></div>
                                <Image className="image" src={"/assets/mi-trabajo3.jpg"} layout="responsive" width={100}
                                    height={60} alt="logo miguel freelancer"></Image>
                            </Col>
                            <Col span={12}>
                                <p className="parraf px-5">
                                    Creo sistemas de información que te permiten realizar transacciones a través de su plataforma, guardando así, los datos creados en todo momento, permitiendo tener todo el registro ordenado y en la manera que deseas.
                                </p>
                            </Col>
                            <Col span={10} className="position-relative">
                                <div className="decorator"></div>
                                <Image className="image" src={"/assets/mi-trabajo4.jpg"} layout="responsive" width={100}
                                    height={70} alt="logo miguel freelancer"></Image>
                            </Col>
                            <Col span={12}>
                                <p className="parraf px-5">
                                    Creo sistemas de información que te permiten realizar transacciones a través de su plataforma, guardando así, los datos creados en todo momento, permitiendo tener todo el registro ordenado y en la manera que deseas.
                                </p>
                            </Col>

                        </Row>

                    </Col>

                    <Col span={4} offset={10} className="my-5" >
                        <h5 className="text-white text-center">Descarga mi información personal</h5>
                        <Image src={"/assets/qr-code.png"} width={100} height={100} layout="responsive"></Image>
                    </Col>
                </Row>
            </main >
            <Footer />
            <FloatButton.BackTop />
        </>
    )
}

export default Client;