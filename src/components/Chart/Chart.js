import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function Chart() {
    const data = [
        {
            name: 'Jul 2021',
            count: 1,
        },
        {
            name: 'Aug 2021',
            count: 4,
        },
        {
            name: 'Sep 2021',
            count: 3,
        },
        {
            name: 'Oct 2021',
            count: 2,
        },
        {
            name: 'Nov 2021',
            count: 2,
        },
        {
            name: 'Dec 2021',
            count: 5,
        },
    ];
    return (
        <div>
            <ResponsiveContainer width="100%" height={320}>
                <BarChart data={data} margin={{ top: 40, bottom: 25 }}>
                    <CartesianGrid strokeDasharray="3 3 " />
                    <XAxis dataKey="name" fill="#3b82f6" />
                    <YAxis dataKey="count" />
                    <Tooltip />
                    <Legend align="center" />
                    <Bar dataKey="count" name="Count" fill="#3b82f6" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
