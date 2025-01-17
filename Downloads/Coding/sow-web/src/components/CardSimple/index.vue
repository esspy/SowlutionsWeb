<template>
  <div class="card">
    <div class="icon-container">
      <component
        :is="resolvedIcon"
        class="medal-image"
        :style="{ color: iconColor, fill: iconColor }"
      />
    </div>
    <h2 class="title">{{ title }}</h2>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import MedalIcon from "../../assets/Icons/medal-solid.vue";
import HandIcon from "../../assets/Icons/hand.vue";
import HorseIcon from "../../assets/Icons/horse.vue";
import TeamIcon from "../../assets/Icons/team.vue";
import BookIcon from "../../assets/Icons/book.vue";
import QuestionIcon from "../../assets/Icons/question.vue";

const iconMap = {
  medal: MedalIcon,
  hand: HandIcon,
  horse: HorseIcon,
  team: TeamIcon,
  book: BookIcon,
  question: QuestionIcon,
};

export default defineComponent({
  name: "CardSimple",

  components: {
    MedalIcon,
    HandIcon,
    HorseIcon,
    TeamIcon,
    BookIcon,
    QuestionIcon,
  },
  props: {
    title: {
      type: String,
      default: "Experts",
    },
    description: {
      type: String,
      default: "We target domain experts",
    },

    iconName: {
      type: String as PropType<keyof typeof iconMap>,
      default: "medal",
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
  },
  computed: {
    resolvedIcon() {
      return iconMap[this.iconName];
    },
  },
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/semantic-colors" as *;

.card {
  width: 410px;
  padding: 0 10px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  background-color: $gray50;
}

.icon-container {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.medal-image {
  width: 100%;
  height: 100%;
  :deep(path),
  :deep(svg) {
    fill: currentColor;
    color: inherit;
  }
}

.title {
  font-family: $font-family-primary;
  font-weight: $font-weight-bold;
  font-size: 42px;
  line-height: 44px;
  color: $text-bold;
  text-align: center;
  margin: 0;
}

.description {
  font-family: $font-family-secondary;
  font-weight: $font-weight-regular;
  font-size: $font-size-base;
  line-height: $line-height-relaxed;
  color: $text-bold;
  text-align: center;
  margin: 0;
  width: 100%;
}
</style>
