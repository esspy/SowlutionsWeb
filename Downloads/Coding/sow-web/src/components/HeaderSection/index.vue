<template>
  <div class="header-section">
    <h1 class="title">When Do We Invest?</h1>
    <div class="brush-stroke">
      <img
        src="../../assets/Images/Illustrations/brush-stroke.png"
        alt="Brush Stroke"
        width="204"
        height="27"
      />
    </div>
    <p class="subtitle">WE FOCUS ON THE ENTREPRENEUR</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderSection",
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/semantic-colors" as *;

.header-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0 50px;
  background-color: inherit;
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
  margin: 25px 0 0 0;
}

@media (max-width: 768px) {
  .header-section {
    padding: 0 20px;
  }

  .title {
    font-size: $font-size-4xl;
    line-height: $line-height-h3;
  }
}
</style>
