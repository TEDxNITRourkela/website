import React from 'react';

// Libraries
import {
  makeStyles,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

function CustomTable({ title = 'Incentives', rows, headings, columns }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h2'>
        {title}
      </Typography>

      <div className={classes.horizontalLine} />

      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label='incentives table'>
          <TableHead>
            <TableRow>
              {headings.map((heading, index) => (
                <TableCell
                  // eslint-disable-next-line
                  key={index}
                  // eslint-disable-next-line
                  className={`${classes.tableCell} ${classes.tableCellHeadingRow}`}
                  align='center'
                >
                  {heading}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              // eslint-disable-next-line
              <TableRow key={index}>
                <TableCell
                  className={
                    index !== 4
                      ? `${classes.tableCell} ${classes.tableCellHeadingColumn}`
                      : // eslint-disable-next-line
                        `${classes.tableCell} ${classes.tableCellHeadingColumn} ${classes.tableCellLastRow}`
                  }
                  component='th'
                  scope='row'
                  align='center'
                >
                  {row.column1}
                </TableCell>

                {columns.map((column) => (
                  <TableCell
                    key={column}
                    className={
                      index !== 4
                        ? classes.tableCell
                        : `${classes.tableCell} ${classes.tableCellLastRow}`
                    }
                    align='center'
                  >
                    {row[column]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CustomTable;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '250px',
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '100px',
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
