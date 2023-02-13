import React from 'react';
import Trade from '../../assets/images/downloadapp_trade.png'
import QRCode from '../../assets/images/downloadapp_qrcode.png'
import AppleDownloadLink from '../../assets/images/downloadapp_apple.png'
import GoogleDownloadLink from '../../assets/images/downloadapp_google_2.png'

function DownloadApp() {
    return (
        <div className="col-xl-12">
            <div className="card">
                <div className="card-body d-flex mt-5 mb-5 row g-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
                    <div className="body-content col text-center">
                        <div className="fs-3">Everywhere, anytime, trade on the go.</div>
                        <p>Use our desktop and app clients to stay up-to-date.</p>
                        <div className="trade-img img-wrap">
                            <img className='img-fluid' src={Trade} alt="Why Coinmarket for Trade" />
                        </div>
                    </div>
                    <div className="body-list col">
                        <div className="download_content">
                            <div className="scan_qr d-flex flex-row align-items-center bg-black justify-content-between card px-4">
                                <div className="scanqr-text text-white">
                                    <div className="fs-6">Scan & Download</div>
                                    <div className="fs-3">iOS & Android</div>
                                </div>
                                <div className="qr-wrap">
                                    <img style={{ height: '100px' }} src={QRCode} alt="Coinmarket QR Code" />
                                </div>
                            </div>
                            <div className="list m-2">
                                <div className="d-flex align-items-baseline">
                                    <i className="fa fa-check-circle"></i>
                                    <p className='m-0 p-2'>
                                        Fast trading performance
                                    </p>
                                </div>
                                <div className="d-flex align-items-baseline">
                                    <i className="fa fa-check-circle"></i>
                                    <p className='m-0 p-2'>
                                        All devices are compatible. Just one click to log in!
                                    </p>
                                </div>
                                <div className="d-flex align-items-baseline">
                                    <i className="fa fa-check-circle"></i>
                                    <p className='m-0 p-2'>
                                        CoinMarket offers a wide range of assets, from Bitcoin to New Assets
                                    </p>
                                </div>
                                <div className="d-flex align-items-baseline">
                                    <i className="fa fa-check-circle"></i>
                                    <p className='m-0 p-2'>
                                        Only authorized transactions are executed through the secure trading terminal of this highly secure app.
                                    </p>
                                </div>
                            </div>
                            <div className="download-app-links d-flex">
                                <button className="btn pt-0 pb-0" type="button"><img className='cm-btn-img' style={{ width: 'auto', height: '35px' }} src={AppleDownloadLink} alt='Apple Download Link' /></button>
                                <button className="btn pt-0 pb-0" type="button"><img className='cm-btn-img' style={{ width: 'auto', height: '35px' }} src={GoogleDownloadLink} alt='Google Download Link' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadApp;