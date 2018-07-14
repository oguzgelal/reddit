export const CHANGE_THEME = "CHANGE_THEME";

const toggleTheme = theme => (theme === "light" ? "dark" : "light");

export const onEvent = [
  {
    on: CHANGE_THEME,
    reducer: ({ state }) => ({
      ...state,
      theme: toggleTheme(state.theme),
    }),
  },
];
