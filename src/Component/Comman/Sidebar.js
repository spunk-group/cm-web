import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Download from "../../assets/icons/button_icon_download.png"
import DarkIcon from '../../../src/assets/icons/CoinMarket Dark Light Change Icon.png'

function Sidebar(props) {
    const [isSidebarMini, setIsSidebarMini] = useState(false);
    const navigate = useNavigate();
    const baseUrl = process.env.PUBLIC_URL;
    const { onChangeDarkMode } = props;

    const openChildren = (id) => {
        var otherTabs = document.getElementsByClassName("has-children")
        if (otherTabs) {
            for (var i = 0; i < otherTabs.length; i++) {
                if (otherTabs[i].id !== id) {
                    otherTabs[i].className = otherTabs[i].className.replace(" show", "");
                    if (otherTabs[i].parentElement.children.length > 1) {
                        otherTabs[i].parentElement.children[0].setAttribute("aria-expanded", "false")
                    }
                }
            }
        }
        var menutab = document.getElementById(id)
        if (menutab) {
            if (menutab.classList.contains("show")) {
                menutab.classList.remove("show")
                if (menutab.parentElement.children.length > 1) {
                    menutab.parentElement.children[0].setAttribute("aria-expanded", "false")
                }
            } else {
                menutab.classList.add("show")
                if (menutab.parentElement.children.length > 1) {
                    menutab.parentElement.children[0].setAttribute("aria-expanded", "true")
                }
            }
        }
    }
    const openChildren1 = (id) => {
        var otherTabs = document.getElementsByClassName("has-children")
        if (otherTabs) {
            for (var i = 0; i < otherTabs.length; i++) {
                otherTabs[i].className = otherTabs[i].className.replace(" show", "");
            }
        }
        var menutab = document.getElementById(id)
        if (menutab) {
            menutab.classList.add("show")
            if (menutab.parentElement.children.length > 1) {
                menutab.parentElement.children[0].setAttribute("aria-expanded", "true")
            }
        }
    }

    const { activekey, menuData, GotoChangeMenu } = props;


    return (<div id="mainsidemenu" style={{ marginTop: '30px', background: 'var(--color-200)' }} className={`sidebar py-2 py-md-2 me-0 border-end ${isSidebarMini ? "sidebar-mini" : ""}`}>
        <div className="d-flex flex-column h-100">
            <a href={process.env.PUBLIC_URL + "/"} className="mb-0 brand-icon" >
            </a>
            <ul className="menu-list flex-grow-1 mt-4 px-1">
                <li className="nav-item dropdown d-flex px-1 m-link">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-grid-3x3-gap-fill"></i>
                    </a>
                    <div className=' px-1'>
                        <h6 className='mb-0'>Products</h6>
                        <small className="text-muted">Market Products</small>
                    </div>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                {menuData.map((d, i) => {
                    return <li key={"dsfshsdg" + i} className=" collapsed">
                        <Link to={baseUrl + "/" + d.routerLink[0]} className={`m-link ${("/" + d.routerLink[0] === activekey) ? "active" : ""}`} >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox={d.viewBox}>
                                <path xmlns="http://www.w3.org/2000/svg" d={d.iconClasss} style={{ fill: 'var(--primary-color)' }} data-st="fill:var(--chart-color4);"></path>
                                <path xmlns="http://www.w3.org/2000/svg" className="st0" d={d.iconClass}></path>
                            </svg>
                            <div>
                                <h6 className='mb-0'>{d.name}</h6>
                                <small className="text-muted">{d.subject}</small>
                            </div>
                        </Link>
                    </li>
                })
                }
                <div className="register px-1 p-1">
                    <button className="btn btn-primary" style={{ width: '190px' }} type="submit"><a href="/sign-in" className='text-white'>Login</a></button>
                </div>
                <div className="register px-1 p-1">
                    <button className="btn btn-primary" style={{ width: '190px' }} type="submit"><a href="/sign-up" className='text-white'>Register</a></button>
                </div>
                <div className="d-flex justify-content-center align-items-center pt-2">
                    <div className="nav-item px-1">
                        <a className="nav-link active fw-semibold px-1" aria-current="page" href="#">English</a>
                    </div>
                    <div className="nav-item px-1">
                        <a href="#"><img className='avatar' src={Download} alt='Coinmarket logo' /></a>
                    </div>
                    <div className="nav-item px-1">
                        <a className="nav-link fw-semibold" href="#">USD</a>
                    </div>
                    <div className="nav-item">
                        <a data-bs-toggle="modal" data-bs-target="#Settingmodal" onClick={onChangeDarkMode}>
                            <img className='avatar' style={{ width: '60px', height: 'auto' }} src={DarkIcon} alt="" />
                            {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 38 38">
                                <path d="M19,28c-4.964,0-9-4.04-9-9c0-4.964,4.036-9,9-9c4.96,0,9,4.036,9,9  C28,23.96,23.96,28,19,28z M19,16c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S20.654,16,19,16z" style={{ fill: 'var(--primary-color)' }} data-st="fill:var(--chart-color4);"></path>
                                <path className="st0" d="M19,24c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S21.757,24,19,24z M19,16c-1.654,0-3,1.346-3,3  s1.346,3,3,3s3-1.346,3-3S20.654,16,19,16z M32,19c0-1.408-0.232-2.763-0.648-4.034l3.737-1.548l-0.766-1.848l-3.743,1.551  c-1.25-2.452-3.251-4.452-5.702-5.701l1.551-3.744l-1.848-0.765l-1.548,3.737C21.762,6.232,20.409,6,19,6  c-1.409,0-2.756,0.248-4.026,0.668l-1.556-3.756L11.57,3.677l2.316,5.592C15.416,8.462,17.154,8,19,8c6.065,0,11,4.935,11,11  s-4.935,11-11,11S8,25.065,8,19c0-3.031,1.232-5.779,3.222-7.771L9.808,9.816c-0.962,0.963-1.764,2.082-2.388,3.306l-3.744-1.551  l-0.765,1.847l3.738,1.548C6.232,16.238,6,17.592,6,19c0,1.409,0.232,2.763,0.648,4.034l-3.737,1.548l0.766,1.848l3.744-1.551  c1.25,2.451,3.25,4.451,5.701,5.7l-1.551,3.744l1.848,0.766l1.548-3.737C16.237,31.768,17.591,32,19,32s2.762-0.232,4.033-0.648  l1.549,3.737l1.848-0.766l-1.552-3.743c2.451-1.25,4.451-3.25,5.701-5.701l3.744,1.551l0.765-1.848l-3.736-1.548  C31.768,21.763,32,20.409,32,19z"></path>
                            </svg> */}
                        </a>
                    </div>
                </div>
            </ul>



            {/* <button type="button" className="btn btn-link sidebar-mini-btn text-muted" onClick={() => { setIsSidebarMini(!isSidebarMini) }}>
                <span className="ms-2"><i className="icofont-bubble-right"></i></span>
            </button> */}
        </div>
    </div>
    )
}

export default Sidebar;