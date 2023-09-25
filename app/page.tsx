"use client";

import { Content } from "antd/es/layout/layout";
import Navbar from "./components/navbar";
import { Affix, Card, Carousel, Col, FloatButton, Row, Timeline } from "antd";
import Image from 'next/legacy/image';
//estilos
import './estilos.scss'
import Link from "next/link";
//icons
import { MdWeb, MdOutlineWebAsset } from 'react-icons/md';
import { FaMobile } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb';
import { GiLion } from 'react-icons/gi';
import { BiLogoReact, BiLogoAngular, BiLogoTypescript, BiLogoVuejs, BiLogoPython, BiLogoFlask } from 'react-icons/bi';
import { SiExpress, SiFastapi, SiCsharp, SiPandas } from 'react-icons/si';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Footer from "./components/footer";
import Social from "./components/social";
import { particlesOptions } from "./data";
export default function Home() {
  const particlesInit = async (main: any) => {

    await loadFull(main);
  };
  return (
    <div className="body">
      <Navbar></Navbar>
      <Social></Social>
      <main >
        <Content className="mt-3 " >
          <Row gutter={[24, 0]} className="mx-0 ">
            <Particles init={particlesInit} options={particlesOptions} />
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

            <Col span={24} className="bg-white px-0 mx-0" >
              <div className="triangle px-0 mx-0"></div>
              <div className="float-logo">
                <Image src={"/assets/logo-miguel-white.png"} width={100} height={100} layout="fixed"></Image>
              </div>
            </Col>
            <Col span={24} className="px-0">
              <section className="bg-white">
                <Row>
                  <Col span={24} className="mb-4">
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

            </Col>
            <Col span={24} className="bg-white px-0 mx-0" >
              <div className="triangle-down px-0 mx-0"></div>
              <div className="float-logo">
                <Image src={"/assets/logo-miguel-white.png"} width={100} height={100} layout="fixed"></Image>
              </div>
            </Col>
            <Col span={24} className="p-0">
              <h4 className="text-center text-white my-5">!Convierte tus sueños de negocio en una realidad tecnológica!</h4>
              <Row className="px-5">
                <Col span={24} md={{ span: 8 }}>
                  <div className="modern-card" style={{ background: "rgba(91, 83, 83, 1) " }}>
                    <MdWeb fontSize={50} color="white" />
                    <h5>Desarrollo Web</h5>
                    <p>Mi principal enfoque.</p>
                  </div>
                </Col>
                <Col span={24} md={{ span: 8 }} >
                  <div className="modern-card" style={{ background: "linear-gradient(195deg, rgba(122,48,48,1) 0%, rgba(35,2,2,1) 100%)" }}>
                    <MdOutlineWebAsset fontSize={50} color="white" />
                    <h5>Desarrollo de escritorio</h5>
                    <p> Aplicaciones de Windows en lo absoluto.</p>
                  </div>
                </Col>
                <Col span={24} md={{ span: 8 }} >
                  <div className="modern-card" style={{ background: "rgb(93,46,46)" }}>
                    <FaMobile fontSize={50} color="white" />
                    <h5>Desarrollo Móvil</h5>
                    <p>Me baso en el uso de React Native.</p>
                  </div>

                </Col>
              </Row>
              <p className="text-thinner my-5">Contáctame para descubrir cómo impulsar tu éxito digital</p>
            </Col>
          </Row>
        </Content >
      </main >
      <Footer />
      <FloatButton.BackTop />
    </div>
  )
}