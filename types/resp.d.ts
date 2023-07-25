declare module "@resp" {
    export type JobItem = {
        job_id: string
    }

    export type JobQuery = {
        query: string
        num_pages: number
        page: number
    }
}
