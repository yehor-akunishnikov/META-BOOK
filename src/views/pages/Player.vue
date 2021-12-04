<template>
  <ion-card class="container" v-if="audio">
    <div class="header">
      <ChapterSelect
        :chapters="playlist.chapters"
        @switch="onChapterSwitch"
      />
    </div>
    <div class="content">
      <div class="titles">
        <ion-text color="dark">
          <h1 class="title">{{book.author}}</h1>
        </ion-text>
        <ion-text class="subtitle" color="dark">
          <p class="subtitle">{{book.title}}</p>
        </ion-text>
      </div>
      <div class="controls">
        <ion-button @click="skipTime(-20)" size="small">
          <ion-icon :icon="playBack"></ion-icon>
        </ion-button>
        <ion-button size="large" 
          class="play-btn" 
          :disabled="!audio"
          @click="toggleAudio"
        >
          <ion-icon :icon="playingState ? pause : play"></ion-icon>
        </ion-button>
        <ion-button @click="skipTime(20)" size="small">
          <ion-icon :icon="playForward"></ion-icon>
        </ion-button>
      </div>
      <ion-progress-bar 
        @click="timelineGoTo" 
        class="progress" 
        :value="timelineLength"
      ></ion-progress-bar>
      <ion-text color="dark">
        <p class="title">{{currentTime || '00:00:00'}}</p>
      </ion-text>
    </div>
    <div class="footer">
      <ion-button @click="toggleMute">
        <ion-icon 
          :icon="isMuted ? volumeHigh : volumeMute"
        ></ion-icon>
      </ion-button>
    </div>
  </ion-card>
</template>

<script>
import { IonCard, IonText, IonProgressBar, IonButton, } from "@ionic/vue";
import { play, playBack, playForward, volumeMute, pause, volumeHigh } from "ionicons/icons";

import ChapterSelect from "../../components/ChapterSelect.vue";

import {getTimeCodeFromNum} from '@/services/TimeService';

export default {
  components: {
    IonCard,
    IonText,
    IonProgressBar,
    IonButton,
    ChapterSelect,
  },
  setup() {
    return {
      play,
      playBack,
      playForward,
      volumeMute,
      pause,
      volumeHigh,
    }
  },
  data() {
    return {
      book: {},
      playlist: {},
      audio: null,
      playingState: false,
      isMuted: false,
      timelineLength: 0,
      interval: {},
      currentTime: 0,
    }
  },
  methods: {
    toggleAudio() {
      if(this.playingState) {
        this.stop();
      }else {
        this.start();
      }
    },
    stop() {
      this.audio.pause();
      this.playingState = false;
    },
    start() {
      this.audio.play();
      this.playingState = true;
    },
    timelineGoTo(e) {
      const timelineWidth = window.getComputedStyle(e.currentTarget).width;
      const timeToSeek = e.offsetX / parseInt(timelineWidth) * this.audio.duration;

      this.audio.currentTime = timeToSeek;
    },
    toggleMute() {
      if(this.isMuted) {
        this.audio.muted = false;
      }else {
        this.audio.muted = true;
      }

      this.isMuted = !this.isMuted;
    },
    skipTime(timeToSkip) {
      if(this.audio.currentTime < this.audio.duration - 20) {
        this.audio.currentTime = this.audio.currentTime + timeToSkip;
      }
    },
    onChapterSwitch(src) {
      this.stop();
      this.interval = null;
      this.audio.src = src;

      this.audio.addEventListener('loadeddata', () => {
        this.interval = setInterval(
          () => {
            this.currentTime = getTimeCodeFromNum(this.audio.currentTime);
            this.timelineLength = this.audio.currentTime / this.audio.duration;
          }, 500
        );

        this.audio.addEventListener("ended", () => {
          this.stop();
        });
      }, {once: true});
    }
  },
  async created() {
    const booksUrl = 'https://my-json-server.typicode.com/yehor-akunishnikov/MOCK-DB/books';
    const playlistUrl = 'https://my-json-server.typicode.com/yehor-akunishnikov/MOCK-DB/playlists';
    const bookId = this.$route.params.bookId;

    this.book = await fetch(`${booksUrl}/${bookId}`)
      .then(data => data.json());
    this.playlist = await fetch(`${playlistUrl}/${this.book.playlistId}`)
      .then(data => data.json());

    this.audio = new Audio(this.playlist.chapters[0].url);

    this.audio.addEventListener('loadeddata', () => {
      this.interval = setInterval(
        () => {
          this.audio.volume = 1;
          this.currentTime = getTimeCodeFromNum(this.audio.currentTime);
          this.timelineLength = this.audio.currentTime / this.audio.duration;
        }, 500
      );

      this.audio.addEventListener("ended", () => {
        this.stop();
      });
    }, {once: true});
  },
};
</script>

<style scoped>
.container {
  height: calc(100vh - 95px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  z-index:1;
  overflow:hidden;
}

.container::before {
    width: 300%;

    position:absolute;
    left:0;
    top:0;
    z-index:-1;
    overflow: hidden;

    content: url('https://i.pinimg.com/originals/7b/f9/0b/7bf90b49f75aa5f50ca1e72974b91eff.png');
    opacity:0.1;
    border-radius: 50%;
}

.header {
  padding: 15px 0;

  text-align: center;
}

.content {
  padding: 0 30px;

  text-align: center;
}

.titles {
  margin-bottom: 20px;
}

.controls {
  margin-bottom: 40px;
}

.play-btn {
  margin: 0 15px;
}

.progress {
  height: 20px;

  border-radius: 5px;
  cursor: pointer;
}

.footer {
  padding: 15px 0;

  text-align: center;
}
</style>
