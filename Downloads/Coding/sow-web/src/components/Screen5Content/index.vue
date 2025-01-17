<template>
  <div class="screen5-content">
    <div class="statistics-row">
      <StatisticCard value="$100M+" label="Total Startups Valuation" />
      <StatisticCard value="20+" label="Startups" />
      <StatisticCard value="8+" label="Cities" />
      <StatisticCard value="40+" label="Founders" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatisticCard from "../StatisticCard/index.vue";

export default defineComponent({
  name: "Screen5Content",
  components: {
    StatisticCard,
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/semantic-colors" as *;

.screen5-content {
  display: flex;
  width: 100%;
  padding: 25px 100px;
  box-sizing: border-box;
  background-color: $gray50;
  min-height: 144px;
  align-items: center;
}

.statistics-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  gap: 10px;
}
</style>
