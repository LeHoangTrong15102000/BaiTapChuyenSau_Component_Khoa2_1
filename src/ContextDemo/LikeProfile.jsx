import React, { Component } from "react";
import { ModelContext } from "./_Context/ModelContext";

export default class LikeProfile extends Component {
  render() {
    return (
      <ModelContext>
        {(value) => {
          return (
            <div className="container">
              <div className="card text-white bg-default">
                <h3 style={{ color: "pink" }}>Đánh giá</h3>
                <div className="card-body">
                  <button
                    onClick={() => {
                      value.setLike();
                    }}
                    style={{ color: "red", border: "3px solid red" }}
                    className="btn"
                  >
                    Thả tim <i className="fa fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ModelContext>
    );
  }
}
