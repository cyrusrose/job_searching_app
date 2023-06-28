import React from "react"
import {
    TouchableOpacity,
    Image,
    GestureResponderEvent,
    ImageSourcePropType
} from "react-native"
import styles from "./screenheader.style"
import { SafeAreaView } from "react-native-safe-area-context"

type ScreenHeaderBtnProps = {
    iconUrl: ImageSourcePropType
    dimension: string | number
    handlePress?: (event: GestureResponderEvent) => void
}

const ScreenHeaderBtn = ({
    iconUrl,
    dimension,
    handlePress
}: ScreenHeaderBtnProps) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            style={styles.style.btnContainer}>
            <Image
                source={iconUrl}
                resizeMode="cover"
                style={styles.btnImg(dimension)}
            />
        </TouchableOpacity>
    )
}

export default ScreenHeaderBtn
