import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useTailwind } from "tailwind-rn/dist";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import useCustomerOrders from "../hooks/useCustomerOrders";
import DeliveryCard from "../components/DeliveryCard";

type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "MyModal">
>;

type ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">;
const ModalScreen = () => {
  const tws = useTailwind();
  const navigation = useNavigation<ModalScreenNavigationProp>();

  const {
    params: { name, userId },
  } = useRoute<ModalScreenRouteProp>();

  const { loading, error, orders } = useCustomerOrders(userId);
  return (
    <View>
      <TouchableOpacity style={tws("absolute right-5 top-5 z-10")}>
        <Icon name="closecircle" type="antdesign" onPress={navigation.goBack} />
      </TouchableOpacity>

      <View>
        <View>
          <Text>{name}</Text>
          <Text>{userId}</Text>
        </View>
      </View>

      <FlatList
        data={orders}
        renderItem={({ item: order }) => <DeliveryCard order={order} />}
        keyExtractor={(item: Order, index) => item.trackingId}
      />
    </View>
  );
};

export default ModalScreen;
