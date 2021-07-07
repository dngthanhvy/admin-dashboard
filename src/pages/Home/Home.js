import Featured from '../../components/Featured/Featured';
import Chart from '../../components/Chart/Chart';
import WidgetSm from '../../components/Widget/WidgetSm/WidgetSm';
import WidgetLg from '../../components/Widget/WidgetLg/WidgetLg';

import {userData} from '../../data';

import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <Featured />
            <Chart title="User Analytics" data={userData} dataKey="Active Users" grid/>

            <div className="home__widgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
