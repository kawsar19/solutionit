import React from "react";
import { Link ,useNavigate} from "react-router-dom";

const notFound = () => {

    const navigate= useNavigate;

    const handleCLick=(path)=>{
        navigate('/');
      } 
  return (
    <div className="container py-4">
      <div className=" d-flex flex-column justify-content-center align-items-center gap-4 py-5">
        <figure>
          <img src="assets/images/404.png" alt="" />
        </figure>
        <h3 className="section-title text-center ">
          Sorry! The page isn't found here
        </h3>
        <p className="text-center px-5 fw-bold">
          Fortunately, since it is mainly a client-side issue, it is relatively
          easy for website owners to fix the 404 error. <br />
          This article will explain the possible causes of error 404 and show
          four effective methods to resolve it.Fortunately, since it is mainly a
          client-side issue, it is relatively easy for website owners to fix the
          404 error.
        </p>

        <div className="go-back d-flex align-items-center">
          <span className="icon ">
            <svg
              width="65"
              height="65"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="65" height="65" rx="32.5" fill="#FF6B00" />
            </svg>
          </span>

          <div className="text d-flex gap-4">
            <Link to={'./'} className="text-black">Back To Home</Link>
            <span>
              <svg
                width="19"
                height="12"
                viewBox="0 0 19 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM0 6.75H18V5.25H0V6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default notFound;
