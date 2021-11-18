<template>
  <ion-card class="card">
    <div class="card-inner">
      <ion-router-link href="player">
        <ion-card-header class="header">
          <img
            class="image"
            src="https://akniga.org/uploads/media/topic/2021/11/02/12/preview/fade1b6f4e05a4099310_252x350crop.jpg"
          />
        </ion-card-header>
      </ion-router-link>

      <ion-card-content class="content">
        <ion-card-title class="title"
          >Келли Джеймс Патрик - Крошка-мошка-паучок</ion-card-title
        >
        <ion-text color="dark">
          <p class="description">
            Престарелый актёр живет в ретропригороде — имитации старинного
            города, и с ним живёт андроид — имитация его маленькой дочери.
            Однажды к ним приезжает его настоящая, взрослая дочь…
          </p>
        </ion-text>
      </ion-card-content>
    </div>
    <div class="footer">
      <div class="footer-inner">
        <ion-icon class="footer-icon" :icon="mic"></ion-icon>
        <span class="footer-text">Головин Кирилл</span>
      </div>
    </div>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText,
  IonIcon,
} from "@ionic/vue";

import { mic } from "ionicons/icons";

export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonText,
    IonIcon,
  },
  setup() {
    return {
      mic,
    };
  },
};
</script>

<style scoped>
p {
  margin: 0;
}

.card-inner {
  display: flex;

  padding: 10px;

  border-bottom: 3px solid #e48d36;
}

.header {
  padding: 0;
}

.image {
  min-width: 120px;
  height: auto;

  vertical-align: bottom;

  border-radius: 5px;
}

.content {
  padding: 0 0 0 10px;
}

.title {
  margin-bottom: 10px;

  font-size: 14px;
  line-height: 1;
}

.description {
  margin-bottom: 5px;

  font-size: 12px;
  line-height: 1.1;
  font-style: italic;
}

.footer {
  background-color: #ffa142;

  color: #fff;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px 0;
}

.footer-icon {
  font-size: 24px;
}

.footer-text {
  margin-left: 5px;

  font-size: 14px;
  vertical-align: bottom;
}
</style>