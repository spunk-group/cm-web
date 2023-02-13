import React from "react";
import { ProgressBar } from "react-bootstrap";

function CoinDetail() {
    return (
        <div className="card">
            <div className="card-header py-3 d-flex flex-wrap justify-content-between align-items-center bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold">Coin Details</h6>
            </div>
            <div className="card-body">
                <span className="h3 d-block mb-2">$97,431.14 USD</span>
                <ProgressBar className="progress rounded-pill mb-1" style={{ height: '5px' }}>
                    <ProgressBar className="progress-bar chart-color1"  style={{ width: '32%' }} ></ProgressBar>
                    <ProgressBar className="progress-bar chart-color2"  style={{ width: '23%' }} ></ProgressBar>
                    <ProgressBar className="progress-bar chart-color3"  style={{ width: '13%' }} ></ProgressBar>
                    <ProgressBar className="progress-bar chart-color4"  style={{ width: '7%' }} ></ProgressBar>
                </ProgressBar>
                <div className="d-flex justify-content-between mb-4">
                    <span>0%</span>
                    <span>100%</span>
                </div>

                <div className="table-responsive">
                    <table className="table table-nowrap mb-0">
                        <tbody>
                            <tr>
                                <td><i className="fa fa-square chart-text-color1"></i> BTC</td>
                                <td>5.71095643</td>
                                <td><span className="badge bg-success">+12.1%</span></td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-square chart-text-color2"></i> LTC</td>
                                <td>2.409425</td>
                                <td><span className="badge bg-warning">+6.9%</span></td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-square chart-text-color3"></i> XRP</td>
                                <td>0.0906654</td>
                                <td><span className="badge bg-danger">-1.5%</span></td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-square chart-text-color4"></i> DASH</td>
                                <td>0.007653</td>
                                <td><span className="badge bg-success">1.9%</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default CoinDetail;