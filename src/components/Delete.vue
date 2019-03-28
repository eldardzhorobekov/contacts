<template>
  <div class="container">
    <modal :visible="true">
      <div class="popup-content">
        Are you sure you want to delete contact ?
        <div class="tools">
          <button class="btn cancel" @click="onCancel">Cancel</button>
          <button class="btn delete" @click="onDelete">Delete</button>
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
  import Modal from './Modal.vue';
  export default {
    components: {
      Modal
    },
    props: ["visible"],
    methods: {
      onDelete: function() {
        this.$emit("onDelete");
      },
      onCancel: function() {
        this.$emit("cancel");
      }
    }
  }
</script>
<style lang="scss" scoped>
  .popup-content {
    font-family: 'Arial', sans-serif;
    background: white;
    padding: 30px 70px 20px;
    border-radius: 20px;
    .tools {
      padding-top: 15px;
    }
  }
</style>