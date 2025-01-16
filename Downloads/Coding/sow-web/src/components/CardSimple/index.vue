&lt;template>
  &lt;div class="card">
    &lt;div class="image-container">
      &lt;img :src="imageUrl" alt="Medal Icon" class="medal-image" />
    &lt;/div>
    &lt;h2 class="title">{{ title }}&lt;/h2>
    &lt;p class="description">{{ description }}&lt;/p>
  &lt;/div>
&lt;/template>

&lt;script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardSimple",
  props: {
    title: {
      type: String,
      default: "Experts",
    },
    description: {
      type: String,
      default: "We target domain experts",
    },
    imageUrl: {
      type: String,
      default: "https://dashboard.codeparrot.ai/api/assets/Z4jN_q44F0YMkTNT",
    },
  },
});
&lt;/script>

&lt;style scoped lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/semantic-colors" as *;

.card {
  width: 410px;
  padding: 0 10px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  background-color: $gray-50;
}

.image-container {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.medal-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
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
&lt;/style>

