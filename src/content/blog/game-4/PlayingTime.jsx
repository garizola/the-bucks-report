import { PieChart } from '@mui/x-charts/PieChart';

const PlayingTime = () => {
  return (
    <div className="w-full pb-10 sm:px-4">
    <PieChart
    height={400}
    colors={['#10451d', '#155d27', '#1a7431', '#208b3a', '#25a244', '#2dc653', '#4ad66d', '#6ede8a', '#0077c0']}
    margin={{ top: 100,  left: 100, right:100 }}
    series={[
      {
        data: [
          { id: 0, value: 39.05, label: 'Giannis Antekounmpo' },
          { id: 1, value: 35.32, label: 'Damian Lillard' },
          { id: 3, value: 37.26, label: 'Gary Trent Jr.' },
          { id: 4, value: 31.54, label: 'Taurean Prince' },
          { id: 5, value: 19.17, label: 'Bobby Portis' },
          { id: 6, value: 15.24, label: 'Pat Connaughton' },
          { id: 7, value: 9.44, label: 'Delon Wright' },
          { id: 8, value: 2.44, label: 'A.J. Green' },
          { id: 9, value: 8.31, label: 'Andre Jackson Jr.' },
          
        ],
      },
    ]}
    slotProps={{
      legend: {
        direction: 'row',
        position: { vertical: 'top', horizontal: 'middle' },
        labelStyle: {
          fontSize: 12,
          fill: 'white',
        },
      },
    }}
  />
  </div>
  );
};

export default PlayingTime;
