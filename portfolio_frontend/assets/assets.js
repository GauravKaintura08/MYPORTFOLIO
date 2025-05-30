import user_image from './user-img.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile_img.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import frontend from './frontend.jpg';
import backend from './backend.jpg';
import fullstack from './Full-Stack.webp';
import ecommerce from './e-commerce.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import darkmode from './public/darkmode.webp'
import lightmode from './public/lightmode.webp'
import linkedIn from '../assets/linkedin-logo.webp'
import github from '../assets/github-logo.png'

export const assets = {
    linkedIn,
    github,
    darkmode,
    lightmode,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    frontend,
    backend,
    fullstack,
    ecommerce,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    
};

export const workData = [
    {
        title: 'GK Shop',
        description: 'E-Commerce Web Application ',
        bgImage: '/e-commerce.jpg',
        url:"https://gkshop.netlify.app/"
    },
    {
        title: 'LMS Portal',
        description: 'Online Course Web App',
        bgImage: 'LMS.jpg',
        url:"https://lms-portal-41lt.vercel.app/"
    },
    {
        title: 'NGO site',
        description: 'Multifunctional NGO site ',
        bgImage: 'NGO.png',
        url:"https://bhayatfoundationngo.onrender.com"
    },

    
]

export const serviceData = [
    { icon: assets.fullstack, title: 'Full-Stack Development', description: 'End-to-end web applications (MERN) .\n Integration of frontend and backend with APIs. \nReal-time features using WebSockets and Socket.io', link: '' },
    { icon: assets.frontend, title: 'Frontend Development', description: `Responsive website design using HTML, CSS, JavaScript.\n Modern UI/UX with React.js. \nCross-browser compatibility and mobile-first design`, link: '' },
    { icon: assets.backend, title: 'Backend Development', description: 'RESTful API development with Node.js, Express.js . \nSecure authentication and authorization (JWT , Firebase Auth).\n Database design and management (MongoDB, MySQL)', link: '' },
    { icon: assets.ecommerce, title: 'E-Commerce Development', description: 'Custom e-commerce websites with payment gateways . \n Inventory and order management systems', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript ,React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Master Of Computer Application' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 10 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];