<!-- <template>
  <div class="home">
    <h1>Welcome to the Home Page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/semantic-colors" as *;

.home {
  h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    color: $text-inverse;
  }
}
</style> -->

<template>
  <div class="home">
    <!-- <h1>Welcome to the Home Page</h1> -->
    <Screen1Content />
    <Screen2Content />
    <Screen3Content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Screen1Content from "../../components/Screen1Content/index.vue";
import Screen2Content from "../../components/Screen2Content/index.vue";
import Screen3Content from "../../components/Screen3Content/index.vue";

export default defineComponent({
  name: "Home",
  components: {
    Screen1Content,
    Screen2Content,
    Screen3Content,
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/semantic-colors" as *;

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    color: $text-inverse;
  }
}
</style>
