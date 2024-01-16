import img1 from "../assets/partner1.png"
import img2 from "../assets/partner2.png"
import img3 from "../assets/partner3.png"

const FitnessGoal = () => {
  return (
    <>
      <div className="container-fluid fitness_goal">
        <div className="container">
            <div className="row gx-0">
                <div className="col-md-5">
                    <div className="fitness_col1"></div>
                </div>
                <div className="col-md-7">
                    <div className="fitness_col2">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default FitnessGoal
