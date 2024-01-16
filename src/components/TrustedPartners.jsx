import img1 from "../assets/partner1.png";
import img2 from "../assets/partner2.png";
import img3 from "../assets/partner3.png";

const TrustedPartners = () => {
  return (
    <>
      <div className="container-fluid trusted_partners">
        <div className="container">
          <div className="row gx-0 align-items-center">
            <div className="col-md-5">
              <div className="trusted_partners_col1">
                <h1>970k + More</h1>
                <p>Trusted Companies Partner</p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="trusted_partners_col2">
                <img src={img1} alt="" className="img-fluid px-3"/>
                <img src={img2} alt="" className="img-fluid px-3"/>
                <img src={img3} alt="" className="img-fluid px-3"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustedPartners;
