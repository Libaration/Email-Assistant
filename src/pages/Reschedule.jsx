import { motion } from 'framer-motion';
import { useCallback } from 'react';
import salesforce from '../assets/icons/salesforce.svg';
import { Dashboard } from '../components/Reschedule/Dashboard';
import { Button } from '@/components/ui/button';
import { useAuth } from '../providers/AuthProvider';

export default function Reschedule() {
  const { accessToken, clientId } = useAuth();
  const MotionBox = motion.div;
  const handleClick = useCallback(() => {
    // if (process.env.NODE_ENV === "development") {
    //   localStorage.setItem("accessToken", process.env.REACT_APP_MOCK_TOKEN);
    //   return;
    // }

    window.electronAPI.oauthRedirect(clientId);
  }, [clientId]);
  console.log('accessToken in reschedule is ', accessToken);

  const loginToSalesforce = () => {
    return (
      <div className='m-8 flex justify-center flex-wrap h-full'>
        <div className='w-full flex justify-center'>
          <MotionBox className='hover:scale-110 transition-transform' whileTap={{ scale: 0.9 }}>
            <img src={salesforce} alt='Salesforce Logo' className='w-[300px] h-[300px]' onClick={handleClick} />
          </MotionBox>
        </div>
        <div className='w-full flex justify-center mt-8'>
          <p className='text-center'>
            This feature requires you to be logged into Salesforce. Your login will be used to authenticate and retrieve
            data from Salesforce.
          </p>
        </div>
        <div className='w-full flex justify-center mt-4'>
          <Button onClick={handleClick}>Login to Salesforce to Continue</Button>
        </div>
      </div>
    );
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
      className='w-full'
    >
      {accessToken ? <Dashboard /> : loginToSalesforce()}
    </MotionBox>
  );
}
