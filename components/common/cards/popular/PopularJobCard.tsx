import React from "react"
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    GestureResponderEvent
} from "react-native"
import styles from "./popularjobcard.style"
import { JobItem } from "@resp"

type PopularJobCardProps = {
    item: JobItem
    selectedJob: string
    handlePress?: (event: JobItem) => void
}

const PopularJobCard = ({
    item,
    selectedJob,
    handlePress
}: PopularJobCardProps) => {
    const { style } = styles
    return (
        <TouchableOpacity
            style={styles.container(selectedJob, item)}
            onPress={() => handlePress?.(item)}>
            <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
                <Image
                    source={{ uri: item.employer_logo }}
                    resizeMode="contain"
                    style={style.logoImage}
                />
            </TouchableOpacity>
            <Text style={style.companyName} numberOfLines={1}>
                {item.employer_name}
            </Text>
            <View style={style.infoContainer}>
                <Text
                    style={styles.jobName(selectedJob, item)}
                    numberOfLines={1}>
                    {item.job_title}
                </Text>
                <Text style={style.location}>{item.job_country}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PopularJobCard
