import { React, useState } from "react";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthRight from "./AuthRight";



function Signin() {
    const [data, setData] = useState({});
    const [nav, setNav] = useState('email');

    const handleChange = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    };

    const checkFormActive = () => {
        if (nav === 'email') {
            return (data.email && data.password) && (data.email.length !== 0) && (data.password.length !== 0)
        }
        else {
            return (data.phone && data.password2) && (data.phone.length !== 0) && (data.password2.length !== 0)
        }
    }

    const handleNavigation = (type) => {
        setNav(type)
    }

    return (<>
        <div className="body d-flex p-0 p-xl-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-1">

                    </div>
                    <div className="col-lg-10">
                        <div className="row justify-content-center">
                            <div className="row col-lg-6 d-flex justify-content-end align-items-center auth-h100">
                                <div className="row col-lg-10">
                                    <div className="d-flex flex-column card p-4">
                                        <h2>Account Login</h2>
                                        <span className="text-muted">Welcome back! Log In with your Email, Phone number or QR code</span>
                                        <Tab.Container defaultActiveKey="first">
                                            <Nav className="nav nav-pills mt-4 nav-tabs tab-body-header rounded d-inline-flex mx-5" role="tablist" defaultActiveKey="first">
                                                <Nav.Item className="nav-item col-lg-6 text-center"><Nav.Link className="nav-link" eventKey="first" onClick={() => handleNavigation('email')}>Email</Nav.Link></Nav.Item>
                                                <Nav.Item className="nav-item col-lg-6 text-center"><Nav.Link className="nav-link" eventKey="second" onClick={() => handleNavigation('mobile')}>Mobile</Nav.Link></Nav.Item>
                                            </Nav>
                                            <Tab.Content className="tab-content mb-3" >
                                                <Tab.Pane className="tab-pane fade " id="Email" eventKey="first">
                                                    <div className="card">
                                                        <div className="card-body p-4">
                                                            <form>
                                                                <div className="mb-3">
                                                                    <label className="form-label fs-6" >Email address</label>
                                                                    <input type="email" className="form-control" name="email" onChange={handleChange} />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="form-label fs-6" >Password</label>
                                                                    <input type="password" className="form-control" name="password" onChange={handleChange} />
                                                                </div>
                                                                <div className="d-flex justify-content-center">
                                                                    <button className={checkFormActive() ? "btn btn-primary p-2 d-flex align-items-center justify-content-center w-100" : "btn btn-secondary p-2 d-flex align-items-center justify-content-center w-100 disabled"} style={{ width: '130px' }} type="button"><span>Log In</span></button>
                                                                    {/* <button className="btn btn-secondary p-2 d-flex align-items-center justify-content-center" style={{ width: '130px' }} type="button"><span>Log In</span></button> */}
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane className="tab-pane fade" id="Mobile" eventKey="second">
                                                    <div className="card">
                                                        <div className="card-body p-4">
                                                            <form>
                                                                <label className="form-label fs-6">Mobile</label>
                                                                <Dropdown as='a' className="input-group mb-3">
                                                                    <Dropdown.Toggle className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">+91 India</Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu">
                                                                        <li><Dropdown.Item className="dropdown-item" href="#!">+376 Andora</Dropdown.Item></li>
                                                                        <li><Dropdown.Item className="dropdown-item" href="#!">+61 Australia</Dropdown.Item></li>
                                                                        <li><Dropdown.Item className="dropdown-item" href="#!">+55 Brazil</Dropdown.Item></li>
                                                                    </Dropdown.Menu>
                                                                    <input type="text" name="phone" onChange={handleChange} className="form-control" />
                                                                </Dropdown>
                                                                <div className="mb-3">
                                                                    <label className="form-label fs-6">Password</label>
                                                                    <input type="password" name="password2" onChange={handleChange} className="form-control" />
                                                                </div>
                                                                <div className="d-flex justify-content-center">
                                                                    <button className={checkFormActive() ? "btn btn-primary p-2 d-flex align-items-center justify-content-center w-100" : "btn btn-secondary p-2 d-flex align-items-center justify-content-center w-100 disabled"} style={{ width: '130px' }} type="button"><span>Log In</span></button>
                                                                    {/* <button className="btn btn-secondary p-2 d-flex align-items-center justify-content-center" style={{ width: '130px' }} type="button"><span>Log In</span></button> */}
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <Link to={process.env.PUBLIC_URL + "/forgot-password"} title="#" className="text-primary text-decoration-underline">Forgot password?</Link>
                                        <Link to={process.env.PUBLIC_URL + "/sign-up"} title="#" className="text-primary text-decoration-underline">Register now</Link>
                                    </div>
                                </div>
                            </div>
                            <AuthRight />
                        </div>
                    </div>
                    <div className="col-lg-1">

                    </div>
                </div>
            </div>
        </div >
    </>
    )
}
export default Signin;