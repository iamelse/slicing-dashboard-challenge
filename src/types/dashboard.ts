export interface ChartData {
    id: string
    title: string
    value: string
    data: number[]
    labels: string[]
}

export interface FileItem {
    id: string
    name: string
    size: string
    from: string
    date: string
}

export interface EventItem {
    id: string
    date: string
    time: string
    title: string
    description: string
}

export interface ActivityItem {
    id: string
    user: string
    message: string
    timestamp: string
    isOnline?: boolean
}

export interface SegmentData {
    label: string
    percentage: number
    color: string
}