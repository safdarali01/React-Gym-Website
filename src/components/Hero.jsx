import icon from "../assets/play.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Scrollbar } from "swiper/modules";

const Hero = () => {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay, Scrollbar]}
        className="mySwiper"
      >
        {/* slide 1 start  */}
        <SwiperSlide>
          <div className="container-fluid hero">
            <div className="container gx-0">
              <div className="row gx-0">
                <div className="col-md-6">
                  <div className="hero_col1">
                    <h1>
                      Build Your Body <span>Transform</span> Your Life.
                    </h1>
                    <p>
                      Empower your journey to peak fitness. Build a stronger
                      body and transform your life with our expert guidance and
                      support.
                    </p>
                    <div className="hero_btns">
                      <button className="btn1 btn0">Get Started</button>
                      <button className="btn_play">
                        <img src={icon} alt="" /> Watch Video
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hero_col2"></div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 1 end  */}

        {/* slide 2 start  */}
        <SwiperSlide>
          <div className="container-fluid hero hero1">
            <div className="container gx-0">
              <div className="row gx-0 align-items-center">
                <div className="col-md-6">
                  <div className="hero_col1">
                    <h1>
                      Get <span> Healthy </span> Body With the{" "}
                      <span>Perfect</span> Exercises.
                    </h1>
                    <p>
                      Discover optimal well-being through tailored exercises.
                      Achieve a healthy body with our expert guidance,
                      personalized routines, and transformative fitness
                      solutions.
                    </p>
                    <div className="hero_btns">
                      <button className="btn1 btn0">Get Started</button>
                      <button className="btn_play">
                        <img src={icon} alt="" /> Watch Video
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hero_col2">
                    <img src={img1} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 2 end  */}

        {/* slide 3 start  */}
        <SwiperSlide>
          <div className="container-fluid hero2">
            <div className="container gx-0">
              <div className="row gx-0 align-items-center">
                <div className="col-md-6">
                  <div className="hero_col2">
                    <img src={img2} alt="" className="img-fluid img2_con" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hero_col1">
                    <h1>
                      Unlocked Your <span>Body</span> & <span>Mind</span> In
                      Prefect Balance.
                    </h1>
                    <p>
                      Discover the harmonious synergy between your body and mind
                      with our transformative approach. Achieve perfect balance
                      and unleash your full potential for a life of vitality and
                      well-being.
                    </p>
                    <div className="hero_btns">
                      <button className="btn1 btn0">Get Started</button>
                      <button className="btn_play">
                        <img src={icon} alt="" /> Watch Video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 3 end  */}
      </Swiper>
    </>
  );
};

export default Hero;
