import React, { useRef } from "react";
// Import navigation icons
import nextIcon from "../assets/next-icon.png";
import backIcon from "../assets/back-icon.png";

// Import user profile images
import userOne from "../assets/user-1.jpg";
import userTwo from "../assets/user-2.png";
import userThree from "../assets/user-3.jpg";
import userFour from "../assets/user-4.jpg";

const Testimonials = () => {
  // Reference to the slider element for manipulation
  const slider = useRef();
  // Track the current translation percentage
  let tx = 0;

  /**
   * Slides the testimonials forward
   * Moves the slider 25% to the left until reaching -50%
   */
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  /**
   * Slides the testimonials backward
   * Moves the slider 25% to the right until reaching 0%
   */
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      {/* Navigation buttons */}
      <img src={nextIcon} alt="" className="nextBtn" onClick={slideForward} />
      <img src={backIcon} alt="" className="backBtn" onClick={slideBackward} />

      {/* Testimonials slider */}
      <div className="slider">
        <ul ref={slider}>
          {/* Testimonial 1 */}
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={userOne} alt="" />
                <div>
                  <h3>Sipho Zondi</h3>
                  <span>Next Code, South Africa</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                quod non deserunt pariatur vel ratione ipsa est impedit
                corporis, fugiat architecto labore assumenda cum reiciendis
                consequuntur reprehenderit eum qui cumque?
              </p>
            </div>
          </li>

          {/* Testimonial 2 */}
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={userTwo} alt="" />
                <div>
                  <h3>Alexander Jackson</h3>
                  <span>Next Code, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                esse temporibus fugit accusamus odit facilis saepe alias modi,
                vitae doloribus voluptas dolore dicta inventore nemo rem
                incidunt ea quod obcaecati!
              </p>
            </div>
          </li>

          {/* Testimonial 3 */}
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={userThree} alt="" />
                <div>
                  <h3>Megan Hoofman</h3>
                  <span>Next Code, Pretoria</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                quaerat at, mollitia est iure explicabo corrupti nam repellat
                quos voluptatem nobis laborum reprehenderit enim, ipsam
                excepturi aspernatur? Veritatis, animi quisquam.
              </p>
            </div>
          </li>

          {/* Testimonial 4 */}
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={userFour} alt="" />
                <div>
                  <h3>Harry</h3>
                  <span>Next Code, Greece</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium deleniti velit officiis enim, perspiciatis nisi
                corporis maiores fugit provident suscipit. Fugiat sint porro
                facere in ea! Amet ipsam distinctio laudantium.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
