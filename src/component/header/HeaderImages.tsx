import * as React from 'react';

export default function ImageMasonry() {
  return (
    <div className='flex pt-10 max-w-screen-sm'>
            <img
              src='/1.jpeg'
              alt={'cat'}
              loading="lazy"
              className='flex opacity-60 hover:opacity-100'
              style={{
                borderRadius: 10,              
                display: 'block',
                width: '100%',
              }}
            />

    </div>
  );
}
