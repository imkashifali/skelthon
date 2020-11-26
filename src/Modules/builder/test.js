import React from 'react'
import ContentLoader from 'react-content-loader'

const GoogleMap = props => {
  return (
    <ContentLoader viewBox="0 0 500 280" height={280} width={500} {...props}>
      <rect x="10" y="90" rx="0" ry="4" width="140" height="55" />
      <rect x="160" y="90" rx="0" ry="0" width="140" height="25" />
      <rect x="320" y="90" rx="0" ry="0" width="140" height="25" />
    </ContentLoader>
  )
}


export default GoogleMap