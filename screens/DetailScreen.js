import React from "react";
import { StatusBar } from "expo-status-bar";
import * as WebBrowser from "expo-web-browser";

import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { AppContext } from "./../context";

export default function DetailScreen({ route }) {
  const Context = React.useContext(AppContext);
  const dim = useWindowDimensions();
  const warnstufe = route.params.item.warnstufe;
  function getStatus(warnstufe) {
    if (warnstufe == 1) {
      return "einzelne Fälle, isolierte Cluster";
    } else if (warnstufe == 2) {
      return "moderate Fälle, primär in Clustern";
    } else if (warnstufe == 3) {
      return "Häufung von Fällen, nicht mehr überwiegend Clustern zuordenbar";
    } else if (warnstufe == 4) {
      return "Unkontrollierte Ausbrüche, großflächige Verbreitung";
    }
  }
  function getInfoLink() {
    if (warnstufe == 1) {
      return "https://corona-ampel.gv.at/ampelfarben/geringes-risiko-gruen/mindestma%c3%9fnahmen-gruen/";
    } else if (warnstufe == 2) {
      return "https://corona-ampel.gv.at/ampelfarben/mittleres-risiko-gelb/mindestma%c3%9fnahmen-gelb/";
    } else if (warnstufe == 3) {
      return "https://corona-ampel.gv.at/ampelfarben/hohes-risiko-orange/mindestma%c3%9fnahmen-orange/";
    } else if (warnstufe == 4) {
      return "https://corona-ampel.gv.at/ampelfarben/sehr-hohes-risiko-rot/mindestma%c3%9fnahmen-rot/";
    }
  }
  async function openBrowser(warnstufe) {
    let result = await WebBrowser.openBrowserAsync(getInfoLink(warnstufe));
  }
  return (
    <>
      <StatusBar style="light" />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: route.params.color,
        }}
      >
        <View
          style={{
            borderWidth: 10,
            padding: 10,
            borderColor: "white",
            marginTop: 30,
            marginBottom: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "white",
              fontFamily: "Jost_400Regular",
            }}
          >
            {route.params.item.region}
          </Text>
          <Text
            style={{
              fontSize: 32,
              color: "white",
              fontFamily: "Jost_600SemiBold",
            }}
          >
            {route.params.item.name}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 18,
            color: "white",
            fontFamily: "Jost_400Regular",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          {getStatus(route.params.item.warnstufe)}
        </Text>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 40,
            width: "80%",
            alignItems: "center",
            backgroundColor: Context.theme.colors.card,
            paddingTop: 15,
            paddingBottom: 15,
          }}
          onPress={openBrowser}
        >
          <Text
            style={{
              color: Context.theme.colors.text,
              fontFamily: "Jost_400Regular",
            }}
          >
            Weitere Informationen
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
