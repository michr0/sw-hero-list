import React from "react";

export default props => (
  <div className="card">{JSON.stringify(props.person, null, 4)}</div>
);
