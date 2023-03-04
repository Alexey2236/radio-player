import { createRouter, createWebHashHistory } from "vue-router";
import PlayerPage from "../pages/PlayerPage.vue";
import MusicInfo from "../pages/MusicInfo.vue";
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: PlayerPage,
    },
    {
      path: "/musicInfo",
      component: MusicInfo,
    },
  ],
});
