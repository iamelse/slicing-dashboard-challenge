import { Card, CardContent } from "../ui/Card"
import { Button } from "../ui/Button"

export function ProgressWidgets() {
    return (
        <div className="space-y-4">
            {/* Progress Circles with Equal Spacing */}
            <Card className="card-hover animate-in">
                <CardContent className="p-6">
                    <div className="grid grid-cols-3 gap-6 text-center">
                        {[
                            { value: "12/29", label: "TASK COMPLETE", dash: "60, 100" },
                            { value: "60%", label: "FUNDS MET", dash: "60, 100" },
                            { value: "Bacon", label: "TARGET CONSUMPTION", dash: "75, 100" },
                        ].map((item, i) => (
                            <div key={i}>
                                <div className="relative w-32 h-32 mx-auto mb-2">
                                    <svg
                                        className="w-full h-full transform -rotate-90"
                                        viewBox="0 0 36 36"
                                    >
                                        <path
                                            className="text-gray-200"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            fill="none"
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <path
                                            className="text-emerald-500"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            fill="none"
                                            strokeDasharray={item.dash}
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                    </svg>
                                </div>
                                <div className="text-lg font-bold">{item.value}</div>
                                <div className="text-sm text-muted-foreground">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Archives and Yays Progress */}
            <div className="grid grid-cols-2 gap-4">
                <Card className="card-hover">
                    <CardContent className="p-6 text-center">
                        <div className="w-24 h-24 mx-auto mb-4 bg-gray-900 rounded-lg flex items-center justify-center">
                            <div className="w-12 h-12 border-2 border-emerald-500 rounded" />
                        </div>
                        <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full text-xs px-4 py-2 mb-2">
                            BACK UP DATA
                        </Button>
                        <p className="text-lg font-medium">Archives</p>
                    </CardContent>
                </Card>

                <Card className="card-hover">
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                        <div className="relative w-48 h-28"> {/* Ukuran proporsional */}
                            <svg
                                className="w-full h-full"
                                viewBox="0 0 100 50"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                {/* Background arc */}
                                <path
                                    d="M 10 50 A 40 40 0 0 1 90 50"
                                    fill="none"
                                    stroke="#d1fae5"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                />

                                {/* Progress arc */}
                                <path
                                    d="M 10 50 A 40 40 0 0 1 90 50"
                                    fill="none"
                                    stroke="#10b981"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                    strokeDasharray="70 100"
                                />
                            </svg>

                            {/* Text absolutely centered */}
                            <div className="absolute inset-0 pt-20 flex flex-col items-center justify-center">
                                <div className="text-xl font-bold leading-tight">107.5k</div>
                                <div className="text-xs text-muted-foreground">Yays received</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}