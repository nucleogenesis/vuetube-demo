<template>
    <v-list>
        <h1>VueTube</h1>
        <v-list-tile>
            <v-list-tile-content>
                <router-link to="/">Watch</router-link>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
            <v-list-tile-content>
                <router-link to="history">History</router-link>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>
<script>
export default {
  name: "side-menu"
};
</script>
<style>
a {
  height: 100%;
  width: 100%;
  text-align: center;
  padding: 1em;
}
a:hover {
  background: rgb(15, 121, 133);
  color: white;
}
</style>
