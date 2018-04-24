<template>
<v-app>
  <v-navigation-drawer app><side-menu></side-menu></v-navigation-drawer>
  <v-toolbar app>
    <search-bar search></search-bar>
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import SideMenu from "@/components/SideMenu";

export default {
  name: "App",
  components: {
    SearchBar,
    SideMenu
  },
  methods: {},
  created: function() {
    this.$store.dispatch("updateVideoList");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1.header {
  margin: 0.5em auto;
  font-size: 2em;
}
</style>
