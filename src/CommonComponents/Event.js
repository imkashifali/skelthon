import React from "react";
import ContentLoader from "react-content-loader";

const Event = (props) => (
  <ContentLoader viewBox="0 0 600 170" {...props}>
    <rect x="50" y="56" width="500" height="24" rx="3" />
    <rect x="50" y="86" width="200" height="12" rx="3" />
    <rect x="50" y="104" width="500" height="6" rx="3" />
    <rect x="50" y="116" width="370" height="6" rx="3" />
    <rect x="50" y="126" width="180" height="12" rx="3" />
    <rect x="270" y="145" width="60" height="20" rx="6" />
  </ContentLoader>
);

export default Event;
