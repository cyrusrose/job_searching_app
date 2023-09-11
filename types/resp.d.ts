declare module "@resp" {
    export type JobItem = {
        job_id: string
        employer_logo: string
        job_title: string
        employer_name: string
        job_country: string
        job_employment_type: string
        [x: string | number]: unknown
    }

    export type JobQuery = {
        query?: string
        num_pages?: number
        page?: number
        [x: string | number]: unknown
    }
}
