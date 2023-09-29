"use client";

import { Affix, Button, Col, Drawer, Dropdown, MenuProps, Row, Space, Switch } from "antd";
import Link from "next/link";
import Image from 'next/legacy/image';
import './estilos.scss';
//icons
import { AiFillCaretDown } from 'react-icons/ai'
import { TbLanguageKatakana } from 'react-icons/tb'
import { CgMenuMotion, CgMenu } from 'react-icons/cg'
import { useState } from "react";



const Navbar = (props: { active: number, pathEs: string, pathEn: string }) => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Link href={props.pathEs} className="drop-btn">
                    Español
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link href={props.pathEn} className="drop-btn">
                    English
                </Link>
            ),
        }
    ];

    const [open, setOpen] = useState(false);
    return <>
        <Affix offsetTop={0}>
            <nav>
                <Row>
                    <Col span={4} offset={1}>
                        <Link href={"/"} passHref>
                            <Image className="rotate" src={"/assets/logo.png"} layout="fixed" width={100}
                                height={80} alt="logo miguel freelancer"></Image>
                        </Link>
                    </Col>
                    <Col span={12} offset={2} className="only-md">
                        <ul>
                            <li>
                                <Link href={"/"} passHref>
                                    <button className={props.active == 0 ? "btn nav-btn active" : "btn nav-btn"}>
                                        Inicio
                                    </button>
                                </Link>
                                <Link href={"/historial"} passHref>
                                    <button className={props.active == 1 ? "btn nav-btn active" : "btn nav-btn"}>
                                        Historial
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/mitrabajo"} passHref >
                                    <button className={props.active == 2 ? "btn nav-btn active" : "btn nav-btn"}>
                                        Lo que hago
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/sobremi"} passHref>
                                    <button className={props.active == 3 ? "btn nav-btn active" : "btn nav-btn"}>
                                        ¿Quién soy?
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col span={4} offset={4} md={{ offset: 0 }} className="middle">
                        <Dropdown menu={{ items, selectable: true, selectedKeys: ['1'] }} trigger={['click']}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <TbLanguageKatakana color="white" fontSize={25} />
                                    <AiFillCaretDown color="white" fontSize={25} />
                                </Space>
                            </a>
                        </Dropdown>
                    </Col>
                </Row>
            </nav>
            <button onClick={() => {
                setOpen(!open)
            }} className="toggle-btn middle only-md-down" >
                {!open ? <CgMenu className="icon" /> : <CgMenuMotion className="icon" />}

            </button>
            <div className="linea">
                <div className="punto-brillante"></div>
            </div>
        </Affix>
        <div
            className={open ? "responsive-navbar show" : "responsive-navbar"} >
            <ul className="mt-4">
                <li>
                    <Link href={"/"} passHref>
                        <button className={props.active == 0 ? "btn nav-btn-toggle active" : "btn nav-btn-toggle"}>
                            Inicio
                        </button>
                    </Link>
                    <Link href={"/historial"} passHref>
                        <button className={props.active == 1 ? "btn nav-btn-toggle active" : "btn nav-btn-toggle"}>
                            Historial
                        </button>
                    </Link>
                    <Link href={"/historial"} passHref>
                        <button className={props.active == 2 ? "btn nav-btn-toggle active" : "btn nav-btn-toggle"}>
                            Lo que hago
                        </button>
                    </Link>
                    <Link href={"/historial"} passHref>
                        <button className={props.active == 3 ? "btn nav-btn-toggle active" : "btn nav-btn-toggle"}>
                            ¿Quién soy?
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    </>
}

export default Navbar;