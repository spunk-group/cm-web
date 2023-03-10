// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Sidebar(props) {
//     const [isSidebarMini, setIsSidebarMini] = useState(false);
//     const navigate = useNavigate();
//     const baseUrl = process.env.PUBLIC_URL;

//     const openChildren = (id) => {
//         var otherTabs = document.getElementsByClassName("has-children")
//         if (otherTabs) {
//             for (var i = 0; i < otherTabs.length; i++) {
//                 if (otherTabs[i].id !== id) {
//                     otherTabs[i].className = otherTabs[i].className.replace(" show", "");
//                     if (otherTabs[i].parentElement.children.length > 1) {
//                         otherTabs[i].parentElement.children[0].setAttribute("aria-expanded", "false")
//                     }
//                 }
//             }
//         }
//         var menutab = document.getElementById(id)
//         if (menutab) {
//             if (menutab.classList.contains("show")) {
//                 menutab.classList.remove("show")
//                 if (menutab.parentElement.children.length > 1) {
//                     menutab.parentElement.children[0].setAttribute("aria-expanded", "false")
//                 }
//             } else {
//                 menutab.classList.add("show")
//                 if (menutab.parentElement.children.length > 1) {
//                     menutab.parentElement.children[0].setAttribute("aria-expanded", "true")
//                 }
//             }
//         }
//     }
//     const openChildren1 = (id) => {
//         var otherTabs = document.getElementsByClassName("has-children")
//         if (otherTabs) {
//             for (var i = 0; i < otherTabs.length; i++) {
//                 otherTabs[i].className = otherTabs[i].className.replace(" show", "");
//             }
//         }
//         var menutab = document.getElementById(id)
//         if (menutab) {
//             menutab.classList.add("show")
//             if (menutab.parentElement.children.length > 1) {
//                 menutab.parentElement.children[0].setAttribute("aria-expanded", "true")
//             }
//         }
//     }

//     const { activekey, menuData, GotoChangeMenu } = props;


//     return (<div id="mainsidemenu" className={`sidebar py-2 py-md-2 me-0 border-end ${isSidebarMini ? "sidebar-mini" : ""}`}>
//         <div className="d-flex flex-column h-100">
//             <a href={process.env.PUBLIC_URL + "/"} className="mb-0 brand-icon" >
//             </a>
//             <ul className="menu-list flex-grow-1 mt-4 px-1">
//                 {menuData.map((d, i) => {
//                     return <li key={"dsfshsdg" + i} className=" collapsed">
//                         <Link to={baseUrl + "/" + d.routerLink[0]} className={`m-link ${("/" + d.routerLink[0] === activekey) ? "active" : ""}`} >
//                             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox={d.viewBox}>
//                                 <path xmlns="http://www.w3.org/2000/svg" d={d.iconClasss} style={{ fill: 'var(--primary-color)' }} data-st="fill:var(--chart-color4);"></path>
//                                 <path xmlns="http://www.w3.org/2000/svg" className="st0" d={d.iconClass}></path>
//                             </svg>
//                             <div>
//                                 <h6 className='mb-0'>{d.name}</h6>
//                                 <small className="text-muted">{d.subject}</small>
//                             </div>
//                         </Link>
//                     </li>
//                 })
//                 }
//             </ul>
//             <button type="button" className="btn btn-link sidebar-mini-btn text-muted" onClick={() => { setIsSidebarMini(!isSidebarMini) }}>
//                 <span className="ms-2"><i className="icofont-bubble-right"></i></span>
//             </button>
//         </div>
//     </div>
//     )
// }

// export default Sidebar;