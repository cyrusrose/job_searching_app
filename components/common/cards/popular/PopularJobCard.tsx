import React from "react"
import { View, Text } from "react-native"
import styles from "./popularjobcard.style"
import { JobItem } from "@resp"

type PopularJobCardProps = { item: JobItem }

const PopularJobCard = ({ item }: PopularJobCardProps) => {
    return (
        <View>
            <Text>PopularJobCard {item.job_id}</Text>
        </View>
    )
}

export default PopularJobCard
