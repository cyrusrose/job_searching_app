import { useEffect, useState } from "react"
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from "react-native"
import { useRouter } from "expo-router"
import styles from "./popularjobs.style"
import { COLORS, SIZES } from "../../../constants"
import PopularJobCard from "../../common/cards/popular/PopularJobCard"
import useFetch from "../../../hook/useFetch"
import { JobItem } from "@resp"

const handleJobCardPress = (item: JobItem) => {
    console.log(`handleJobCardPress ${item.job_title}`)
}

const Popularjobs = () => {
    const router = useRouter()
    const { data, error, isLoading } = useFetch("search", {
        query: "React developer",
        num_pages: 1,
        page: 1
    })

    useEffect(() => {
        if (error != null) console.log(`Error: ${error}`)
    }, [error])

    useEffect(() => {
        if (data.length != 0) console.log("Data loaded")
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
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <PopularJobCard
                                item={item}
                                selectedJob="TODO"
                                handlePress={handleJobCardPress}
                            />
                        )}
                        keyExtractor={(item) => item.job_id}
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                        horizontal
                    />
                )}
            </View>
        </View>
    )
}

export default Popularjobs

const Header = () => (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
            <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
    </View>
)
