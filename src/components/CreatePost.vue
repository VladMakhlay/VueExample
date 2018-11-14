<template>
    <div class="createBlock">
        <figure class="createPostFigure">
            <div class="img">
                <img v-if="url" :src="url" :alt="description"/>
            </div>
            <figcaption>
                <label class="" for="url-input">Enter url</label>
                <input id="url-input" type="text" name="url" v-model="url">
                <label class="" for="desc-input">Enter url</label>
                <input id="desc-input" type="text" name="description" v-model="description">
                <button v-if="url && description" @click="emitToParent" class="post-button">Post</button>
            </figcaption>
        </figure>
    </div>
</template>

<script>
  export default {
    name: 'CreatePost',
    props: {
      toggleAdding: Function,
    },
    data() {
      return {
        url: '',
        description: '',
      }
    },
    methods: {
      emitToParent(event) {
        let obj = {};
        obj.url = this.url;
        obj.description = this.description;
        this.$emit('childToParent', obj);
        this.toggleAdding();
      }
    }
  }
</script>

<style scoped>
    .createBlock {
        width: 500px;
        padding: 30px;
        border: 1px solid lightgray;
        background-color: white;
    }
    .createPostFigure {
        width: 100%;
        margin: 0;
        border: 1px solid lightgray;
        background-color: white;
    }
    .img {
        margin-left: calc(50% - 150px);
    }
    img {
        width:300px;
        height: auto;
    }
    figcaption {
        width: 400px;
        margin: 0 auto;
        padding-bottom: 20px;
    }
    label[for="url-input"], label[for="desc-input"] {
        visibility: hidden;
    }
    input[type=text] {
        width: 100%;
        height: 40px;
        border: 1px solid #eeeeee;
        border-radius: 4px;
        padding: 0 5px 0 10px;
        margin: 8px 0;
        box-sizing: border-box;
    }
    .post-button {
        padding: 5px 12px;
    }
</style>