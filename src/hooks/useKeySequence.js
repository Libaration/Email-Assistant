import { useEffect, useRef } from 'react';

const useKeySequence = () => {
  const keySequenceRef = useRef([]);
  const callback = () => {
    window.electronAPI.kioskMode();
  };

  const handleKeyDown = (event) => {
    if (event.key !== 'r' && event.key !== 'l' && event.key !== '1' && event.key !== '2' && event.key !== 'ArrowLeft'
      && event.key !== 'ArrowDown' && event.key !== 'ArrowRight' && event.key !== 'ArrowUp') {
      keySequenceRef.current = [];
      return;
    }
    keySequenceRef.current = [...keySequenceRef.current, event.key];
    if (keySequenceRef.current.length > 12) {
      keySequenceRef.current = keySequenceRef.current.slice(1);
    }

    const sequence = keySequenceRef.current.join('');
    if (sequence === 'r1r2l1l2ArrowLeftArrowDownArrowRightArrowUp') {
      callback();
      keySequenceRef.current = [];
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
};

export default useKeySequence;
