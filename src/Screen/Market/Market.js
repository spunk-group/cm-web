import React from 'react';
import PageTitle from '../../Component/Comman/PageTitle';
import { marketCardData } from '../../Component/Data/MarketData/MarketData';
import { CardData } from '../../Component/Data/MarketData/MarketData';
import MarketTabing from '../../Component/Market/MarketTabing';
import TopSmallCard from '../../Component/Market/TopSmallCard';
import TopCard from '../../Component/DashboardOne/TopCard';


function Market() {
    return (
        <>
            <div className="body-header border-bottom d-flex py-3 mb-3">
                <PageTitle pagetitle='Market' downloadbutton='Download' reportbutton='Generate Report' />
            </div>
            <div className="container-xxl">
                <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 mb-3">
                    {
                        marketCardData.map((d, i) => {
                            return (
                                <>
                                    <TopSmallCard
                                        header={d.header}
                                        coin={d.coin}
                                        color={d.color}
                                        rate={d.rate}
                                        doller={d.doller}
                                        percentag={d.percentag}
                                        key={'s' + i}
                                    />
                                </>
                            )
                        })

                    }

                </div>
                <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 mb-3">
                    {
                        CardData.map((d, i) => {
                            return (
                                <>
                                    <TopCard
                                        header={d.header}
                                        subHeader={d.subHeader}
                                        offer={d.offer}
                                        date={d.date}
                                        image={d.image}

                                    />
                                </>
                            )
                        })

                    }

                </div>
                <MarketTabing />
            </div>

        </>
    )
}

export default Market;