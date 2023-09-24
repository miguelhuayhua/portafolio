"use client";

import { Content } from "antd/es/layout/layout";
import { Affix, Card, Carousel, Col, FloatButton, Row, Timeline, Tooltip } from "antd";
import Image from 'next/legacy/image';
//estilos
import './estilos.scss'
//icons
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from "../components/navbar";
import Social from "../components/social";
import Footer from "../components/footer";
export default function Proyectos() {


    return (
        <div className="body">

            <Navbar></Navbar>
            <Social></Social>
            <main >

            </main >
            <Footer />
            <FloatButton.BackTop />

        </div>
    )
}