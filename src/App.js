import "./App.css";
import Animations from "./Modules/dashboard/index";
import DiscordLoader from "./Modules/dashboard/circle";
import GoogleMap from "./Modules/builder/test";

import TableLoader from "./CommonComponents/listing";

import DesginForGraphs from "./Modules/Last/index";
import XYChart from "./Modules/Last/map";
import PieChart from "./Modules/Last/chart";


import Headers from "./Modules/optimize/firstSection";
import SecondLevel from "./Modules/optimize/secondSection";
import Posting from "./Modules/optimize/thirdSection";
import DataTable from "./Modules/optimize/fourthSection";

import BuliderHeader from "./Modules/builder/firstStep";
import FormData from "./Modules/builder/secondStep";
import Invoice from "./Modules/builder/test";
import YoutubeFresh from "./Modules/builder/image";

function App() {
  return (
    <div>
      <DesginForGraphs />
      {/* <PieChart/> */}
      {/* <h1>Dashboard Page</h1>   */}
      {/* <Animations />

      <DiscordLoader /> 
      <TableLoader />  */}
      {/* <h1>Optimize Page</h1>  */}
      {/* {/* <Headers /> */}
      {/* <SecondLevel />
      <Posting />
      <DataTable /> */} 
      {/* <h1>builder page</h1>  */}
      {/* <BuliderHeader /> */}
      {/* <YoutubeFresh /> */}
      {/* <FormData />  */}
      {/*<Invoice/> */}
    </div>
  );
}

export default App;
