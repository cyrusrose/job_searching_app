import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import styles from "./nearbyjobcard.style"
import { JobItem } from "@resp"
import { checkImageURL } from "../../../../utils"

type NearbyJobCardProps = {
    item: JobItem
    handlePress?: (event: JobItem) => void
}

const NearbyJobCard = ({ item, handlePress }: NearbyJobCardProps) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => handlePress?.(item)}>
            <Logo item={item} />

            <View style={styles.textContainer}>
                <Text style={styles.jobName} numberOfLines={1}>
                    {item.job_title}
                </Text>
                <Text style={styles.jobType}>{item.job_employment_type}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default NearbyJobCard

const Logo = ({ item }: { item: JobItem }) => {
    return (
        <TouchableOpacity style={styles.logoContainer}>
            <Image
                source={{
                    uri: checkImageURL(item.employer_logo)
                        ? item.employer_logo
                        : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                }}
                resizeMode="contain"
                style={styles.logoImage}
            />
        </TouchableOpacity>
    )
}
