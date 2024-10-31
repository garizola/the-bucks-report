import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Box'; 


const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'MP', headerName: 'MP', width: 120 },
    { field: 'TS%', headerName: 'TS%', width: 110 },
    { field: 'eFG%', headerName: 'eFG%', width: 120 },
    { field: '3PAr', headerName: '3PAr', width: 110 },
    { field: 'FTr', headerName: 'FTr', width: 110 },
    { field: 'ORB%', headerName: 'ORB%', width: 120 },
    { field: 'DRB%', headerName: 'DRB%', width: 120 },
    { field: 'TRB%', headerName: 'TRB%', width: 120 },
    { field: 'AST%', headerName: 'AST%', width: 120 },
    { field: 'STL%', headerName: 'STL%', width: 120 },
    { field: 'BLK%', headerName: 'BLK%', width: 120 },
    { field: 'TOV%', headerName: 'TOV%', width: 120 },
    { field: 'USG%', headerName: 'USG%', width: 120 },
    { field: 'ORtg', headerName: 'ORtg', width: 120 },
    { field: 'DRtg', headerName: 'DRtg', width: 120 },
    { field: 'BPM', headerName: 'BPM', width: 110 },
  ];
  
  const rows = [
    {
      id: 1, name: 'Taurean Prince', MP: '33:57', 'TS%': .375, 'eFG%': .375, '3PAr': .500, 'FTr': .000, 'ORB%': 6.7,
      'DRB%': 14.7, 'TRB%': 11.0, 'AST%': 4.5, 'STL%': 1.4, 'BLK%': 0.0, 'TOV%': 33.3, 'USG%': 8.0, 'ORtg': 74, 'DRtg': 119, 'BPM': -9.4
    },
    {
      id: 2, name: 'Giannis Antetokounmpo', MP: '33:19', 'TS%': .694, 'eFG%': .636, '3PAr': .000, 'FTr': 1.000, 'ORB%': 3.4,
      'DRB%': 33.0, 'TRB%': 19.2, 'AST%': 44.0, 'STL%': 1.5, 'BLK%': 3.1, 'TOV%': 20.2, 'USG%': 27.1, 'ORtg': 123, 'DRtg': 110, 'BPM': 6.2
    },
    {
      id: 3, name: 'Damian Lillard', MP: '32:04', 'TS%': .589, 'eFG%': .423, '3PAr': .538, 'FTr': .846, 'ORB%': 3.6,
      'DRB%': 9.4, 'TRB%': 6.7, 'AST%': 23.5, 'STL%': 0.0, 'BLK%': 0.0, 'TOV%': 18.3, 'USG%': 30.9, 'ORtg': 107, 'DRtg': 124, 'BPM': -6.5
    },
    {
      id: 4, name: 'Brook Lopez', MP: '28:58', 'TS%': .833, 'eFG%': .833, '3PAr': .556, 'FTr': .000, 'ORB%': 0.0,
      'DRB%': 13.8, 'TRB%': 7.4, 'AST%': 0.0, 'STL%': 3.4, 'BLK%': 0.0, 'TOV%': 10.0, 'USG%': 15.7, 'ORtg': 132, 'DRtg': 114, 'BPM': 3.7
    },
    {
      id: 5, name: 'Gary Trent Jr.', MP: '27:54', 'TS%': .461, 'eFG%': .375, '3PAr': .750, 'FTr': .500, 'ORB%': 0.0,
      'DRB%': 0.0, 'TRB%': 0.0, 'AST%': 11.6, 'STL%': 0.0, 'BLK%': 0.0, 'TOV%': 17.0, 'USG%': 19.2, 'ORtg': 85, 'DRtg': 127, 'BPM': -13.4
    },
    {
      id: 6, name: 'Bobby Portis', MP: '26:51', 'TS%': .554, 'eFG%': .536, '3PAr': .286, 'FTr': .071, 'ORB%': 8.5,
      'DRB%': 29.8, 'TRB%': 19.9, 'AST%': 17.5, 'STL%': 0.0, 'BLK%': 3.9, 'TOV%': 0.0, 'USG%': 24.4, 'ORtg': 120, 'DRtg': 115, 'BPM': 2.0
    },
    {
      id: 7, name: 'Pat Connaughton', MP: '17:04', 'TS%': .375, 'eFG%': .375, '3PAr': .750, 'FTr': .000, 'ORB%': 6.7,
      'DRB%': 11.7, 'TRB%': 9.4, 'AST%': 18.6, 'STL%': 0.0, 'BLK%': 0.0, 'TOV%': 20.0, 'USG%': 13.3, 'ORtg': 87, 'DRtg': 123, 'BPM': -8.8
    },
    {
      id: 8, name: 'Delon Wright', MP: '13:17', 'TS%': .000, 'eFG%': .000, '3PAr': .500, 'FTr': .000, 'ORB%': 0.0,
      'DRB%': 15.1, 'TRB%': 8.0, 'AST%': 0.0, 'STL%': 0.0, 'BLK%': 7.9, 'TOV%': 33.3, 'USG%': 10.3, 'ORtg': 0, 'DRtg': 118, 'BPM': -15.7
    },
    {
      id: 9, name: 'A.J. Green', MP: '12:52', 'TS%': .512, 'eFG%': .375, '3PAr': 1.000, 'FTr': .500, 'ORB%': 0.0,
      'DRB%': 0.0, 'TRB%': 0.0, 'AST%': 12.7, 'STL%': 0.0, 'BLK%': 0.0, 'TOV%': 17.0, 'USG%': 20.8, 'ORtg': 94, 'DRtg': 127, 'BPM': -9.9
    },
    {
      id: 10, name: 'MarJon Beauchamp', MP: '3:26', 'TS%': .515, 'eFG%': .333, '3PAr': .333, 'FTr': .667, 'ORB%': 0.0,
      'DRB%': 0.0, 'TRB%': 0.0, 'AST%': 0.0, 'STL%': 14.3, 'BLK%': 0.0, 'TOV%': 34.0, 'USG%': 77.8, 'ORtg': 67, 'DRtg': 93, 'BPM': -29.1
    },
    // Additional rows follow the same format
  ];



const AdvancedBS = () => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
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
    
    
  /></Box>
  )
}

export default AdvancedBS