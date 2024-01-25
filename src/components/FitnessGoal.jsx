import React from "react";
import img from "../assets/fitness1.jpeg";

function FitnessGoal() {
  return (
    <div className="container-fluid fitness_goal">
      <div className="container">
        <div className="row gx-0 align-items-center py-5">
          <div className="col-md-6">
            <div className="fitness_goal_col1">
              <img src={img} alt="" className="img-fluid px-3" />
              <div className="popup"></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="fitness_goal_col2">
              <h1>Get Ready To Reach Your Fitness Goals</h1>
              <div className="py-3">
                <p>
                  Ditch the excuses, grab your motivation backpack! "Get Ready
                  To Reach Your Fitness Goals" isn't just a title, it's a battle
                  cry. This guide is your personal trainer, cheerleader, and
                  goal-crushing buddy rolled into one. We'll break down your
                  aspirations into bite-sized.
                </p>
                <p>
                  Get ready to conquer your doubts, rewrite your limits, and
                  finally claim the healthier, happier you!
                </p>
              </div>
              <button className="btn1 btn0">Free Trial Today</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FitnessGoal;
