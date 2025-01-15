<template>
  <div class="menu-item" @click="$emit('click')">
    <slot>
      <span class="menu-text">{{ text }}</span>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuItem",
  props: {
    text: {
      type: String,
      required: false,
      default: "Investment Types",
    },
  },
  emits: {
    click: null,
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/semantic-colors" as *;

.menu-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-right: 25px;
  height: 100px;
  width: auto;
  box-sizing: border-box;
  background-color: $neutral-10;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    .menu-text {
      color: $gray-400;
    }
  }
}

.menu-text {
  font-family: $menu-font-family;
  font-weight: $menu-font-weight;
  font-size: $menu-font-size;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  line-height: 20px;
  color: $text-inverse;
  text-align: center;
  vertical-align: middle;
  transition: color 0.2s ease;
}
</style>
