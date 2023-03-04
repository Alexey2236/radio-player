<template>
  <div class="player" :key="renderCom">
    <audio
      class="player__audio"
      controls
      ref="audio"
      @loadeddata="loading = false"
    >
      <source :src="currentRadio.url.replace(/ /g, '')" @error="mediaError()" />
    </audio>
    <div class="player__body">
      <span class="player__radio-name">{{ currentRadio.name }}</span>

      <div class="player__cover" v-if="!loading && errorMessage === ''">
        <div class="cover__wrapper">
          <img class="gif" src="../assets/gif.gif" alt="" v-if="playBack" />
          <img src="../assets/cover2.jpg" alt="cover" />
        </div>
      </div>

      <Preloader v-if="loading" />
      <img
        src="../assets/20150918_Notice_HERAreportR4-103Error_STRUC.jpg"
        alt="err"
        class="err"
        v-if="!loading && errorMessage !== ''"
      />
      <div class="volume__wrapper">
        <img src="../assets/volume1.png" alt="" />
        <input
          class="player__nav-volume"
          type="range"
          min="0"
          max="1"
          step="0.1"
          ref="volume"
          @change="volumeControl"
        />
      </div>
      <form class="player__nav">
        <div class="player__nav-wrapper">
          <img
            src="../assets/prev-button.png"
            alt="prev"
            class="player__prev-btn player__nav-btn"
            @click="prevRef"
          />
          <div
            class="player__play-btn player__nav-btn"
            @click="playRef"
            v-if="!playBack && !loading && errorMessage === ''"
          >
            <img src="../assets/free-icon-play-button-4980096.png" alt="" />
          </div>

          <div
            class="player__play-btn player__nav-btn"
            @click="pauseRef"
            v-if="playBack"
          >
            <img src="../assets/pause-button.png" alt="" />
          </div>

          <img
            src="../assets/next-button.png"
            alt=""
            class="player__next-btn player__nav-btn"
            @click="nextRef"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Preloader from "./Preloader.vue";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
export default {
  components: {
    Preloader,
  },
  data() {
    return {
      loading: true,
      renderCom: 1,
      errorMessage: "",
    };
  },

  methods: {
    ...mapMutations(["play", "pause", "next", "prev"]),
    mediaError() {
      this.loading = false;
      this.errorMessage = "oшибка";
    },
    volumeControl() {
      this.$refs.audio.volume = this.$refs.volume.value;
    },
    playRef() {
      this.$refs.audio.play();
      this.play();
    },
    pauseRef() {
      this.$refs.audio.pause();
      this.pause();
    },

    nextRef() {
      this.pauseRef();
      this.next();
    },
    prevRef() {
      this.pauseRef();
      this.prev();
    },
  },

  computed: {
    ...mapGetters(["currentRadio"]),
    ...mapState({
      playBack: (state) => state.radioPlayer.playBack,
      indexTrack: (state) => state.radioPlayer.indexTrack,
    }),
  },

  watch: {
    playBack() {
      if (this.playBack === false) {
        this.pauseRef();
      }
    },
    indexTrack() {
      this.renderCom += 1;
      this.loading = true;
      this.errorMessage = "";
    },
  },
};
</script>

<style scoped>
.player {
  max-width: 400px;
  padding: 15px;
  background: #2f2f2f;
  border-radius: 10px;
}

.err {
  border-radius: 20px;
}

.player__audio {
  display: none;
}

.player__body {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
}

.player__radio-name {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
}

.player__cover {
  border-radius: 20px;
  max-width: 100%;
  height: 246px;
}

.cover__wrapper {
  position: relative;
}
.gif {
  position: absolute;
  opacity: 0.5;
  z-index: 1;
  height: 100%;
  width: 100%;
}
.player__cover img {
  border-radius: 20px;
}

.player__nav-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
}
.player__nav-btn {
  cursor: pointer;
  width: 50px;
  height: 50px;
  transition: 0.5s;
}

.player__nav-btn:hover {
  transform: translateY(-2px);
}

.player__play-btn {
  width: 60px;
  height: 60px;
}
.volume__wrapper {
  display: flex;
}

.volume__wrapper img {
  width: 30px;
}
.player__nav-volume {
  width: 306px;
}
</style>
