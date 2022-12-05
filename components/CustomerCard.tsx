import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useCustomerOrders from "../hooks/useCustomerOrders";
import { useTailwind } from "tailwind-rn/dist";
import { useNavigation } from "@react-navigation/native";
import { CustomersScreenNavigationProp } from "../screens/CustomersScreen";
import { Card, Icon } from "@rneui/themed";
import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";
import { color } from "@rneui/base";

type Props = {
  name: string;
  email: string;
  userId: string;
};
const CustomerCard = ({ name, email, userId }: Props) => {
  const { orders, loading, error } = useCustomerOrders(userId);
  const tws = useTailwind();
  const navigation = useNavigation<CustomersScreenNavigationProp>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("MyModal", { name: name, userId: userId })
      }
    >
      <Card containerStyle={tws("p-5 rounded-lg")}>
        <View>
          <View style={tws("flex-row justify-between")}>
            <View>
              <Text style={tws("text-2xl font-bold ")}>{name}</Text>
              <Text style={[tws("text-sm"), { color: "#59C1CC" }]}>
                ID: {userId}
              </Text>
            </View>

            <View style={tws("flex-row items-center justify-end")}>
              <Text style={{ color: "#59C1CC" }}>
                {loading ? "Loading...." : `${orders.length} x`}
              </Text>
              <Icon
                style={tws("mb-5 ml-auto")}
                name="box"
                size={50}
                type="entypo"
                color="#59C1CC"
              />
            </View>
          </View>
        </View>
        <CardDivider />
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;
