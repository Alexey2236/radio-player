export default {
  state() {
    return {
      currentIndex: null,
      name: "",
      url: "",
      isOpen: false,
      indexTrack: 0,
      playBack: false,
      radioList: [
        {
          name: "Tecktonik",
          url: "https://radiorecord.hostingradio.ru/tecktonik96.aacp",
        },
        {
          name: "Old School",
          url: "https://radiorecord.hostingradio.ru/pump96.aacp",
        },
        {
          name: "Techno",
          url: "https://radiorecord.hostingradio.ru/techno96.aacp",
        },
        {
          name: "Dubstep",
          url: "https://radiorecord.hostingradio.ru/dub96.aacp",
        },
        {
          name: "Супердискотека 90-х",
          url: "https://radiorecord.hostingradio.ru/sd9096.aacp",
        },
        {
          name: "Remix",
          url: "https://radiorecord.hostingradio.ru/rmx96.aacp",
        },
        {
          name: "Маятник Фуко",
          url: "https://radiorecord.hostingradio.ru/mf96.aacp",
        },
        {
          name: "Record",
          url: "http://radio-srv1.11one.ru/record192k.mp3",
        },
        {
          name: "60's Dance",
          url: "https://radiorecord.hostingradio.ru/cadillac96.aacp",
        },
        {
          name: "Russian Mix",
          url: "https://radiorecord.hostingradio.ru/rus96.aacp",
        },
        {
          name: "Like FM",
          url: "https://pub0301.101.ru:8443/stream/air/mp3/256/219",
        },

        {
          name: "Relax FM",
          url: "https://pub0301.101.ru:8443/stream/air/mp3/256/200",
        },

        {
          name: "Цой",
          url: "https://pub0302.101.ru:8443/stream/pro/aac/64/103",
        },

        {
          name: "Ретро ФМ",
          url: "https://retro.hostingradio.ru:8014/retro320.mp3",
        },

        {
          name: "Радио Шансон",
          url: "https://chanson.hostingradio.ru:8041/chanson256.mp3",
        },

        {
          name: "Наше Радио",
          url: "https://nashe1.hostingradio.ru/nashe-256",
        },

        {
          name: "Русское Радио",
          url: "https://rusradio.hostingradio.ru/rusradio96.aacp",
        },

        {
          name: "Comedy Radio",
          url: "https://ic7.101.ru:8000/s60",
        },

        {
          name: "Юмор ФМ",
          url: "https://pub0301.101.ru:8443/stream/air/mp3/256/102",
        },
      ],
    };
  },

  mutations: {
    addStation(state) {
      let newStation = {
        name: state.name,
        url: state.url,
      };
      state.radioList.push(newStation);
      state.name = "";
      state.url = "";
    },

    removeStation(state, url) {
      state.radioList = state.radioList.filter((item) => item.url !== url);
    },
    updateName(state, name) {
      state.name = name;
    },

    updateUrl(state, url) {
      state.url = url;
    },
    toggleOpen(state) {
      state.isOpen = !state.isOpen;
    },
    play(state) {
      state.playBack = true;
    },

    pause(state) {
      state.playBack = false;
    },
    next(state) {
      state.indexTrack++;
      if (state.indexTrack > state.radioList.length - 1) {
        state.indexTrack = 0;
      }
    },

    prev(state) {
      state.indexTrack--;
      if (state.indexTrack < 0) {
        state.indexTrack = state.radioList.length - 1;
      }
    },

    handleCurrentTrack(state, paylosd) {
      state.indexTrack = paylosd;
      state.playBack = false;
      state.isOpen = false;
    },
    toogleShowDeleteBtn(state, index) {
      state.currentIndex = state.currentIndex === index ? null : index;
    },
  },

  getters: {
    currentRadio(state) {
      state.radioList = state.radioList.sort();
      return state.radioList[state.indexTrack];
    },
  },
};
