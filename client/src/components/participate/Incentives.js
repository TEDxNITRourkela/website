import React from 'react';

// Componentes
import CustomTable from '../shared/Table';

// Assets
import { PARTICIPATE } from '../../assets/placeholder/participate';

function Incentives({ title }) {
  return (
    <CustomTable
      title={title}
      rows={PARTICIPATE.INCENTIVES.TABLE.ROWS}
      headings={PARTICIPATE.INCENTIVES.TABLE.HEADINGS}
      columns={['column2', 'column3', 'column4', 'column5', 'column6']}
    />
  );
}

export default Incentives;
