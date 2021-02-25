import React from 'react';

// Libraries
import { makeStyles } from '@material-ui/core';

// Componentes
import CustomTable from '../shared/Table';

// Assets
import { PARTICIPATE } from '../../assets/placeholder/participate';

function Participate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CustomTable
        title='Incentives'
        rows={PARTICIPATE.INCENTIVES.TABLE.ROWS}
        headings={PARTICIPATE.INCENTIVES.TABLE.HEADINGS}
        columns={['column2', 'column3', 'column4', 'column5', 'column6']}
      />
    </div>
  );
}

export default Participate;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '250px',
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '30px',
  },
  title: {
    fontFamily: 'Zilla Slab',
    textAlign: 'center',
  },
  horizontalLine: {
    width: '20%',
    height: '1px',
    backgroundColor: '#ffffff',
    opacity: 0.3,
    marginTop: '10px',
  },
  tableContainer: {
    backgroundColor: '#232323',
    marginTop: 50,
    padding: 20,
  },
  table: {
    minWidth: 500,
  },
  tableCell: {
    minWidth: '150px',
    color: theme.palette.common.white,
    fontSize: '22px',
    lineHeight: '29px',
    fontFamily: 'Zilla Slab',
    borderBottom: '1px solid rgba(255,255,255, 0.1)',
  },
  tableCellHeadingRow: {
    borderBottom: '1px solid rgba(255,255,255, 0.4)',
    '&:first-child': {
      borderRight: '1px solid rgba(255,255,255, 0.4)',
    },
  },
  tableCellHeadingColumn: {
    borderRight: '1px solid rgba(255,255,255, 0.4)',
    '&:last-child': {
      borderBottom: '0px solid rgba(255,255,255, 0.1)',
    },
  },
  tableCellLastRow: {
    borderBottom: '0px solid rgba(255,255,255, 0.1)',
  },
}));
