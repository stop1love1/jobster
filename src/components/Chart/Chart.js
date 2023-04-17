import {
    Bar,
    Area,
    BarChart,
    AreaChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

function Chart({ data, type = 'bar' }) {
    const Chart = type === 'bar' ? BarChart : AreaChart;
    const Type = type === 'bar' ? Bar : Area;

    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>
                <Chart data={data} margin={{ top: 40, bottom: 25 }}>
                    <CartesianGrid strokeDasharray="3 3 " />
                    <XAxis dataKey="date" fill="#3b82f6" />
                    <YAxis dataKey="count" />
                    <Tooltip />
                    <Type dataKey="count" name="Count" fill="#3b82f6" barSize={75} />
                </Chart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
