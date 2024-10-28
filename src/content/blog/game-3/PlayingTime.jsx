import { PieChart } from '@mui/x-charts/PieChart';

const PlayingTime = () => {
  return (
    <div className="w-full pb-10 sm:px-4">
    <PieChart
    height={400}
    colors={['#10451d', '#155d27', '#1a7431', '#208b3a', '#25a244', '#2dc653', '#4ad66d', '#6ede8a']}
    margin={{ top: 100,  left: 100, right:100 }}
    series={[
      {
        data: [
          { id: 0, value: 33.19, label: 'Giannis Antekounmpo' },
          { id: 1, value: 32.04, label: 'Damian Lillard' },
          { id: 3, value: 27.54, label: 'Gary Trent Jr.' },
          { id: 4, value: 33.57, label: 'Taurean Prince' },
          { id: 5, value: 26.51, label: 'Bobby Portis' },
          { id: 6, value: 17.04, label: 'Pat Connaughton' },
          { id: 7, value: 13.17, label: 'Delon Wright' },
          { id: 8, value: 12.52, label: 'A.J. Bird' },
          
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
