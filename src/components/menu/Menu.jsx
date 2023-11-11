import React from 'react';
import './Menu.css';
import {Link} from "react-router-dom";


const Menu = () => {
    return (
        <div id="primary_menu">
            <Link to={"/"} class="li">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                    <path d="M1 13.1C1.96089 13.296 2.84294 13.7702 3.53638 14.4636C4.22982 15.1571 4.70403 16.0391 4.9 17M1 9.05C3.03079 9.27586 4.92428 10.186 6.36911 11.6309C7.81395 13.0757 8.72414 14.9692 8.95 17M1 5V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H19C19.5304 1 20.0391 1.21071 20.4142 1.58579C20.7893 1.96086 21 2.46957 21 3V15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 17H1.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Link>
            <Link to={"/"} class="li">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
                    <path d="M23 1L13.5 10.5L8.5 5.5L1 13" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 1H23V7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Link>
            <Link to={"/"} class="li">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path d="M12.7013 5.30364C12.5181 5.49057 12.4155 5.74189 12.4155 6.00364C12.4155 6.26539 12.5181 6.51671 12.7013 6.70364L14.3013 8.30364C14.4882 8.48687 14.7396 8.5895 15.0013 8.5895C15.2631 8.5895 15.5144 8.48687 15.7013 8.30364L19.4713 4.53364C19.9742 5.64483 20.1264 6.88288 19.9078 8.08279C19.6892 9.2827 19.11 10.3875 18.2476 11.2499C17.3852 12.1124 16.2804 12.6915 15.0805 12.9101C13.8806 13.1287 12.6425 12.9765 11.5313 12.4736L4.62132 19.3836C4.2235 19.7815 3.68393 20.005 3.12132 20.005C2.55871 20.005 2.01914 19.7815 1.62132 19.3836C1.2235 18.9858 1 18.4462 1 17.8836C1 17.321 1.2235 16.7815 1.62132 16.3836L8.53132 9.47364C8.02848 8.36245 7.87624 7.12441 8.09486 5.9245C8.31349 4.72459 8.89261 3.6198 9.75504 2.75736C10.6175 1.89493 11.7223 1.31581 12.9222 1.09718C14.1221 0.878558 15.3601 1.03081 16.4713 1.53364L12.7113 5.29364L12.7013 5.30364Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Link>
            <Link to={"/"} class="li">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                    <path d="M17 10H3C1.89543 10 1 10.8954 1 12V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V12C19 10.8954 18.1046 10 17 10Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 10V6C5 4.67392 5.52678 3.40215 6.46447 2.46447C7.40215 1.52678 8.67392 1 10 1C11.3261 1 12.5979 1.52678 13.5355 2.46447C14.4732 3.40215 15 4.67392 15 6V10" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Link>
            <Link to={"/"} class="li">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                    <path d="M21 6V19H3V6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23 1H1V6H23V1Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 10H14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Link>
            <Link to={"/"} class="li">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path d="M15 19L8 14L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </Link>
        </div>
    );
};

export default Menu;