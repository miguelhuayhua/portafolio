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
import { AiFillGoogleCircle, AiFillHtml5, AiOutlineArrowLeft, AiOutlineArrowRight, AiFillApi, AiFillLinkedin, AiFillProject, AiOutlineAntDesign } from 'react-icons/ai';
import { GrNode } from 'react-icons/gr';
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
                    <Col span={24} className="text-white text-center my-5"> <h1>Mi Trabajo</h1></Col>

                </Row>

            </main >
            <Footer />
            <FloatButton.BackTop />

        </>
    )
}

export default Client;