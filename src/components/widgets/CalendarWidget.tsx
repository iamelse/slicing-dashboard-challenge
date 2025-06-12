import { Card, CardContent } from "../ui/Card.tsx"
import { Plus } from "lucide-react"

const events = [
    { date: "Jan 12", time: "6pm", title: "Skydive with Jeff", type: "event" },
    { date: "Jan 13", time: "10am", title: "Team Standup Meeting", type: "meeting" },
    { date: "Jan 14", time: "2pm", title: "Lunch with Sarah", type: "personal" },
    { date: "Jan 15", time: "8pm", title: "Concert Night", type: "event" },
    { date: "Jan 16", time: "3pm", title: "Call with Client A", type: "work" },
    { date: "Jan 17", time: "11am", title: "Gym Session", type: "health" },
    { date: "Jan 18", time: "6pm", title: "Dinner with Family", type: "personal" },
    { date: "Jan 19", time: "4pm", title: "Doctor Appointment", type: "appointment" },
    { date: "Jan 20", time: "1pm", title: "Project Deadline", type: "work" },
    {
        date: "Jan 21",
        time: "all day",
        title: "Sarah's 25th birthday - buy a nice present maybe something cool for grandpa",
        type: "birthday",
    },
    { date: "Jan 22", time: "11am", title: "Doctor's appointment", type: "appointment" },
    { date: "Feb 1", time: "9am", title: "", type: "event" },
]

const calendarDays = [
    [null, null, null, null, 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30],
    [31, 1, 2, 3, 4, 5, 6],
]

export function CalendarWidget() {
    return (
        <Card className="card-hover animate-in">
            <CardContent className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row gap-10">

                    {/* Left: Event List */}
                    <div className="w-full md:w-1/2 space-y-4">
                        {/* NEW EVENT button */}
                        <div className="flex justify-center items-center text-emerald-600">
                            <Plus className="h-4 w-4 mr-2" />
                            <span className="text-sm font-medium">NEW EVENT</span>
                        </div>

                        {/* Scrollable Event List */}
                        <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                            {events.map((event, i) => (
                                <div
                                    key={i}
                                    className="border rounded-lg p-4 bg-white hover:bg-gray-50 transition-colors"
                                >
                                    <div className="text-sm space-y-1">
                                        <div className="font-semibold text-emerald-600">
                                            {event.date} @ {event.time}
                                        </div>
                                        <div className="text-muted-foreground truncate">
                                            {event.title || "(No Title)"}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Calendar */}
                    <div className="w-full md:w-1/2 space-y-3">
                        <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-muted-foreground">
                            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
                                <div key={day} className="p-1">{day}</div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-2">
                            {calendarDays.flat().map((day, i) => (
                                <div
                                    key={i}
                                    className={`
                    w-8 h-8 md:w-10 md:h-10
                    flex items-center justify-center
                    text-xs md:text-sm
                    rounded-full transition-colors
                    ${!day ? "" : "cursor-pointer hover:bg-gray-100"}
                    ${day === 12 ? "bg-emerald-500 text-white" : ""}
                    ${day === 21 || day === 22 ? "bg-gray-200" : ""}
                  `}
                                >
                                    {day || ""}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}