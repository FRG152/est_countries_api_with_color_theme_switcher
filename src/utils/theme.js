export const theme = {
  backgroundLight: {
    backgroundColor: "hsl(0, 0%, 98%)",
  },
  backgroundDark: {
    backgroundColor: "hsl(209, 23%, 22%)",
  },
  backgroundDarkCard: {
    backgroundColor: "hsl(207, 26%, 17%)",
  },
  textLight: {
    color: "hsl(0, 0%, 100%)",
  },
  textDark: {
    color: "hsl(200, 15%, 8%)",
  },
};

export function textTheme(val) {
  return val == "dark" ? theme.textLight : theme.textDark;
}

export function backgroundTheme(val) {
  return val == "dark" ? theme.backgroundDark : theme.backgroundLight;
}

export function backgroundThemeCard(val) {
  return val == "dark" ? theme.backgroundDarkCard : theme.backgroundLight;
}
