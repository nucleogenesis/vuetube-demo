<template>
<v-list>
    <v-list-tile v-if='$store.state.videoList.length > 0' v-for="video in videoList" :key="video.id" v-on:click="$store.commit('setSelectedVideo', video)">
        <div>
            <img :src="video.thumbnails.default.url" style="width: 75px; max-height: 50px; height: auto;">
        </div>
        <v-list-tile-content>
            <v-list-tile-title><b>{{video.title}}</b></v-list-tile-title>
            <v-list-tile-title>{{video.description}}</v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>
</v-list>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "results",
  computed: mapState(["videoList"])
};
</script>
<style>
.list > div {
  margin: 1em 1em 1em 0;
}
img {
  margin-right: 1em;
}
</style>
