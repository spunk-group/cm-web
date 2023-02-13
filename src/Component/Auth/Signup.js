import { React, useState } from "react";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import AuthRight from "./AuthRight";


function Signup() {
    const [data, setData] = useState({});
    const [nav, setNav] = useState('email');

    const handleChange = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    };
    const hasData = (arr) => arr.every(element => (element && element.length !== 0))

    const checkFormActive = () => {
        if (nav === 'email') {
            return hasData([data.email, data.password, data.referral])
        }
        else {
            return hasData([data.phone, data.password2, data.referral])
        }
    }

    return (
        <>
            <div className="body d-flex p-0 p-xl-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-1">

                        </div>
                        <div className="col-lg-10 mb-5">
                            <div className="row justify-content-center mb-5">
                                <div className="row col-lg-6 d-flex justify-content-end align-items-center auth-h100 mb-5 mt-5">
                                    <div className="">
                                        <div className="d-flex flex-column card p-3">
                                            <h2>Create Your Account</h2>
                                            <span className="text-muted">Register with your email or mobile</span>
                                            <Tab.Container defaultActiveKey="first">
                                                <Nav className="nav nav-pills mt-4 nav-tabs tab-body-header rounded d-inline-flex mx-5" role="tablist">
                                                    <Nav.Item className="nav-item col-lg-6 text-center"><Nav.Link className="nav-link" eventKey="first" onClick={() => setNav('email')}>Email</Nav.Link></Nav.Item>
                                                    <Nav.Item className="nav-item col-lg-6 text-center"><Nav.Link className="nav-link" eventKey="second" onClick={() => setNav('phone')}>Mobile</Nav.Link></Nav.Item>
                                                </Nav>
                                                <Tab.Content className="tab-content mt-2 mb-3">
                                                    <Tab.Pane className="tab-pane fade" id="Email" eventKey="first">
                                                        <div className="card">
                                                            <div className="card-body p-4">
                                                                <form>
                                                                    <div className="mb-3">
                                                                        <label className="form-label fs-6">Email address</label>
                                                                        <input type="email" className="form-control" name="email" onChange={handleChange} />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label fs-6">Password</label>
                                                                        <input type="password" className="form-control" name="password" onChange={handleChange} />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label fs-6">Referral ID</label>
                                                                        <input type="text" className="form-control" name="referral" value={data.referral ?? ""} onChange={handleChange} />
                                                                    </div>
                                                                    <div className="d-flex align-items-baseline pb-4 pt-3">
                                                                        <input type="checkbox" value="Submit" />
                                                                        <label className="px-2" for="vehicle3"> I have read and agree to CoinMarket's Term of Service and Privacy Policy</label>
                                                                    </div>
                                                                    <div className="d-flex justify-content-center">
                                                                        <button className={checkFormActive() ? "btn btn-primary p-2 d-flex align-items-center justify-content-center w-100" : "btn btn-secondary p-2 d-flex align-items-center justify-content-center w-100 disabled"} style={{ width: '130px' }} type="button"><span>Create Account</span></button>
                                                                        {/* <button className="btn btn-secondary p-2 d-flex align-items-center justify-content-center" style={{ width: '130px' }} type="button"><span>Create Account</span></button> */}
                                                                    </div>
                                                                    {/* <button type="submit" className="btn btn-primary text-uppercase py-2 fs-5 w-100 mt-2">Create Account</button> */}
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane className="tab-pane fade" id="Mobile" eventKey="second">
                                                        <div className="card">
                                                            <div className="card-body p-4">
                                                                <form>
                                                                    <label className="form-label fs-6">Mobile</label>
                                                                    <Dropdown className="input-group mb-3">
                                                                        <Dropdown.Toggle className="btn btn-outline-secondary dropdown-toggle" type="button">+91 India</Dropdown.Toggle>
                                                                        <Dropdown.Menu className="dropdown-menu">
                                                                            <li><Dropdown.Item className="dropdown-item" href="#!">+376 Andora</Dropdown.Item></li>
                                                                            <li><Dropdown.Item className="dropdown-item" href="#!">+61 Australia</Dropdown.Item></li>
                                                                            <li><Dropdown.Item className="dropdown-item" href="#!">+55 Brazil</Dropdown.Item></li>
                                                                        </Dropdown.Menu>
                                                                        <input type="text" className="form-control" name="phone" onChange={handleChange} />
                                                                    </Dropdown>
                                                                    <div className="mb-3">
                                                                        <label className="form-label fs-6">Password</label>
                                                                        <input type="password" className="form-control" name="password2" onChange={handleChange} />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label fs-6">Referral ID</label>
                                                                        <input type="text" className="form-control" name="referral" value={data.referral ?? ""} onChange={handleChange} />
                                                                    </div>
                                                                    <div className="d-flex align-items-baseline pb-4 pt-3">
                                                                        <input type="checkbox" value="Submit" />
                                                                        <label className="px-2" for="vehicle3"> I have read and agree to CoinMarket's Term of Service and Privacy Policy</label>
                                                                    </div>
                                                                    <div className="d-flex justify-content-center">
                                                                        <button className={checkFormActive() ? "btn btn-primary p-2 d-flex align-items-center justify-content-center w-100" : "btn btn-secondary p-2 d-flex align-items-center justify-content-center w-100 disabled"} style={{ width: '130px' }} type="button"><span>Create Account</span></button>
                                                                    </div>
                                                                    {/* <button type="submit" className="btn btn-primary text-uppercase py-2 fs-5 w-100 mt-2">Creatasde sdfasdfAccount</button> */}
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Tab.Container>
                                        </div>
                                    </div>
                                    <Link to={process.env.PUBLIC_URL + "/sign-in"} title="#">Already registered? <span className="p-3 text-secondary text-decoration-underline">Log In</span></Link>
                                </div>
                                <AuthRight />
                            </div>
                        </div>
                        <div className="col-lg-1">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;