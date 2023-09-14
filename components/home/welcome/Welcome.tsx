import {
    Dispatch,
    DispatchWithoutAction,
    useCallback,
    useEffect,
    useLayoutEffect,
    useState
} from "react"
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

type WelcomeProps = {
    searchTerm: string
    setSearchTerm: Dispatch<string>
    handleClick: DispatchWithoutAction
}

const Welcome = ({ searchTerm, setSearchTerm, handleClick }: WelcomeProps) => {
    const [activeJobType, setActiveJobType] = useState(jobTypes[0])
    const router = useRouter()

    return (
        <View>
            <Header />
            <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleClick={handleClick}
            />

            <View style={styles.style.tabsContainer}>
                <FlatList<string>
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

const Search = ({ searchTerm, setSearchTerm, handleClick }: WelcomeProps) => {
    const { style } = styles

    return (
        <View style={style.searchContainer}>
            <View style={style.searchWrapper}>
                <TextInput
                    style={style.searchInput}
                    value={searchTerm}
                    onChangeText={(text) => setSearchTerm(text)}
                    placeholder="What are you looking for?"
                />
            </View>

            <TouchableOpacity style={style.searchBtn} onPress={handleClick}>
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
