import React, { useEffect } from 'react';
import { Await, useParams } from 'react-router-dom';
import Template from '@/components/Preview/Template';
import logo from '../assets/icons/logo.png';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

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
    <>
      <div className='mt-6 pt-6 pl-4 pr-4 pb-6 flex bg-primary items-center w-full align-middle'>
        <div className='branding flex justify-start w-full items-center'>
          <img src={logo} alt='logo' className='w-auto h-6 ml-2 mr-2' />
          <h1 className='leading-2 font-semibold'>Ashland Auction Group</h1>
          <h2 className='leading-2 text-lg ml-2 self-center'>|</h2>
          <h3 className='leading-2 text-sm ml-2 self-center'>Listing Composer</h3>
        </div>
        <div className='version-info flex items-center justify-end'>
          <h4 className='leading-2 text-xs ml-1 self-center text-secondary-accent'>BETA</h4>
          <h4 className='leading-2 text-xs ml-1 self-center text-secondary-accent'>{process.env.REACT_APP_VERSION}</h4>
          <ExclamationTriangleIcon className='ml-4 mr-2 w-4 h-4 self-center text-secondary-accent' />
        </div>
      </div>
      <div className='bg-white'>
        <Template data={data} />;
      </div>
    </>
  );
};
export default Preview;
