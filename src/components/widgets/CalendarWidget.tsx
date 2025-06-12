import { useState } from "react"
import { Card, CardContent } from "../ui/Card.tsx"
import { Plus } from "lucide-react"

type EventType = {
    date: Date
    time: string
    title: string
    type: string
}

const today = new Date()

const initialEvents: EventType[] = [
    { date: new Date(today), time: "9am", title: "Standup Meeting", type: "meeting" },
    { date: new Date(today), time: "2pm", title: "Doctor Appointment", type: "health" },
    { date: new Date(today), time: "6pm", title: "Dinner with Alex", type: "personal" },
    { date: new Date(today), time: "11am", title: "Team Brainstorming", type: "work" },
    { date: new Date(today), time: "4pm", title: "Client Presentation", type: "work" },
    { date: new Date(today), time: "7am", title: "Yoga Class", type: "health" },
    { date: new Date(today), time: "10am", title: "Code Review", type: "work" },
    { date: new Date(today), time: "3pm", title: "Coffee with John", type: "personal" },
    { date: new Date(today), time: "1pm", title: "Team Retrospective", type: "meeting" },
    { date: new Date(2025, 5, 15), time: "7pm", title: "Dinner with Mom", type: "personal" },
    { date: new Date(2025, 5, 18), time: "4pm", title: "Project Review", type: "work" },
]

function generateCalendarDays(year: number, month: number): (number | null)[][] {
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const startOffset = (firstDay + 6) % 7

    const calendar: (number | null)[][] = []
    let week: (number | null)[] = []

    for (let i = 0; i < startOffset; i++) week.push(null)
    for (let day = 1; day <= daysInMonth; day++) {
        week.push(day)
        if (week.length === 7) {
            calendar.push(week)
            week = []
        }
    }
    if (week.length) {
        while (week.length < 7) week.push(null)
        calendar.push(week)
    }

    return calendar
}

export function CalendarWidget() {
    const today = new Date()
    const [selectedDate, setSelectedDate] = useState<Date>(today)

    const currentDay = today.getDate()
    const currentMonth = today.getMonth()
    const currentYear = today.getFullYear()

    const [events, setEvents] = useState<EventType[]>(initialEvents)
    const calendarDays = generateCalendarDays(currentYear, currentMonth)

    const handleDateClick = (day: number | null) => {
        if (!day) return
        const clickedDate = new Date(currentYear, currentMonth, day)

        setSelectedDate(clickedDate)

        const hasEvents = events.some(
            (e) =>
                e.date.getDate() === day &&
                e.date.getMonth() === currentMonth &&
                e.date.getFullYear() === currentYear
        )

        // Optional: generate dummy event if none exists
        if (!hasEvents) {
            const dummyEvent: EventType = {
                date: clickedDate,
                time: "2:00pm",
                title: "Auto-generated Event",
                type: "auto",
            }
            setEvents((prev) => [...prev, dummyEvent])
        }
    }

    const selectedDayEvents = selectedDate
        ? events.filter(
            (e) =>
                e.date.getDate() === selectedDate.getDate() &&
                e.date.getMonth() === selectedDate.getMonth() &&
                e.date.getFullYear() === selectedDate.getFullYear()
        )
        : []

    return (
        <Card className="card-hover animate-in">
            <CardContent className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row gap-10">

                    {/* Left: Event List */}
                    <div className="w-full md:w-1/2 space-y-4">
                        <div className="flex justify-center items-center text-emerald-600">
                            <Plus className="h-4 w-4 mr-2" />
                            <span className="text-sm font-medium">NEW EVENT</span>
                        </div>

                        <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                            {selectedDate ? (
                                selectedDayEvents.length ? (
                                    selectedDayEvents.map((event, i) => (
                                        <div
                                            key={i}
                                            className="border rounded-lg p-4 bg-white hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="text-sm space-y-1">
                                                <div className="font-semibold text-emerald-600">
                                                    {event.date.toDateString()} @ {event.time}
                                                </div>
                                                <div className="text-muted-foreground truncate">
                                                    {event.title || "(No Title)"}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-muted-foreground text-center">
                                        No events for this date
                                    </p>
                                )
                            ) : (
                                <p className="text-sm text-muted-foreground text-center">
                                    Select a date to view events
                                </p>
                            )}
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
                            {calendarDays.flat().map((day, i) => {
                                const isToday = day === currentDay
                                const isSelected =
                                    selectedDate &&
                                    selectedDate.getDate() === day &&
                                    selectedDate.getMonth() === currentMonth &&
                                    selectedDate.getFullYear() === currentYear

                                const thisDate = day ? new Date(currentYear, currentMonth, day) : null
                                const hasFutureEvents = thisDate
                                    ? events.some(e =>
                                        e.date.toDateString() === thisDate.toDateString() &&
                                        e.date > today
                                    )
                                    : false

                                const base = `
      relative w-8 h-8 md:w-10 md:h-10
      flex items-center justify-center
      text-xs md:text-sm
      rounded-full transition-colors
      ${day ? "cursor-pointer" : ""}
    `

                                const style = isSelected
                                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                                    : isToday
                                        ? "bg-emerald-500 text-white hover:bg-emerald-600"
                                        : "hover:bg-emerald-100 text-gray-800"

                                return (
                                    <div
                                        key={i}
                                        onClick={() => handleDateClick(day)}
                                        className={`${base} ${day ? style : ""}`}
                                    >
                                        {day || ""}

                                        {/* Circle indicator for future events */}
                                        {hasFutureEvents && (
                                            <span className="absolute bottom-0.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </CardContent>
        </Card>
    )
}