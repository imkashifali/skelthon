import React from "react";
import ContentLoader from "react-content-loader";

const DesginForGraphs = (props) => {
  return (
    <ContentLoader
      height={900}
      width={1200}
      viewBox="0 0 1200 900"
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
      {...props}
    >
      <rect x="60" y="15" rx="3" ry="3" width="470" height="15" />
      <rect x="60" y="50" rx="3" ry="3" width="400" height="15" />
      <rect x="60" y="100" rx="3" ry="3" width="350" height="30" />
      <rect x="60" y="150" rx="3" ry="3" width="400" height="5" />
      <rect x="60" y="160" rx="3" ry="3" width="400" height="5" />

      <rect x="80" y="240" rx="0" ry="0" width="35" height="100" />
      <rect x="120" y="290" rx="0" ry="0" width="35" height="50" />
      <rect x="160" y="270" rx="0" ry="0" width="35" height="70" />
      <rect x="200" y="200" rx="0" ry="0" width="35" height="140" />

      <rect x="240" y="290" rx="0" ry="0" width="35" height="50" />
      <rect x="280" y="270" rx="0" ry="0" width="35" height="70" />
      <rect x="320" y="200" rx="0" ry="0" width="35" height="140" />

      <rect x="360" y="290" rx="0" ry="0" width="35" height="50" />
      <rect x="400" y="270" rx="0" ry="0" width="35" height="70" />

      <rect x="60" y="400" rx="3" ry="3" width="470" height="15" />
      <rect x="60" y="430" rx="3" ry="3" width="470" height="15" />
      <rect x="60" y="460" rx="3" ry="3" width="470" height="15" />
      <rect x="60" y="500" rx="3" ry="3" width="470" height="15" />
      <rect x="60" y="550" rx="3" ry="3" width="470" height="10" />

      {/* 2ND GRID  START */}

      <rect x="615" y="15" rx="3" ry="3" width="580" height="15" />
      <rect x="615" y="40" rx="3" ry="3" width="580" height="15" />
      <rect x="615" y="64" rx="3" ry="3" width="580" height="15" />
      <rect x="615" y="90" rx="3" ry="3" width="580" height="15" />
      <rect x="615" y="115" rx="3" ry="3" width="580" height="15" />

      <rect x="715" y="40" rx="0" ry="0" width="200" height="15" />
      <circle cx="750" cy="310" r="140" />
      <rect x="1020" y="200" rx="0" ry="0" width="7" height="10" />
      <rect x="1035" y="200" rx="0" ry="0" width="100" height="10" />
      <rect x="1020" y="225" rx="0" ry="0" width="7" height="10" />
      <rect x="1035" y="225" rx="0" ry="0" width="100" height="10" />
      <rect x="1020" y="250" rx="0" ry="0" width="7" height="10" />
      <rect x="1035" y="250" rx="0" ry="0" width="100" height="10" />
      <rect x="1020" y="275" rx="0" ry="0" width="7" height="10" />
      <rect x="1035" y="275" rx="0" ry="0" width="100" height="10" />
      <rect x="1020" y="300" rx="0" ry="0" width="7" height="10" />
      <rect x="1035" y="300" rx="0" ry="0" width="100" height="10" />
      <rect x="1020" y="325" rx="0" ry="0" width="7" height="10" />
      <rect x="1035" y="325" rx="0" ry="0" width="100" height="10" />
      <rect x="1020" y="350" rx="0" ry="0" width="7" height="10" />
      <rect x="1035" y="350" rx="0" ry="0" width="100" height="10" />

      <rect x="615" y="495" rx="3" ry="3" width="580" height="15" />
      <rect x="615" y="525" rx="3" ry="3" width="580" height="15" />
      <rect x="615" y="550" rx="3" ry="3" width="580" height="15" />
    </ContentLoader>
  );
};

export default DesginForGraphs;
