import React from "react";
import ContentLoader from "react-content-loader";

const Fresher = (props) => (
  <ContentLoader viewBox="0 0 500 420" height={420} width={400} {...props}>
    <rect x="32" y="17" rx="0" ry="0" width="360" height="400" />
  </ContentLoader>
);

export default Fresher;
