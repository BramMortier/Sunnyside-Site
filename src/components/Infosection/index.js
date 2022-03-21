import React from "react";
import InfoComponent1 from "./InfoComponent1";
import { InfoData1, InfoData2 } from "./InfoComponent1/data";
import { InfoData3 } from "./InfoComponent2/data";

import InfoComponent2 from "./InfoComponent2";

const Infosection = () => {
  return (
    <div>
      <InfoComponent1 {...InfoData1} />
      <InfoComponent1 {...InfoData2} />
      <InfoComponent2 {...InfoData3} />
    </div>
  );
};

export default Infosection;
