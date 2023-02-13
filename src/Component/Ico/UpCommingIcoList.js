import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { UpcommingListData } from "../Data/IcoData/UpcommingListData";
import AE from '../../assets/images/coin/AE.png'
import { Link } from "react-router-dom";

function UpCommingIcoList(props) {
    const [table_row, settable_row] = useState([...UpcommingListData.rows]);
    const [iseditmodal, setiseditmodal] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setiseditmodal(true);
    }
    const columns = () => {
        return [
            {
                name: "PROJECT",
                selector: (row) => row.name,
                cell: row => <><img src={row.image} alt="" className="img-fluid avatar mx-1" /> {row.coinfirstname}<span className="text-muted">{row.coinsecondname}</span></>,
                sortable: true
            },
            {
                name: "STAGE",
                selector: (row) => row.total,
                cell: (row) => <a href="#!" className=''>{row.stagefirstname}<span className="text-muted">{row.stagesecondname}</span></a>,
                sortable: true
            },
            {
                name: "START DATE",
                selector: (row) => row.startdate,
                sortable: true
            },
            {
                name: "END DATE",
                selector: (row) => row.enddate,
                sortable: true
            },
            {
                name: "GOAL",
                selector: (row) => row.goal,
                sortable: true
            },
            {
                name: "ACTION",
                selector: (row) => { },
                sortable: true,
                cell: (row) => <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="submit" className="btn btn-light-success" onClick={() => handleShow(row)} data-bs-toggle="modal" data-bs-target="#icoModal">Click to Apply</button>
                </div>
            }
        ]
    }
    return (
        <div className="col-xl-12">
            <div className="card no-bg">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0 align-items-center">
                    <h6 className="mb-0 fw-bold ">Upcoming ICO List</h6>
                </div>
                <div className="card-body">
                    <div id="myProjectTable_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 mb-2 " style={{ display: 'flex',alignItems: 'center' }}>
                                <div id="myDataTable_filter" className="dataTables_filter">
                                    <label className='d-flex align-items-center'>Search:<div className='mx-1'><input type="search" className="form-control" /></div></label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <DataTable
                                    columns={columns()}
                                    data={table_row}
                                    defaultSortField="title"
                                    pagination
                                    selectableRows={false}
                                    highlightOnHover={true}
                                />
                            </div>
                        </div>
                        <div className="row mt-3 ">
                            <div className="col-sm-12 col-md-5" style={{ float: 'left' }}>
                                <div className="dataTables_info" id="myDataTable_info" role="status" aria-live="polite">Showing 1 to 7 of 7 entries</div>
                            </div>
                            <div className="col-sm-12 col-md-7 " >
                                <div className="dataTables_paginate paging_simple_numbers" id="myDataTable_paginate" style={{ float: 'right' }}>
                                    <ul className="pagination">
                                        <li className="paginate_button page-item previous disabled" id="myDataTable_previous"><a href="#!" className="page-link">Previous</a></li>
                                        <li className="paginate_button page-item active"><a href="#!" className="page-link">1</a></li>
                                        <li className="paginate_button page-item next disabled" id="myDataTable_next"><a href="#!" className="page-link">Next</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal className="modal fade" id="icoModal" show={iseditmodal} onHide={() => { setiseditmodal(false) }} fullscreen={fullscreen}>
                <Modal.Dialog className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <Modal.Header className="modal-header" closeButton>
                            <h5 className="modal-title">Ico Participate</h5>
                        </Modal.Header>
                        <Modal.Body className="modal-body custom_setting">
                            <div>
                                <img src={AE} alt="" className="img-fluid avatar mx-1" /><span className="text-uppercase fw-bold"> AE </span> <span className="text-muted"> Cardano</span>
                                <span className="text-muted d-block small px-2 my-2">Oct 12, 2021 - Oct 12, 2021 , starts in 40 minutes</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-xl-8">
                                    <div className="row g-3">
                                        <div className="col-lg-6">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td><span className="text-muted">Tokens for Sale</span></td>
                                                            <td><strong>2,857,142 AE</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="text-muted">ICO Price</span></td>
                                                            <td><strong>$0.035000</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="text-muted">Soft Cap</span></td>
                                                            <td><strong>IDO</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="text-muted">Fundraising Goal</span></td>
                                                            <td><strong>$100,000</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="text-muted">Personal Cap</span></td>
                                                            <td><strong>100 USDT</strong></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td><span className="text-muted">Tokens Sold</span></td>
                                                            <td><strong>N/A</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="text-muted">Where to buy</span></td>
                                                            <td><strong>Cryptoon</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="text-muted">% of Total Supply</span></td>
                                                            <td><strong>0.952%</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="text-muted">Accept</span></td>
                                                            <td><strong>USDT</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td><span className="text-muted">Access</span></td>
                                                            <td><strong>Public</strong></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Note: Tokens aren't claimed will be moved to Whitelist round and therefore Whitelist Round's slots will be automatically increased</p>
                                    <p>Allocation is based on the % of your $LZ and $BSCX locked in #LZPad</p>
                                    <p>Participating token: $USDT</p>
                                    <p>Total: 200 slots</p>
                                    <p>100$/spot, FCFS Round</p>
                                </div>
                                <div className="col-lg-12 col-xl-4">
                                    <div className="card  mb-3">
                                        <div className="card-body">
                                            <div className="checkout-sidebar">
                                                <div className="checkout-sidebar-price-table mt-30">
                                                    <h5 className="title fw-bold">Pricing</h5>
                                                    <div className="sub-total-price">
                                                        <div className="total-price">
                                                            <p className="value">Sale Price:</p>
                                                            <p className="price">12 AE = $0.420000</p>
                                                        </div>
                                                        <div className="total-price shipping">
                                                            <p className="value">Total allocation:</p>
                                                            <p className="price">2,857,142 AE</p>
                                                        </div>
                                                        <div className="total-price discount">
                                                            <p className="value">Max cap / person:</p>
                                                            <p className="price">500,000 AE</p>
                                                        </div>
                                                    </div>
                                                    <div className="total-payable">
                                                        <div className="payable-price">
                                                            <p className="value fw-bold">Total Payable:</p>
                                                            <p className="price fw-bold">$0.420000</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0 align-items-center">
                                            <div className="form-check d-flex align-items-center">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked="" onChange={()=>{}}/>
                                                <label className="form-check-label fw-bold d-flex align-items-center" htmlFor="flexRadioDefault1">
                                                    <i className="icofont-mastercard-alt fs-3 mx-2"></i> Debit/Credit Card
                                                </label>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="row g-3 align-items-center">
                                                    <div className="col-md-12">
                                                        <label className="form-label">Enter Card Number</label>
                                                        <input type="text" className="form-control" required="" onChange={()=>{}}/>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Valid Date</label>
                                                        <input type="date" className="form-control w-100" required="" onChange={()=>{}} />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">CVV</label>
                                                        <input type="text" className="form-control" required="" onChange={()=>{}}/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0 align-items-center">
                                            <div className="form-check d-flex align-items-center">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked="" onChange={()=>{}}/>
                                                <label className="form-check-label fw-bold d-flex align-items-center" htmlFor="flexRadioDefault2">
                                                    <i className="icofont-world fs-3 mx-2"></i> Net Banking
                                                </label>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="row g-3 align-items-center">
                                                    <div className="col-md-12">
                                                        <label className="form-label">Enter Your Name</label>
                                                        <input type="text" className="form-control" required="" onChange={()=>{}}/>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <label className="form-label">Account Number</label>
                                                        <input type="text" className="form-control" required="" onChange={()=>{}}/>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Bank Name</label>
                                                        <input type="text" className="form-control" required="" onChange={()=>{}}/>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="admittime1" className="form-label">IFC Code</label>
                                                        <input type="text" className="form-control" id="admittime1" required="" onChange={()=>{}}/>
                                                    </div>
                                                </div>
                                                <Link to={process.env.PUBLIC_URL + "/invoice"} className="btn btn-primary mt-4 text-uppercase">Pay Now</Link> 
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </div>
                </Modal.Dialog>
            </Modal>
        </div>
    )
}
export default UpCommingIcoList;