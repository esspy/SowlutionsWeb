<template>
  <button
    :class="['button-brand', { 'button-brand--disabled': disabled }]"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonBrand",
  props: {
    label: {
      type: String,
      required: false,
      default: "LABEL",
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

.button-brand {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 95px;
  height: 53px;
  padding: 20px 24px;
  background-color: $bg-brand;
  border-radius: 24px;
  border: none;
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

  &:hover:not(:disabled) {
    background-color: $bg-brand-hover;
  }

  &:active:not(:disabled) {
    background-color: $bg-brand-active;
  }

  &--disabled,
  &:disabled {
    background-color: $bg-brand-disabled;
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>
