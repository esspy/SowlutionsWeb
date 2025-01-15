<template>
  <div class="logo" :class="{ 'logo--small': small }">
    <img :src="logoImage" :alt="altText" class="logo__icon" />
    <h1 class="logo__text">{{ text }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import logoImage from "@/assets/images/logos/Sowlutions-seed-2020.png";

export default defineComponent({
  name: "Logo",
  props: {
    text: {
      type: String,
      required: false,
      default: "Sowlutions",
    },
    altText: {
      type: String,
      required: false,
      default: "Sowlutions icon",
    },
    small: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {
    return {
      logoImage, // Make the imported image available to the template
    };
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/semantic-colors" as *;

.logo {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  // padding: 25px 0;
  width: 235px;
  height: 100px;
  transition: all 0.2s ease;

  &__icon {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  &__text {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    color: $text-inverse;
    margin: 0;
  }

  &--small {
    width: 175px;
    height: 75px;
    padding: 15px 0;

    .logo__icon {
      width: 35px;
      height: 35px;
    }

    .logo__text {
      font-size: 24px;
    }
  }
}
</style>
