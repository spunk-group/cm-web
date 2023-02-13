import Reason from '../../assets/images/reason_main.png'
import { ReasonUsingCoinMarketLeftData, ReasonUsingCoinMarketRightData } from '../Data/DashboardData/DashboardData'

function ReasonCoinMarket(props) {

    // const { isLoggedIn = false, user } = props;

    return (
        <div className='coinmarket pt-4 pb-5 mb-2'>
            <div className="section-inner">
                <div className="pt-5 pb-5 section-title text-center">
                    <span className='fs-3 fw-semibold'>Reason Using CoinMarket</span>
                </div>
                <div className="coinmarket-content">
                    <div className="d-flex row g-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3 mb-3">
                        <div>
                            <div className="subsection why-left">
                                <span className='fs-4 px-3'>A simple 3 steps to get started</span>
                                {ReasonUsingCoinMarketLeftData.map((d, i) => (
                                    <div className="reason-items d-flex align-items-center">
                                        <div className="reason-img"><img style={{ height: '110px', width: 'auto' }} src={d.image} alt="" /></div>
                                        <div className="d-flex row" style={{ width: '300px' }}>
                                            <span className='fs-5 color-primary'>{d.header}</span>
                                            <span className='fs-7'>{d.subHeader}</span>
                                        </div>
                                    </div>
                                ))}
                                {/* <div className="reason-items d-flex align-items-center">
                                    <div className="reason-img"><img style={{ height: '110px', width: 'auto' }} src={Wallet} alt="" /></div>
                                    <div className="d-flex row">
                                        <span className='fs-5 color-primary'>Fund your account</span>
                                        <span className='fs-7'>Fund your account from different easy <br />channel  that you prefer </span>
                                    </div>
                                </div>
                                <div className="reason-items d-flex align-items-center">
                                    <div className="reason-img"><img style={{ height: '110px', width: 'auto' }} src={Trade} alt="" /></div>
                                    <div className="d-flex row">
                                        <span className='fs-5 color-primary'>Start trading</span>
                                        <span className='fs-7'>Done! Start trading depend on which<br /> market </span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div>
                            <div className='text-center'>
                                <img src={Reason} style={{ width: '310px', height: 'auto' }} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="subsection text-end">
                                <span className='fs-4 px-3'>Crypto exchange you can trust</span>
                                {ReasonUsingCoinMarketRightData.map((d, i) => (
                                    <div className="reason-items d-flex align-items-center justify-content-sm-end">
                                        <div className="d-flex row text-md-end" style={{ width: '300px' }}>
                                            <span className='fs-5 color-primary'>{d.header}</span>
                                            <span className='fs-7'>{d.subHeader}</span>
                                        </div>
                                        <div className="reason-img"><img style={{ height: '110px', width: 'auto' }} src={d.image} alt="" /></div>
                                    </div>
                                ))}
                                {/* <div className="reason-items d-flex align-items-center justify-content-sm-end">
                                    <div className="d-flex row text-md-end">
                                        <span className='fs-5 color-primary'>Data Encryptoion</span>
                                        <span className='fs-7'>CoinMarket Data are encrypted and <br /> more Encryption</span>
                                    </div>
                                    <div className="reason-img d-flex align-items-center"><img style={{ height: '110px', width: 'auto' }} src={Encrypt} alt="" /></div>
                                </div>
                                <div className="reason-items d-flex align-items-center justify-content-sm-end">
                                    <div className="d-flex row text-md-end">
                                        <span className='fs-5 color-primary'>Hybrid CEX & DEX</span>
                                        <span className='fs-7'>Your need  can address by CoinMarket <br /> from CEX to DEX</span>
                                    </div>
                                    <div className="reason-img"><img style={{ height: '110px', width: 'auto' }} src={CEXDEX} alt="" /></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <a href='/signup' className='btn btn-primary' style={{ width: '150px' }}>Start Now</a>
                </div>
            </div>
        </div>
    )
}

export default ReasonCoinMarket