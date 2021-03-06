import React from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";

const Smurfs = props => {
  return (
    <div className="smurfs">
      <h1> Villagers </h1>
      <ul>
        {props.smurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps)(Smurfs);
