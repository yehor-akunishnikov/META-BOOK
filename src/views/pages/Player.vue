<template>
  <ion-card class="container">
    <div class="header">
      <ChapterSelect />
    </div>
    <div class="content">
      <div class="titles">
        <ion-text color="dark">
          <h1 class="title">John Doe</h1>
        </ion-text>
        <ion-text class="subtitle" color="dark">
          <p class="subtitle">The book</p>
        </ion-text>
      </div>
      <div class="controls">
        <ion-button size="small">
          <ion-icon :icon="playBack"></ion-icon>
        </ion-button>
        <ion-button size="large" class="play-btn">
          <ion-icon :icon="play"></ion-icon>
        </ion-button>
        <ion-button size="small">
          <ion-icon :icon="playForward"></ion-icon>
        </ion-button>
      </div>
      <ion-progress-bar class="progress" value="0.5"></ion-progress-bar>
      <ion-text color="dark">
        <p class="title">00:23:00</p>
      </ion-text>
    </div>
    <div class="footer">
      <ion-button>
        <ion-icon :icon="volumeMute"></ion-icon>
      </ion-button>
    </div>
  </ion-card>
</template>

<script>
import { IonCard, IonText, IonProgressBar, IonButton, } from "@ionic/vue";
import { play, playBack, playForward, volumeMute, } from "ionicons/icons";
import ChapterSelect from "../../components/ChapterSelect.vue";

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
    }
  }
};
</script>

<style scoped>
.container {
  height: calc(100% - 20px);

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
  margin-bottom: 60px;
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
}

.footer {
  padding: 15px 0;

  text-align: center;
}
</style>
