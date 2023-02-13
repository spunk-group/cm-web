import React from 'react';
import Google from '../../assets/icons/button_icon_google.png';
import Metamask from '../../assets/icons/button_icon_metamask.png';
import Apple from '../../assets/icons/button_icon_apple.png';

function Banner() {
    return (
        <div className="col-xl-12">
            <div className="banner banner-card">
                <div className="banner-card card-body d-flex align-items-center" style={{ height: '440px' }}>
                    <div className="banner-content col-12 text-center">
                        <div className="fs-3 fw-semibold text-white">Find the Next Crypto Gem on CoinMarket</div>
                        <div className="form-group mt-2 p-3 pb-2 d-grid gap-2 col-12 px-5 justify-content-center">
                            <button className="btn btn-primary" type="button" style={{ width: '150px' }}>Register Now</button>
                        </div>
                        <span className="small text-muted col-12 justify-content-center">or continue with</span>
                        <div className="form-group mt-2 d-grid gap-2 col-12 px-5 justify-content-center d-flex">
                            <button className="btn btn-secondary pt-0 pb-0 p-1 d-flex justify-content-center align-items-center" style={{ width: '130px' }} type="button"><img className='cm-btn-img avatar' src={Google} alt='Google Button' /> <span style={{ paddingRight: '10px' }}>Google</span></button>
                            <button className="btn btn-secondary pt-0 pb-0 p-1 d-flex justify-content-center align-items-center" style={{ width: '130px' }} type="button"><img className='cm-btn-img avatar' src={Metamask} alt='Meta Mask Button' /><span style={{ paddingRight: '10px' }}>Meta Mask</span></button>
                            <button className="btn btn-secondary pt-0 pb-0 p-1 d-flex justify-content-center align-items-center" style={{ width: '130px' }} type="button"><img className='cm-btn-img avatar pb-1' src={Apple} alt='Apple Button' /><span style={{ paddingRight: '10px' }}>Apple</span></button>
                        </div>
                    </div>
                    {/* <div className="banner-image">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="480" viewBox="0 0 64 64">
                            <linearGradient id="crp_svg" gradientUnits="userSpaceOnUse" x1="11.5308" y1="12.4868" x2="52.4698" y2="53.4258">
                                <stop offset="0" className="st2"></stop>
                                <stop offset="1" className="st3"></stop>
                            </linearGradient>
                            <path className="st1" d="M52.069,24.893c3.283,5.371,5.676,11.109,6.327,15.939c1.7-3.766,3.014-11.133-1.376-19.159
                                            c1.358-0.886,1.722-1.15,1.824-1.355c0.274-0.554-1.862-3.773-2.479-3.734c-0.226,0.015-0.609,0.248-1.955,1.154
                                            c-5.685-7.169-12.979-8.83-17.109-8.734c4.196,2.483,8.549,6.923,12.218,12.04c-3.22,2.163-8.002,5.344-15.179,10.016
                                            c-0.802,0.522-1.572,1.022-2.34,1.521c-0.768-0.499-1.539-0.999-2.34-1.521c-7.177-4.672-11.959-7.853-15.179-10.016
                                            c3.669-5.117,8.022-9.557,12.218-12.04c-4.131-0.096-11.425,1.565-17.11,8.734c-1.345-0.907-1.729-1.139-1.955-1.154
                                            c-0.617-0.039-2.754,3.181-2.479,3.734c0.103,0.205,0.466,0.469,1.825,1.355c-4.39,8.025-3.077,15.393-1.376,19.159
                                            c0.652-4.83,3.044-10.568,6.327-15.939c3.246,2.124,8.038,5.29,15.137,10.081c0.207,0.14,0.399,0.271,0.604,0.408
                                            C15.214,43.411,8.157,47.727,8.007,48.336c-0.16,0.711,2.051,4.043,2.764,4.166c0.644,0.11,7.943-5.148,21.229-14.186
                                            c13.285,9.037,20.585,14.296,21.229,14.186c0.713-0.123,2.924-3.455,2.764-4.166c-0.148-0.609-7.207-4.925-19.663-12.954
                                            c0.204-0.138,0.396-0.269,0.604-0.408C44.032,30.183,48.824,27.017,52.069,24.893z"></path>
                            <path className="st0" d="M45.01,30c-0.353,0-0.701,0.103-1.01,0.234v-2.661C44,21.178,37.885,16,32,16c-5.878,0-12,5.178-12,11.573
                                            v2.66C19.692,30.102,19.344,30,18.992,30C17.998,30,17,30.818,17,34.081C17,37.348,18.161,40,20.1,40
                                            c0.055,0,0.097-0.024,0.149-0.031c0.642,4.521,2.502,7.143,5.143,9.307C26.98,50.576,29.168,52,32,52
                                            c2.829,0,5.016-1.424,6.61-2.725c2.636-2.164,4.498-4.786,5.141-9.307C43.804,39.975,43.846,40,43.902,40
                                            C45.841,40,47,37.348,47,34.081C47,30.818,46.006,30,45.01,30z M40,36.188c0,6.249-1.94,8.365-3.928,9.996
                                            C34.535,47.438,33.276,48,32,48c-1.281,0-2.538-0.562-4.074-1.819C25.94,44.553,24,42.44,24,36.188v-8.615
                                            C24,23.377,28.376,20,32,20c3.623,0,8,3.378,8,7.573V36.188z"></path>
                        </svg>
                    </div> */}
                </div>
            </div>
        </div >
    )
}

export default Banner;