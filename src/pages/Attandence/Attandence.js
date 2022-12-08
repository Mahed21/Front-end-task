import React, { useContext, useState } from "react";
import { COUNTER_CONTEXT } from "../../App";

const Attandence = () => {
  const { accessToken, setAccessToken, refressToken, setRefreshToken } =
    useContext(COUNTER_CONTEXT);
  const [tableData, setTableData] = useState([]);
  fetch(`https://test.nexisltd.com/test/${refressToken}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
  return (
    <div>
      <h1>Attandence</h1>
    </div>
  );
};

export default Attandence;
