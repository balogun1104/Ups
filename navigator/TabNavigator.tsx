import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomersScreen from "../screens/CustomersScreen";
import OrdersScreen from "../screens/OrdersScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
     <Tab.Screen name="customer" component={CustomersScreen} />
     <Tab.Screen name="order" component={OrdersScreen} />
     </Tab.Navigator>
  );
};

export default TabNavigator;
