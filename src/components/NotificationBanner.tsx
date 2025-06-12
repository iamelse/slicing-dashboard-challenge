import { Card, CardContent } from "./ui/Card"
import { Button } from "./ui/Button"
import { AlertTriangle, X } from "lucide-react"

export function NotificationBanner() {
    return (
        <Card className="border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50 animate-in">
            <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                    <div className="p-1 bg-emerald-100 rounded-full">
                        <AlertTriangle className="h-5 w-5 text-emerald-600" />
                    </div>
                    <span className="text-sm text-emerald-800 font-medium">
            System wide notification widget – please update this application, thank you.
          </span>
                </div>
                <Button variant="ghost" size="icon" className="text-emerald-600 hover:bg-emerald-100">
                    <X className="h-4 w-4" />
                </Button>
            </CardContent>
        </Card>
    )
}