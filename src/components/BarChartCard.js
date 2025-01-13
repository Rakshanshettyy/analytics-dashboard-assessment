import React from "react";
import {
	BarChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Bar,
	Cell,
	ResponsiveContainer,
} from "recharts";

const COLORS = [
	"#0088FE",
	"#00C49F",
	"#FFBB28",
	"#FF8042",
	"#8884d8",
	"#82ca9d",
	"#ffc658",
	"#a4de6c",
	"#d0ed57",
	"#83a6ed",
];

const BarChartCard = ({ title, data }) => (
	<div className='bg-white rounded-lg shadow-md p-6'>
		<h3 className='text-lg font-semibold mb-4 text-center'>{title}</h3>
		<div className='h-[400px] flex justify-center items-center'>
			{data && data.length > 0 ? (
				<ResponsiveContainer width='100%' height='100%'>
					<BarChart
						data={data}
						margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
					>
						<CartesianGrid strokeDasharray='3 3' opacity={0.3} />
						<XAxis
							dataKey='name'
							angle={-45}
							textAnchor='end'
							height={70}
							tick={{ fill: "#666", fontSize: 12 }}
							stroke='#888'
						/>
						<YAxis tick={{ fill: "#666", fontSize: 12 }} stroke='#888' />
						<Tooltip
							formatter={(value) => `${value} units`}
							contentStyle={{
								backgroundColor: "#f9f9f9",
								borderRadius: "8px",
								border: "1px solid #ccc",
							}}
							itemStyle={{ color: "#333" }}
						/>
						<Bar dataKey='value' animationDuration={800} radius={[5, 5, 0, 0]}>
							{data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			) : (
				<p className='text-gray-500 text-center text-lg'>No data available</p>
			)}
		</div>
	</div>
);

export default BarChartCard;
