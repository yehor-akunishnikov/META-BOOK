<template>
  <ion-content>
    <BookCard/>
    <BookCard/>
    <BookCard/>
    <BookCard/>
    <BookCard/>
  </ion-content>
</template>

<script>
import {
  IonContent,
} from "@ionic/vue";

import BookCard from '../../components/BookCard.vue'

export default {
  components: {
    IonContent,
    BookCard,
  },
};
</script>