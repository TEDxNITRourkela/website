import React from 'react';

// Componentes
import CustomTable from '../shared/Table';

// Assets
import { PARTICIPATE } from '../../assets/placeholder/participate';

function Participate() {
  return (
    <CustomTable
      title='Incentives'
      rows={PARTICIPATE.INCENTIVES.TABLE.ROWS}
      headings={PARTICIPATE.INCENTIVES.TABLE.HEADINGS}
      columns={['column2', 'column3', 'column4', 'column5', 'column6']}
    />
  );
}

export default Participate;
