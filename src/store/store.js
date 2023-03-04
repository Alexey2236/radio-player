import { createStore } from "vuex";
import radioPlayer from "./modules/raduoPlayer";
export default createStore({
  modules: {
    radioPlayer,
  },
});
