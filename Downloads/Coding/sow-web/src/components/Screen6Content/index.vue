<template>
  <div class="screen-content">
    <HeaderSection
      title="Our Mentors"
      subtitle="Our Startups are double matched with mentors"
    />
    <div class="profile-images">
      <ProfileCard
        v-for="(profile, index) in profiles"
        :key="index"
        :name="profile.name"
        :title="profile.title"
        :company="profile.company"
        :description="profile.description"
        :profileImage="profile.profileImage"
        :linkedinUrl="profile.linkedinUrl"
        :twitterUrl="profile.twitterUrl"
        :showLinkedIn="profile.showLinkedIn"
        :showTwitter="profile.showTwitter"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderSection from "../HeaderSection/index.vue";
import ProfileCard from "../ProfileCard/index.vue";

// Import images directly
import robbImage from "../../assets/Images/PhotosID/sowlutions_mentors_robb-mcdaniels-p-500.jpeg";
import brianImage from "../../assets/Images/PhotosID/sowlutions_mentors_brian.jpeg";
import dannyImage from "../../assets/Images/PhotosID/sowlutions_mentors_danny-hamady.png";
import marounImage from "../../assets/Images/PhotosID/sowlutions_mentors_maroun-nasard.png";

export default defineComponent({
  components: {
    HeaderSection,
    ProfileCard,
  },
  data() {
    return {
      profiles: [
        {
          name: "Robb McDaniels",
          title: "Beatport, CEO",
          company: "Music industry veteran",
          description: "Music industry veteran",
          profileImage: robbImage,
          linkedinUrl: "https://www.linkedin.com/in/robbmcdaniels",
          twitterUrl: "https://twitter.com/robbmcdaniels",
          showLinkedIn: true,
          showTwitter: false, // This profile will only show LinkedIn
        },
        {
          name: "Brian Axe",
          title: "Halo Tech, CPO",
          company: "Google Adsense co-founder",
          description: "Google Adsense co-founder",
          profileImage: brianImage,
          linkedinUrl: "https://www.linkedin.com/in/brianaxe",
          twitterUrl: "https://twitter.com/brianaxe",
          showLinkedIn: true,
          showTwitter: false, // This profile will show both
        },
        {
          name: "Danny Hamady",
          title: "Momentum Microsystems, CEO",
          company: "Silicon Valley VC",
          description: "Silicon Valley VC",
          profileImage: dannyImage,
          linkedinUrl: "https://www.linkedin.com/in/dannyhamady",
          twitterUrl: "https://twitter.com/dannyhamady",
          showLinkedIn: true,
          showTwitter: false, // This profile will only show LinkedIn
        },
        {
          name: "Maroun Nasard",
          title: "Srapikal, CEO",
          company: "High Tech Investor",
          description: "High Tech Investor",
          profileImage: marounImage,
          linkedinUrl: "https://www.linkedin.com/in/marounnasard",
          twitterUrl: "https://twitter.com/marounnasard",
          showLinkedIn: true,
          showTwitter: false, // This profile will only show LinkedIn
        },
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
  //   min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 100px 50px;
  background-color: $gray50;
}

.profile-images {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
}
</style>
