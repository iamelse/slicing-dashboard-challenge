import { Header } from "./components/layout/Header"
import { Sidebar } from "./components/layout/Sidebar"
import { ChartWidget } from "./components/widgets/ChartWidget"
import { PieChartWidget } from "./components/widgets/PieChartWidget"
import { CalendarWidget } from "./components/widgets/CalendarWidget"
import { FileTable } from "./components/widgets/FileTable"
import { TaskForm } from "./components/widgets/TaskForm"
import { ActivityFeed } from "./components/widgets/ActivityFeed"
import { ProgressWidgets } from "./components/widgets/ProgressWidgets"
import { NotificationBanner } from "./components/NotificationBanner"
import { EngagementRateWidget } from "./components/widgets/EngagementRateWidget"

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <Header />

            <div className="flex flex-1 justify-center">
                <Sidebar />

                <main className="grid grid-cols-12 gap-6 px-4 md:px-12 py-4 lg:py-10 w-full">

                    {/* === LEFT COLUMN (2/3) === */}
                    <div className="col-span-12 lg:col-span-8 space-y-6">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 lg:col-span-6" style={{ animationDelay: "100ms" }}>
                                <ChartWidget title="GRAPH TITLE" value="28.49%" color="text-emerald-600" type="line" />
                            </div>
                            <div className="col-span-12 lg:col-span-6" style={{ animationDelay: "200ms" }}>
                                <ChartWidget title="GRAPH TITLE" value="36.25%" color="text-emerald-600" type="bar" />
                            </div>
                        </div>

                        <div style={{ animationDelay: "400ms" }}>
                            <NotificationBanner />
                        </div>

                        <div style={{ animationDelay: "500ms" }}>
                            <CalendarWidget />
                        </div>

                        <div style={{ animationDelay: "600ms" }}>
                            <FileTable />
                        </div>

                        <div style={{ animationDelay: "700ms" }}>
                            <ProgressWidgets />
                        </div>
                    </div>

                    {/* === RIGHT COLUMN (1/3) === */}
                    <div className="col-span-12 lg:col-span-4 space-y-6">
                        <div style={{ animationDelay: "300ms" }}>
                            <PieChartWidget />
                        </div>

                        <div style={{ animationDelay: "800ms" }}>
                            <TaskForm />
                        </div>

                        <div style={{ animationDelay: "900ms" }}>
                            <ActivityFeed />
                        </div>

                        <div style={{ animationDelay: "1000ms" }}>
                            <EngagementRateWidget />
                        </div>
                    </div>
                </main>

            </div>
        </div>
    )
}

export default App