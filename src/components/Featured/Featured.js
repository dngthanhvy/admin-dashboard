import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

import './Featured.css'

export default function Featured() {
    return (
        <div className="featured">
            <div className="featured__item">

                <span className="featured__title">Revenue</span>
                <div className="featured__moneyContainer">
                    <span className="featured__money">$2,415</span>
                    <span className="featured__moneyRate">
                        -11.415 <ArrowDownward className="featured__icon negative"/>
                    </span>
                </div>
                <span className="featured__sub">Compared to last month</span>
            </div>

            <div className="featured__item">
                <span className="featured__title">Sales</span>
                <div className="featured__moneyContainer">
                    <span className="featured__money">$4,415</span>
                    <span className="featured__moneyRate">
                        -1.4 <ArrowDownward className="featured__icon negative"/>
                    </span>
                </div>
                <span className="featured__sub">Compared to last month</span>
            </div>

            <div className="featured__item">
                <span className="featured__title">Cost</span>
                <div className="featured__moneyContainer">
                    <span className="featured__money">$2,225</span>
                    <span className="featured__moneyRate">
                        +2.4 <ArrowUpward className="featured__icon"/>
                    </span>
                </div>
                <span className="featured__sub">Compared to last month</span>

            </div>
                
        </div>
    )
}
