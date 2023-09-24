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

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link href={""} className="drop-btn">
                Español
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link href={""} className="drop-btn">
                English
            </Link>
        ),
    }
];


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return <>
        <Affix offsetTop={0}>
            <nav>
                <Row>
                    <Col span={4} offset={1}>
                        <Link href={"/"} passHref>
                            <Image className="rotate" src={"/assets/logo-miguel.png"} layout="fixed" width={100}
                                height={80} alt="logo miguel freelancer"></Image>
                        </Link>
                    </Col>
                    <Col span={12} offset={2} className="only-md">
                        <ul>
                            <li>
                                <Link href={"/proyectos"} passHref>
                                    <button className="btn nav-btn">
                                        Proyectos
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
                    <Link href={"/proyectos"} passHref>
                        <button className="btn nav-btn-toggle" style={{ width: "100%" }}>
                            Proyectos
                        </button>
                    </Link>
                    <Link href={"/proyectos"} passHref>
                        <button className="btn nav-btn-toggle" style={{ width: "100%" }}>
                            Trayectoria
                        </button>
                    </Link>
                    <Link href={"/proyectos"} passHref>
                        <button className="btn nav-btn-toggle" style={{ width: "100%" }}>
                            Sobre mí
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    </>
}

export default Navbar;