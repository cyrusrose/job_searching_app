import { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native"
import { useRouter } from "expo-router"
import styles from "./nearbyjobs.style"
import { COLORS, SIZES } from "../../../constants"
import PopularJobCard from "../../common/cards/popular/PopularJobCard"
import useFetch from "../../../hook/useFetch"
import { JobItem } from "@resp"
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard"

const Nearbyjobs = () => {
    const router = useRouter()
    const { data, error, isLoading } = useFetch("search", {
        query: "React developer",
        num_pages: 1,
        page: 1
    })

    const [selectedJob, setSelectedJob] = useState<string>("")

    const handleJobCardPress = (item: JobItem) => {
        console.log(`handleJobCardPress for Nearbyjobs ${item.job_title}`)
        setSelectedJob(item.job_id)
        router.push(`/job-details/${item.job_id}`)
    }

    useEffect(() => {
        if (error != null) console.log(`Error for Nearbyjobs: ${error}`)
    }, [error])

    useEffect(() => {
        if (data.length != 0) console.log("Data loaded for Nearbyjobs")
    }, [data])

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    data?.map((item) => (
                        <NearbyJobCard
                            item={item}
                            key={`nearby-job-${item.job_id}`}
                            handlePress={handleJobCardPress}
                        />
                    ))
                )}
            </View>
        </View>
    )
}

export default Nearbyjobs

const Header = () => (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
            <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
    </View>
)
