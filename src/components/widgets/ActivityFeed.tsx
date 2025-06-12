import { Card, CardContent, CardHeader } from "../ui/Card.tsx"
import { Input } from "../ui/Input.tsx"
import { Button } from "../ui/Button.tsx"
import { Send, Settings } from "lucide-react"

const activities = [
    { user: "LUCY EDWARDS", status: "ONLINE", message: "", time: "" },
    { user: "JEFF CAPP", message: "i can't feel my legs :(", time: "52 minutes ago" },
    { user: "WILSON CHELL", message: "ahem!", time: "52 minutes ago" },
    { user: "WILSON CHELL", message: "whatever dude :D", time: "51 minutes ago" },
    { user: "TREVOR BALD", message: "lolol", time: "43 minutes ago" },
    {
        user: "ALICE KAY",
        message: "oh hell yes. let's get things moving with a few basic questions.",
        time: "26 minutes ago",
    },
    { user: "ALICE KAY", message: "ill look into this for you", time: "23 minutes ago" },
]

export function ActivityFeed() {
    return (
        <Card className="card-hover animate-in h-full flex flex-col">
            <CardHeader className="border-b px-4 py-3">
                <div className="flex items-center justify-between w-full">
                    {/* Kiri: Avatar + User Info */}
                    <div className="flex items-center space-x-3 ps-3">
                        <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">LE</span>
                        </div>
                        <div className="leading-tight">
                            <p className="font-medium text-sm">LUCY EDWARDS</p>
                            <p className="text-xs text-emerald-500 flex items-center">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-1"></span>
                                ONLINE
                            </p>
                        </div>
                    </div>

                    {/* Kanan: Settings button */}
                    <Button variant="ghost" size="icon">
                        <Settings className="h-5 w-5" />
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="flex flex-col flex-1 px-4 py-3 space-y-3">
                {/* Scrollable message list */}
                <div
                    className={`space-y-3 pr-1 ${
                        activities.length > 5 ? "max-h-64 overflow-y-auto" : ""
                    }`}
                >
                    {activities.slice(1).map((activity, i) => (
                        <div
                            key={i}
                            className="flex items-start space-x-3 bg-muted rounded-lg px-3 py-2"
                        >
                            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-xs font-bold">
                                    {activity.user
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2">
                                    <p className="text-sm font-medium">{activity.user}</p>
                                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">{activity.message}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input area */}
                <div className="pt-3 border-t border-muted">
                    <div className="flex space-x-2">
                        <Input placeholder="Send a message..." className="flex-1" />
                        <Button size="icon" className="bg-gray-900 hover:bg-gray-800">
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}