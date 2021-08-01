import React from 'react'
import { BiEnvelope, BiPhone, BiLocationPlus } from "react-icons/bi";
import { Link } from 'react-router-dom';
import IconBtn from "../Elements/IconBtn"
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__column">
                        <h3>LOGICS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Optio inventore dolor quae harum nostrum deserunt?
                        </p>
                    </div>
                    <div className="footer__column">
                        <h3>Bize Ulaşın</h3>
                        <ul>
                            <li>
                                <IconBtn>
                                    <BiEnvelope />
                                </IconBtn>
                                info@demolink.org
                            </li>
                            <li>
                                <IconBtn>
                                    <BiPhone />
                                </IconBtn>
                                +095 585 68662 45
                            </li>
                            <li>
                                <IconBtn>
                                    <BiLocationPlus />
                                </IconBtn>
                                Turkey Kocaeli
                            </li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <ul className=" footer__links">
                            <li>
                                <Link className="footer__link">Anasayfa</Link>
                            </li>
                            <li>
                                <Link className="footer__link">İletişim</Link>
                            </li>
                            <li>
                                <Link className="footer__link">Servis</Link>
                            </li>
                            <li>
                                <Link className="footer__link">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer
