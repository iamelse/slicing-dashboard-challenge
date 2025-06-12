import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Card, CardContent } from "../ui/Card"

ChartJS.register(ArcElement, Tooltip, Legend)

const segments = [
    { label: "Segment One", percentage: 41, color: "#334155" },
    { label: "Segment Two", percentage: 27, color: "#64748b" },
    { label: "Segment Three", percentage: 19, color: "#94a3b8" },
    { label: "Segment Four", percentage: 13, color: "#cbd5e1" },
]

const data = {
    labels: segments.map((s) => s.label),
    datasets: [
        {
            data: segments.map((s) => s.percentage),
            backgroundColor: segments.map((s) => s.color),
            borderWidth: 0,
        },
    ],
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            callbacks: {
                label: (ctx: any) => `${ctx.label}: ${ctx.parsed}%`,
            },
        },
    },
}

export function PieChartWidget() {
    return (
        <Card className="card-hover group animate-in">
            <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center space-y-6">
                    {/* Chart */}
                    <div className="relative w-36 h-36">
                        <Pie data={data} options={options} />
                    </div>

                    {/* Legend: 4 baris (1 item per baris) */}
                    <div className="flex flex-col items-center space-y-2">
                        {segments.map((segment, i) => (
                            <div
                                key={i}
                                className="flex items-center space-x-2 text-sm group/item cursor-pointer"
                            >
                                <div
                                    className="w-4 h-4 rounded-full shadow-sm"
                                    style={{ backgroundColor: segment.color }}
                                ></div>
                                <span className="text-muted-foreground group-hover/item:text-foreground transition-colors font-medium">
                                    <span className="font-bold text-foreground">{segment.percentage}%</span> {segment.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}