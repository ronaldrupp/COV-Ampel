import React from "react";
import { FlatList, StatusBar } from "react-native";
import axios from "axios";
import { AppContext } from "./../context";
import FlatListItem from "./../components/FlatListItem";

export default function HomeScreen() {
  const [data, setData] = React.useState([]);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const Context = React.useContext(AppContext);

  async function getData() {
    setIsRefreshing(true);
    let res = await axios(
      "https://corona-ampel.gv.at/sites/corona-ampel.gv.at/files/assets/Warnstufen_Corona_Ampel_aktuell.json"
    );
    setData(res.data.warnstufen);
    setIsRefreshing(false);
  }

  function renderItem({ item }) {
    return <FlatListItem item={item} />;
  }
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <StatusBar barStyle={"default"} />
      <FlatList
        data={data}
        refreshing={isRefreshing}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        onRefresh={getData}
        contentContainerStyle={{
          alignItems: "center",
          backgroundColor: Context.theme.colors.backgroundColor,
          paddingBottom: 30,
        }}
      />
    </>
  );
}
