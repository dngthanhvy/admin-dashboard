import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './Chart.css'


export default function Chart({title, data, dataKey, grid}) {
    return (
        <div className="chart">
            <h3 className="chart__title">{title}</h3>
                <ResponsiveContainer width="100%" aspect={4/1}>
                    <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5, }} >
                        {grid && <CartesianGrid strokeDasharray="5 5" stroke="#e0dfdf"/>}
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
