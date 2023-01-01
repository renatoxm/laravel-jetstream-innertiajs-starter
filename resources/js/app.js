import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "ziggy";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { useMainStore } from "@stores/main.js";
import { uiColors } from "@composables/useColors";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const appName =
  window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.vue`,
      import.meta.glob("./Pages/**/*.vue")
    ),
  setup({ el, app, props, plugin }) {
    return createApp({ render: () => h(app, props) })
      .use(pinia)
      .use(plugin)
      .use(ZiggyVue)
      .mount(el);
  },
});

InertiaProgress.init({ color: "#4B5563" });

/* Pinia Store */
const mainStore = useMainStore(pinia);
const activeTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "light";

const themeColors = uiColors(activeTheme);
mainStore.setuiThemeColors(themeColors);
