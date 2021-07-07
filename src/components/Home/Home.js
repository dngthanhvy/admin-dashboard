import Featured from '../Featured/Featured';
import Chart from '../Chart/Chart';
import {userData} from '../../data';

import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <Featured />
            <Chart title="User Analytics" data={userData} dataKey="Active Users" grid/>
        </div>
    )
}
