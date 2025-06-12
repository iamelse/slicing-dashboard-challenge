import { Card, CardContent } from "../ui/Card"
import { Button } from "../ui/Button"
import { MoreHorizontal } from "lucide-react"

export function EngagementRateWidget() {
    return (
        <Card className="card-hover">
            <CardContent className="p-6 text-center relative">
                <Button variant="ghost" size="icon" className="absolute top-2 right-2">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
                <div className="text-4xl font-bold mb-2">34%</div>
                <div className="text-sm text-muted-foreground mb-1">Engagement rate</div>
                <div className="text-xs text-red-500">▼ 12%</div>
            </CardContent>
        </Card>
    )
}