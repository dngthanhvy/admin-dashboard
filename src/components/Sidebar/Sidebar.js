import {LineStyle, Timeline, TrendingUp, PersonOutlined, StorefrontOutlined, AttachMoneyOutlined, EqualizerOutlined, MailOutlined, DynamicFeedOutlined } from '@material-ui/icons'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';

import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">

                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Dashboard</h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__listItem">
                            <LineStyle className="sidebar__Icon"/>
                            Home
                        </li>
                        <li className="sidebar__listItem">
                            <Timeline className="sidebar__Icon"/>
                            Analytics
                        </li>
                        <li className="sidebar__listItem">
                            <TrendingUp className="sidebar__Icon"/>
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Quick Menu</h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__listItem">
                            <PersonOutlined className="sidebar__Icon"/>
                            Users
                        </li>
                        <li className="sidebar__listItem">
                            <StorefrontOutlined className="sidebar__Icon"/>
                            Products
                        </li>
                        <li className="sidebar__listItem">
                            <AttachMoneyOutlined className="sidebar__Icon"/>
                            Transactions
                        </li>
                        <li className="sidebar__listItem">
                            <EqualizerOutlined className="sidebar__Icon"/>
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Notifications</h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__listItem">
                            <MailOutlined className="sidebar__Icon"/>
                            Mail
                        </li>
                        <li className="sidebar__listItem">
                            <DynamicFeedOutlined className="sidebar__Icon"/>
                            Feedback
                        </li>
                        <li className="sidebar__listItem">
                            <ChatBubbleOutlineOutlinedIcon className="sidebar__Icon"/>
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebar__menu">
                    <h3 className="sidebar__title">Staff</h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__listItem">
                            <WorkOutlineOutlinedIcon className="sidebar__Icon"/>
                            Manage
                        </li>
                        <li className="sidebar__listItem">
                            <Timeline className="sidebar__Icon"/>
                            Analytics
                        </li>
                        <li className="sidebar__listItem">
                            <ReportOutlinedIcon className="sidebar__Icon"/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
