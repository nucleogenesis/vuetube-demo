<template>
    <div class='search-bar'>
      <form>
        <input class='search' type='text' placeholder="Search VueTube..." :value='searchTerm' @input='updateSearchTerm'/>
        <button class='submit btn' v-on:click="$store.dispatch('updateVideoList')">Search</button>
      </form>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "search-bar",
  data: function() {
    return {};
  },
  computed: {
    ...mapState({
      searchTerm: state => state.searchTerm
    })
  },
  methods: {
    updateSearchTerm: function(e) {
      e.preventDefault();
      this.$store.commit("updateSearchTerm", e.target.value);
    }
  }
};
</script>
<style>
.search-bar {
  width: 100%;
}
.search {
  background-color: white;
  margin: 0 auto;
  display: inline-block;
  font-size: 1.25em;
  padding: 0.5em;
  width: 75%;
}
.btn {
  display: inline-block;
}
</style>
