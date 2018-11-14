<template>
    <div class="createBlock">
        <figure class="createPostFigure">
            <div class="img">
                <img v-if="url" :src="url" :alt="description"/>
            </div>
            <figcaption>
                <label class="" for="url-input">Enter url</label>
                <input id="url-input" type="text" name="url" v-model="url" v-on:keyup="emitToParent">
                <label class="" for="desc-input">Enter url</label>
                <input id="desc-input" type="text" name="description" v-model="description" v-on:keyup="emitToParent">
            </figcaption>
        </figure>
    </div>
</template>

<script>
  export default {
    name: 'CreatePost',
    data() {
      return {
        url: '',
        description: '',
      }
    },
    methods: {
      emitToParent() {

      }
    }
  }
</script>

<style scoped>
    .createBlock {
    }
    .createPostFigure {
        width: 500px;
        padding: 30px;
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
</style>