"use client";
import { Tooltip } from "antd";
//estilos
import Link from "next/link";
//icons
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
export default function Social() {

    return (
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
    )
}