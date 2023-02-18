import React from "react";
import { Link ,useNavigate} from "react-router-dom";

const Header = () => {

  const navigate=useNavigate();

  const handleCLick=(path)=>{
    navigate('/');
  }
  const goTeam=(path)=>{
    alert('hi')
    navigate('/teams');
  }

  return (
    <header className="header sticky-top bg-white">
      <div className="container">
        <div className="header__content deskmenu">
          <div className="header__left">
            <Link to="/">
              <figure className="logo">
                <img src="/assets/images/logo.svg" alt="" />
              </figure>
            </Link>
          </div>

          <div className="header__right">
            <div className="menu">
              <Link to="/">HOME</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/teams">TEAMS</Link>
              <Link to="/portfolio">PORTFOLIO</Link>
              {/* <Link to="/posts">CONTACT US</Link> */}
              <Link to="/contact">CONTACT US</Link>
            </div>
          </div>
        </div>

        <div class="hamburger d-lg-none py-3">
          <button
            type="button"
            class="btn-hamburger"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <svg
              width="19"
              height="13"
              viewBox="0 0 19 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.407227 12.9297V10.9297H18.4072V12.9297H0.407227ZM0.407227 7.92969V5.92969H18.4072V7.92969H0.407227ZM0.407227 
                      2.92969V0.929688H18.4072V2.92969H0.407227Z"
                fill="#718096"
              />
            </svg>
          </button>
        </div>

        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="mobileMenu"
          aria-labelledby="mobileMenu"
        >
          <div class="offcanvas-header">
            <a href="index.html" class="logo">
              {/* <img src="assets/images/logo/logo.svg" alt="logo"> */}
            </a>

            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2849 15.5425L7.62804 9.88562L1.97118 15.5425L0.0855651 13.6569L5.74242 8L0.0855651 
                    2.34315L1.97118 0.457528L7.62804 6.11438L13.2849 0.457527L15.1705 2.34315L9.51366 8L15.1705 13.6569L13.2849 
                    15.5425Z"
                  fill="#718096"
                />
              </svg>
            </button>
          </div>

          <div class="offcanvas-body">
            <ul class="mobilelist">
              <li class="mobilelist-item" data-bs-dismiss="offcanvas">
                <span class="mobilelist-link" onClick={handleCLick} >
                  HOME
                </span>
              </li>
              <li class="mobilelist-item" data-bs-dismiss="offcanvas">
                <Link to="/about" class="mobilelist-link" >
                  ABOUT
                </Link>
              </li>
              <li class="mobilelist-item" data-bs-dismiss="offcanvas">
               <Link to="/teams" class="mobilelist-link" >
                  TEAMS
                </Link>
              </li>
              <li class="mobilelist-item" data-bs-dismiss="offcanvas">
              <Link to="/portfolio" class="mobilelist-link" >
                 PORTFOLIO
                </Link>
              </li>
              <li class="mobilelist-item" data-bs-dismiss="offcanvas">
              <Link to="/contact" class="mobilelist-link" >
                  CONTACT
                </Link>
              </li>
             
    
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
