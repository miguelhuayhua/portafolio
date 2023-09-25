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
import { SiCsharp, SiVisualbasic, SiSololearn, SiUdemy, SiFrontendmentor, SiHackerrank, SiMicrosoftazure, SiCanva, SiAdobephotoshop } from 'react-icons/si';
import { HiLocationMarker } from 'react-icons/hi';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { BiLogoRedux, BiLogoReact, BiLogoCss3, BiLogoJavascript, BiLogoMongodb } from 'react-icons/bi';
import { AiFillGoogleCircle, AiFillHtml5, AiOutlineArrowLeft, AiOutlineArrowRight, AiFillApi, AiFillLinkedin, AiFillProject, AiOutlineAntDesign } from 'react-icons/ai';
import { GrNode } from 'react-icons/gr';
import { TbBrandGoogle, TbBrandNextjs } from 'react-icons/tb';
import { BsFillBootstrapFill, BsMicrosoft } from 'react-icons/bs';
import { SiOpenai, SiFastapi } from 'react-icons/si';
const Client = () => {
    const particlesInit = async (main: any) => {
        await loadFull(main);
    };
    return (
        <>
            <Navbar></Navbar>

            <Social></Social>
            <main >
                <Particles init={particlesInit} options={particlesOptions} />
                <Row>
                    <Col span={24} className="text-white text-center my-5"> <h1>Mi Historial</h1></Col>
                    <Col span={24}>
                        <Timeline reverse rootClassName="time2" style={{ width: "95%", margin: '0 auto' }}
                            mode={'alternate'}
                            items={[
                                {
                                    dot: <BiTimeFive className="clock" />,
                                    label:
                                        <p className="title"><AiOutlineArrowLeft /> 03/2021 hasta 10/2021 </p>
                                    ,
                                    children: <div className="exp-laboral">
                                        <b>Desarrollador SIMPLEX</b>
                                        <br />
                                        <span><HiLocationMarker className="icon" /> Instituto Simplex</span>
                                        <p>
                                            Trabajo presencial en la creación de sistemas de información.
                                        </p>
                                        <Space size={[0, 8]} wrap>
                                            <Tag icon={<SiCsharp className="icon" />} className="tag">CSharp</Tag>
                                            <Tag icon={<SiVisualbasic className="icon" />} className="tag">Visual Basic</Tag>
                                        </Space>
                                    </div>,
                                },
                                {
                                    dot: <BiTimeFive className="clock" />,
                                    label:
                                        <p className="title">Marzo / 2022 <AiOutlineArrowRight /> </p>
                                    ,
                                    children: <div className="exp-laboral">
                                        <b>React + Redux</b>
                                        <p>
                                            Sololearn
                                        </p>
                                        <Space size={[0, 8]} wrap>
                                            <Tag icon={<BiLogoRedux className="icon" />} className="tag">Redux</Tag>
                                            <Tag icon={<BiLogoReact className="icon" />} className="tag">React</Tag>
                                            <Tag icon={<SiSololearn fontSize={20} />} className="tag"></Tag>

                                        </Space>
                                    </div>,
                                },
                                {
                                    dot: <BiTimeFive className="clock" />,
                                    label:
                                        <p className="title"><AiOutlineArrowLeft /> Marzo / 2022 </p>
                                    ,
                                    children: <div className="exp-laboral">
                                        <b>Node: De cero a experto</b>
                                        <p>
                                            Udemy
                                        </p>
                                        <Space size={[0, 8]} wrap>
                                            <Tag icon={<GrNode className="icon" />} className="tag">NodeJs</Tag>
                                            <Tag icon={<SiUdemy fontSize={20} />} className="tag"></Tag>

                                        </Space>
                                    </div>,
                                },
                                {
                                    dot: <BiTimeFive className="clock" />,
                                    label:
                                        <p className="title">Marzo / 2022 <AiOutlineArrowRight /> </p>
                                    ,
                                    children: <div className="exp-laboral">
                                        <b>Introducción al desarollo web II</b>
                                        <p>
                                            Google Actívate
                                        </p>
                                        <Space size={[0, 8]} wrap>
                                            <Tag icon={<AiFillHtml5 className="icon" />} className="tag">HTML</Tag>
                                            <Tag icon={<BiLogoCss3 className="icon" />} className="tag">CSS</Tag>
                                            <Tag icon={<AiFillGoogleCircle fontSize={20} />} className="tag"></Tag>
                                        </Space>
                                    </div>,
                                },
                                {
                                    dot: <BiTimeFive className="clock" />,
                                    label:
                                        <p className="title"><AiOutlineArrowLeft /> Marzo / 2022 </p>
                                    ,
                                    children: <div className="exp-laboral">
                                        <b>Iniciación a la programación con JavaScript</b>
                                        <p>
                                            Udemy
                                        </p>
                                        <Space size={[0, 8]} wrap>
                                            <Tag icon={<BiLogoJavascript className="icon" />} className="tag">JavaScript</Tag>
                                            <Tag icon={<SiUdemy fontSize={20} />} className="tag"></Tag>
                                        </Space>
                                    </div>,
                                }, {
                                    dot: <BiTimeFive className="clock" />,
                                    label:
                                        <p className="title"> Marzo / 2022 <AiOutlineArrowRight /></p>
                                    ,
                                    children: <div className="exp-laboral">
                                        <b>CSS - Básico a Avanzado - FrontEnd</b>
                                        <p>
                                            Udemy
                                        </p>
                                        <Space size={[0, 8]} wrap>
                                            <Tag icon={<BiLogoCss3 className="icon" />} className="tag">CSS</Tag>
                                            <Tag icon={<SiUdemy fontSize={20} />} className="tag"></Tag>
                                        </Space>
                                    </div>,
                                }, {
                                    dot: <BiTimeFive className="clock" />,
                                    label:
                                        <p className="title"><AiOutlineArrowLeft /> Abril / 2022 </p>
                                    ,
                                    children: <div className="exp-laboral">
                                        <b>JavaScript</b>
                                        <p>
                                            Sololearn
                                        </p>
                                        <Space size={[0, 8]} wrap>
                                            <Tag icon={<BiLogoJavascript className="icon" />} className="tag">JavaScript</Tag>
                                            <Tag icon={<SiSololearn fontSize={20} />} className="tag"></Tag>
                                        </Space>
                                    </div>,
                                }, {
                                    dot: <BiTimeFive className="clock" />,
                                    label:
                                        <p className="title">Abril / 2022 <AiOutlineArrowRight /> </p>
                                    ,
                                    children: <div className="exp-laboral">
                                        <b>Desarrollo FrontEnd con React y Bootstrap</b>
                                        <p>
                                            Udemy
                                        </p>
                                        <Space size={[0, 8]} wrap>
                                            <Tag icon={<BiLogoReact className="icon" />} className="tag">React</Tag>
                                            <Tag icon={<BsFillBootstrapFill className="icon" />} className="tag">Bootstrap</Tag>
                                            <Tag icon={<SiUdemy fontSize={20} />} className="tag"></Tag>
                                        </Space>
                                    </div>,
                                },
                                {
                                    dot: <BiTimeFive className="clock" />,
                                    label:
                                        <p className="title"><AiOutlineArrowLeft /> Abril / 2022 </p>
                                    ,
                                    children: <div className="exp-laboral">
                                        <b>Librerias de Desarrollo FrontEnd</b>
                                        <p>
                                            FreeCodeCamp
                                        </p>
                                        <Space size={[0, 8]} wrap>
                                            <Tag icon={<BiLogoReact className="icon" />} className="tag">React</Tag>
                                            <Tag icon={<SiFrontendmentor className="icon" />} className="tag">FrontEnd</Tag>
                                            <Tag icon={<FaFreeCodeCamp fontSize={20} />} className="tag"></Tag>
                                        </Space>
                                    </div>,
                                }, {
                                    dot: <BiTimeFive className="clock" />,
                                    label:
                                        <p className="title">Abril / 2022 <AiOutlineArrowRight /> </p>
                                    ,
                                    children: <div className="exp-laboral">
                                        <b>Machine Learning Básico</b>
                                        <p>
                                            Great Learning
                                        </p>
                                        <Space size={[0, 8]} wrap>
                                            <Tag icon={<SiOpenai className="icon" />} className="tag">Machine Learning</Tag>
                                            <Tag icon={<TbBrandGoogle fontSize={20} />} className="tag"></Tag>
                                        </Space>
                                    </div>,
                                },
                                {
                                    dot: <BiTimeFive className="clock" />,
                                    label:
                                        <p className="title"><AiOutlineArrowLeft /> Mayo / 2022 </p>
                                    ,
                                    children: <div className="exp-laboral">
                                        <b>React</b>
                                        <p>
                                            HackerRank
                                        </p>
                                        <Space size={[0, 8]} wrap>
                                            <Tag icon={<BiLogoReact className="icon" />} className="tag">React</Tag>
                                            <Tag icon={<SiHackerrank fontSize={20} />} className="tag"></Tag>
                                        </Space>
                                    </div>,
                                }, {
                                    dot: <BiTimeFive className="clock" />,
                                    label:
                                        <p className="title"> Mayo / 2022 <AiOutlineArrowRight /></p>
                                    ,
                                    children: <div className="exp-laboral">
                                        <b>M001: MongoDB Basics</b>
                                        <p>
                                            MongoDB
                                        </p>
                                        <Space size={[0, 8]} wrap>
                                            <Tag icon={<BiLogoMongodb className="icon" />} className="tag">MongoDB</Tag>
                                            <Tag icon={<BiLogoMongodb fontSize={20} />} className="tag"></Tag>
                                        </Space>
                                    </div>,
                                }, {
                                    dot: <BiTimeFive className="clock" />,
                                    label:
                                        <p className="title"><AiOutlineArrowLeft /> Mayo / 2022 </p>
                                    ,
                                    children: <div className="exp-laboral">
                                        <b>Desarrollo Backend y APIs</b>
                                        <p>
                                            FreeCodeCamp
                                        </p>
                                        <Space size={[0, 8]} wrap>
                                            <Tag icon={<AiFillApi className="icon" />} className="tag">Backend - API</Tag>
                                            <Tag icon={<FaFreeCodeCamp fontSize={20} />} className="tag"></Tag>
                                        </Space>
                                    </div>,
                                },
                                {
                                    dot: <BiTimeFive className="clock" />,
                                    label:
                                        <p className="title"> Junio / 2022 <AiOutlineArrowRight /></p>
                                    ,
                                    children: <div className="exp-laboral">
                                        <b>Microsoft Azure Fundamentals</b>
                                        <p>
                                            Microsoft
                                        </p>
                                        <Space size={[0, 8]} wrap>
                                            <Tag icon={<SiMicrosoftazure className="icon" />} className="tag">Azure</Tag>
                                            <Tag icon={<BsMicrosoft fontSize={20} />} className="tag"></Tag>
                                        </Space>
                                    </div>,
                                }, {
                                    dot: <BiTimeFive className="clock" />,
                                    label:
                                        <p className="title"><AiOutlineArrowLeft /> Septiembre / 2022 </p>
                                    ,
                                    children: <div className="exp-laboral">
                                        <b>Fundación de administración de proyectos</b>
                                        <p>
                                            LinkedIn
                                        </p>
                                        <Space size={[0, 8]} wrap>
                                            <Tag icon={<AiFillProject className="icon" />} className="tag">Proyectos</Tag>
                                            <Tag icon={<AiFillLinkedin fontSize={20} />} className="tag"></Tag>
                                        </Space>
                                    </div>,
                                },
                                {
                                    dot: <BiTimeFive className="clock" />,
                                    label:
                                        <p className="title"> Julio/2022 hasta Diciembre /2022 <AiOutlineArrowRight /> </p>
                                    ,
                                    children: <div className="exp-laboral">
                                        <b>Diseñador POSGRADO - UPEA</b>
                                        <br />
                                        <span><HiLocationMarker className="icon" /> POSGRADO - Universidad Pública de El Alto</span>
                                        <p>
                                            Trabajo presencial en la creación de diseños gráficos mediante el uso de editores.
                                        </p>
                                        <Space size={[0, 8]} wrap>
                                            <Tag icon={<SiCanva className="icon" />} className="tag">Canva</Tag>
                                            <Tag icon={<SiAdobephotoshop className="icon" />} className="tag">Photoshop</Tag>
                                        </Space>
                                    </div>,
                                }, {
                                    dot: <BiTimeFive className="clock" />,
                                    label:
                                        <p className="title"><AiOutlineArrowLeft />  Febrero / 2023</p>
                                    ,
                                    children: <div className="exp-laboral">
                                        <b>Microsoft Data Scientist Associate</b>
                                        <p>
                                            Microsoft
                                        </p>
                                        <Space size={[0, 8]} wrap>
                                            <Tag icon={<SiMicrosoftazure className="icon" />} className="tag">Azure</Tag>
                                            <Tag icon={<BsMicrosoft fontSize={20} />} className="tag"></Tag>
                                        </Space>
                                    </div>,
                                },
                                {
                                    dot: <BiTimeFive className="clock" />,
                                    label:
                                        <p className="title"> 03/2021 hasta 10/2021 <AiOutlineArrowRight /></p>
                                    ,
                                    children: <div className="exp-laboral">
                                        <b>Auxiliar Investigador - Ingeniería de Sistemas </b>
                                        <br />
                                        <span><HiLocationMarker className="icon" /> Instituto de Investigación - UPEA</span>
                                        <p>
                                            Investigador, encomendado proyecto de uso en la Alcaldía de El Alto.
                                        </p>
                                        <Space size={[0, 8]} wrap>
                                            <Tag icon={<TbBrandNextjs className="icon" />} className="tag">NextJs</Tag>
                                            <Tag icon={<BsFillBootstrapFill className="icon" />} className="tag">Bootstrap</Tag>
                                            <Tag icon={<AiOutlineAntDesign className="icon" />} className="tag">AntDesign</Tag>
                                            <Tag icon={<SiFastapi className="icon" />} className="tag">FastAPI</Tag>
                                        </Space>
                                    </div>,
                                },
                            ]}
                        />
                    </Col>
                </Row>

            </main >
            <Footer />
            <FloatButton.BackTop />

        </>
    )
}

export default Client;