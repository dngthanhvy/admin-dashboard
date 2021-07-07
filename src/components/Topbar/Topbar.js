import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Avatar from '@material-ui/core/Avatar';

import './Topbar.css';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar__wrapper">
                <div className="topbar__left">
                    <span className="topbar__logo">
                        AdminDashboard
                    </span>
                </div>

                <div className="topbar__right">
                    <div className="topbar__iconsContainer">
                        <div className="topbar__iconsNotifications">
                            <NotificationsNoneIcon />
                        </div>

                        <div className="topbar__iconsSettings">
                            <SettingsOutlinedIcon />
                        </div>

                        <div className="topbar__iconsAvatar">
                            <Avatar />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
