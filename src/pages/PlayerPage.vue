<template>
  <div class="player__wrapper" :class="{ open: isOpen }">
    <button class="burger-btn" @click="toggleOpen">
      <span></span><span></span><span></span>
    </button>
    <radio-list></radio-list>
    <the-player></the-player>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";

import RadioList from "../components/RadioList.vue";
import ThePlayer from "../components/ThePlayer.vue";
export default {
  components: {
    ThePlayer,
    RadioList,
  },
  methods: {
    ...mapMutations(["toggleOpen"]),
  },
  computed: {
    ...mapState({
      isOpen: (state) => state.radioPlayer.isOpen,
    }),
  },
};
</script>

<style scoped>
.burger-btn {
  display: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: none;
  position: relative;
  position: absolute;
  background: #141414;
}

.burger-btn span {
  position: absolute;
  width: 30px;
  height: 2px;
  background-color: #f3eeee;
  left: 5px;
  transition: transform 0.5s;
}

.burger-btn span:nth-child(1) {
  transform: translateY(-10px);
}
.burger-btn span:nth-child(3) {
  transform: translateY(10px);
}

.player__wrapper.open .burger-btn span:nth-child(2) {
  opacity: 0;
}

.player__wrapper.open .burger-btn span:nth-child(1) {
  transform: translateY(0) rotate(-45deg);
}

.player__wrapper.open .burger-btn span:nth-child(3) {
  transform: translateY(0) rotate(45deg);
}

@media (max-width: 770px) {
  .burger-btn {
    display: block;
    z-index: 4;
    top: -40px;
    left: 0;
  }
}
</style>
