<template>
  <div class="profile-card">
    <div class="name">
      {{ name }}
    </div>
    <div class="company-title">
      <a :href="companyUrl" v-if="company">{{ company }},</a> {{ title }}
    </div>
    <div class="description" v-if="description">
      {{ description }}
    </div>
    <div class="profile-image">
      <img :src="profileImage" :alt="name" />
    </div>
    <div class="social-media">
      <div class="icon-wrapper" v-if="showLinkedIn">
        <ButtonIcon
          icon="LinkedIn"
          iconAlt="LinkedIn"
          :class="['social-icon', buttonCustomClass]"
          @click="handleLinkedInClick"
        />
      </div>
      <div class="icon-wrapper" v-if="showTwitter">
        <ButtonIcon
          icon="Twitter"
          iconAlt="Twitter"
          :class="['social-icon', buttonCustomClass]"
          @click="handleTwitterClick"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonIcon from "../ButtonIcon/index.vue";

export default defineComponent({
  name: "ProfileCard",
  components: {
    ButtonIcon,
  },
  props: {
    name: {
      type: String,
      required: true,
      default: "Name",
    },
    company: {
      type: String,
      required: false,
    },
    companyUrl: {
      type: String,
      default: "#",
    },
    title: {
      type: String,
      required: true,
      default: "Title",
    },
    description: {
      type: String,
      required: false,
    },
    profileImage: {
      type: String,
      required: true,
    },
    linkedinUrl: {
      type: String,
      default: "#",
    },
    twitterUrl: {
      type: String,
      default: "#",
    },
    showLinkedIn: {
      type: Boolean,
      default: true,
    },
    showTwitter: {
      type: Boolean,
      default: true,
    },
    buttonCustomClass: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleLinkedInClick() {
      window.open(this.linkedinUrl, "_blank");
    },
    handleTwitterClick() {
      window.open(this.twitterUrl, "_blank");
    },
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/semantic-colors" as *;

.profile-card {
  width: 410px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .name {
    font-family: $font-family-secondary;
    font-size: $font-size-2xl;
    font-weight: $font-weight-regular;
    color: $black500;
    line-height: 30px;
    text-align: center;
  }

  .company-title {
    font-family: $font-family-secondary;
    font-size: $font-size-base;
    font-weight: $font-weight-regular;
    line-height: 20px;
    text-align: center;
    margin-bottom: 20px;

    a {
      color: $blue500;
      text-decoration: none;

      &:hover {
        color: $blue700;
        text-decoration: none;
      }
    }
  }

  .description {
    font-family: $font-family-secondary;
    font-size: $font-size-base;
    font-weight: $font-weight-regular;
    color: $black500;
    line-height: 175%;
    text-align: center;
    margin-bottom: 20px;
  }

  .profile-image {
    width: 220px;
    height: 220px;
    margin: 20px 0 40px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .social-media {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-bottom: 48px;
  }
}

.social-icon {
  --button-bg: #{$gray50};
  --button-border: #{$gray200};
  --icon-color: #{$gray900};
  --button-bg-hover: #{$gray50};
  --button-border-hover: #{$gray900};
  --icon-color-hover: #{$black900};
}

// Custom magenta theme class
.blue-theme {
  --button-bg: #{$gray50};
  --button-border: #{$gray200};
  --icon-color: #{$blue500};
  --button-bg-hover: #{$gray50};
  --button-border-hover: #{$gray200};
  --icon-color-hover: #{$blue700};
}
</style>
