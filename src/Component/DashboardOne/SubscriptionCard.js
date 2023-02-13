import React from "react";

function SubscriptionCard() {
    return (
        <div className="text-center d-flex align-items-center subscription mt-4" >
            <div div className="card-body section-inner d-flex justify-content-center" >
                <div className="pt-4">
                    <div className='fs-3 fw-semibold p-1'>Start your crypto journey today!</div>
                    <span>CoinMarket makes trading easy with a user-friendly website and app.</span>
                </div>
                <div className="form-group mb-3 p-4 d-grid gap-2 col-12 px-5 justify-content-center">
                    <button className="btn btn-primary" type="button" style={{ width: '150px' }}>Start Now</button>
                </div>
            </div >
        </div >
    )
}
export default SubscriptionCard;
