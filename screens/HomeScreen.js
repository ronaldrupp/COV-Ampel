import React from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  useWindowDimensions,
} from "react-native";
import axios from "axios";
import { AppContext } from "./../context";

export default function HomeScreen() {
  const [data, setData] = React.useState([]);
  const Context = React.useContext(AppContext);

  async function getData() {
    let res = await axios(
      "https://corona-ampel.gv.at/sites/corona-ampel.gv.at/files/assets/Warnstufen_Corona_Ampel_aktuell.json"
    );
    setData(res.data.warnstufen);
  }
  const dim = useWindowDimensions();

  function getColor(warnstufe) {
    if (warnstufe == 1) {
      return "rgb(0,255,20)";
    } else if (warnstufe == 2) {
      return "#FFFF00";
    } else if (warnstufe == 3) {
      return "#FF970C";
    } else if (warnstufe == 4) {
      return "#FF002E";
    }
  }

  function renderItem({ item }) {
    return (
      <View
        style={{
          width: (dim.width / 100) * 90,
          paddingTop: 20,
          paddingBottom: 20,
          borderRadius: 10,
          backgroundColor: Context.theme.colors.card,
          marginTop: 20,
          flexDirection: "row",
          alignContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: getColor(item.warnstufe),
            width: 30,
            height: 30,
            marginLeft: 20,
            borderRadius: 25,
          }}
        ></View>
        <View style={{ justifyContent: "center", marginLeft: 20 }}>
          <Text>{item.name}</Text>
          <Text>{item.region}</Text>
        </View>
      </View>
    );
  }
  React.useEffect(() => {
    getData();
  });
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{
        alignItems: "center",
      }}
    />
  );
}
