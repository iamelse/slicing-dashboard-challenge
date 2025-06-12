import { Card, CardContent, CardHeader } from "../ui/Card"
import { Button } from "../ui/Button"
import { MoreHorizontal } from "lucide-react"

import {
    Chart as ChartJS,
    LineElement,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Filler,
} from "chart.js"
import { Line, Bar } from "react-chartjs-2"

// Register chart components
ChartJS.register(
    LineElement,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Filler
)

// Props for chart widget
interface ChartWidgetProps {
    title: string
    value: string
    color: string
    type: "line" | "bar"
}

// Dummy data
const labels = ["XYZ", "XYZ", "XYZ", "XYZ", "YZX", "YXZ"]
const chartData = [400, 1800, 300, 2500, 700, 1600] // 0–3000 range

export function ChartWidget({ title, value, color, type }: ChartWidgetProps) {
    const data = {
        labels,
        datasets: [
            {
                label: "Graph",
                data: chartData,
                borderColor: "#10B981", // emerald-500
                backgroundColor:
                    type === "line"
                        ? "rgba(16, 185, 129, 0.1)"
                        : chartData.map((_, i) => (i === 4 ? "#10B981" : "#2D2F36")),
                fill: type === "line",
                tension: 0.4,
                pointRadius: 0,
                barThickness: 20,
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context: any) => `${context.raw.toLocaleString()}`,
                },
                backgroundColor: "#111",
                titleColor: "#fff",
                bodyColor: "#fff",
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    color: "#333",
                    font: {
                        size: 12,
                        weight: "500",
                    },
                },
            },
            y: {
                beginAtZero: true,
                max: 3000,
                grid: {
                    color: "#ddd",
                    lineWidth: 1,
                },
                ticks: {
                    color: "#333",
                    stepSize: 1000,
                    callback: (value: number) => `${value / 1000}K`,
                    font: {
                        size: 12,
                        weight: "500",
                    },
                },
            },
        },
    }

    return (
        <Card className="group animate-in border border-slate-200 card-hover">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {title}
                    </p>
                    <p className={`text-2xl font-bold ${color}`}>{value}</p>
                </div>
                <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                </Button>
            </CardHeader>

            <CardContent className="h-44 mt-2">
                {type === "line" ? (
                    <Line data={data} options={options} />
                ) : (
                    <Bar data={data} options={options} />
                )}
            </CardContent>
        </Card>
    )
}