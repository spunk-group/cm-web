import React from 'react'
import { FooterData } from '../../Component/Data/MarketData/MarketData';
import Logo from "../../assets/icons/CoinMarket_New_Logo_Dark.png"
import LinkeIn from '../../assets/icons/icon_linkedin2.png'
import Instagram from '../../assets/icons/icon_instagram2.png'
import Telegram from '../../assets/icons/icon_telegram2.png'
import Twitter from '../../assets/icons/icon_twitter2.png'
import Facebook from '../../assets/icons/icon_facebook2.png'
import LogoLight from '../../assets/icons/coinmarket_logo_light.webp'
import LogoLightC from '../../assets/icons/coinmarket_logo_light_C.svg'

function Footer() {
    return (

        <div>
            <div className="footer" >
                <div className="container-xxl flex-wrap d-flex mt-4 px-4 pt-4 pb-4">
                    <div className="container-xxl col-lg-9 d-flex align-items-baseline row g-3 row-cols-1 row-cols-sm-2 row-cols-md-5 row-cols-lg-5 row-cols-xl-5 mb-3">
                        {
                            FooterData.map((d, i) => (
                                <div className="card-body d-flex align-items-center">
                                    <div className="flex-fill text-truncate">
                                        <span className="h5 mt-3 mb-1 fw-bold d-block color-primary">{d.header}</span>
                                        {(d.subHeader).map((data, index) => (
                                            <div className="d-flex justify-content-between">
                                                <a href='#'><span className="text-muted" style={{ whiteSpace: 'initial' }}>{data}</span></a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="col text-end">
                        {/* <div className="logo">
                        <img style={{ height: '30px', width: 'auto' }} src={LogoLightC} alt="CoinMarket Logo" /> <img style={{ height: '30px', width: 'auto' }} src={LogoLight} alt="Coinmarket Logo" />
                    </div> */}
                        <img style={{ height: '60px', width: 'auto', paddingRight: '20px' }} src={Logo} alt='Coinmarket logo' />
                        <p className="small text-muted col-12 justify-content-center mb-1" style={{ paddingRight: '50px' }}>or continue with</p>
                        <div className="socials">
                            <a href="https://www.linkedin.com/company/78440338" target='_blank' rel="noreferrer" >
                                <img className='avatar' src={LinkeIn} alt="Linkedin Social Media" />
                            </a>
                            <a href="https://www.instagram.com" target='_blank' rel="noreferrer">
                                <img className='avatar' src={Instagram} alt="Instagram Social Media" />
                            </a>
                            <a href="https://t.me/coinmarketg" target='_blank' rel="noreferrer">
                                <img className='avatar' src={Telegram} alt="Telegram Social Media" />
                            </a>
                            <a href="https://twitter.com/CoinMarketG" target='_blank' rel="noreferrer">
                                <img className='avatar' src={Twitter} alt="Twitter Social Media" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100088678356292" target='_blank' rel="noreferrer">
                                <img className='avatar' src={Facebook} alt="Facebook Social Media" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="text-center pt-3 pb-3" style={{
                background: 'var(--color-fff)'
            }}>
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1 text-wrap">Made With ❤️ In Hong Kong Copyright © 2022 CoinMarket. All rights reserved</span>
                </div>
            </nav>
        </div>
    )
}

export default Footer