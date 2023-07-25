"use client"; 

import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="home">
        <div className="hero">
          <div className="hero__container">
            <div className="hero-text">
              <h1>
                Welcome to App Sport, the video-call app for friend, where you can
                play games in a video-call, watch a movie together and have more
                fun !
              </h1>
              <p>
                You can create your own custom session by selecting the service!
              </p>
              <div>
                <button>
                  <svg
                    width="16"
                    height="11"
                    viewBox="0 0 16 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 2.16667C0 1.72464 0.210714 1.30072 0.585786 0.988155C0.960859 0.675595 1.46957 0.5 2 0.5H8C8.53043 0.5 9.03914 0.675595 9.41421 0.988155C9.78929 1.30072 10 1.72464 10 2.16667V8.83333C10 9.27536 9.78929 9.69928 9.41421 10.0118C9.03914 10.3244 8.53043 10.5 8 10.5H2C1.46957 10.5 0.960859 10.3244 0.585786 10.0118C0.210714 9.69928 0 9.27536 0 8.83333V2.16667ZM12.553 3.08833C12.3869 3.15749 12.2472 3.26382 12.1496 3.39539C12.0519 3.52697 12.0001 3.67862 12 3.83333V7.16667C12.0001 7.32138 12.0519 7.47303 12.1496 7.6046C12.2472 7.73618 12.3869 7.84251 12.553 7.91167L14.553 8.745C14.7054 8.80847 14.8748 8.83843 15.045 8.83204C15.2152 8.82565 15.3806 8.78313 15.5256 8.7085C15.6706 8.63386 15.7902 8.5296 15.8733 8.40561C15.9563 8.28161 15.9999 8.14199 16 8V3C15.9999 2.85801 15.9563 2.71839 15.8733 2.59439C15.7902 2.4704 15.6706 2.36614 15.5256 2.2915C15.3806 2.21687 15.2152 2.17434 15.045 2.16796C14.8748 2.16157 14.7054 2.19153 14.553 2.255L12.553 3.08833Z"
                      fill="white"
                    />
                  </svg>
                  <span>Start a meeting</span>
                </button>
                <button>
                  <span>Become a Sponsor</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="main one">
            <div className="main__container">
              <div className="main-text">
                <h2>Create a video-call</h2>
                <p>
                  If face-to-face communication is simpler, make a one-click
                  voice or video call. <br />
                  You can start a Video call session here an share the link.
                </p>
                <ul>
                  <li>
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 7.5L6.33333 8.83333L9 6.16667M13 7.5C13 8.28793 12.8448 9.06815 12.5433 9.7961C12.2417 10.5241 11.7998 11.1855 11.2426 11.7426C10.6855 12.2998 10.0241 12.7417 9.2961 13.0433C8.56815 13.3448 7.78793 13.5 7 13.5C6.21207 13.5 5.43185 13.3448 4.7039 13.0433C3.97595 12.7417 3.31451 12.2998 2.75736 11.7426C2.20021 11.1855 1.75825 10.5241 1.45672 9.7961C1.15519 9.06815 1 8.28793 1 7.5C1 5.9087 1.63214 4.38258 2.75736 3.25736C3.88258 2.13214 5.4087 1.5 7 1.5C8.5913 1.5 10.1174 2.13214 11.2426 3.25736C12.3679 4.38258 13 5.9087 13 7.5Z"
                        stroke="#F05252"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Select and copy this to share it!</span>
                  </li>
                  <li>
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 7.5L6.33333 8.83333L9 6.16667M13 7.5C13 8.28793 12.8448 9.06815 12.5433 9.7961C12.2417 10.5241 11.7998 11.1855 11.2426 11.7426C10.6855 12.2998 10.0241 12.7417 9.2961 13.0433C8.56815 13.3448 7.78793 13.5 7 13.5C6.21207 13.5 5.43185 13.3448 4.7039 13.0433C3.97595 12.7417 3.31451 12.2998 2.75736 11.7426C2.20021 11.1855 1.75825 10.5241 1.45672 9.7961C1.15519 9.06815 1 8.28793 1 7.5C1 5.9087 1.63214 4.38258 2.75736 3.25736C3.88258 2.13214 5.4087 1.5 7 1.5C8.5913 1.5 10.1174 2.13214 11.2426 3.25736C12.3679 4.38258 13 5.9087 13 7.5Z"
                        stroke="#F05252"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Share link with your friends or anymore</span>
                  </li>
                </ul>
                <input
                  type="text"
                  placeholder="https://monarc.app/c/OBddKuH1610554518009"
                />
                <button>Start the call</button>
              </div>
            </div>
          </div>
          <div className="main two">
            <div className="main__container">
              <div className="main-text">
                <h2>Gaming Controller</h2>
                <p>
                  Create a game group session and enjoy the moment with your
                  friends.
                  <br />
                  <br />
                  <span>This module will be available next week !</span>
                </p>
                <button>More know about it</button>
              </div>
              <div className="main-image">
                <img src="images/img-3.jpg" alt="image" />
              </div>
            </div>
          </div>
          <div className="main three">
            <div className="main__container">
              <div className="main-image">
                <img src="images/img-4.jpg" alt="image" />
              </div>
              <div className="main-text">
                <h2>Circus Tent</h2>
                <p>
                  Create a room cinema session and watch a movie/film/serie with
                  your friends.
                  <br />
                  <br />
                  <span>This module will be available next week !</span>
                </p>
                <button>More know about it</button>
              </div>
            </div>
          </div>
        </div>
        <div className="join">
          <div className="join__container">
            <p>
              Join our newsletter to be the first to know about the availability
              of current features and the addition of new ones.
            </p>
            <div className="join-subscribe">
              <input type="text" placeholder="Enter your email address" />
              <button>
                <span>Sign up</span>
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 5.99518C14.4951 5.46908 14.2832 4.96608 13.91 4.59518L9.62 0.295187C9.43264 0.108936 9.17919 0.00439453 8.915 0.00439453C8.65081 0.00439453 8.39736 0.108936 8.21 0.295187C8.11627 0.38815 8.04188 0.498751 7.99111 0.62061C7.94034 0.742469 7.9142 0.873175 7.9142 1.00519C7.9142 1.1372 7.94034 1.2679 7.99111 1.38976C8.04188 1.51162 8.11627 1.62222 8.21 1.71519L11.5 4.99518H1.5C1.23478 4.99518 0.98043 5.10054 0.792893 5.28807C0.605357 5.47561 0.5 5.72996 0.5 5.99518C0.5 6.2604 0.605357 6.51475 0.792893 6.70229C0.98043 6.88982 1.23478 6.99518 1.5 6.99518H11.5L8.21 10.2852C8.0217 10.4722 7.91538 10.7263 7.91444 10.9916C7.91351 11.257 8.01802 11.5119 8.205 11.7002C8.39198 11.8885 8.6461 11.9948 8.91146 11.9957C9.17683 11.9967 9.4317 11.8922 9.62 11.7052L13.91 7.40518C14.2856 7.03183 14.4978 6.52476 14.5 5.99518Z"
                    fill="#DC2626"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
