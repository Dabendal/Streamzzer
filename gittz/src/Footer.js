import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: 'black' }}>
      <div className='container p-4'></div>

      <div className='text-center text-white p-3' style={{ backgroundColor: 'black' }}>
        © 2022 Copyright:
        <a className='text-white' href=''>
          Streamzzer
        </a>
      </div>
    </MDBFooter>
  );
}