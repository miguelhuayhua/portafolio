"use client";
import { Col, FloatButton, Row, Space, Tag, Timeline } from "antd";
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
import { SiCsharp, SiVisualbasic, SiSololearn, SiUdemy, SiFrontendmentor, SiHackerrank, SiMicrosoftazure, SiCanva, SiAdobephotoshop, SiMysql } from 'react-icons/si';
import { HiLocationMarker } from 'react-icons/hi';
import { FaFreeCodeCamp, FaLaravel } from 'react-icons/fa';
import { BiLogoRedux, BiLogoReact, BiLogoCss3, BiLogoJavascript, BiLogoMongodb } from 'react-icons/bi';
import { AiFillCustomerService } from 'react-icons/ai';
import { GrNode } from 'react-icons/gr';
import { TbBrandGoogle, TbBrandNextjs } from 'react-icons/tb';
import { BsFillBootstrapFill, BsMicrosoft } from 'react-icons/bs';
import { SiOpenai, SiFastapi, SiPostgresql } from 'react-icons/si';
import { GiTrapMask } from 'react-icons/gi';
import Image from 'next/legacy/image';
const Client = () => {
    const particlesInit = async (main: any) => {
        await loadFull(main);
    };
    return (
        <>
            <Navbar active={3}></Navbar>

            <Social></Social>
            <main >
                <Particles init={particlesInit} options={particlesOptions} />
                <Row>
                    <Col span={10} className="text-white text-center my-5">


                    </Col>
                    <Col span={12}>
                        <h1 className="text-white my-4">¿Quién soy?</h1>
                        <p className="parraf">
                            Mi nombre es Miguel Huayhua, soy una persona seria y dedicada con su trabajo,
                            tengo 23 años de edad, actualmente ando enfocado con mis objetivos personales y
                            aprendizaje, por lo que soy bastante dedicado con lo que hago.
                            Llevo haciendo sistemas de información todo este tiempo, con diferentes tecnologías, pero el manejo de otras se
                            me viene mejor algunas, por lo que mi enfoque va más al uso donde tengo más potencial.
                        </p>
                    </Col>
                    <Col span={8} className="px-5">

                        <Space size={[0, 8]} wrap>
                            <Tag icon={<GiTrapMask className="icon" />} className="tag-small">Enfocado</Tag>
                            <Tag icon={<AiFillCustomerService className="icon" />} className="tag-small">Pendiente</Tag>

                        </Space>
                        <h5 className="text-white text-center">Mi tarjeta</h5>
                        <div style={{ margin: "auto auto !important" }}>
                            <Image src={"/assets/1.png"} width={100} height={60} layout="responsive"></Image>
                        </div>
                    </Col>
                    <Col span={8}>
                        <table>
                            <tr>
                                <th>Idiomas</th>
                                <th>Conocimiento</th>
                            </tr>
                            <tr>
                                <td>Inglés</td>
                                <td>
                                    <ul>
                                        <li>Habla - Intermedio 60% </li>
                                        <li>Escucha - Semiavanzado 90% </li>
                                        <li>Escribe - Intermedio 70% </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Español</td>
                                <td>
                                    <ul>
                                        <li>Nativo </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Portugués</td>
                                <td>
                                    <ul>
                                        <li>Habla - Básico 20% </li>
                                        <li>Escucha - Intermedio 60% </li>
                                        <li>Escribe - Básico 20% </li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </Col>
                    <Col span={4} offset={2} className="mb-5" >
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