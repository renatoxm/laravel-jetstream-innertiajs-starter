import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    /* User */
    userName: null,
    userEmail: null,
    userAvatar: null,

    /* localization */
    uiLanguage: null,

    /* theme */
    uiThemeColors: null,

    /* Media Queries Matches */
    matches: null,
  }),
  actions: {
    setUser(payload) {
      if (payload.name) {
        this.userName = payload.name;
      }
      if (payload.email) {
        this.userEmail = payload.email;
      }
      if (payload.avatar) {
        this.userAvatar = payload.avatar;
      }
    },

    setUiLanguage(payload) {
      localStorage.setItem("uiLanguage", payload);
      this.uiLanguage = payload;
    },

    setuiThemeColors(payload) {
      localStorage.setItem("uithemecolors", payload);
      this.uiThemeColors = payload;
    },

    setMatches(payload) {
      localStorage.setItem("matches", payload);
      this.matches = payload;
    },
  },
});
