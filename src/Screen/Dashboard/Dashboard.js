import React from 'react';
import BalanceDetail from '../../Component/DashboardOne/BalanceDetail';
import ChartSmallCard from '../../Component/DashboardOne/ChartSmallCard';
import CoinValue from '../../Component/DashboardOne/CoinValue';
import LoginActivity from '../../Component/DashboardOne/LoginActivity';
import RecentTransaction from '../../Component/DashboardOne/RecentTransaction';
import UserDetailcard from '../../Component/DashboardOne/UserDetailcard';
import TopCard from '../../Component/DashboardOne/TopCard';
import TradeStatus from '../../Component/DashboardOne/TradeStatus';
import { CardData } from '../../Component/Data/MarketData/MarketData';
import SubscriptionCard from '../../Component/DashboardOne/SubscriptionCard';
import Banner from '../../Component/DashboardOne/Banner';
import DownloadApp from '../../Component/DashboardOne/DownloadApp';
import Referal from '../../Component/DashboardOne/Referal';
import ReasonCoinMarket from '../../Component/DashboardOne/ReasonCoinMarket';



function Dashboard() {
    return (
        <>
            <Banner />
            <div className='container-xxl'>
                <Referal />
                <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 mb-5">
                    {
                        CardData.map((d, i) => {
                            console.log(d)
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
                <TradeStatus />
                <ReasonCoinMarket />
                <DownloadApp />
                {/* <UserDetailcard />
            <ChartSmallCard />
            <BalanceDetail />
            <div className='row g-3 mb-3 row-deck'>
                <CoinValue />
                <LoginActivity />
            </div>
            <RecentTransaction /> */}
            </div>
            <SubscriptionCard />
        </>

    )
}
export default Dashboard;