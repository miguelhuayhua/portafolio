"use client";

import { Content } from "antd/es/layout/layout";
import Navbar from "./components/navbar";
import { Affix, Card, Carousel, Col, FloatButton, Row, Timeline, Tooltip } from "antd";
import Image from 'next/legacy/image';
//estilos
import './estilos.scss'
import Link from "next/link";
//icons
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb';
import { GiLion } from 'react-icons/gi';
import { BiLogoReact, BiLogoAngular, BiLogoTypescript, BiLogoVuejs, BiLogoPython, BiLogoFlask } from 'react-icons/bi';
import { SiExpress, SiFastapi, SiCsharp, SiPandas } from 'react-icons/si';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Footer from "./components/footer";
export default function Home() {
  const particlesInit = async (main: any) => {

    await loadFull(main);
  };
  return (
    <div className="body">
      <div style={{
        backgroundColor: "black",
        width: "96%",
        overflow: 'hidden',
        margin: '0px auto',
        position: 'relative'
      }}
        className="large"
      >
        <Navbar></Navbar>
        <div className="social-media to-left">
          <ul>
            <li>
              <Tooltip title="Facebook" placement="leftTop">
                <Link target="_blank" href={"https://www.facebook.com/profile.php?id=100056301607149"}>
                  <AiFillFacebook className="icon" />
                </Link>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="LinkedIn" placement="leftTop">
                <Link target="_blank" href={"https://www.linkedin.com/in/miguel-huayhua/"}>
                  <AiFillLinkedin className="icon" />
                </Link>

              </Tooltip>
            </li>
            <li>
              <Tooltip title="GitHub" placement="leftTop">
                <Link target="_blank" href={"https://github.com/miguelhuayhua"}>
                  <AiFillGithub className="icon" />
                </Link>
              </Tooltip>
            </li>
          </ul>
        </div>
        <main >
          <Content className="mt-3 " >

            <Row gutter={[24, 0]} className="mx-0 ">
              <Particles init={particlesInit} options={{
                "particles":
                {
                  "number": { "value": 40, "density": { "enable": true, "value_area": 900 } },
                  "color": { "value": "#bbb" },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#FFF"
                    },
                    "polygon": { "nb_sides": 5 },
                  }, "opacity": {
                    "value": 0.4, "random": false,
                    "anim": { "enable": false, "speed": 0.5, "opacity_min": 0.1, "sync": false }
                  },
                  "size": {
                    "value": 2, "random": true,
                    "anim": { "enable": true, "speed": 20, "size_min": 1, "sync": false }
                  },
                  "line_linked": { "enable": true, "distance": 200, "color": "#AAA", "opacity": 0.4, "width": 1 },
                  "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
                }, "interactivity": {
                  "detect_on": "window", "events": {
                    "onhover": { "enable": true, "mode": "repulse" },
                    "onclick": { "enable": true, "mode": "push" }, "resize": true
                  },
                  "modes": {
                    "grab": { "distance": 100, "line_linked": { "opacity": 0 } },
                    "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 1 }, "remove": { "particles_nb": 10 }
                  }
                }, "retina_detect": true
              }} />

              <Col span={24} lg={{ span: 10 }} className="px-0"  >
                <Row>
                  <Col span={12} offset={6} sm={{ span: 16, offset: 4 }} md={{ span: 8, offset: 8 }} lg={{ span: 24, offset: 0 }}>
                    <Image className="to-right" src={"/assets/lion.png"} alt="Leon fuerte logo" width={90} height={90} layout="responsive" style={{ filter: 'brightness(.65)' }}></Image>
                  </Col>
                </Row>
              </Col>
              <Col span={24} lg={{ span: 14 }} className="px-0">
                <Row className="code-container">
                  <Col span={24}  >
                    <div className="punto-brillante2"></div>
                    <pre className="mb-0">
                      <code>
                        <h1 className="h1-home text-center" >
                          <span className="tag big">
                            {"<h1>"}
                          </span>
                          <span className="text big" style={{ fontSize: 30, fontWeight: 'bold' }}>
                            MIGUEL HUAYHUA
                          </span>
                          <span className="tag big">
                            {"</h1>"}
                          </span>
                        </h1>
                        <p className="text-center">
                          <span className="tag big">
                            {"<p>"}
                          </span>
                          <span className="text big">
                            Freelancer Boliviano,
                            experto en el
                            desarrollo
                            de
                            <br />
                            aplicaciones web,
                            programas
                            de
                            escritorio,
                            <br />
                            desarrollo en móviles.
                          </span>
                          <span className="tag big">
                            {"</p>"}
                          </span>

                        </p>
                        <p className="text-center">
                          <Link className="contact" href={"/"}>
                            <span className="tag big">
                              {"<a>"}
                            </span>
                            <span className="text big">
                              Haz <span className="tag">clic</span>, para contactarme...
                            </span>
                            <span className="tag big">
                              {"</a>"}
                            </span>
                          </Link>
                        </p>
                      </code>
                    </pre>
                  </Col>

                </Row>
                <Row>
                  <Col span={20} offset={2}>
                    <Card className="mt-5 custom-card" title="Con el manejo de las distintas tecnologías y lenguajes">
                      <Carousel autoplay arrows speed={1000} waitForAnimate >
                        <div className="carrousel-item">
                          <TbBrandNextjs className="icon" />
                          <h3>NextJS</h3>
                        </div>
                        <div className="carrousel-item">
                          <BiLogoFlask className="icon" />
                          <h3>Flask</h3>
                        </div>
                        <div className="carrousel-item">
                          <BiLogoReact className="icon" />
                          <h3>React</h3>
                        </div>
                        <div className="carrousel-item">
                          <SiExpress className="icon" />
                          <h3>Express JS</h3>
                        </div>
                        <div className="carrousel-item">
                          <SiFastapi className="icon" />
                          <h3>FastAPI</h3>
                        </div>
                        <div className="carrousel-item">
                          <BiLogoAngular className="icon" />
                          <h3>Angular</h3>
                        </div>
                        <div className="carrousel-item">
                          <SiCsharp className="icon" />
                          <h3>C#</h3>
                        </div>
                        <div className="carrousel-item">
                          <BiLogoTypescript className="icon" />
                          <h3>TypeScript</h3>
                        </div>
                        <div className="carrousel-item">
                          <BiLogoVuejs className="icon" />
                          <h3>VueJS</h3>
                        </div>
                        <div className="carrousel-item">
                          <BiLogoPython className="icon" />
                          <h3>Python</h3>
                        </div>
                        <div className="carrousel-item">
                          <SiPandas className="icon" />
                          <h3>Pandas</h3>
                        </div>
                        <div className="carrousel-item">
                          <TbBrandReactNative className="icon" />
                          <h3>ReactNative</h3>
                        </div>
                      </Carousel>
                    </Card>
                  </Col>

                </Row>

              </Col>
              <div className="linea-red">
                <div className="punto-brillante-red"></div>
              </div>
              <Col span={24} className="px-0">
                <section className="bg-white">
                  <Row>
                    <Col span={10} offset={7} md={{ span: 4, offset: 10 }}>
                      <Image src={"/assets/logo-miguel-white.png"} width={100} height={100} layout="responsive"></Image>
                    </Col>
                    <Col span={24} className="my-4">
                      <h4 className="text-center text-red">Es hora de unir tu creatividad con la tecnología</h4>
                    </Col>
                    <Col span={24} lg={{ span: 16, offset: 4 }}>
                      <Timeline
                        mode={'alternate'}

                        items={[
                          {
                            dot: <GiLion className="dot" style={{ transform: "rotateY(180deg)" }} />,
                            label: <div className="time-title">
                              <span >Juntos identificaremos tus metas y desafíos.</span>
                            </div>,
                            children: <Card className="ms-4">
                              <Image src={"/assets/time1.jpg"} width={100} height={60} layout="responsive"></Image>
                              <p className="description">Comenzaré nuestro viaje reuniéndome contigo para entender tus objetivos
                                comerciales y desafíos actuales. Esta fase es donde identificamos cómo la tecnología puede ser tu aliada para alcanzar el éxito</p>
                            </Card>,
                          },
                          {
                            dot: <GiLion className="dot" />,

                            label: <div className="time-title">
                              <span >Creamos un plan personalizado que se ajuste a tus necesidades y presupuesto.</span>
                            </div>,
                            children: <Card className="me-4">                              <Image src={"/assets/time2.jpg"} width={100} height={60} layout="responsive"></Image>
                              <p className="description">Diseñamos junto a tí un plan estratégico personalizado que se adapte perfectamente a las
                                necesidades únicas de tu negocio. Este plan será tu hoja de ruta para abrazar la tecnología de manera efectiva y rentable.</p>
                            </Card>
                          },
                          {
                            dot: <GiLion className="dot" style={{ transform: "rotateY(180deg)" }} />,
                            label:
                              <div className="time-title">
                                <span >Elegimos las mejores herramientas que impulsen tu negocio.</span>
                              </div>,
                            children: <Card className="ms-4">
                              <Image src={"/assets/time3.jpg"} width={100} height={60} layout="responsive"></Image>
                              <p className="description"> En esta etapa, seleccionamos cuidadosamente las soluciones tecnológicas que mejor se ajusten a tus requerimientos.
                                Esto incluye identificar herramientas y tecnologías que te ayudarán a lograr tus objetivos.</p>
                            </Card>
                          },
                          {
                            dot: <GiLion className="dot" />,

                            label:
                              <div className="time-title">
                                <span >Tu equipo aprenderá a abrazar la tecnología para un rendimiento óptimo.</span>
                              </div>,
                            children: <Card className="me-4">
                              <Image src={"/assets/time4.jpg"} width={100} height={60} layout="responsive"></Image>
                              <p className="description"> No solo implementaré tecnología, sino que también brindaré la ayuda a tu equipo en su uso efectivo. Quiero asegurarme de que todos estén cómodos y aprovechen al máximo las nuevas herramientas.</p>
                            </Card>
                          },
                          {
                            dot: <GiLion className="dot" style={{ transform: "rotateY(180deg)" }} />,

                            label: <div className="time-title">
                              <span className="">Puedes buscarme cuando quieras y mantener actualizado con las últimos innovaciones.</span>
                            </div>,
                            children: <Card className="ms-4">
                              <Image src={"/assets/time5.jpg"} width={100} height={60} layout="responsive"></Image>
                              <p className="description"> Debido a que la tecnología está constante evolución.
                                Mantendré el sistema actualizado con tus nuevas necesidades a través de un costo menor y al tanto de las últimas innovaciones para que tu negocio siga prosperando en la era digital.</p>
                            </Card>
                          },
                        ]}
                      />
                    </Col>
                  </Row>
                </section>
                <div className="linea-red">
                  <div className="punto-brillante-red"></div>
                </div>
              </Col>
              <Col span={24}>
                <h4 className="text-center text-white my-3">!Convierte tus sueños de negocio en una realidad tecnológica!</h4>
                <Row gutter={16}>
                  <Col span={24} md={{ span: 8 }}>
                    <Card className="custom-card" title={<h5 className="text-center line-border-bottom ">Desarrollo Web</h5>} bordered={false}>
                      <Image src={"/assets/card1.jpg"} width={100} height={60} layout="responsive"></Image>
                      <p className="description">Me enfoco en el desarrollo web especialmente, haciendo el manejo de Frameworks
                        bastante demandados hoy en día, así también de otras herramientas que se me fueron
                        aprendidas con el paso del tiempo.</p>
                    </Card>
                  </Col>
                  <Col span={24} md={{ span: 8 }}>
                    <Card className="custom-card" title={<h5 className="text-center line-border-bottom">Desarrollo de escritorio</h5>} bordered={false}>
                      <Image src={"/assets/card2.jpg"} width={100} height={60} layout="responsive"></Image>
                      <p className="description">Mi trabajo también consiste en desarrollar programas de escritorio especialmente en Windows,
                        puedes confiar mi trabajo, y si deseas innovar puedo tener la habilidad de aprender más cosas para brindarte algo de alto nivel.</p>
                    </Card>
                  </Col>
                  <Col span={24} md={{ span: 8 }}>
                    <Card className="custom-card" title={<h5 className="text-center line-border-bottom ">Desarrollo Móvil</h5>} bordered={false}>
                      <Image src={"/assets/card3.jpg"} width={100} height={60} layout="responsive"></Image>
                      <p className="description">Me enfoco en el desarrollo web especialmente, haciendo el manejo de Frameworks
                        bastante demandados hoy en día, así también de otras herramientas que se me fueron
                        aprendidas con el paso del tiempo.</p>
                    </Card>
                  </Col>
                </Row>
                <p className="text-thinner">Contáctame para descubrir cómo impulsar tu éxito digital</p>
              </Col>
            </Row>
          </Content >
        </main >
        <Footer />
      </div>
      <FloatButton.BackTop />

    </div>
  )
}