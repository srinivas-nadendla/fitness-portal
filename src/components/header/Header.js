import React from 'react';
import './Header.scss'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: 20
        };
        //sthis.onBtnClick.bind(this);
    }
    render() {
        return (
            <div className="header box-shadow-card">
                <div className="header-left-container">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <span className="header-title">YODHA FITNESS</span>
                </div>
                <div className="header-right-container">
                    <i className="header-hamburger fa fa-bars" aria-hidden="true"></i>
                    <div className="header-user-wrapper">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
