// // import React, { useState, useRef, useEffect } from 'react';
// // import PropTypes from 'prop-types';
// // import classNames from 'classnames';
// // import { Link } from 'react-router-dom';
// // import Logo from './partials/Logo';

// // const propTypes = {
// //   navPosition: PropTypes.string,
// //   hideNav: PropTypes.bool,
// //   hideSignin: PropTypes.bool,
// //   bottomOuterDivider: PropTypes.bool,
// //   bottomDivider: PropTypes.bool
// // }

// // const defaultProps = {
// //   navPosition: '',
// //   hideNav: false,
// //   hideSignin: false,
// //   bottomOuterDivider: false,
// //   bottomDivider: false
// // }

// // const Header = ({
// //   className,
// //   navPosition,
// //   hideNav,
// //   hideSignin,
// //   bottomOuterDivider,
// //   bottomDivider,
// //   ...props
// // }) => {

// //   const [isActive, setIsactive] = useState(false);

// //   const nav = useRef(null);
// //   const hamburger = useRef(null);

// //   useEffect(() => {
// //     isActive && openMenu();
// //     document.addEventListener('keydown', keyPress);
// //     document.addEventListener('click', clickOutside);
// //     return () => {
// //       document.removeEventListener('keydown', keyPress);
// //       document.removeEventListener('click', clickOutside);
// //       closeMenu();
// //     };
// //   });  

// //   const openMenu = () => {
// //     document.body.classList.add('off-nav-is-active');
// //     nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
// //     setIsactive(true);
// //   }

// //   const closeMenu = () => {
// //     document.body.classList.remove('off-nav-is-active');
// //     nav.current && (nav.current.style.maxHeight = null);
// //     setIsactive(false);
// //   }

// //   const keyPress = (e) => {
// //     isActive && e.keyCode === 27 && closeMenu();
// //   }

// //   const clickOutside = (e) => {
// //     if (!nav.current) return
// //     if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
// //     closeMenu();
// //   }  

// //   const classes = classNames(
// //     'site-header',
// //     bottomOuterDivider && 'has-bottom-divider',
// //     className
// //   );

// //   return (
// //     <header
// //       {...props}
// //       className={classes}
// //     >
// //       <div className="container">
// //         <div className={
// //           classNames(
// //             'site-header-inner',
// //             bottomDivider && 'has-bottom-divider'
// //           )}>
// //           <div className="header-nav">
// //             <div className="row header ml-3">
// //                 <div className="col-lg-6 col-md-6 col-sm-6">
// //                   <div className="header_first">
// //                     <div className="col-lg-4 col-md-12 col-sm-12 logo-div mb-3 mt-2">
// //                       <a className="header_logo" href="/"><img src={require('./../../assets/images/logo.png')} alt="" /></a>
// //                     </div>
// //                     <div className="col-lg-8 col-md-12 col-sm-12 search-bar-area mb-3">
// //                       <div className="search-bar">
// //                         <i className="fa fa-search"></i>
// //                         <input type="text" className="header-search-bar" placeholder="Search by creator by collection" />
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div className="col-lg-6 col-md-6 col-sm-12">
// //                   <div className="header_second">
// //                     <div className="col-lg-2 col-md-2">
// //                       <a>Explore</a>
// //                     </div>
// //                     <div className="col-lg-3 col-md-3 my-items">
// //                       <a>My Items</a>
// //                     </div>
// //                     <div className="col-lg-2 col-md-2 mint">
// //                       <a>Mint</a>
// //                     </div>
// //                     <div className="col-lg-5 col-md-5 connect">
// //                       <a className="connect_btn">Connect Wallet</a>
// //                     </div>
// //                   </div>
// //                 </div> 
// //             </div>
// //             {/* <div class="col-lg-6 col-md-6 col-sm-12">
// //                 <div class="row">
// //                   <div class="col-lg-2 col-md-2 mb-3 mt-2">
// //                     <a aria-current="page" href="/explore">Explore</a>
// //                   </div>
// //                   <div class="col-lg-3 col-md-3 my-items mb-3 mt-2">
// //                     <a href="/">My Items</a>
// //                   </div>
// //                   <div class="col-lg-2 col-md-2 mint mb-3">
// //                     <a class="mint-a" href="/mint">Mint</a>
// //                   </div>
// //                   <div class="col-lg-5 col-md-5 connect mb-3">
// //                     <button class="btn-connect red-c">Connect Wallet</button>
// //                   </div>
// //                 </div>
// //             </div> */}
// //           </div>
// //           {/* <svg xmlns="http://www.w3.org/2000/svg" width="1826.292" height="54.95" viewBox="0 0 1826.292 54.95">
// //             <g transform="translate(-61 -29.205)">
// //               <path class="a" d="M62,105.9H1887.292" transform="translate(0 -22)"/>
// //               <g transform="translate(-84 -3.545)">
// //                 <rect class="b" width="628" height="40.09" transform="translate(416 32.75)"/>
// //                 <text class="c" transform="translate(501 43.414)">
// //                   <tspan x="0" y="17">Search by creators or collection</tspan>
// //                 </text>
// //               <path d="M17.992,15.773,14.44,12.22a.854.854,0,0,0-.606-.249h-.581a7.407,7.407,0,1,0-1.283,1.283v.581a.854.854,0,0,0,.249.606l3.552,3.552a.852.852,0,0,0,1.208,0l1.008-1.008a.859.859,0,0,0,0-1.211Zm-10.582-3.8a4.56,4.56,0,1,1,4.56-4.56A4.558,4.558,0,0,1,7.411,11.971Z" transform="translate(467.014 45.13)"/></g><text class="d" transform="translate(1045.947 38.225)"><tspan x="0" y="19">Explore</tspan></text><text class="d" transform="translate(1220.565 38.225)"><tspan x="0" y="19">My Items</tspan></text><g transform="translate(8321 -1209)"><rect class="e" width="290" height="40.09" transform="translate(-6723.857 1242.205)"/><rect class="f" width="290" height="40.09" transform="translate(-6726.857 1238.205)"/><text class="d" transform="translate(-6909.857 1246.966)"><tspan x="57.418" y="19">Mint</tspan></text><text class="g" transform="translate(-6726.857 1246.966)"><tspan x="60.713" y="19">Connect Wallet</tspan></text><g class="h" transform="translate(-6909.857 1238.205)"><rect class="i" width="163" height="40.09"/><rect class="j" x="0.5" y="0.5" width="162" height="39.09"/></g></g><g transform="translate(-2460.561 -5036.162)"><g transform="translate(2521.56 5073.969)"><path class="f" d="M2535.707,5092.976h-2.362q-11.785,0-11.784-6.487v-.246h8.1q.207,2.58,4.828,2.58h.234a18.722,18.722,0,0,0,2.466-.135,4.4,4.4,0,0,0,1.454-.393,1.636,1.636,0,0,0,.636-.541,1.243,1.243,0,0,0,.169-.65v-.025a1.2,1.2,0,0,0-.272-.823,2.668,2.668,0,0,0-1.3-.541,16.192,16.192,0,0,0-2.972-.283l-3.582-.1q-9.475-.246-9.474-5.5v-.221a4.96,4.96,0,0,1,.286-1.732,4.173,4.173,0,0,1,1.038-1.511,5.976,5.976,0,0,1,1.973-1.229,14.957,14.957,0,0,1,3.206-.8,30.563,30.563,0,0,1,4.607-.307h2.31q11.733,0,11.733,5.774v.2h-8.021q-.233-1.941-4.673-1.941h-.259a14.414,14.414,0,0,0-2.8.208,2.569,2.569,0,0,0-1.22.467.969.969,0,0,0-.233.676v.025a.929.929,0,0,0,.272.688,2.74,2.74,0,0,0,1.233.479,14.41,14.41,0,0,0,2.7.233l3.478.074q5.477.148,7.84,1.438a4.312,4.312,0,0,1,2.362,4.066v.344a6.068,6.068,0,0,1-.26,1.831,4.543,4.543,0,0,1-1.038,1.67,6.219,6.219,0,0,1-2.063,1.426,14.3,14.3,0,0,1-3.479.933A32.447,32.447,0,0,1,2535.707,5092.976Z" transform="translate(-2521.56 -5074.008)"/><path class="f" d="M2589.962,5074.854h21.363v4.472H2597.23v2.285h13.81v4.447h-13.81v2.506h14.3v4.57h-21.571Z" transform="translate(-2562.188 -5074.51)"/><path class="f" d="M2648.327,5074.854h7.372V5087.9h13.395v5.234h-20.766Z" transform="translate(-2596.854 -5074.51)"/><path class="f" d="M2704.264,5093.134v-18.28h13.706a29.728,29.728,0,0,1,5.71.491,14.844,14.844,0,0,1,4.023,1.3,8.3,8.3,0,0,1,2.5,1.966,6.718,6.718,0,0,1,1.337,2.334,8.623,8.623,0,0,1,.364,2.555v.737a9.525,9.525,0,0,1-.324,2.531,6.834,6.834,0,0,1-1.272,2.383,8.224,8.224,0,0,1-2.44,2.051,14.314,14.314,0,0,1-4.023,1.389,28.243,28.243,0,0,1-5.854.541Zm7.372-13.489v8.649h5.477q7.138,0,7.138-4.275v-.147q0-4.225-7.138-4.226Z" transform="translate(-2630.078 -5074.51)"/><path class="f" d="M2789.191,5073.969h1.168a30.442,30.442,0,0,1,4.686.331,19.144,19.144,0,0,1,3.556.86,10.5,10.5,0,0,1,2.518,1.3,8.422,8.422,0,0,1,1.7,1.561,6.919,6.919,0,0,1,1,1.72,7.78,7.78,0,0,1,.493,1.7,10.57,10.57,0,0,1,.116,1.6v.737a10.574,10.574,0,0,1-.116,1.6,7.972,7.972,0,0,1-.493,1.707,7.326,7.326,0,0,1-.987,1.745,8.017,8.017,0,0,1-1.7,1.584,10.83,10.83,0,0,1-2.518,1.327,18.024,18.024,0,0,1-3.543.873,30.617,30.617,0,0,1-4.711.332h-1.168a30.615,30.615,0,0,1-4.711-.332,18.324,18.324,0,0,1-3.556-.873,10.752,10.752,0,0,1-2.531-1.327,8.012,8.012,0,0,1-1.7-1.584,7.284,7.284,0,0,1-.986-1.745,7.93,7.93,0,0,1-.493-1.707,10.51,10.51,0,0,1-.116-1.6v-.737a10.507,10.507,0,0,1,.116-1.6,7.739,7.739,0,0,1,.493-1.7,7.132,7.132,0,0,1,.986-1.72,7.949,7.949,0,0,1,1.7-1.561,10.764,10.764,0,0,1,2.531-1.3,19.14,19.14,0,0,1,3.556-.86A30.618,30.618,0,0,1,2789.191,5073.969Zm7.605,9.582v-.344a3.672,3.672,0,0,0-.312-1.511,4.126,4.126,0,0,0-1.051-1.363,5.36,5.36,0,0,0-2.194-1.057,13.44,13.44,0,0,0-3.478-.394,13.679,13.679,0,0,0-3.53.394,5.242,5.242,0,0,0-2.181,1.057,4.015,4.015,0,0,0-1.025,1.363,3.811,3.811,0,0,0-.3,1.511v.295a3.85,3.85,0,0,0,.312,1.536,4.473,4.473,0,0,0,1.038,1.425,5.173,5.173,0,0,0,2.193,1.118,12.83,12.83,0,0,0,3.491.417,13.227,13.227,0,0,0,3.491-.405,5.164,5.164,0,0,0,2.194-1.093,4.341,4.341,0,0,0,1.038-1.413A3.846,3.846,0,0,0,2796.8,5083.551Z" transform="translate(-2672.15 -5073.969)"/><path class="f" d="M2851.872,5093.134v-18.28H2862l5.918,10.27,6.022-10.27h9.708v18.28h-7.293v-11.4l-6.775,11.4h-3.764l-6.749-11.4v11.4Z" transform="translate(-2717.751 -5074.51)"/><path class="f" d="M2942.14,5074.1h.908a15.242,15.242,0,0,1,3.3.319,8.152,8.152,0,0,1,2.258.8,4.454,4.454,0,0,1,1.35,1.167,4.084,4.084,0,0,1,.7,1.339,5.055,5.055,0,0,1,.182,1.364v.344a4.268,4.268,0,0,1-.376,1.769,4.782,4.782,0,0,1-1.22,1.585,6.1,6.1,0,0,1-2.44,1.191,14.248,14.248,0,0,1-3.777.442h-.882a15.01,15.01,0,0,1-3.907-.442,5.776,5.776,0,0,1-2.44-1.2,4.778,4.778,0,0,1-1.168-1.572,4.412,4.412,0,0,1-.351-1.769v-.344a5.045,5.045,0,0,1,.182-1.364,3.956,3.956,0,0,1,.713-1.339,4.551,4.551,0,0,1,1.376-1.167,8.348,8.348,0,0,1,2.284-.8A15.422,15.422,0,0,1,2942.14,5074.1Zm.415,8.87h.078a13.843,13.843,0,0,0,2.79-.246,6.519,6.519,0,0,0,1.817-.6,2.855,2.855,0,0,0,1-.9,2.817,2.817,0,0,0,.455-1,5.363,5.363,0,0,0,.091-1.044,5,5,0,0,0-.091-1.02,2.641,2.641,0,0,0-.455-.946,2.735,2.735,0,0,0-1-.848,7.025,7.025,0,0,0-1.817-.565,14.6,14.6,0,0,0-2.79-.233h-.078a15.306,15.306,0,0,0-3.375.307,3.981,3.981,0,0,0-1.908.884,2.93,2.93,0,0,0-.766,1.13,4.428,4.428,0,0,0-.182,1.364,5.142,5.142,0,0,0,.091,1.032,2.744,2.744,0,0,0,.467.983,2.867,2.867,0,0,0,1.012.884,6.654,6.654,0,0,0,1.83.578A14.971,14.971,0,0,0,2942.555,5082.965Zm-1.09-2.8v1.7h-2.933V5076.6h5.762q2.57,0,2.57,1.352v.024a.962.962,0,0,1-.389.811,1.954,1.954,0,0,1-.934.368q1.375.27,1.376,1.253v.86a.749.749,0,0,0,.156.516v.074h-2.985a.452.452,0,0,1-.13-.344v-.565a.829.829,0,0,0-.181-.614.946.946,0,0,0-.649-.172Zm0-1.375h1.843q.649,0,.648-.467,0-.417-.648-.417h-1.843Z" transform="translate(-2766.695 -5074.046)"/></g></g></g>
// //           </svg> */}
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }

// // Header.propTypes = propTypes;
// // Header.defaultProps = defaultProps;

// // export default Header;


// import React, { useState } from "react";
// import styled from "styled-components";

// const Nav = styled.nav`
//   padding: 0 20px;
//   min-height: 9vh;
//   background: #1c2022;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Logo = styled.h1`
//   font-size: 25px;
//   color: white;
// `;

// const Menu = styled.ul`
//   list-style: none;
//   display: flex;

//   li:nth-child(2) {
//     margin: 0px 20px;
//   }

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const Item = styled.li``;

// const Link = styled.a`
//   color: white;
//   text-decoration: none;

//   :hover {
//     text-decoration: underline;
//   }
// `;

// const NavIcon = styled.button`
//   background: none;
//   cursor: pointer;
//   border: none;
//   outline: none;

//   @media (min-width: 769px) {
//     display: none;
//   }
// `;

// const Line = styled.span`
//   display: block;
//   border-radius: 50px;
//   width: 25px;
//   height: 3px;
//   margin: 5px;
//   background-color: #fff;
//   transition: width 0.4s ease-in-out;

//   :nth-child(2) {
//     width: ${props => (props.open ? "40%" : "70%")};
//   }
// `;

// const Overlay = styled.div`
//   position: absolute;
//   height: ${props => (props.open ? "91vh" : 0)};
//   width: 100vw;
//   background: #1c2022;
//   transition: height 0.4s ease-in-out;

//   @media (min-width: 769px) {
//     display: none;
//   }
// `;

// const OverlayMenu = styled.ul`
//   list-style: none;
//   position: absolute;
//   left: 50%;
//   top: 45%;
//   transform: translate(-50%, -50%);

//   li {
//     opacity: ${props => (props.open ? 1 : 0)};
//     font-size: 25px;
//     margin: 50px 0px;
//     transition: opacity 0.4s ease-in-out;
//   }

//   li:nth-child(2) {
//     margin: 50px 0px;
//   }
// `;

// const Header = () => {
//   const [toggle, toggleNav] = useState(false);
//   return (
//     <>
//       <Nav>
//         <Logo>CSS Tricks</Logo>
//         <Menu>
//           <Item>
//             <Link target="#" href="https://www.instagram.com/igor_dumencic/">
//               Instagram
//             </Link>
//           </Item>
//           <Item>
//             <Link target="#" href="https://www.behance.net/igordumencic">
//               Behance
//             </Link>
//           </Item>
//           <Item>
//             <Link target="#" href="https://github.com/Igor178">
//               Github
//             </Link>
//           </Item>
//         </Menu>
//         <NavIcon onClick={() => toggleNav(!toggle)}>
//           <Line open={toggle} />
//           <Line open={toggle} />
//           <Line open={toggle} />
//         </NavIcon>
//       </Nav>
//       <Overlay open={toggle}>
//         <OverlayMenu open={toggle}>
//           <Item>
//             <Link target="#" href="https://www.instagram.com/igor_dumencic/">
//               Instagram
//             </Link>
//           </Item>
//           <Item>
//             <Link target="#" href="https://www.behance.net/igordumencic">
//               Behance
//             </Link>
//           </Item>
//           <Item>
//             <Link target="#" href="https://github.com/Igor178">
//               Github
//             </Link>
//           </Item>
//         </OverlayMenu>
//       </Overlay>
//     </>
//   );
// };

// export default Header;