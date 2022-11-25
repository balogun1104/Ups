import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useLayoutEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, ScrollView, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { RootStackParamList } from "../navigator/RootNavigator";
import { TabStackParamList } from "../navigator/TabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Image, Input } from "@rneui/themed";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomersScreen = () => {
    const [input, setInput] = useState<string>('')
  const tws = useTailwind();

  const navgation = useNavigation<CustomerScreenNavigationProp>();

  useLayoutEffect(() => {
    navgation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#59C1CC"}}>
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        containerStyle={tws("w-full h-64")}
        PlaceholderContent={<ActivityIndicator/>}
      />
      <Input 
      placeholder="Search by Customer"
      value={input}
      onChangeText={setInput}
      containerStyle={tws('bg-white pt-5 pb-0 px-10')}
      />
    </ScrollView>
  );
};

export default CustomersScreen;
