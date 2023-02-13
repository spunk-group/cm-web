import React from 'react'
import News from '../../assets/icons/news_gif.gif'


function Referal() {
    return (
        <div className="col pt-5 pb-5 ">
            <div className="referal">
                <div className="card-body d-flex align-items-center">
                    <div className="flex-fill text-truncate">
                        <div className="d-flex justify-content-between">
                            <div className="title">
                                <img style={{ width: '50px', height: 'auto' }} src={News} alt="" />
                                <span className='px-4'>New Referal Program: Refer and Earn CMC instantly and also earn from entire team</span>
                            </div>
                            <div className="see-more d-flex">
                                <button className="btn p-0 pt-0 pb-0 d-flex align-items-center" type="button">See More<i className="bi bi-chevron-right d-flex align-items-center px-1"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Referal
