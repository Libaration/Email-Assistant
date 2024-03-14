import React from 'react';

export default function Auction(props) {
  return (
    <div className='flex p-1 flex-col justify-center items-center no-drag'>
      {/* <a
        href={`https://www.ashlandauction.com/auctions/${props.auction_id}`}
      > */}
      <h2 className='text-sm p-2'>{props.title}</h2>
      <img src={props.image} className='w-[370px] h-[380px] object-cover' />
      {/* </a> */}
    </div>
  );
}
