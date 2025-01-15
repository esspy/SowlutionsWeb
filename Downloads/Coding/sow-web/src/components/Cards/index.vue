<template>
  <div class="card">
    <div class="image-container">
      <img :src="imageUrl" alt="Product Icon" class="product-image" />
    </div>
    <h2 class="title">{{ title }}</h2>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cards",
  props: {
    title: {
      type: String,
      default: "Idea to Product",
    },
    description: {
      type: String,
      default: "We hold your hand from idea to minimum viable product",
    },
    imageUrl: {
      type: String,
      default: "https://dashboard.codeparrot.ai/api/assets/Z4Z_n_zJ0Q4FLANu",
    },
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/semantic-colors" as *;

.card {
  width: 430px;
  height: 436px;
  padding: 50px 50px 25px;
  background-color: $gray-50;
  border-radius: 12.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}

.image-container {
  width: 200px;
  height: 200px;
  background-color: $gray-200;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image {
  width: 165px;
  height: 165px;
  object-fit: contain;
}

.title {
  font-family: $font-family-primary;
  font-weight: $font-weight-bold;
  font-size: $font-size-2xl;
  line-height: $line-height-h4;
  color: $text-bold;
  text-align: center;
  margin: 0;
}

.description {
  font-family: $font-family-secondary;
  font-weight: $font-weight-regular;
  font-size: $font-size-base;
  line-height: $line-height-relaxed;
  color: $text-bold;
  text-align: center;
  margin: 0;
  max-width: 330px;
}
</style>
