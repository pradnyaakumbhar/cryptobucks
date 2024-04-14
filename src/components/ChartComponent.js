import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function CustomTooltip({ payload, label, active, currency }) {
  if (active && payload && payload.length > 0) {
    return (
      <div className="custom-tooltip">
        <p className="label text-sm text-cyan">
          {`${label} : ${new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 5,
          }).format(payload[0].value)}`}
        </p>
      </div>
    );
  }

  return null;
}

const ChartComponent = ({ data, currency, type }) => {
  return (
    <ResponsiveContainer height={'90%'}>
      <LineChart width={400} height={400} data={data}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#14ffec"
          strokeWidth={'1px'}
        />
        <CartesianGrid stroke="#323232" />
        <XAxis dataKey="date" hide />
        <YAxis dataKey={type} hide domain={['auto', 'auto']} />
        <Tooltip
          content={<CustomTooltip />}
          currency={currency}
          cursor={false}
        />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartComponent;
