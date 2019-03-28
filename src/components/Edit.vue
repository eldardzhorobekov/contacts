<template>
  <div class="container">
    <!-- 
      Modal is always visible, cuz parent component controls visibility of Edit.vue
     -->
    <modal :visible="true">
      <div class="popup-content">
        <form class="form-wrapper" @submit.prevent="save">
          <div class="input-wrapper">
            <img class="avatar" :src="user.avatar" alt="user-avatar">
            <!-- <input type="file" placeholder="change" @change="onFileSelected"> -->
          </div>
          <div class="input-wrapper">Name: <input v-model="user.name"></div>
          <div class="input-wrapper">Email: <input v-model="user.email"></div>
          <div class="input-wrapper">Phone: <input v-model="user.phone"></div>
          <div class="input-wrapper">City: <input v-model="user.city"></div>
          <div class="input-wrapper">country: <input v-model="user.country"></div>
          <div class="input-wrapper">Website: <input v-model="user.website"></div>
          <div class="tools">
            <button class="btn cancel" @click="onCancel">Cancel</button>
            <button class="btn save" type="submit">Save</button>
          </div>
        </form>
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
    props: ["name","email","phone","address","website","visible","id","avatar"],
    data() {
      // Getting parameters of object, and assigning it to local(in Edit.vue) data()
      return {
        user: {
          "name": this.name,
          "email": this.email,
          "phone": this.phone,
          "city": this.address.city,
          "country": this.address.country,
          "website": this.website,
          "id": this.id,
          "avatar": this.avatar
        },
        selectedFile: null
      }
    },
    methods: {
      save: function() {
        this.$emit('onSave', this.user);
      },
      onCancel: function() {
        this.$emit('cancel');
      },
      onFileSelected: function(e) {
        this.selectedFile = e.target.files[0]
      },
      onUpload() {
      }

    }
  }
</script>
<style lang="scss" scoped>
  .popup-content {
      min-width: 640px;
      min-height: 400px;
      background: white;
      border-radius: 20px;
      padding: 10px 0 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .form-wrapper {
        .input-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px;
          input {
            margin-left: 30px;
            min-width: 300px;
          }
        }
        .avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;

        }
      }
        
  }
</style>