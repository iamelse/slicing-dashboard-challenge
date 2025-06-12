import {
    ArrowUpCircleIcon,
    PaperclipIcon,
    BellIcon,
    Calendar,
    Send,
    NewspaperIcon,
    LayoutDashboardIcon,
    Clock3Icon,
} from "lucide-react"
import { Button } from "../ui/Button"

const sidebarItems = [
    { icon: ArrowUpCircleIcon, active: false },
    { icon: PaperclipIcon, active: false },
    { icon: BellIcon, active: false },
    { icon: Calendar, active: false },
    { icon: Send, active: false },
    { icon: NewspaperIcon, active: false },
    { icon: LayoutDashboardIcon, active: true },
    { icon: Clock3Icon, active: false },
]

export function Sidebar() {
    return (
        <aside className="w-16 border-r bg-white">
            <div className="flex flex-col items-center py-4 space-y-2">
                {sidebarItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = item.active

                    return (
                        <Button
                            key={index}
                            variant="ghost"
                            size="icon"
                            className={`h-10 w-10 hover:bg-gray-100 ${
                                isActive ? "bg-emerald-50" : ""
                            }`}
                        >
                            <Icon
                                className={`h-5 w-5 transition-colors ${
                                    isActive ? "text-emerald-500" : "text-gray-500"
                                }`}
                            />
                        </Button>
                    )
                })}
            </div>
        </aside>
    )
}