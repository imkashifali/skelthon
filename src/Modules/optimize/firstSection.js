import React from "react";
import ContentLoader from "react-content-loader";

const Headers = (props) => (
  <ContentLoader viewBox="0 0 400 60" {...props}>
    <circle cx="21" cy="31" r="15" />
    <rect x="33" y="29" rx="4" ry="4" width="80" height="5" />

    <circle cx="120" cy="31" r="15" />
    <rect x="120" y="29" rx="4" ry="4" width="90" height="5" />

    <circle cx="220" cy="31" r="15" />
    <rect x="220" y="29" rx="4" ry="4" width="90" height="5" />

    <circle cx="320" cy="31" r="15" />
    <rect x="220" y="29" rx="4" ry="4" width="90" height="5" />
  </ContentLoader>
);

export default Headers;
