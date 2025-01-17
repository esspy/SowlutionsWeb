<template>
  <div class="screen4-content">
    <HeaderSection />
    <div class="card-section">
      <div class="cards-row">
        <CardSimple
          title="Experts"
          description="We target domain experts"
          icon-name="medal"
          icon-color="#e41382"
        />
        <CardSimple
          title="Skin in the game"
          description="The entrepreneur has to have something to lose"
          icon-name="hand"
          icon-color="#e41382"
        />
        <CardSimple
          title="Stubborn"
          description="The entrepreneur must be stubborn (in a good way)"
          icon-name="horse"
          icon-color="#e41382"
        />
        <CardSimple
          title="Team"
          description="The team needs to be cohesive and synergistic"
          icon-name="team"
          icon-color="#e41382"
        />
        <CardSimple
          title="Character"
          description="Transparency is a key factor in our choice of partners"
          icon-name="book"
          icon-color="#e41382"
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
  gap: 25px;
  min-height: auto;
  padding: 100px 50px;
  box-sizing: border-box;
  background-color: $gray-50;
}

.card-section {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  max-width: 1440px;
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

  > * {
    flex: 0 0 calc((100% - 50px) / 3); /* Account for two 25px gaps between three items */
    width: calc((100% - 50px) / 3);
    min-width: 300px;
    margin: 0;
    box-sizing: border-box;
  }
}

.contact-card {
  // width: 410px;
  padding: 0 10px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 38px;
  // background-color: $gray-100;

  :deep(.button-brand) {
    width: 100%;
  }
}

.icon-container {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  :deep(.question-icon) {
    width: 100%;
    height: 100%;

    path {
      fill: $text-brand;
    }
  }
}
</style>
