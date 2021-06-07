import React, { lazy } from 'react';

function loader( component, attempts, timeout ) {
  return new Promise((resolve, reject) => {
    component()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (attempts === 1) {
            reject(error);
            return;
          }
          loader(component, attempts - 1, timeout)
            .then(resolve, reject);
        }, timeout);
      });
  });
}

export default function(fn, times = 500, timeout = 1500) {
  return lazy(() => loader(fn, times, timeout))
};