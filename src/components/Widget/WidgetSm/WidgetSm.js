import {Avatar, Button} from '@material-ui/core';
import { Visibility } from '@material-ui/icons';

import './WidgetSm.css'

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSm__title">New Members</span>
            <ul className="widgetSm__list">

                <li className="widgetSm__listItem">
                    <Avatar className="widgetSm__avatar"/>
                    <div className="widgetSm__user">
                        <span className="widgetSm__userName">Anna Keller</span>
                        <span className="widgetSm__userTitle">Software Engineer</span>
                    </div>
                    <Button><Visibility /> View Profile</Button>
                </li>

                <li className="widgetSm__listItem">
                    <Avatar className="widgetSm__avatar"/>
                    <div className="widgetSm__user">
                        <span className="widgetSm__userName">Anna Keller</span>
                        <span className="widgetSm__userTitle">Software Engineer</span>
                    </div>
                    <Button><Visibility /> View Profile</Button>
                </li>

                <li className="widgetSm__listItem">
                    <Avatar className="widgetSm__avatar"/>
                    <div className="widgetSm__user">
                        <span className="widgetSm__userName">Anna Keller</span>
                        <span className="widgetSm__userTitle">Software Engineer</span>
                    </div>
                    <Button><Visibility /> View Profile</Button>
                </li>

                <li className="widgetSm__listItem">
                    <Avatar className="widgetSm__avatar"/>
                    <div className="widgetSm__user">
                        <span className="widgetSm__userName">Anna Keller</span>
                        <span className="widgetSm__userTitle">Software Engineer</span>
                    </div>
                    <Button><Visibility /> View Profile</Button>
                </li>
            </ul>
        </div>
    )
}
