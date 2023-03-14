import { Button, Text, TextInput, View } from "react-native"
import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useState } from "react"

type StackNavigatorParams = {
  Home: undefined
  Details: { homeScreensTextInputValue: string }
}

type HomeProps = NativeStackScreenProps<StackNavigatorParams, "Home">
type DetailsProps = NativeStackScreenProps<StackNavigatorParams, "Details">

const HomeScreen = ({ navigation }: HomeProps): React.ReactElement => {
  const [homeScreensTextInputValue, setHomescreensTextInputValue] =
    useState<string>("")
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", marginTop: 100 }}>
        Open `src/App.tsx` to begin editing your app.
      </Text>
      <Text style={{ marginTop: 100 }}>Home Screen</Text>
      <TextInput
        value={homeScreensTextInputValue}
        onChangeText={setHomescreensTextInputValue}
        placeholder="Type something here to see it on the details screen"
        style={{
          width: "90%",
          height: 30,
          textAlign: "center",
          borderWidth: 1,
          borderColor: "#aaa",
          marginTop: 20,
          marginBottom: 20,
        }}
      />
      <Button
        title="Go to Details Screen"
        onPress={(): void => {
          navigation.navigate("Details", { homeScreensTextInputValue })
        }}
      />
    </View>
  )
}

const DetailsScreen = ({ route }: DetailsProps): React.ReactElement => {
  const { homeScreensTextInputValue } = route.params
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen says: {homeScreensTextInputValue}</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator<StackNavigatorParams>()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
}

const App = (): React.ReactElement => (
  <NavigationContainer theme={MyTheme}>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
