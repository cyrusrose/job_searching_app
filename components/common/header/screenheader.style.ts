import { StyleSheet, ImageStyle } from "react-native"
import { COLORS, SIZES } from "../../../constants"

const styles = {
    btnImg: (dimension: string | number): ImageStyle => ({
        width: dimension,
        height: dimension,
        borderRadius: SIZES.small / 1.25
    }),

    style: StyleSheet.create({
        btnContainer: {
            width: 40,
            height: 40,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.small / 1.25,
            justifyContent: "center",
            alignItems: "center"
        }
    })
}

export default styles
