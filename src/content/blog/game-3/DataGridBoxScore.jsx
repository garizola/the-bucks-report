import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
// import { Box, ThemeProvider, createTheme } from '@mui/system';

const columns = [
  { field: 'Name', headerName: 'Name', width: 150 },
  { field: 'MP', headerName: 'MP', width: 100 },
  { field: 'FG', headerName: 'FG', width: 100 },
  { field: 'FGA', headerName: 'FGA', width: 110 },
  { field: 'FG%', headerName: 'FG%', width: 110 },
  { field: '3P', headerName: '3P', width: 100 },
  { field: '3PA', headerName: '3PA', width: 110 },
  { field: '3P%', headerName: '3P%', width: 110 },
  { field: 'FT', headerName: 'FT', width: 100 },
  { field: 'FTA', headerName: 'FTA', width: 110 },
  { field: 'FT%', headerName: 'FT%', width: 110 },
  { field: 'ORB', headerName: 'ORB', width: 110 },
  { field: 'DRB', headerName: 'DRB', width: 110 },
  { field: 'TRB', headerName: 'TRB', width: 110 },
  { field: 'AST', headerName: 'AST', width: 110 },
  { field: 'STL', headerName: 'STL', width: 110 },
  { field: 'BLK', headerName: 'BLK', width: 110 },
  { field: 'TOV', headerName: 'TOV', width: 110 },
  { field: 'PF', headerName: 'PF', width: 100 },
  { field: 'PTS', headerName: 'PTS', width: 110 },
  { field: 'GmSc', headerName: 'GmSc', width: 110 },
  { field: '+/-', headerName: '+/-', width: 110 },
];

const rows = [
  {
    id: 1, Name: 'Taurean Prince', MP: '33:57', FG: 1, FGA: 4, 'FG%': .250, '3P': 1, '3PA': 2, '3P%': .500, 
    FT: 0, FTA: 0, 'FT%': 0, ORB: 2, DRB: 5, TRB: 7, AST: 1, STL: 1, BLK: 0, TOV: 2, PF: 1, PTS: 3, GmSc: 2.8, '+/-': -5
  },
  {
    id: 2, Name: 'Giannis Antetokounmpo', MP: '33:19', FG: 7, FGA: 11, 'FG%': .636, '3P': 0, '3PA': 0, '3P%': 0, 
    FT: 8, FTA: 11, 'FT%': .727, ORB: 1, DRB: 11, TRB: 12, AST: 7, STL: 1, BLK: 1, TOV: 4, PF: 3, PTS: 22, GmSc: 21.3, '+/-': -11
  },
  {
    id: 3, Name: 'Damian Lillard', MP: '32:04', FG: 5, FGA: 13, 'FG%': .385, '3P': 1, '3PA': 7, '3P%': .143, 
    FT: 10, FTA: 11, 'FT%': .909, ORB: 1, DRB: 3, TRB: 4, AST: 4, STL: 0, BLK: 0, TOV: 4, PF: 2, PTS: 21, GmSc: 13.1, '+/-': -9
  },
  {
    id: 4, Name: 'Brook Lopez', MP: '28:58', FG: 6, FGA: 9, 'FG%': .667, '3P': 3, '3PA': 5, '3P%': .600, 
    FT: 0, FTA: 0, 'FT%': 0, ORB: 0, DRB: 4, TRB: 4, AST: 0, STL: 2, BLK: 0, TOV: 1, PF: 1, PTS: 15, GmSc: 12.9, '+/-': -2
  },
  {
    id: 5, Name: 'Gary Trent Jr.', MP: '27:54', FG: 2, FGA: 8, 'FG%': .250, '3P': 2, '3PA': 6, '3P%': .333, 
    FT: 3, FTA: 4, 'FT%': .750, ORB: 0, DRB: 0, TRB: 0, AST: 2, STL: 0, BLK: 0, TOV: 2, PF: 4, PTS: 9, GmSc: 1.6, '+/-': -3
  },
  {
    id: 6, Name: 'Bobby Portis', MP: '26:51', FG: 7, FGA: 14, 'FG%': .500, '3P': 1, '3PA': 4, '3P%': .250, 
    FT: 1, FTA: 1, 'FT%': 1.000, ORB: 2, DRB: 8, TRB: 10, AST: 2, STL: 0, BLK: 1, TOV: 0, PF: 0, PTS: 16, GmSc: 14.9, '+/-': -21
  },
  {
    id: 7, Name: 'Pat Connaughton', MP: '17:04', FG: 1, FGA: 4, 'FG%': .250, '3P': 1, '3PA': 3, '3P%': .333, 
    FT: 0, FTA: 0, 'FT%': 0, ORB: 1, DRB: 2, TRB: 3, AST: 2, STL: 0, BLK: 0, TOV: 1, PF: 2, PTS: 3, GmSc: 1.5, '+/-': -14
  },
  {
    id: 8, Name: 'Delon Wright', MP: '13:17', FG: 0, FGA: 2, 'FG%': .000, '3P': 0, '3PA': 1, '3P%': .000, 
    FT: 0, FTA: 0, 'FT%': 0, ORB: 0, DRB: 2, TRB: 2, AST: 0, STL: 0, BLK: 1, TOV: 1, PF: 1, PTS: 0, GmSc: -1.5, '+/-': -13
  },
  {
    id: 9, Name: 'A.J. Green', MP: '12:52', FG: 1, FGA: 4, 'FG%': .250, '3P': 1, '3PA': 4, '3P%': .250, 
    FT: 2, FTA: 2, 'FT%': 1.000, ORB: 0, DRB: 0, TRB: 0, AST: 1, STL: 0, BLK: 0, TOV: 1, PF: 0, PTS: 5, GmSc: 2.3, '+/-': -3
  },
  {
    id: 10, Name: 'MarJon Beauchamp', MP: '3:26', FG: 1, FGA: 3, 'FG%': .333, '3P': 0, '3PA': 1, '3P%': .000, 
    FT: 2, FTA: 2, 'FT%': 1.000, ORB: 0, DRB: 0, TRB: 0, AST: 0, STL: 1, BLK: 0, TOV: 2, PF: 2, PTS: 4, GmSc: 0.5, '+/-': +4
  },
  // Additional players follow the same format
];


const DataGridBoxScore = () => {
  return (
    <div className=''>
      <DataGrid
    rows={rows}
    columns={columns}
    initialState={{
      pagination: {
        paginationModel: {
          pageSize: 8,
        },
      },
    }}
    pageSizeOptions={[9]}
    
    
  /></div>
  )
}

export default DataGridBoxScore