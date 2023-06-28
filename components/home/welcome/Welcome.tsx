import { useCallback, useEffect, useLayoutEffect, useState } from "react"
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    ImageStyle
} from "react-native"
import { useFocusEffect, useRouter } from "expo-router"
import styles from "./welcome.style"
import { icons, SIZES } from "../../../constants"

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = () => {
    const [activeJobType, setActiveJobType] = useState(jobTypes[0])
    const router = useRouter()

    return (
        <View>
            <Header />
            <Search />

            <View style={styles.style.tabsContainer}>
                <FlatList
                    data={jobTypes}
                    renderItem={({ item }) => (
                        <JobItem
                            item={item}
                            activeJobType={activeJobType}
                            handlePress={() => {
                                setActiveJobType(item)
                                router.push(`/search/${item}`)
                            }}
                        />
                    )}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{
                        columnGap: SIZES.small
                    }}
                    horizontal
                />
            </View>
        </View>
    )
}

const Search = () => {
    const { style } = styles

    return (
        <View style={style.searchContainer}>
            <View style={style.searchWrapper}>
                <TextInput
                    style={style.searchInput}
                    value=""
                    onChange={() => {}}
                    placeholder="What are you looking for?"
                />
            </View>

            <TouchableOpacity style={style.searchBtn} onPress={() => {}}>
                <Image
                    source={icons.search}
                    style={style.searchBtnImage as ImageStyle}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    )
}

type JobItemProps = {
    activeJobType: string
    item: string
    handlePress: () => void
}

const JobItem = ({ activeJobType, item, handlePress }: JobItemProps) => (
    <TouchableOpacity
        style={styles.tab(activeJobType, item)}
        onPress={handlePress}>
        <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
    </TouchableOpacity>
)

const Header = () => (
    <View style={styles.style.container}>
        <Text style={styles.style.userName}>Hi There</Text>
        <Text style={styles.style.welcomeMessage}>Find your perfect job</Text>
    </View>
)

export default Welcome
