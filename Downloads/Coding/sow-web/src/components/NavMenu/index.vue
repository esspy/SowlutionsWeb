<template>
  <div class="menu-container">
    <LogoSow class="logo" />
    <div class="menu-items">
      <MenuItem text="Investment Types" @click="handleMenuClick(1)" />
      <MenuItem text="Philosophy" @click="handleMenuClick(2)" />
      <MenuItem text="Mentors" @click="handleMenuClick(3)" />
      <MenuItem text="Team" @click="handleMenuClick(4)" />
      <ButtonBrand label="Contact" @click="handleContactClick" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonBrand from "@/components/ButtonBrand/index.vue";
import MenuItem from "@/components/MenuItem/index.vue";
import LogoSow from "@/components/LogoSow/index.vue";

export default defineComponent({
  name: "NavMenu",
  components: {
    ButtonBrand,
    MenuItem,
    LogoSow,
  },
  emits: ["menuClick", "contactClick"],
  methods: {
    handleMenuClick(itemId: number) {
      this.$emit("menuClick", itemId);
    },
    handleContactClick() {
      this.$emit("contactClick");
    },
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/semantic-colors" as *;

.menu-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 50px;
  border-bottom: 1px solid $gray-600;
}

.menu-items {
  display: flex;
  gap: 10px;
  align-items: center;
}

.logo {
  margin-right: auto;
}
</style>
