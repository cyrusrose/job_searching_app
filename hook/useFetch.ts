import { useState, useEffect } from "react"
import axios, { AxiosRequestConfig } from "axios"
import { JobItem, JobQuery } from "@resp"
import FAKE_DATA from "./testData"
import Constants from "expo-constants"
import { AppConfig } from "../app.config"
const { RAPID_API_KEY } = Constants.manifest?.extra as AppConfig

const useFetch = (endpoint: string, query: JobQuery) => {
    const [data, setData] = useState<JobItem[]>([])
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
            setData(FAKE_DATA.data)
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
