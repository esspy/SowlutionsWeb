<!-- <template>
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
import * as Icons from "../../assets/Icons"; // SVGs are exported from here

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
    background-color: $gray50;
    .button-icon__icon {
      color: $text-bold;
    }
  }

  &:active:not(:disabled) {
    background-color: $gray400;
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
    :style="buttonStyles"
  >
    <component
      :is="iconComponent"
      class="button-icon__icon"
      :aria-label="iconAlt"
      role="img"
      :style="iconStyles"
    />
  </button>
</template>

<script lang="ts">
import { defineComponent, Component } from "vue";
import * as Icons from "../../assets/Icons"; // SVGs are exported from here

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
    iconColor: {
      type: String,
      required: false,
      default: "#000", // Default icon color
    },
    hoverIconColor: {
      type: String,
      required: false,
      default: "#333", // Default hover icon color
    },
    backgroundColor: {
      type: String,
      required: false,
      default: "#f0f0f0", // Default background color
    },
    hoverBackgroundColor: {
      type: String,
      required: false,
      default: "#e0e0e0", // Default hover background color
    },
    strokeColor: {
      type: String,
      required: false,
      default: "#333", // Default hover icon color
    },
    hoverStrokeColor: {
      type: String,
      required: false,
      default: "#333", // Default hover icon color
    },
  },
  computed: {
    iconComponent(): Component {
      return Icons[this.icon];
    },
    buttonStyles() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
    iconStyles() {
      return {
        color: this.iconColor,
      };
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
  border-radius: 100px;
  border: 1px solid $gray200;
  cursor: pointer;
  transition: all 0.2s ease;

  &__icon {
    width: 16px;
    height: 16px;
    // SVGs can be colored using 'currentColor'
  }

  &:hover:not(:disabled) {
    background-color: var(--hover-background-color);
    border-color: var(--hover-stroke-color);
    .button-icon__icon {
      color: var(--hover-icon-color);
    }
  }

  &:active:not(:disabled) {
    background-color: $gray400;
  }

  &--disabled,
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>
