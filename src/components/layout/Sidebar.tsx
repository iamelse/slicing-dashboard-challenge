import { FileText, Users, Calendar, Send, Folder, Clock, HelpCircle } from "lucide-react"
import { Button } from "../ui/Button"

const sidebarItems = [
    { icon: HelpCircle, active: true },
    { icon: FileText, active: false },
    { icon: Users, active: false },
    { icon: Calendar, active: false },
    { icon: Send, active: false },
    { icon: Folder, active: false },
    { icon: Clock, active: false },
]

export function Sidebar() {
    return (
        <aside className="w-16 border-r bg-white">
            <div className="flex flex-col items-center py-4 space-y-2">
                {sidebarItems.map((item, index) => (
                    <Button key={index} variant={item.active ? "default" : "ghost"} size="icon" className="h-10 w-10">
                        <item.icon className="h-5 w-5" />
                    </Button>
                ))}
            </div>
        </aside>
    )
}