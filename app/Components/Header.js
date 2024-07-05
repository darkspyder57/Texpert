"use client"
import React,{useEffect} from "react"
import Link from "next/link";

export default function Header() {

    useEffect(() => {
        const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    
        function mobileNavToggle() {
          document.body.classList.toggle('mobile-nav-active');
          mobileNavToggleBtn.classList.toggle('bi-list');
          mobileNavToggleBtn.classList.toggle('bi-x');
        }
    
        if (mobileNavToggleBtn) {
          mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
        }
    
        // Cleanup event listener on component unmount
        return () => {
          if (mobileNavToggleBtn) {
            mobileNavToggleBtn.removeEventListener('click', mobileNavToggle);
          }
        };
      }, []);

    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">

                <Link href="/" legacyBehavior>
                <a className="logo d-flex align-items-center me-auto">
                    {/* <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> --> */}
                    <h1 className="sitename">Texpert</h1>
                </a>
                </Link>
                

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><Link href="/" legacyBehavior><a className="active">Home<br/></a></Link></li>
                        <li><Link href="/about" legacyBehavior><a>About</a></Link></li>
                        <li><Link href="/courses" legacyBehavior><a>Courses</a></Link></li>
                        <li><Link href="/trainers" legacyBehavior><a>Trainers</a></Link></li>
                        <li><Link href="/events" legacyBehavior><a>Events</a></Link></li>
                        <li><Link href="/pricing" legacyBehavior><a>Pricing</a></Link></li>
                        <li className="dropdown">
                            <Link href="#" legacyBehavior><a><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a></Link>
                            <ul>
                                <li><a href="#">Dropdown 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Dropdown 1</a></li>
                                        <li><a href="#">Deep Dropdown 2</a></li>
                                        <li><a href="#">Deep Dropdown 3</a></li>
                                        <li><a href="#">Deep Dropdown 4</a></li>
                                        <li><a href="#">Deep Dropdown 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Dropdown 2</a></li>
                                <li><a href="#">Dropdown 3</a></li>
                                <li><a href="#">Dropdown 4</a></li>
                            </ul>
                        </li>
                        <li><Link href="/contact" legacyBehavior><a>Contact</a></Link></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                <Link href="/contact" legacyBehavior><a className="btn-getstarted">Get Started</a></Link>

            </div>
        </header>
    )
}