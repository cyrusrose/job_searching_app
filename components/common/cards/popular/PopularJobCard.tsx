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

import { checkImageURL } from "../../../../utils"

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
            <Logo selectedJob={selectedJob} item={item} />
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

const Logo = ({
    item,
    selectedJob
}: {
    item: JobItem
    selectedJob: string
}) => {
    const { style } = styles

    return (
        <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
            <Image
                source={{
                    uri: checkImageURL(item.employer_logo)
                        ? item.employer_logo
                        : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                }}
                resizeMode="contain"
                style={style.logoImage}
            />
        </TouchableOpacity>
    )
}
