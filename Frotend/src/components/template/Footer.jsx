import './Footer.css';
import React from 'react';

export default (props) => (
  <footer className='footer'>
    <span>
      Desenvolvido com <i className='fa fa-heart text-danger'></i> por
      <strong>
        {' '}
        Michael <span className='text-danger'>W.</span> Lopes
      </strong>
    </span>
  </footer>
);
