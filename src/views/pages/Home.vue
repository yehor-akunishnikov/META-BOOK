<template>
  <ion-content>
    <BookCard 
      v-for="book of books" 
      :key="book.id"
      v-bind:book="book"
    />
  </ion-content>
</template>

<script>
import {
  IonContent,
} from "@ionic/vue";

import BookCard from '../../components/BookCard.vue'

export default {
  data() {
    return {
      books: [],
    };
  },
  components: {
    IonContent,
    BookCard,
  },
  created() {
    fetch('https://my-json-server.typicode.com/yehor-akunishnikov/MOCK-DB/books')
      .then(res => res.json())
      .then(json => {
        this.books = json.map(book => {
          return {
            ...book, 
            description: book.description.split(' ').slice(0, 40).join(' ') + '...',
          }
        });
      });
  }
};
</script>