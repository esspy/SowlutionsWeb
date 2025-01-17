<template>
  <div class="statistic-card">
    <div class="statistic-card__inner">
      <h1 class="statistic-card__value">{{ value }}</h1>
      <p class="statistic-card__label">{{ label }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StatisticCard",
  props: {
    value: {
      type: String,
      required: false,
      default: "$100M+",
    },
    label: {
      type: String,
      required: false,
      default: "Total Startups Valuation",
    },
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/semantic-colors" as *;

.statistic-card {
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  width: 234px;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 114px;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  &__value {
    font-family: $font-family-primary;
    font-weight: $font-weight-bold;
    font-size: $font-size-6xl;
    line-height: 57px;
    text-align: center;
    color: $black900;
    margin: 0;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  &__label {
    font-family: $font-family-secondary;
    font-weight: $font-weight-semibold;
    font-size: $font-size-xs;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-align: center;
    color: $black100;
    margin: 0;
    transition: transform 0.3s ease;
  }

  &:hover .statistic-card__value {
    transform: translateY(-20px);
    color: $blue500;
  }

  &:hover .statistic-card__label {
    transform: translateY(20px);
  }
}
</style>
