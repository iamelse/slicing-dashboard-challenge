import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { Textarea } from "../ui/Textarea"
import { MoreHorizontal } from "lucide-react"

export function TaskForm() {
    return (
        <Card className="card-hover animate-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-lg font-semibold">Create Task</CardTitle>
                <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </CardHeader>

            <CardContent className="space-y-5">
                {/* Task Name */}
                <div className="space-y-2">
                    <label htmlFor="task-name" className="text-sm font-medium text-foreground">
                        Task name
                    </label>
                    <Input
                        id="task-name"
                        placeholder="e.g. Watch Game of Thrones again"
                        className="transition-colors duration-200"
                    />
                </div>

                {/* Email Reminder */}
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Send email reminder
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="email@domain.com"
                        className="transition-colors duration-200"
                    />
                </div>

                {/* Task Details */}
                <div className="space-y-2">
                    <label htmlFor="task-details" className="text-sm font-medium text-foreground">
                        Details
                    </label>
                    <Textarea
                        id="task-details"
                        placeholder="Add some details here..."
                        className="transition-colors duration-200"
                    />
                </div>

                {/* Due Date */}
                <div className="space-y-2">
                    <label htmlFor="due-date" className="text-sm font-medium text-foreground">
                        Due date
                    </label>
                    <select
                        id="due-date"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm transition-colors duration-200 focus:outline-none focus:bg-black focus:text-white"
                    >
                        <option>Next Friday</option>
                        <option>Next Week</option>
                        <option>Next Month</option>
                    </select>
                </div>

                {/* Submit */}
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                    CREATE TASK
                </Button>
            </CardContent>
        </Card>
    )
}