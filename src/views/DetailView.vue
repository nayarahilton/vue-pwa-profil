<template>
   <div class="mdl-grid">
    <div class="post">
      <div class="picture">
        <img :src="this.pictures.url" />
      </div>
      <div class="info">
        <span>{{ this.pictures.autor }}</span>
      </div>
      <div class="comment">
        <span>{{ this.pictures.comment }}</span>
      </div>
    </div>
     <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/post">
        ANSWER
      </router-link>
  </div>
</template>
<script>

export default {
  data() {
    return {
      pictures: this.$route.params.id,
    };
  },
};
</script>
<style scoped>

.info {
  text-align: right;
  padding: 5px;
  color: #555;
  font-size: 10px;
}

</style>