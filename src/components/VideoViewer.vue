<template>
<div class='row'>
    <div class='col-md-8' v-if="videoUrl != null">
        <iframe width="560" height="315" v-bind:src="videoUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <h2>{{this.$store.state.selectedVideo.title}}</h2>
        <p>{{this.$store.state.selectedVideo.description}}</p>
    </div>
    <div class='col-md-8' v-else>
      <p>Select a video on the right to view it here!</p>
    </div>
    <div class='col-md-4'>
        <h3>Search Results</h3>
        <results></results>
    </div>
</div>
</template>

<script>
import Results from "@/components/Results";

export default {
  name: "video-viewer",
  computed: {
    videoUrl: function() {
      if (this.$store.state.selectedVideo != null) {
        return (
          "https://www.youtube.com/embed/" + this.$store.state.selectedVideo.id
        );
      } else {
        return null;
      }
    }
  },
  components: {
    Results
  }
};
</script>
