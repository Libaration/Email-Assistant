import './Template.style.css';
import React from 'react';
import { Carousel } from './Carousel';

const Template = ({ lot }) => {
  console.log(lot);
  const renderDynamicFields = (index, fields, innerTag, image) => {
    if (typeof fields[index]?.data?.value === 'string') {
      return (
        <div className='dynamic-field'>
          {image && <img src={image} alt='image' />}
          {innerTag ? (
            React.createElement(innerTag, {}, fields[index]?.data?.value)
          ) : (
            <p>{fields[index]?.data?.value}</p>
          )}
        </div>
      );
    } else if (fields[index]?.data?.value) {
      return fields[index]?.data?.value.map((item, idx) => (
        <div className='dynamic-field' key={idx}>
          {innerTag ? React.createElement(innerTag, {}, item) : <p>{item}</p>}
        </div>
      ));
    }
  };

  return (
    <div className='container text-black no-drag flex' id='app'>
      <div className='lotView online grid'>
        <div className='lot-title'>
          <h2>{lot.title}</h2>
        </div>
        <div className='fields max-h-[98px] max-w-[613px]'>
          <div className='highlights'>
            <div className='dynamic-fields'>{renderDynamicFields(24, lot.fields, 'h4')}</div>
          </div>
          <div className='property-fields'>
            <div className='dynamic-fields'>
              {renderDynamicFields(
                11,
                lot.fields,
                'h3',
                'https://d3j17a2r8lnfte.cloudfront.net/ash/2021/10/oXHizv16cLfddDbqQcmaPA4T.svg',
              )}
              {renderDynamicFields(
                12,
                lot.fields,
                'h3',
                'https://d3j17a2r8lnfte.cloudfront.net/ash/2021/10/Rr-7qHSRc2WOkTfViv5an-ug.svg',
              )}
            </div>
          </div>
        </div>
        <div className='photos max-w-[613px] max-h-[519px]'>
          <Carousel images={lot.images} />
        </div>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </div>
    </div>
  );
};
export default Template;
