export {bytexTheme} from './bytex-theme';
// export {Provider} from './Provider';

import React from 'react';


export const Provider = ({children}) => (
    <div
        style={{
          width: '100vw',
          height: '100vh',
          position: 'relative'
        }}>
      {children}
      <div
       style={{
         position: 'absolute',
         bottom: '10px',
         right: '10px',
       }}
      >
        <img
            src="https://www.google.com/a/cpanel/bytex.ro/images/logo.gif"
            width={100}
        />
      </div>
    </div>
);
