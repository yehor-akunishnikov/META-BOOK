<template>
  <ion-select 
    v-if="chapters"
    :value="chapters[0].url"
    class="select" 
    ok-text="Okay" 
    cancel-text="Dismiss"
    @ionChange="($event) => this.$emit('switch', $event.detail.value)"
  >
    <ion-select-option
      v-for="chapter in chapters"
      :key="chapter.name"
      v-bind:value="chapter.url"
    >Chapter: {{chapter.name}}</ion-select-option>
  </ion-select>
</template>

<script>
import { IonSelect, IonSelectOption, } from "@ionic/vue";

export default {
  components: {
    IonSelect, 
    IonSelectOption,
  },
  props: ['chapters'],
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