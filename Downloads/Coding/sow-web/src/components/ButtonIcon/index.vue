<template>
  <button
    :class="['button-icon', { 'button-icon--disabled': disabled }]"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <component
      :is="iconComponent"
      class="button-icon__icon"
      :aria-label="iconAlt"
      role="img"
    />
  </button>
</template>

<script lang="ts">
import { defineComponent, Component, type PropType } from "vue";
import * as Icons from "../../assets/Icons";

type IconName = keyof typeof Icons;

export default defineComponent({
  name: "ButtonIcon",
  props: {
    icon: {
      type: String as PropType<IconName>,
      required: true,
    },
    iconAlt: {
      type: String,
      required: false,
      default: "Icon",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    iconComponent(): Component | null {
      return Icons[this.icon as IconName] || null;
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

.button-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 8px;
  background-color: var(--button-bg, $neutral10);
  border: 1px solid var(--button-border, $gray600);
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.2s ease;

  &__icon {
    width: 16px;
    height: 16px;
    color: var(--icon-color, $gray50);
  }

  &:hover:not(:disabled) {
    background-color: var(--button-bg-hover, $gray50);
    border-color: var(--button-border-hover, $gray50);

    .button-icon__icon {
      color: var(--icon-color-hover, $black900);
    }
  }

  &:active:not(:disabled) {
    opacity: 0.8;
  }

  &--disabled,
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>
