import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchScreen from "../screens/SearchScreen";
import TvScreen from "../screens/TvScreen";
import MovieScreen from "../screens/MovieScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const isDark = useColorScheme() === "dark";

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    marginTop: -5,
                    fontSize: 10,
                    fontWeight: "600",
                },
            }}
        >
            <Tab.Screen
                name="Movies"
                component={MovieScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name={"film-outline"}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Tv"
                component={TvScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons
                                name="tv-outline"
                                color={color}
                                size={size}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons
                                name="search-outline"
                                color={color}
                                size={size}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
