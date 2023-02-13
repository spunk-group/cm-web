import React from "react";

function TopCard(props) {
    const { header, subHeader, offer, date, color, image } = props;
    return (
        <div className="col">
            <div className="card">
                <div className="card-body d-flex align-items-center">
                    <div className="flex-fill text-truncate">
                        <span className="text-muted small text-uppercase">{header}</span>
                        <span className="h6 mt-3 mb-1 fw-bold d-block color-primary">{subHeader}</span>
                        <div className="d-flex justify-content-between">
                            <div className="price-block">
                                <span className={`fs-6 fw-bold`}>{offer}</span>
                                {/* <span className="small text-muted px-2">{date}</span> */}
                            </div>
                            {/* <div className="price-report">
                                <span className={`small  ${color ? "text-success" : "text-danger"}`}>{percentag}{color ? <i className="fa fa-level-up"></i> : <i className="fa fa-level-down"></i>}</span>
                            </div> */}
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className="text-muted small" style={{ whiteSpace: 'initial' }}>{date}</span>
                        </div>
                    </div>
                    <div className="image">
                        <img src={image} alt="" className="img-fluid avatar mx-4" style={{ height: '70px', width: '70px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopCard;