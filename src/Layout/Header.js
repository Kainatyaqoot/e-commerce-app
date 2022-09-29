// importing react
import React from "react";
import { Link } from "react-router-dom";
// css import
import "./Header.css";

// MUI Icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Header() {
 return (
  <div className=''>
   <nav className='navbar navbar-expand-lg navbar-light'>
    <div className='container-fluid'>
     <Link to="/" className='navbar-brand text-uppercase' href='#'>
      Company<span>Logo</span>
     </Link>
     <button
      className='navbar-toggler'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#navbarScroll'
      aria-controls='navbarScroll'
      aria-expanded='false'
      aria-label='Toggle navigation'
     >
      <span className='navbar-toggler-icon'></span>
     </button>
     <div className='collapse navbar-collapse' id='navbarScroll'>
      <ul class='navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll'>
       <li className='nav-item'>
        <Link
         to="/"
         className='nav-link mx-4'
         aria-current='page'
        >
         HOME
        </Link>
       </li>
       <li className='nav-item'>
        <Link to="/shop" className='nav-link mx-4' aria-current='page' >
         SHOP
        </Link>
       </li>
       <li className='nav-item'>
        <Link to="/reviews"
         className='nav-link mx-4' aria-current='page' >
         REVIEWS
        </Link>
       </li>
       <li className='nav-item'>
        <Link to="/Faq" className='nav-link mx-4' aria-current='page' >
         FAQS
        </Link>
       </li>
       <li className='nav-item'>
        <Link to="/contact" className='nav-link mx-4' aria-current='page' >
         CONTACT US
        </Link>
       </li>
      </ul>
      <div className='Nav-icons'>
       <span className='mx-3 mt-2'>
        <Link to="/ProductPage" style={{ textDecoration: "none", color: "black" }}><ShoppingCartIcon /></Link>

       </span>
       <span className='mx-3 mt-2'>
        <svg

         height='25'
         viewBox='0 0 12 16'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
        >
         <path
          fillRrule='evenodd'
          clipRule='evenodd'
          d='M11.1429 0H0.857143C0.629814 0 0.411797 0.0903058 0.251051 0.251051C0.0903058 0.411797 0 0.629814 0 0.857143V14.5714C0 14.7988 0.0903058 15.0168 0.251051 15.1775C0.411797 15.3383 0.629814 15.4286 0.857143 15.4286H11.1429C11.3702 15.4286 11.5882 15.3383 11.7489 15.1775C11.9097 15.0168 12 14.7988 12 14.5714V0.857143C12 0.629814 11.9097 0.411797 11.7489 0.251051C11.5882 0.0903058 11.3702 0 11.1429 0ZM8.57143 12H3.42857V10.2857H8.57143V12ZM8.57143 8.57143H3.42857V6.85714H8.57143V8.57143ZM8.57143 5.14286H3.42857V3.42857H8.57143V5.14286Z'
          fill='#1E1E27'
         />
        </svg>
       </span>
       <div className='mx-3 user-icon'>
        <svg
         width='20'
         height='20'
         viewBox='0 0 16 16'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
        >
         <mask id='path-1-inside-1_5_46' fill='white'>
          <path
           fill-rule='evenodd'
           clip-rule='evenodd'
           d='M8 15.2C11.9764 15.2 15.2 11.9764 15.2 8C15.2 4.0236 11.9764 0.8 8 0.8C4.0236 0.8 0.8 4.0236 0.8 8C0.8 11.9764 4.0236 15.2 8 15.2ZM8 16C12.4184 16 16 12.4184 16 8C16 3.5816 12.4184 0 8 0C3.5816 0 0 3.5816 0 8C0 12.4184 3.5816 16 8 16Z'
          />
         </mask>
         <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M8 15.2C11.9764 15.2 15.2 11.9764 15.2 8C15.2 4.0236 11.9764 0.8 8 0.8C4.0236 0.8 0.8 4.0236 0.8 8C0.8 11.9764 4.0236 15.2 8 15.2ZM8 16C12.4184 16 16 12.4184 16 8C16 3.5816 12.4184 0 8 0C3.5816 0 0 3.5816 0 8C0 12.4184 3.5816 16 8 16Z'
          fill='#1E1E27'
         />
         <path
          d='M8 16.2C12.5287 16.2 16.2 12.5287 16.2 8H14.2C14.2 11.4241 11.4241 14.2 8 14.2V16.2ZM16.2 8C16.2 3.47132 12.5287 -0.2 8 -0.2V1.8C11.4241 1.8 14.2 4.57589 14.2 8H16.2ZM8 -0.2C3.47132 -0.2 -0.2 3.47132 -0.2 8H1.8C1.8 4.57589 4.57589 1.8 8 1.8V-0.2ZM-0.2 8C-0.2 12.5287 3.47132 16.2 8 16.2V14.2C4.57589 14.2 1.8 11.4241 1.8 8H-0.2ZM8 17C12.9707 17 17 12.9707 17 8H15C15 11.8661 11.8661 15 8 15V17ZM17 8C17 3.02932 12.9707 -1 8 -1V1C11.8661 1 15 4.13389 15 8H17ZM8 -1C3.02932 -1 -1 3.02932 -1 8H1C1 4.13389 4.13389 1 8 1V-1ZM-1 8C-1 12.9707 3.02932 17 8 17V15C4.13389 15 1 11.8661 1 8H-1Z'
          fill='#1E1E27'
          mask='url(#path-1-inside-1_5_46)'
         />
         <path
          d='M3.79608 12.8769L3.79627 12.8771C5.45971 14.4204 6.69875 15.0958 7.89381 15.1002C9.09382 15.1045 10.4007 14.4335 12.2008 12.8646C12.2435 12.8267 12.2743 12.7772 12.2896 12.7221C12.3049 12.6667 12.3037 12.608 12.2863 12.5533C12.2688 12.4985 12.2357 12.45 12.1911 12.4137C12.1466 12.3775 12.0926 12.355 12.0355 12.3489C8.98689 12.0337 7.02097 12.0038 3.97531 12.341L3.79608 12.8769ZM3.79608 12.8769C3.73663 12.8218 3.7002 12.7398 3.7002 12.6524V12.652C3.7002 12.4906 3.82038 12.3582 3.97521 12.341L3.79608 12.8769Z'
          fill='#1E1E27'
          stroke='#1E1E27'
         />
         <mask id='path-4-inside-2_5_46' fill='white'>
          <path
           fill-rule='evenodd'
           clip-rule='evenodd'
           d='M12.0458 12.2492C8.99101 11.9332 7.01781 11.9036 3.96341 12.2416C3.86286 12.2533 3.77018 12.3017 3.70309 12.3775C3.636 12.4533 3.59923 12.5512 3.59981 12.6524C3.59981 12.7668 3.64741 12.8752 3.72781 12.9504C5.39501 14.4968 6.65821 15.1956 7.89301 15.2C9.13221 15.2044 10.4634 14.5112 12.2674 12.9392C12.3247 12.8882 12.366 12.8216 12.3862 12.7476C12.4064 12.6736 12.4046 12.5953 12.3811 12.5223C12.3577 12.4492 12.3135 12.3846 12.2539 12.3362C12.1944 12.2878 12.1221 12.2577 12.0458 12.2496V12.2492ZM3.87581 11.4464C6.99421 11.1012 9.02541 11.1324 12.1286 11.4536C12.3599 11.4778 12.5792 11.5688 12.7596 11.7157C12.9399 11.8625 13.0736 12.0587 13.1441 12.2804C13.2146 12.502 13.219 12.7394 13.1568 12.9634C13.0945 13.1875 12.9682 13.3886 12.7934 13.542C10.9634 15.1372 9.43941 16.006 7.89061 16C6.33741 15.9944 4.88061 15.1108 3.18421 13.5368C3.06275 13.4237 2.96592 13.2867 2.89978 13.1345C2.83364 12.9822 2.79961 12.818 2.79981 12.652C2.79922 12.3538 2.90869 12.0658 3.10723 11.8433C3.30578 11.6208 3.57944 11.4793 3.87581 11.446V11.4464Z'
          />
         </mask>
         <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M12.0458 12.2492C8.99101 11.9332 7.01781 11.9036 3.96341 12.2416C3.86286 12.2533 3.77018 12.3017 3.70309 12.3775C3.636 12.4533 3.59923 12.5512 3.59981 12.6524C3.59981 12.7668 3.64741 12.8752 3.72781 12.9504C5.39501 14.4968 6.65821 15.1956 7.89301 15.2C9.13221 15.2044 10.4634 14.5112 12.2674 12.9392C12.3247 12.8882 12.366 12.8216 12.3862 12.7476C12.4064 12.6736 12.4046 12.5953 12.3811 12.5223C12.3577 12.4492 12.3135 12.3846 12.2539 12.3362C12.1944 12.2878 12.1221 12.2577 12.0458 12.2496V12.2492ZM3.87581 11.4464C6.99421 11.1012 9.02541 11.1324 12.1286 11.4536C12.3599 11.4778 12.5792 11.5688 12.7596 11.7157C12.9399 11.8625 13.0736 12.0587 13.1441 12.2804C13.2146 12.502 13.219 12.7394 13.1568 12.9634C13.0945 13.1875 12.9682 13.3886 12.7934 13.542C10.9634 15.1372 9.43941 16.006 7.89061 16C6.33741 15.9944 4.88061 15.1108 3.18421 13.5368C3.06275 13.4237 2.96592 13.2867 2.89978 13.1345C2.83364 12.9822 2.79961 12.818 2.79981 12.652C2.79922 12.3538 2.90869 12.0658 3.10723 11.8433C3.30578 11.6208 3.57944 11.4793 3.87581 11.446V11.4464Z'
          fill='#1E1E27'
         />
         <path
          d='M12.0458 12.2492H13.0458V11.3473L12.1487 11.2545L12.0458 12.2492ZM3.96341 12.2416L3.85342 11.2477L3.84767 11.2483L3.96341 12.2416ZM3.59981 12.6524H4.59982L4.59979 12.6467L3.59981 12.6524ZM3.72781 12.9504L3.04471 13.6807L3.04776 13.6836L3.72781 12.9504ZM7.89301 15.2L7.88945 16.2H7.88946L7.89301 15.2ZM12.2674 12.9392L12.9244 13.6932L12.9323 13.6862L12.2674 12.9392ZM12.0458 12.2496H11.0458V13.1493L11.9405 13.2441L12.0458 12.2496ZM3.87581 11.4464H2.87581V12.5632L3.98583 12.4403L3.87581 11.4464ZM12.1286 11.4536L12.2324 10.459L12.2316 10.4589L12.1286 11.4536ZM12.7934 13.542L13.4505 14.2958L13.4531 14.2936L12.7934 13.542ZM7.89061 16L7.89448 15L7.89421 15L7.89061 16ZM3.18421 13.5368L2.50263 14.2686L2.50404 14.2699L3.18421 13.5368ZM2.79981 12.652L3.79981 12.6532L3.79981 12.6501L2.79981 12.652ZM3.87581 11.446H4.87581V10.3274L3.76418 10.4523L3.87581 11.446ZM12.1487 11.2545C9.03314 10.9322 6.98791 10.9008 3.85342 11.2477L4.0734 13.2355C7.04771 12.9064 8.94888 12.9342 11.9429 13.2439L12.1487 11.2545ZM3.84767 11.2483C3.50261 11.2885 3.18451 11.4546 2.95427 11.7147L4.4519 13.0403C4.35584 13.1488 4.22312 13.2181 4.07915 13.2349L3.84767 11.2483ZM2.95427 11.7147C2.72403 11.9749 2.59783 12.3108 2.59982 12.6582L4.59979 12.6467C4.60062 12.7916 4.54797 12.9318 4.4519 13.0403L2.95427 11.7147ZM2.59981 12.6524C2.59981 13.0414 2.76051 13.4149 3.04471 13.6807L4.4109 12.2201C4.5343 12.3355 4.59981 12.4923 4.59981 12.6524H2.59981ZM3.04776 13.6836C4.75147 15.2638 6.25685 16.1942 7.88945 16.2L7.89657 14.2C7.05956 14.197 6.03855 13.7298 4.40785 12.2172L3.04776 13.6836ZM7.88946 16.2C9.51582 16.2058 11.088 15.2933 12.9244 13.6931L11.6104 12.1853C9.83878 13.7291 8.74859 14.203 7.89656 14.2L7.88946 16.2ZM12.9323 13.6862C13.1343 13.5064 13.2797 13.2717 13.3509 13.0108L11.4214 12.4845C11.4522 12.3716 11.5151 12.27 11.6026 12.1922L12.9323 13.6862ZM13.3509 13.0108C13.4221 12.7498 13.4159 12.4738 13.3332 12.2163L11.4291 12.8282C11.3933 12.7168 11.3906 12.5974 11.4214 12.4845L13.3509 13.0108ZM13.3332 12.2163C13.2504 11.9588 13.0947 11.7309 12.8848 11.5603L11.6231 13.1121C11.5323 13.0382 11.4649 12.9396 11.4291 12.8282L13.3332 12.2163ZM12.8848 11.5603C12.675 11.3896 12.42 11.2836 12.1511 11.2552L11.9405 13.2441C11.8242 13.2317 11.7139 13.1859 11.6231 13.1121L12.8848 11.5603ZM13.0458 12.2496V12.2492H11.0458V12.2496H13.0458ZM3.98583 12.4403C7.02409 12.104 8.98322 12.1334 12.0257 12.4483L12.2316 10.4589C9.0676 10.1314 6.96433 10.0984 3.76578 10.4525L3.98583 12.4403ZM12.0248 12.4482C12.0627 12.4522 12.0986 12.4671 12.1282 12.4912L13.3909 10.9402C13.0598 10.6706 12.6572 10.5033 12.2324 10.459L12.0248 12.4482ZM12.1282 12.4912C12.1578 12.5152 12.1797 12.5474 12.1912 12.5837L14.097 11.977C13.9674 11.5701 13.7221 11.2098 13.3909 10.9402L12.1282 12.4912ZM12.1912 12.5837C12.2028 12.62 12.2035 12.6589 12.1933 12.6956L14.1202 13.2313C14.2346 12.8198 14.2265 12.384 14.097 11.977L12.1912 12.5837ZM12.1933 12.6956C12.1831 12.7324 12.1624 12.7653 12.1337 12.7905L13.4531 14.2936C13.774 14.0119 14.0059 13.6427 14.1202 13.2313L12.1933 12.6956ZM12.1363 12.7882C10.3388 14.3551 9.05591 15.0045 7.89448 15L7.88673 17C9.82291 17.0075 11.5881 15.9193 13.4505 14.2958L12.1363 12.7882ZM7.89421 15C6.73867 14.9959 5.52398 14.3436 3.86437 12.8038L2.50404 14.2699C4.23723 15.878 5.93615 16.993 7.887 17L7.89421 15ZM3.86578 12.8051C3.84494 12.7856 3.82832 12.7621 3.81697 12.736L1.9826 13.5329C2.10353 13.8113 2.28056 14.0617 2.50263 14.2686L3.86578 12.8051ZM3.81697 12.736C3.80561 12.7099 3.79977 12.6817 3.79981 12.6532L1.79981 12.6508C1.79945 12.9543 1.86167 13.2546 1.9826 13.5329L3.81697 12.736ZM3.79981 12.6501C3.7997 12.5981 3.81879 12.5478 3.85341 12.509L2.36105 11.1775C1.99859 11.5838 1.79874 12.1095 1.79981 12.654L3.79981 12.6501ZM3.85341 12.509C3.88803 12.4702 3.93575 12.4456 3.98743 12.4398L3.76418 10.4523C3.22313 10.513 2.72352 10.7713 2.36105 11.1775L3.85341 12.509ZM2.87581 11.446V11.4464H4.87581V11.446H2.87581Z'
          fill='#1E1E27'
          mask='url(#path-4-inside-2_5_46)'
         />
         <path
          d='M10.6998 6.4C10.6998 7.11608 10.4153 7.80284 9.909 8.30919C9.40265 8.81554 8.71589 9.1 7.99981 9.1C7.28372 9.1 6.59697 8.81554 6.09062 8.30919C5.58427 7.80284 5.2998 7.11608 5.2998 6.4C5.2998 5.68391 5.58427 4.99716 6.09062 4.49081C6.59697 3.98446 7.28372 3.7 7.99981 3.7C8.71589 3.7 9.40265 3.98446 9.909 4.49081C10.4153 4.99716 10.6998 5.68391 10.6998 6.4Z'
          fill='#1E1E27'
          stroke='#1E1E27'
         />
         <mask id='path-7-inside-3_5_46' fill='white'>
          <path
           fill-rule='evenodd'
           clip-rule='evenodd'
           d='M7.99981 8.8C8.63633 8.8 9.24678 8.54714 9.69686 8.09706C10.147 7.64697 10.3998 7.03652 10.3998 6.4C10.3998 5.76348 10.147 5.15303 9.69686 4.70294C9.24678 4.25285 8.63633 4 7.99981 4C7.36329 4 6.75284 4.25285 6.30275 4.70294C5.85266 5.15303 5.59981 5.76348 5.59981 6.4C5.59981 7.03652 5.85266 7.64697 6.30275 8.09706C6.75284 8.54714 7.36329 8.8 7.99981 8.8ZM7.99981 9.6C8.8485 9.6 9.66243 9.26286 10.2625 8.66274C10.8627 8.06262 11.1998 7.24869 11.1998 6.4C11.1998 5.55131 10.8627 4.73737 10.2625 4.13726C9.66243 3.53714 8.8485 3.2 7.99981 3.2C7.15111 3.2 6.33718 3.53714 5.73706 4.13726C5.13695 4.73737 4.7998 5.55131 4.7998 6.4C4.7998 7.24869 5.13695 8.06262 5.73706 8.66274C6.33718 9.26286 7.15111 9.6 7.99981 9.6Z'
          />
         </mask>
         <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M7.99981 8.8C8.63633 8.8 9.24678 8.54714 9.69686 8.09706C10.147 7.64697 10.3998 7.03652 10.3998 6.4C10.3998 5.76348 10.147 5.15303 9.69686 4.70294C9.24678 4.25285 8.63633 4 7.99981 4C7.36329 4 6.75284 4.25285 6.30275 4.70294C5.85266 5.15303 5.59981 5.76348 5.59981 6.4C5.59981 7.03652 5.85266 7.64697 6.30275 8.09706C6.75284 8.54714 7.36329 8.8 7.99981 8.8ZM7.99981 9.6C8.8485 9.6 9.66243 9.26286 10.2625 8.66274C10.8627 8.06262 11.1998 7.24869 11.1998 6.4C11.1998 5.55131 10.8627 4.73737 10.2625 4.13726C9.66243 3.53714 8.8485 3.2 7.99981 3.2C7.15111 3.2 6.33718 3.53714 5.73706 4.13726C5.13695 4.73737 4.7998 5.55131 4.7998 6.4C4.7998 7.24869 5.13695 8.06262 5.73706 8.66274C6.33718 9.26286 7.15111 9.6 7.99981 9.6Z'
          fill='#1E1E27'
         />
         <path
          d='M11.1998 6.4H12.1998H11.1998ZM7.99981 3.2V2.2V3.2ZM4.7998 6.4H3.7998H4.7998ZM7.99981 9.8C8.90154 9.8 9.76635 9.44179 10.404 8.80416L8.98976 7.38995C8.72721 7.6525 8.37111 7.8 7.99981 7.8V9.8ZM10.404 8.80416C11.0416 8.16654 11.3998 7.30173 11.3998 6.4H9.39981C9.39981 6.7713 9.25231 7.1274 8.98976 7.38995L10.404 8.80416ZM11.3998 6.4C11.3998 5.49826 11.0416 4.63346 10.404 3.99583L8.98976 5.41005C9.25231 5.6726 9.39981 6.02869 9.39981 6.4H11.3998ZM10.404 3.99583C9.76635 3.35821 8.90154 3 7.99981 3V5C8.37111 5 8.72721 5.1475 8.98976 5.41005L10.404 3.99583ZM7.99981 3C7.09807 3 6.23327 3.35821 5.59564 3.99583L7.00986 5.41005C7.27241 5.1475 7.6285 5 7.99981 5V3ZM5.59564 3.99583C4.95802 4.63346 4.59981 5.49826 4.59981 6.4H6.59981C6.59981 6.02869 6.7473 5.6726 7.00986 5.41005L5.59564 3.99583ZM4.59981 6.4C4.59981 7.30173 4.95802 8.16654 5.59564 8.80416L7.00986 7.38995C6.7473 7.1274 6.59981 6.7713 6.59981 6.4H4.59981ZM5.59564 8.80416C6.23327 9.44179 7.09807 9.8 7.99981 9.8V7.8C7.6285 7.8 7.27241 7.6525 7.00986 7.38995L5.59564 8.80416ZM7.99981 10.6C9.11372 10.6 10.182 10.1575 10.9697 9.36985L9.55544 7.95563C9.14286 8.36821 8.58328 8.6 7.99981 8.6V10.6ZM10.9697 9.36985C11.7573 8.58219 12.1998 7.51391 12.1998 6.4H10.1998C10.1998 6.98348 9.96802 7.54305 9.55544 7.95563L10.9697 9.36985ZM12.1998 6.4C12.1998 5.28609 11.7573 4.2178 10.9697 3.43015L9.55544 4.84436C9.96802 5.25694 10.1998 5.81652 10.1998 6.4H12.1998ZM10.9697 3.43015C10.182 2.6425 9.11372 2.2 7.99981 2.2V4.2C8.58328 4.2 9.14286 4.43178 9.55544 4.84436L10.9697 3.43015ZM7.99981 2.2C6.8859 2.2 5.81761 2.6425 5.02996 3.43015L6.44417 4.84436C6.85675 4.43178 7.41633 4.2 7.99981 4.2V2.2ZM5.02996 3.43015C4.2423 4.2178 3.7998 5.28609 3.7998 6.4H5.7998C5.7998 5.81652 6.03159 5.25694 6.44417 4.84436L5.02996 3.43015ZM3.7998 6.4C3.7998 7.51391 4.2423 8.58219 5.02996 9.36985L6.44417 7.95563C6.03159 7.54305 5.7998 6.98348 5.7998 6.4H3.7998ZM5.02996 9.36985C5.81761 10.1575 6.8859 10.6 7.99981 10.6V8.6C7.41633 8.6 6.85675 8.36821 6.44417 7.95563L5.02996 9.36985Z'
          fill='#1E1E27'
          mask='url(#path-7-inside-3_5_46)'
         />
        </svg>

        <div>5</div>
       </div>
      </div>
     </div>
    </div>
   </nav >
  </div >
 );
}

export default Header;