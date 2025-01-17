#
<template>
  <div class="profile-card">
    <div class="name">
      {{ name }}
    </div>
    <div class="company-title">
      <a :href="companyUrl">{{ company }}</a
      >, {{ title }}
    </div>
    <div class="description">
      {{ description }}
    </div>
    <div class="profile-image">
      <img :src="profileImage" :alt="name" />
    </div>
    <div class="social-media">
      <ButtonIcon
        v-if="showLinkedIn"
        icon="LinkedIn"
        iconAlt="LinkedIn"
        iconColor="var(--black-900)"
        hoverIconColor="var(--black-900)"
        backgroundColor="var(--neutral-10)"
        hoverBackgroundColor="var(--neutral-10)"
        strokeColor="var(--gray-200)"
        hoverStrokeColor="var(--gray-900)"
        @click="handleLinkedInClick"
      />
      <ButtonIcon
        v-if="showTwitter"
        icon="Twitter"
        iconAlt="Twitter"
        @click="handleTwitterClick"
      />
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
      required: true,
      default: "Company",
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
      required: true,
      default: "Description",
    },
    profileImage: {
      type: String,
      default:
        "../../assets//Images/PhotosID/sowlutions_mentors_robb-mcdaniels-p-500.jpeg",
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
</style>
