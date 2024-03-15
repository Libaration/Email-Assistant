import React, { useRef } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

export default function Auction(props) {
  const titleRef = useRef(null);
  const handleTitleClick = () => {
    if (titleRef.current) {
      const range = document.createRange();
      range.selectNodeContents(titleRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };
  return (
    <Card className='dark flex p-1 flex-col justify-center items-center no-drag ml-2 mr-2 mb-2'>
      <CardTitle ref={titleRef} className='text-sm font-medium flex justify-between' onClick={handleTitleClick}>
        {props.title}
      </CardTitle>
      <CardContent className='text-2xl font-bold p-1'>
        <HoverCard className='dark'>
          <HoverCardTrigger>
            <img src={props.image} className='w-[370px] h-[380px] object-cover rounded-lg' />
          </HoverCardTrigger>
          <HoverCardContent className='dark bg-primary flex flex-col'>
            <span className='text-sm'>{props.title}</span>
            <span className='text-xs font-light'>{props.preview}</span>
          </HoverCardContent>
        </HoverCard>
      </CardContent>
    </Card>
  );
}
