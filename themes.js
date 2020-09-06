const LightTheme = {
  mode: "light",
  colors: {
    primary: "black",
    background: "rgb(240,240,240)",
    card: "white",
    title: "rgb(0,0,0)",
    text: "rgb(50, 50, 50)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
  shadow: {
    shadowColor: "rgb(20,20,20)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
};

const DarkTheme = {
  mode: "dark",
  colors: {
    primary: "white",
    background: "black",
    card: "rgb(20,20,20)",
    title: "rgb(255,255,255)",
    subtitle: "rgb(200, 200, 200)",
    text: "rgb(255, 255, 255)",
    border: "pink",
    notification: "rgb(255, 69, 58)",
  },
};

export { LightTheme, DarkTheme };
