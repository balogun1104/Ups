import { StyleSheet  } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import CustomersScreen from "./screens/CustomersScreen";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type of definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <CustomersScreen />
      </NavigationContainer>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
