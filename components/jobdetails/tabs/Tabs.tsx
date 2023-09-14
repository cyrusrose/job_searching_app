import React, { Dispatch } from "react"
import { View, Text, TouchableOpacity } from "react-native"

import styles from "./tabs.style"
import { FlatList } from "react-native-gesture-handler"
import { SIZES } from "../../../constants"

type TabsProps = {
    tabs: string[]
    activeTab: string
    setActiveApp: Dispatch<string>
}

const Tabs = ({ tabs, activeTab, setActiveApp }: TabsProps) => {
    const { style } = styles
    return (
        <View style={style.container}>
            <FlatList
                data={tabs}
                renderItem={({ item }) => (
                    <Item
                        name={item}
                        activeTab={activeTab}
                        onHandleSearchType={() => setActiveApp(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item}
                contentContainerStyle={{ columnGap: SIZES.small / 2 }}
            />
        </View>
    )
}

type ItemProps = {
    name: string
    activeTab: string
    onHandleSearchType: () => void
}

const Item = ({ name, activeTab, onHandleSearchType }: ItemProps) => {
    return (
        <TouchableOpacity
            style={styles.btn(name, activeTab)}
            onPress={onHandleSearchType}>
            <Text style={styles.btnText(name, activeTab)}>{name}</Text>
        </TouchableOpacity>
    )
}

export default Tabs
