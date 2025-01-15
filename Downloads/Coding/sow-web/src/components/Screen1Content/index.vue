<template>
  <div class="screen1-content">
    <!-- Left Icons -->
    <div class="left-screen">
      <div class="icon-wrapper">
        <ButtonIcon
          icon="Phone"
          iconAlt="Phone"
          :iconSrc="'https://dashboard.codeparrot.ai/api/assets/Z3-82tuArPNQGsal'"
        />
      </div>
      <div class="icon-wrapper">
        <ButtonIcon
          icon="Envelope"
          iconAlt="Email"
          :iconSrc="'https://dashboard.codeparrot.ai/api/assets/Z3-82tuArPNQGsam'"
        />
      </div>
    </div>

    <!-- Middle Content -->
    <div class="middle-screen">
      <div class="text-container">
        <h1>{{ title }}</h1>
      </div>
      <div class="brush-stroke-container">
        <img
          src="https://dashboard.codeparrot.ai/api/assets/Z3-82tuArPNQGsan"
          alt="Brush stroke"
          class="brush-stroke"
        />
      </div>
      <div class="cta">
        <ButtonBrand :label="primaryButtonLabel" />
        <ButtonTransparent :label="secondaryButtonLabel" />
      </div>
    </div>

    <!-- Right Icons -->
    <div class="right-screen">
      <div class="icon-wrapper">
        <ButtonIcon
          icon="LinkedIn"
          iconAlt="LinkedIn"
          :iconSrc="'https://dashboard.codeparrot.ai/api/assets/Z3-82tuArPNQGsap'"
        />
      </div>
      <div class="icon-wrapper">
        <ButtonIcon
          icon="Twitter"
          iconAlt="Twitter"
          :iconSrc="'https://dashboard.codeparrot.ai/api/assets/Z3-82tuArPNQGsap'"
        />
      </div>
      <div class="icon-wrapper">
        <ButtonIcon
          icon="Facebook"
          iconAlt="Facebook"
          :iconSrc="'https://dashboard.codeparrot.ai/api/assets/Z3-82tuArPNQGsaq'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonIcon from "../ButtonIcon/index.vue";
import ButtonBrand from "../ButtonBrand/index.vue";
import ButtonTransparent from "../ButtonTransparent/index.vue";

export default defineComponent({
  name: "Screen1Content",
  components: {
    ButtonIcon,
    ButtonBrand,
    ButtonTransparent,
  },
  props: {
    title: {
      type: String,
      default: "We invest in startups by building their technology",
    },
    primaryButtonLabel: {
      type: String,
      default: "Do we match?",
    },
    secondaryButtonLabel: {
      type: String,
      default: "Learn More",
    },
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/semantic-colors" as *;

.screen1-content {
  display: flex !important; /* Force flex display */
  flex-direction: row !important; /* Force row direction */
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24px 50px !important;
  min-height: 80vh;
  box-sizing: border-box; /* Ensure padding is included in width calculation */
  // background: $bg-brand;
}

/* Left section */
.screen1-content > .left-screen {
  flex: 0 0 48px !important; /* Fixed width */
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 48px; /* Ensure minimum width */
}

/* Middle section */
.screen1-content > .middle-screen {
  flex: 1 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 128px 0px 128px;
  gap: 48px;
  min-width: 0; /* Allow content to shrink */
}

/* Right section */
.screen1-content > .right-screen {
  flex: 0 0 48px !important; /* Fixed width */
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 48px; /* Ensure minimum width */
}
.screen1-content .middle-screen .text-container h1 {
  color: $text-inverse;
  font-family: $font-family-primary;
  font-weight: $font-weight-bold;
  font-size: $font-size-6xl; // 60px;
  line-height: $line-height-h1; // 83px;
  text-align: center;
  margin: 0;
}

.cta {
  display: flex;
  gap: 32px;
  justify-content: center;
  // margin-top: 48px;

  :deep(.button-brand) {
    width: 220px;
  }

  :deep(.button-transparent) {
    width: 220px;
  }
}

/* Mobile styles */
@media (max-width: 768px) {
  .screen1-content {
    flex-direction: column !important;
    padding: 24px;
  }

  .screen1-content > .left-screen,
  .screen1-content > .right-screen {
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
}
</style>
