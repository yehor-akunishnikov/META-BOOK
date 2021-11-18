<template>
  <ion-select class="select" value="3" ok-text="Okay" cancel-text="Dismiss">
    <ion-select-option value="1">Chapter 1</ion-select-option>
    <ion-select-option value="2">Chapter 2</ion-select-option>
    <ion-select-option value="3">Chapter 3</ion-select-option>
  </ion-select>
</template>

<script>
import { IonSelect, IonSelectOption, } from "@ionic/vue";

export default {
  components: {
    IonSelect, 
    IonSelectOption,
  },
};
</script>

<style scoped>
.select {
  display: inline-flex;
  padding: 5px 15px;

  border: #ffa142 1px solid;
  border-radius: 5px;
}

.select::part(icon) {
  color: #ffa142;

  opacity: 1;
}
</style>