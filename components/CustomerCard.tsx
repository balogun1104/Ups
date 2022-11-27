import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useCustomerOrders from "../hooks/useCustomerOrders";
import { useTailwind } from "tailwind-rn/dist";
import { useNavigation } from "@react-navigation/native";
import { CustomerScreenNavigationProp } from "../screens/CustomersScreen";
import { Card, Icon } from "@rneui/themed";
import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";

type Props = {
  name: string;
  email: string;
  userId: string;
};
const CustomerCard = ({ name, email, userId }: Props) => {
  const { orders, loading, error } = useCustomerOrders(userId);
  const tws = useTailwind();
  const navgation = useNavigation<CustomerScreenNavigationProp>();
  return (
    <TouchableOpacity>
      <Card containerStyle={tws("p-5 rounded-lg")}>
        <View>
          <View>
            <Text>{name}</Text>
            <Text>ID: {userId}</Text>
          </View>

          <View>
            <Text>{loading ? "Loading...." : `${orders.length}`}</Text>
            <Icon
              style={tws("mb-5 ml-auto")}
              name="box"
              size={50}
              type="entypo"
              color="#59C1CC"
            />
          </View>
        </View>
        <CardDivider />
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;
