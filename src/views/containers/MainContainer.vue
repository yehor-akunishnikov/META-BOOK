<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-router-link class="header-link" href="/">
          <ion-title size="small">
            <p class="header-text">
              <ion-icon class="header-icon" :icon="book"></ion-icon>
              <span class="header-app-name">META BOOKS</span>
            </p>
          </ion-title>
        </ion-router-link>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-router-outlet></ion-router-outlet>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
} from "@ionic/vue";
import { book } from "ionicons/icons";

export default {
  components: {
    IonPage,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon,
  },
  setup() {
    return {
      book,
    };
  },
};
</script>

<style scoped>
.header-link {
  display: inline-block;

  text-decoration: none;
  color: #ffa142;
}

.header-text {
  margin: 0;
}

.header-icon {
  vertical-align: middle;
  margin-right: 10px;

  font-size: 25px;
}

.header-app-name {
  vertical-align: middle;
}
</style>