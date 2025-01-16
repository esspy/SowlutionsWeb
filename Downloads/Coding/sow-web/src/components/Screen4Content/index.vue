<template>
  <div class="screen4-content">
    <HeaderSection />
    <div class="card-section">
      <div class="cards-row">
        <CardSimple
          title="Experts"
          description="We target domain experts"
          icon-name="medal"
          icon-color="#fa52b2"
        />
        <CardSimple
          title="Skin in the game"
          description="The entrepreneur has to have something to lose"
          icon-name="hand"
          icon-color="#fa52b2"
        />
        <CardSimple
          title="Stubborn"
          description="The entrepreneur must be stubborn (in a good way)"
          icon-name="horse"
          icon-color="#fa52b2"
        />
      </div>
      <div class="cards-row">
        <CardSimple
          title="Team"
          description="The team needs to be cohesive and synergistic"
          icon-name="team"
          icon-color="#fa52b2"
        />
        <CardSimple
          title="Character"
          description="Transparency is a key factor in our choice of partners"
          icon-name="book"
          icon-color="#fa52b2"
        />
        <div class="contact-card">
          <div class="icon-container">
            <QuestionIcon class="question-icon" />
          </div>
          <ButtonBrand label="Contact us" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderSection from "../HeaderSection/index.vue";
import CardSimple from "../CardSimple/index.vue";
import ButtonBrand from "../ButtonBrand/index.vue";
import QuestionIcon from "../../assets/Icons/question.vue";

export default defineComponent({
  name: "Screen4Content",
  components: {
    HeaderSection,
    CardSimple,
    ButtonBrand,
    QuestionIcon,
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/semantic-colors" as *;

.screen4-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 100px 50px;
  box-sizing: border-box;
  background-color: $gray-50;
}

.card-section {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  max-width: 1340px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.cards-row {
  display: flex;
  flex-direction: row;
  gap: 25px;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
}

.contact-card {
  width: 410px;
  padding: 0 10px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 38px;
  background-color: $gray-100;
}

.icon-container {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 98px;
    height: 96px;
    object-fit: contain;
  }
}
</style>
