<template>
<div>
    <div v-for="historyItem in this.$store.state.history" :key="historyItem.id">'
        <p>{{historyItem.title}}</p>
    </div>
</div>
</template>
<script>
export default {
  name: "history"
};
</script>
