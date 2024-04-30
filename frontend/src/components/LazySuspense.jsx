import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import loader from '../assets/Loader/loader.gif'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const LazySuspense = ({ component: Component, ...rest }) => {
  return (

    <ErrorBoundary>
    <Suspense fallback={
      <div className='flex w-screen h-screen justify-center items-center'>
    <img className="" src={loader} alt='loader' />
    </div>
  }>
      <Component {...rest} />
    </Suspense>
    </ErrorBoundary>
  )
}

LazySuspense.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default LazySuspense;
