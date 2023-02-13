import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { FunData, OpenOrderData, OrderHistoryData, TradeHistoryData, OrderData } from '../Data/ExchangeData/OrderbookData';


function TradeStatus() {
    return (<div className="card">
        <div className="card-body">
            <Tab.Container defaultActiveKey='first'>
                <Nav className="nav nav-tabs tab-body-header rounded d-inline-flex mb-3" role="tablist">
                    <Nav.Item className="nav-item"><Nav.Link className="nav-link " eventKey='first' data-bs-toggle="tab" href="#HotList" role="tab" aria-selected="true">Hot List</Nav.Link></Nav.Item>
                    <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='second' data-bs-toggle="tab" href="#NewCoins" role="tab" aria-selected="false">New Coins</Nav.Link></Nav.Item>
                    <Nav.Item className="nav-item"><Nav.Link className="nav-link" eventKey='third' data-bs-toggle="tab" href="#TopGainers" role="tab" aria-selected="false">Top Gainers</Nav.Link></Nav.Item>
                </Nav>
                <Tab.Content className="tab-content" >
                    <Tab.Pane className="tab-pane fade " id="OpenOrder" eventKey='first'>
                        <DataTable
                            className='table-column'
                            title={OrderData.title}
                            columns={OrderData.columns}
                            data={OrderData.rows}
                            defaultSortField="title"
                            selectableRows={false}
                        // highlightOnHover={true}
                        />
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" id="OrderHistory" eventKey='second'>
                        <DataTable
                            className='table-column'
                            title={OrderData.title}
                            columns={OrderData.columns}
                            data={OrderData.rows}
                            defaultSortField="title"
                            selectableRows={false}
                        // highlightOnHover={true}
                        />
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" id="TradeHistory" eventKey='third'>
                        <DataTable
                            title={OrderData.title}
                            columns={OrderData.columns}
                            data={OrderData.rows}
                            defaultSortField="title"
                            selectableRows={false}
                        // highlightOnHover={true}
                        />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    </div>
    )
}

export default TradeStatus;