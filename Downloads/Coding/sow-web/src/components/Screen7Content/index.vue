<template>
  <div class="screen-content">
    <HeaderSection title="The Leadership Team" subtitle="" />
    <div class="profile-images custom-icons">
      <!-- <div class="profile-cards-wrapper"> -->
      <ProfileCard
        v-for="(profile, index) in profiles"
        :key="index"
        :name="profile.name"
        :title="profile.title"
        :profileImage="profile.profileImage"
        :linkedinUrl="profile.linkedinUrl"
        :twitterUrl="profile.twitterUrl"
        :showLinkedIn="profile.showLinkedIn"
        :showTwitter="profile.showTwitter"
        buttonCustomClass="blue-theme"
      />
      <div class="join-team-section">
        <h2>You can make a difference</h2>
        <ButtonBrand label="Join our Team" />
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderSection from "../HeaderSection/index.vue";
import ProfileCard from "../ProfileCard/index.vue";
import ButtonBrand from "../ButtonBrand/index.vue";

// Import images
import abdoImage from "@/assets/Images/PhotosID/sowlutions_team-members_abdo-achkar.jpg";
import patrickImage from "@/assets/Images/PhotosID/sowlutions_team-members_patrick-saad.jpeg";
import maryannImage from "@/assets/Images/PhotosID/sowlutions_team-members_maryann-mcdaniels.jpg";
import marcImage from "@/assets/Images/PhotosID/sowlutions_team_marc-saad.jpeg";
import samImage from "@/assets/Images/PhotosID/sowlutions_team_sam-bechara.jpg";

export default defineComponent({
  name: "LeadershipTeam",
  components: {
    HeaderSection,
    ProfileCard,
    ButtonBrand,
  },
  data() {
    return {
      profiles: [
        {
          name: "Abdo Achkar",
          title: "Founder & CEO",
          company: "Company Name",
          description: "Description about Abdo Achkar",
          profileImage: abdoImage,
          linkedinUrl: "https://www.linkedin.com/in/abdoachkar",
          twitterUrl: "https://twitter.com/abdoachkar",
          showLinkedIn: true,
          showTwitter: true,
        },
        {
          name: "Patrick Saad",
          title: "Product Lead",
          company: "Company Name",
          description: "Description about Abdo Achkar",
          profileImage: patrickImage,
          linkedinUrl: "https://www.linkedin.com/in/patricksaad",
          twitterUrl: "https://twitter.com/abdoachkar",
          showLinkedIn: true,
          showTwitter: false,
        },
        {
          name: "Maryann McDaniels",
          title: "Bizdev and Strategy",
          company: "Company Name",
          description: "Description about Abdo Achkar",
          profileImage: maryannImage,
          linkedinUrl: "https://www.linkedin.com/in/abdoachkar",
          twitterUrl: "https://twitter.com/abdoachkar",
          showLinkedIn: true,
          showTwitter: false,
        },
        {
          name: "Marc Saad",
          title: "Operations Manager",
          company: "Company Name",
          description: "Description about Abdo Achkar",
          profileImage: marcImage,
          linkedinUrl: "https://www.linkedin.com/in/abdoachkar",
          twitterUrl: "https://twitter.com/abdoachkar",
          showLinkedIn: true,
          showTwitter: false,
        },
        {
          name: "Sam Bechara",
          title: "Head of Engineering",
          company: "Company Name",
          description: "Description about Abdo Achkar",
          profileImage: samImage,
          linkedinUrl: "https://www.linkedin.com/in/abdoachkar",
          twitterUrl: "https://twitter.com/abdoachkar",
          showLinkedIn: true,
          showTwitter: false,
        },
        // ... other profile entries remain the same
      ],
    };
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/semantic-colors" as *;

.screen-content {
  width: 100%;
  min-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 50px;
  background-color: $gray50;
}

.profile-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  width: 100%;
}

.profile-cards-wrapper {
  display: flex;
  // flex-wrap: wrap;
  gap: 25px;
  width: 100%;
}

.join-team-section {
  flex-grow: 1; // Allows this section to take up remaining space
  text-align: center;
  // width: 100%;

  h2 {
    font-size: $font-size-4xl;
    font-weight: $font-weight-bold;
    color: $blue500;
    word-wrap: break-word; // Ensures long words break and wrap
    overflow-wrap: break-word; // Ensures text wraps within the div
    margin-bottom: 20px;
  }

  .button-brand {
    width: 100%; // Make the button take the full width
  }
}

@media (max-width: 768px) {
  .screen-content {
    padding: 50px 20px;
  }
}
</style>
