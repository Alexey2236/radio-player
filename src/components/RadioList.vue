<template>
  <div class="radio-list" :class="{ open: isOpen }">
    <form action="#" class="add-radio-station" @submit.prevent="addStation">
      <div class="err" v-if="!isValidLink">Не похоже на ссылку</div>
      <input
        class="radio-link"
        type="text"
        placeholder="введите ссылку на трансляцию"
        @input="updateUrl($event.target.value)"
      />

      <input
        class="radio-name"
        type="text"
        placeholder="введите название"
        @input="updateName($event.target.value)"
      />
      <button class="add-btn" v-if="url && name && isValidLink">
        Добавить
      </button>
    </form>
    <div class="radio-station-list">
      <div
        class="radio-station-item"
        v-for="(station, index) in radioList"
        :key="station?.name"
        :class="{ active: index === indexTrack }"
        @click="handleCurrentTrackFn(index)"
      >
        <div class="span number">
          {{ index + 1 }}
        </div>

        <span class="name">{{ station.name }}</span>
        <button
          class="delete"
          @click.stop="removeStation(station?.url)"
          :class="{ 'show-delete-btn': index === currentIndex }"
        >
          Удалить
        </button>
        <div
          class="alert-delete"
          @click.stop="toogleShowDeleteBtn(index)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      isValidLink: true,
    };
  },
  methods: {
    ...mapMutations([
      "handleCurrentTrack",
      "pause",
      "toggleOpen",
      "updateName",
      "updateUrl",
      "addStation",
      "removeStation",
      "toogleShowDeleteBtn",
    ]),

    handleCurrentTrackFn(i) {
      this.handleCurrentTrack(i);
      this.pause();
    },
  },
  computed: {
    ...mapState({
      isOpen: (state) => state.radioPlayer.isOpen,
      name: (state) => state.radioPlayer.name,
      url: (state) => state.radioPlayer.url,
      currentIndex: (state) => state.radioPlayer.currentIndex,
      radioList: (state) => state.radioPlayer.radioList,
      indexTrack: (state) => state.radioPlayer.indexTrack,
    }),
  },

  watch: {
    url() {
      if (!this.url.startsWith("http")) {
        this.isValidLink = false;
      } else {
        this.isValidLink = true;
      }
      if (this.url.length === 0) {
        this.isValidLink = true;
      }
    },
  },
};
</script>

<style scoped>
.err {
  color: #d2520e;
  font-size: 12px;
}
.radio-list {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 20px;
  position: relative;
}

.add-radio-station {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
}
.radio-link,
.radio-name {
  padding: 15px;
  width: 300px;
  height: 40px;
  background: #2f2f2f;
  border-radius: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: rgba(235, 235, 245, 0.6);
}

.add-btn {
  width: 100%;
  padding: 3px;
  background: #d2520e;
  border-radius: 6px;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 33px;
  color: #ffffff;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border: none;
}
.radio-station-list {
  width: 100%;
  height: 400px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  row-gap: 20px;
}

.radio-station-list::-webkit-scrollbar {
  width: 0;
}
.radio-station-item {
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #989696;
  border-radius: 5px;
}
.radio-station-item img {
  cursor: pointer;
  height: 20px;
  width: 20px;
}

.number {
  width: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: black;
}
.name {
  text-align: center;
  width: 200px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: rgba(17, 17, 18, 0.6);
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
}
.alert-delete {
  cursor: pointer;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #2f2f2f;
  position: relative;
  transition: 0.5s;
}

.alert-delete::after {
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #2f2f2f;
  position: absolute;
  top: 5px;
}
.alert-delete::before {
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #2f2f2f;
  position: absolute;
  top: -5px;
}

.delete {
  display: none;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  margin-right: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
}

.show-delete-btn {
  display: block;
}

.active {
  background: rgb(159, 240, 8);
}

@media (max-width: 770px) {
  .radio-list {
    position: absolute;
    height: 500px;
    z-index: 5;
    border-radius: 5px;
    width: 360px;
    padding: 20px 30px;
    top: 0;
    left: -375px;
    background: #ddc9c9;
    overflow: scroll;
    transition: 0.5s;
  }

  .open {
    left: -7px;
  }
}
</style>
