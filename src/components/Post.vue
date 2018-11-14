<template>
    <figure class="post-block">
        <img :src='url' :alt='description'  />
        <figcaption>{{ description }}</figcaption>
    </figure>
</template>

<script>
  export default {
    name: 'Post',
    props: {
      description: String,
      url: String
    }
  }
</script>

<style scoped>
    .post-block {
        width: 200px;
        height: 300px;
        padding: 5px;
        margin: 1em;
    }
    img {
        width: 100%;
        height: auto;
    }
</style>