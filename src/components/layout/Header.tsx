import { useState } from "react"
import { Search, User, Bell, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { Badge } from "../ui/Badge"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm px-4 py-1 lg:py-3 animate-in">
            {/* === MOBILE HEADER === */}
            <div className="flex items-center justify-between md:hidden">
                {/* Hamburger */}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="transition-all duration-200 ease-in-out opacity-100 rotate-0"
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6 text-muted-foreground transform scale-100 rotate-0 transition-all duration-200 ease-in-out" />
                    ) : (
                        <Menu className="h-6 w-6 text-muted-foreground transform scale-100 rotate-0 transition-all duration-200 ease-in-out" />
                    )}
                </Button>

                {/* Mobile User Info & Notification */}
                <div className="flex items-center space-x-0">
                    {/* Notification icon - Only on Mobile */}
                    <Button variant="ghost" size="icon" className="relative md:hidden card-hover">
                        <Bell className="h-5 w-5 text-muted-foreground" />
                        <span className="absolute -top-0 -right-0 lg:-top-1 lg:-right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse" />
                    </Button>

                    {/* User Info */}
                    <div className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-muted cursor-pointer">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
                            <User className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium text-sm hidden sm:block">LUCY EDWARDS</span>
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </div>
                </div>
            </div>

            {/* === MOBILE DROPDOWN MENU === */}
            {isMenuOpen && (
                <div className="w-full divide-y divide-border md:hidden bg-white animate-in">

                    {/* Search Input with Icon */}
                    <div className="relative py-3">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search..."
                            className="w-full pl-10"
                        />
                    </div>

                    {/* NEW Item */}
                    <div className="flex items-center justify-between px-4 py-2.5 hover:bg-muted cursor-pointer transition">
                        <span className="text-sm text-muted-foreground font-medium">NEW</span>
                        <Badge variant="destructive" className="text-xs animate-pulse-slow">142</Badge>
                    </div>

                    {/* TODO Item */}
                    <div className="flex items-center justify-between px-4 py-2.5 hover:bg-muted cursor-pointer transition">
                        <span className="text-sm text-muted-foreground font-medium">TODO</span>
                        <Badge className="text-xs bg-emerald-100 text-emerald-700">5</Badge>
                    </div>

                    {/* DISTRIBUTED Item */}
                    <div className="flex items-center justify-between px-4 py-2.5 hover:bg-muted cursor-pointer transition">
                        <span className="text-sm text-muted-foreground font-medium">DISTRIBUTED</span>
                        <Badge className="text-xs bg-blue-100 text-blue-700">232</Badge>
                    </div>
                </div>
            )}

            {/* === DESKTOP HEADER === */}
            <div className="hidden md:flex items-center justify-between">
                {/* Search */}
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-emerald-500" />
                    <Input
                        placeholder="Search for files, messages, reports etc."
                        className="w-80 pl-10 transition-all duration-200 focus:w-96"
                    />
                </div>

                {/* Right side */}
                <div className="flex items-center space-x-4">
                    {/* Buttons with badges */}
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

                    {/* User Info */}
                    <div className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-muted cursor-pointer">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
                            <User className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium text-sm">LUCY EDWARDS</span>
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </div>
                </div>
            </div>
        </header>
    )
}