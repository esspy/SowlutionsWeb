<template>
  <div class="screen3-content">
    <h1 class="title">Investment Types</h1>
    <div class="brush-stroke">
      <img
        src="https://dashboard.codeparrot.ai/api/assets/Z4aBu644F0YMkS7b"
        alt="Brush Stroke"
      />
    </div>
    <p class="subtitle">CHECK OUR DIFFERENT TYPES OF INVESTMENT</p>
    <div class="cards-container">
      <Cards
        title="Idea to Product"
        description="We hold your hand from idea to minimum viable product"
        imageUrl="https://dashboard.codeparrot.ai/api/assets/Z4aBu644F0YMkS7c"
      />
      <Cards
        title="Boost it!"
        description="We help you accelerate your technical growth"
        imageUrl="https://dashboard.codeparrot.ai/api/assets/Z4aBu644F0YMkS7d"
      />
      <Cards
        title="Growing Pains"
        description="We help you stabilize your startup and round the corners"
        imageUrl="https://dashboard.codeparrot.ai/api/assets/Z4aBu644F0YMkS7e"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cards from "../Cards/index.vue";

export default defineComponent({
  name: "Screen3Content",
  components: {
    Cards,
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/semantic-colors" as *;

// :deep(*) {
//   outline: 1px solid red; // to debug
// }

// .screen3-content {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 100px 0;
//   background: $gray-200;
//   width: 100%;
//   box-sizing: border-box;
// }

// .screen3-content {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 100px 50px;
//   background: $gray-200;
//   inline-size: 100%; // Use logical property instead of width
//   box-sizing: border-box;
//   margin: 0;
// }

// .cards-container {
//   display: flex;
//   flex-direction: row;
//   gap: 25px;
//   margin-top: 25px;
//   inline-size: 100%;
//   justify-content: center;
//   box-sizing: border-box;

//   :deep(.card) {
//     flex: 1 1 0;
//     max-width: 430px;
//     min-width: 0;
//   }
// }

.screen3-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 50px;
  background: $gray-200;
  margin: 0 auto; // Add this
  max-width: 100%; // Add this
  box-sizing: border-box;
}

.title {
  font-family: $font-family-primary;
  font-weight: $font-weight-bold;
  font-size: $font-size-6xl;
  line-height: $line-height-h1;
  text-align: center;
  color: $text-bold;
  margin: 0;
}

.brush-stroke {
  margin-top: 25px;
  img {
    width: 204px;
    height: 27px;
    object-fit: contain;
  }
}

.subtitle {
  font-family: $font-family-primary;
  font-weight: $font-weight-bold;
  font-size: $font-size-xs;
  letter-spacing: 2.5px;
  line-height: 100%;
  text-align: center;
  text-transform: uppercase;
  color: $text-bold;
  margin: 25px 0;
}

.cards-container {
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin: 25px 0; // Changed to auto margins
  width: 100%;
  justify-content: center;
  box-sizing: border-box;

  :deep(.card) {
    flex: 1;
    max-width: 430px;
    min-width: 0; // Add this to prevent flex items from growing beyond their container
  }
}

@media (max-width: 1200px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .screen3-content {
    padding: 50px 20px;
  }

  .title {
    font-size: $font-size-4xl;
    line-height: $line-height-h3;
  }
}
</style>
