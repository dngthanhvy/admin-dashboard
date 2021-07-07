import Featured from '../Featured/Featured';
import Chart from '../Chart/Chart';
import WidgetSm from '../Widget/WidgetSm/WidgetSm';
import WidgetLg from '../Widget/WidgetLg/WidgetLg';

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
