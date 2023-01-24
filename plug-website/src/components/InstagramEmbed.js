import React from 'react';

const InstagramEmbed = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default InstagramEmbed;
