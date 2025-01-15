<!-- <template>
  <button
    :class="['button-icon', { 'button-icon--disabled': disabled }]"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <img
      :src="iconSrc"
      :alt="iconAlt"
      class="button-icon__image"
      width="16"
      height="16"
    />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ICONS } from "@/constants/icons";

// Create a type from your icons constant
type IconName = keyof typeof ICONS;

export default defineComponent({
  name: "ButtonIcon",
  props: {
    icon: {
      type: String as () => IconName,
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
    iconSrc(): string {
      return ICONS[this.icon];
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
  background-color: $neutral-10;
  border-radius: 100px;
  border: 1px solid #6d6d6d;
  cursor: pointer;
  transition: all 0.2s ease;

  &__image {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }

  &:hover:not(:disabled) {
    background-color: #1a1a1a;
  }

  &:active:not(:disabled) {
    background-color: #333333;
  }

  &--disabled,
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style> -->

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
import { defineComponent, Component } from "vue";
import * as Icons from "../../assets/Icons"; // Assuming your SVGs are exported from here

// Create a type from your icons
type IconName = keyof typeof Icons;

export default defineComponent({
  name: "ButtonIcon",
  props: {
    icon: {
      type: String as () => IconName,
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
    iconComponent(): Component {
      return Icons[this.icon];
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
  background-color: $neutral-10;
  border-radius: 100px;
  border: 1px solid #6d6d6d;
  cursor: pointer;
  transition: all 0.2s ease;

  &__icon {
    width: 16px;
    height: 16px;
    // SVGs can be colored using 'currentColor'
    color: $text-inverse;
  }

  &:hover:not(:disabled) {
    background-color: $gray-50;
    .button-icon__icon {
      color: $text-bold;
    }
  }

  &:active:not(:disabled) {
    background-color: $gray-400;
  }

  &--disabled,
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>
