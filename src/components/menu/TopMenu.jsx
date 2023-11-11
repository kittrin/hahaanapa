import React from 'react';
import "./Menu.css";
import {Link} from "react-router-dom";

const TopMenu = () => {
    return (
        <div>
            <div className="link_profile">
                <Link to="/" class="ava_profile"></Link>
            </div>
        </div>
    );
};

export default TopMenu;