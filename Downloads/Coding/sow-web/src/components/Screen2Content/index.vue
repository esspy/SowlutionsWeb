<template>
  <div class="screen2-content">
    <div class="towns">
      <div class="reference" v-for="city in cities" :key="city">
        <span class="city-name">{{ city }}</span>
      </div>
    </div>
    <div class="worldmap-container">
      <img
        src="../../assets/Images/Illustrations/World-map.png"
        alt="World Map"
        class="worldmap-image"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Screen2Content",
  data() {
    return {
      cities: [
        "San Francisco",
        "Los Angeles",
        "Austin",
        "Miami",
        "Dubai",
        "Beirut",
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/semantic-colors" as *;

.screen2-content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  padding: 0 50px 20px;
  gap: 10px;
  background: $gray-50;
}

.towns {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  // margin-top: 60px;

  .reference {
    flex: 1;
    height: 20px;
    padding: 20px 10px 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .city-name {
      font-family: $font-family-primary;
      font-weight: $font-weight-bold;
      font-size: $font-size-xs;
      letter-spacing: 2.5px;
      line-height: 100%;
      text-transform: uppercase;
      color: $text-bold;
    }
  }
}

.worldmap-container {
  display: flex;
  justify-content: center;
  margin-top: 60px;

  .worldmap-image {
    width: 724.56px;
    height: auto;
    object-fit: contain;
  }
}

@media (max-width: 768px) {
  .screen2-content {
    padding: 0 20px 20px;
  }

  .towns {
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .reference {
      width: 100%;
      justify-content: center;
    }
  }

  .worldmap-container {
    .worldmap-image {
      width: 100%;
      max-width: 724.56px;
    }
  }
}
</style>
