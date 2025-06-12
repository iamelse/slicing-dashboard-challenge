import { Search, User, Bell } from "lucide-react"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { Badge } from "../ui/Badge"

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm px-6 py-3 animate-in">
            <div className="flex items-center justify-between">
                {/* Search */}
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-emerald-500" />
                    <Input
                        placeholder="Search for files, messages, reports etc."
                        className="w-80 pl-10 transition-all duration-200 focus:w-96"
                    />
                </div>

                {/* Right side */}
                <div className="flex items-center space-x-4">
                    {/* Buttons with dynamic badge */}
                    <div className="flex items-center space-x-2">
                        <Button variant="secondary" size="sm" className="relative card-hover group">
                            NEW
                            <Badge
                                variant="destructive"
                                className="ml-2 px-2 min-w-[1.5rem] h-5 rounded-full text-xs flex items-center justify-center animate-pulse-slow"
                            >
                                142
                            </Badge>
                        </Button>
                        <Button variant="secondary" size="sm" className="relative card-hover">
                            TODO
                            <Badge
                                variant="secondary"
                                className="ml-2 px-2 min-w-[1.5rem] h-5 rounded-full text-xs bg-emerald-100 text-emerald-700 flex items-center justify-center"
                            >
                                5
                            </Badge>
                        </Button>
                        <Button variant="secondary" size="sm" className="relative card-hover">
                            DISTRIBUTED
                            <Badge
                                variant="secondary"
                                className="ml-2 px-2 min-w-[1.5rem] h-5 rounded-full text-xs bg-blue-100 text-blue-700 flex items-center justify-center"
                            >
                                232
                            </Badge>
                        </Button>
                    </div>

                    {/* Notification icon */}
                    <Button variant="ghost" size="icon" className="relative card-hover">
                        <Bell className="h-5 w-5" />
                        <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse" />
                    </Button>

                    {/* User section */}
                    <div className="flex items-center space-x-2 px-3 py-2 rounded-lg">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
                            <User className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium text-sm">LUCY EDWARDS</span>
                    </div>
                </div>
            </div>
        </header>
    )
}