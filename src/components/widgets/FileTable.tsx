import { Card, CardContent } from "../ui/Card"
import { Button } from "../ui/Button"
import { MoreHorizontal } from "lucide-react"

const files = [
    {
        name: "briefing-notes-with-apple.pdf",
        size: "56 MB",
        from: "Ben Andrews",
        date: "Jan 23",
    },
    {
        name: "image.png",
        size: "4 MB",
        from: "Alice Kay",
        date: "Jan 21",
    },
    {
        name: "website_presentation_and_discussion.doc",
        size: "104 MB",
        from: "Lewis Smith",
        date: "Jan 17",
    },
    {
        name: "Promotional Video",
        size: "2.4 GB",
        from: "Benedict Cumberbatch",
        date: "Jan 12",
    },
]

export function FileTable() {
    return (
        <Card className="card-hover animate-in">
            <CardContent className="p-0">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px]">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                                File Name
                            </th>
                            <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                                Size
                            </th>
                            <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                                From
                            </th>
                            <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                                Date
                            </th>
                            <th className="w-10" />
                        </tr>
                        </thead>
                        <tbody>
                        {files.map((file, i) => (
                            <tr
                                key={i}
                                className="border-b last:border-none hover:bg-gray-100 transition-colors"
                            >
                                <td className="p-4 font-semibold">{file.name}</td>
                                <td className="p-4 text-muted-foreground">{file.size}</td>
                                <td className="p-4 text-muted-foreground">{file.from}</td>
                                <td className="p-4 text-muted-foreground">{file.date}</td>
                                <td className="p-4 text-right">
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 text-center">
                    <Button
                        variant="outline"
                        className="rounded-full bg-gray-900 text-white hover:bg-gray-800 px-6 py-2"
                    >
                        Load More
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}