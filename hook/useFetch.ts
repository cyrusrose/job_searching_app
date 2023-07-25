import { useState, useEffect } from "react"
import axios, { AxiosRequestConfig } from "axios"
import { RAPID_API_KEY } from "@my"
import { JobQuery } from "@resp"

const useFetch = (endpoint: string, query: JobQuery) => {
    const [data, setData] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)
    const cancelToken = axios.CancelToken.source()

    const options: AxiosRequestConfig = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            "X-RapidAPI-Key": RAPID_API_KEY,
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
        },
        cancelToken: cancelToken.token
    }

    const fetchData = async () => {
        setIsLoading(true)

        try {
            // const responce = await axios.request(options)
            // setData(responce.data.data)
            setData([{ job_title: "Hi2" }])
        } catch (error) {
            setError(error)

            if (axios.isCancel(error)) console.log("cancelled")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
        console.log("loading...")

        return () => {
            cancelToken.cancel()
        }
    }, [endpoint, ...Object.values(query)])

    return { data, isLoading, error }
}

export default useFetch
