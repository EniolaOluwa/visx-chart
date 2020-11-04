import React from 'react';
import ReactDOM from 'react-dom';
import ParentSize from '@visx/responsive/lib/components/ParentSize';

import TemperatureBarStack from './TemperatureBarStack';

ReactDOM.render(
  <ParentSize>
    {({ width, height }) => (
      <TemperatureBarStack width={width} height={height} />
    )}
  </ParentSize>,
  document.getElementById('root')
);
