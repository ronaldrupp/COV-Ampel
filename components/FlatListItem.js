import React from "react";
import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";

import { AppContext } from "../context";
import { useNavigation } from "@react-navigation/native";

export default function FlatListItem(props) {
  const Context = React.useContext(AppContext);
  const dim = useWindowDimensions();
  const navigation = useNavigation();

  function getColor(warnstufe) {
    if (warnstufe == 1) {
      return "#0BE05F";
    } else if (warnstufe == 2) {
      return "#C9C900";
    } else if (warnstufe == 3) {
      return "#C9770A";
    } else if (warnstufe == 4) {
      return "#D90027";
    }
  }

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", {
          item: props.item,
          color: getColor(props.item.warnstufe),
        })
      }
      style={{
        width: dim.width,
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: Context.theme.colors.card,
        marginTop: 10,
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: getColor(props.item.warnstufe),
          width: 30,
          height: 30,
          marginLeft: 20,
          borderRadius: 25,
        }}
      />
      <View style={{ justifyContent: "center", marginLeft: 20 }}>
        <Text
          style={{
            color: Context.theme.colors.text,
            fontFamily: "Jost_300Light",
            fontSize: 12,
          }}
        >
          {props.item.region}
        </Text>
        <Text
          style={{
            color: Context.theme.colors.text,
            fontFamily: "Jost_500Medium",
            fontSize: 18,
          }}
        >
          {props.item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
