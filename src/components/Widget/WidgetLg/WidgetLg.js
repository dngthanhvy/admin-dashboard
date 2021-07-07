import { Avatar } from '@material-ui/core';

import './WidgetLg.css'

export default function WidgetLg() {

    const CustomButton = ({type}) => {
        return <button className={"widgetLg__btn " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLg__title"> Latest Transactions </h3>

            <table className="widgetLg__table">
                <tr className="widgetLg__tr">
                    <th className="widgetLg__th">Customer</th>
                    <th className="widgetLg__th">Date</th>
                    <th className="widgetLg__th">Amount</th>
                    <th className="widgetLg__th">Status</th>
                </tr>

                <tr className="widgetLg__tr">
                    <td className="widgetLg__user">
                        <Avatar className="widgetLg__userAvatar"/>
                        <span className="widgetLg__userName">Susan Carol</span>
                    </td>

                    <td className="widgetLg__date">7 July 2021</td>
                    <td className="widgetLg__amount">$122.00</td>
                    <td className="widgetLg__status"><CustomButton type="Approved"/></td>
                </tr>

                <tr className="widgetLg__tr">
                    <td className="widgetLg__user">
                        <Avatar className="widgetLg__userAvatar"/>
                        <span className="widgetLg__userName">Susan Carol</span>
                    </td>

                    <td className="widgetLg__date">7 July 2021</td>
                    <td className="widgetLg__amount">$122.00</td>
                    <td className="widgetLg__status"><CustomButton type="Declined"/></td>
                </tr>

                <tr className="widgetLg__tr">
                    <td className="widgetLg__user">
                        <Avatar className="widgetLg__userAvatar"/>
                        <span className="widgetLg__userName">Susan Carol</span>
                    </td>

                    <td className="widgetLg__date">7 July 2021</td>
                    <td className="widgetLg__amount">$122.00</td>
                    <td className="widgetLg__status"><CustomButton type="Pending"/></td>
                </tr>

                <tr className="widgetLg__tr">
                    <td className="widgetLg__user">
                        <Avatar className="widgetLg__userAvatar"/>
                        <span className="widgetLg__userName">Susan Carol</span>
                    </td>

                    <td className="widgetLg__date">7 July 2021</td>
                    <td className="widgetLg__amount">$122.00</td>
                    <td className="widgetLg__status"><CustomButton type="Approved"/></td>
                </tr>
            </table>
        </div>
    )
}
