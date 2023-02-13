import React from 'react'
import Logo from "../../assets/icons/CoinMarket_New_Logo_Dark.png"
import Download from "../../assets/icons/button_icon_download.png"
import Header from "./Header"
import DarkIcon from '../../../src/assets/icons/CoinMarket Dark Light Change Icon.png'

function Nav(props) {
    const { onChangeDarkMode } = props;

    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top p-0" style={{ background: 'var(--color-200)', height: '80px' }}>
            <div className="container-fluid">
                <a href="/"><img style={{ height: 'auto', width: '150px' }} src={Logo} alt='Coinmarket logo' /></a>
                <button className="navbar-toggler p-0 border-0 menu-toggle order-3" type="button" onClick={() => {
                    var sidebar = document.getElementById('mainsidemenu')
                    if (sidebar) {
                        console.log("test")
                        if (sidebar.classList.contains('open')) {
                            sidebar.classList.remove('open')
                        } else {
                            sidebar.classList.add('open')
                        }
                    }
                }}>
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown px-1">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-grid-3x3-gap-fill"></i>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item px-1">
                            <a className="nav-link active fw-semibold" aria-current="page" href="#">Markets</a>
                        </li>
                        <li className="nav-item px-1">
                            <a className="nav-link fw-semibold" href="#">Trade</a>
                        </li>
                        <li className="nav-item px-1">
                            <a className="nav-link active fw-semibold" aria-current="page" href="#">BuyCrypto</a>
                        </li>
                        <li className="nav-item px-1">
                            <a className="nav-link fw-semibold" href="#">LaunchPad</a>
                        </li>
                        <li className="nav-item px-1">
                            <a className="nav-link fw-semibold" href="#">NFT</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn fw-semibold" type="submit"><a href="/sign-in">Login</a></button>
                        <div className="register px-2">
                            <button className="btn btn-primary" type="submit"><a href="/sign-up" className='text-white'>Register</a></button>
                        </div>
                    </form>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item px-1">
                            <a className="nav-link active fw-semibold" aria-current="page" href="#">English</a>
                        </li>
                        <li className="nav-item px-1">
                            <a href="#"><img className='avatar' src={Download} alt='Coinmarket logo' /></a>
                        </li>
                        <li className="nav-item px-1">
                            <a className="nav-link fw-semibold" href="#">USD</a>
                        </li>
                        <li className="nav-item">
                            <a data-bs-toggle="modal" data-bs-target="#Settingmodal" onClick={onChangeDarkMode}>
                                <img className='avatar' style={{ width: '75px', height: 'auto' }} src={DarkIcon} alt="" />
                                {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 38 38">
                                    <path d="M19,28c-4.964,0-9-4.04-9-9c0-4.964,4.036-9,9-9c4.96,0,9,4.036,9,9  C28,23.96,23.96,28,19,28z M19,16c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S20.654,16,19,16z" style={{ fill: 'var(--primary-color)' }} data-st="fill:var(--chart-color4);"></path>
                                    <path className="st0" d="M19,24c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S21.757,24,19,24z M19,16c-1.654,0-3,1.346-3,3  s1.346,3,3,3s3-1.346,3-3S20.654,16,19,16z M32,19c0-1.408-0.232-2.763-0.648-4.034l3.737-1.548l-0.766-1.848l-3.743,1.551  c-1.25-2.452-3.251-4.452-5.702-5.701l1.551-3.744l-1.848-0.765l-1.548,3.737C21.762,6.232,20.409,6,19,6  c-1.409,0-2.756,0.248-4.026,0.668l-1.556-3.756L11.57,3.677l2.316,5.592C15.416,8.462,17.154,8,19,8c6.065,0,11,4.935,11,11  s-4.935,11-11,11S8,25.065,8,19c0-3.031,1.232-5.779,3.222-7.771L9.808,9.816c-0.962,0.963-1.764,2.082-2.388,3.306l-3.744-1.551  l-0.765,1.847l3.738,1.548C6.232,16.238,6,17.592,6,19c0,1.409,0.232,2.763,0.648,4.034l-3.737,1.548l0.766,1.848l3.744-1.551  c1.25,2.451,3.25,4.451,5.701,5.7l-1.551,3.744l1.848,0.766l1.548-3.737C16.237,31.768,17.591,32,19,32s2.762-0.232,4.033-0.648  l1.549,3.737l1.848-0.766l-1.552-3.743c2.451-1.25,4.451-3.25,5.701-5.701l3.744,1.551l0.765-1.848l-3.736-1.548  C31.768,21.763,32,20.409,32,19z"></path>
                                </svg> */}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Nav