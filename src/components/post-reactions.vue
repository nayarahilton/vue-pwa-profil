<template>
    <div class="reactions">
      <button class="save-button">Star</button>
      <button class="like-button">Like</button>
    </div>
</template>

<script>
  export default {
    props: ['text-inner'],
  };
</script>

<style scoped lang="stylus">

  button
    border 0
    height 35px
    background transparent
    cursor pointer

    &:focus
      outline none

    + button
      margin-left 5px

  .like-button
    border 2px solid gray
    width 50px

    &:hover,
    &:active,
    &:focus
      background black

  .save-button
    border 2px solid gray
    width 35px

    &:hover,
    &:active,
    &:focus
      background black


  .reactions
    display inline-flex
    align-items center


</style>
