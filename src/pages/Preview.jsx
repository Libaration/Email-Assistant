import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Preview = ({ data }) => {
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (data) {
    console.log(data);
  }
  return (
    <div className='preview-container'>
      <div className='dash-widgets mt-6 pt-6 pl-4 pr-4 pb-6 flex [text-align-last:justify] bg-primary'>
        <h1>Preview</h1>
      </div>
      <div className='bg-white'>.</div>
    </div>
  );
};
export default Preview;
