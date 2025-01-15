<template>
  <button
    :class="[
      'button-transparent',
      { 'button-transparent--disabled': disabled },
    ]"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonTransparent",
  props: {
    label: {
      type: String,
      required: false,
      default: "Learn More",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
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

.button-transparent {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 53px;
  padding: 20px 24px;
  background-color: $neutral-10;
  border: 1px solid $gray-50;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.2s ease;

  // Text styles
  color: $text-inverse;
  font-family: $label-font-family;
  font-weight: $label-font-weight;
  font-size: $label-font-size;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  line-height: 1;
}

.button-transparent:hover:not(:disabled) {
  background-color: $gray-50; // Changed to solid white
  color: $text-bold; // Added black text color for hover
}

.button-transparent:active:not(:disabled) {
  background-color: $gray-400; // Slightly darker white when active
  color: $text-bold;
  border: 1px solid $gray-400;
}

.button-transparent--disabled,
.button-transparent:disabled {
  background-color: $bg-brand-disabled;
  border: 1px solid $bg-brand-disabled;
  color: $text-bold;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
