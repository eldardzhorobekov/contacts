<!-- App -> Users -> Edit, Delete, UserInfo -> Modal -->


<template>
  <div class="container">
    <the-header/>
    <!-- Search input and list of users -->
    <users-list :users="users"/>
  </div>
</template>

<script>
  import axios from 'axios'; // ajax
  import UsersList from './components/Users.vue';
  import TheHeader from './components/Header.vue';
  export default {
    components: {
      UsersList, // same as UsersList : UsersList
      TheHeader
    },
    data() {
      return {
        users: null,
      }
    },
    mounted() {
      console.log('App mounted!');
      // Get 'users' data
      if(localStorage.getItem('users') != null) {
        this.users = JSON.parse(localStorage.getItem('users'));
      } else {
        var config = { crossdomain: true };
        axios
          .get('https://mio-eldar.github.io/contacts/src/assets/users.json', config)
          .then(response => (this.users = response));
      }
        
    },
    watch: {
      // Change 'users' in localStorage
      users: {
        handler() {
          console.log('Users changed!');
          // Save 'users' in localStorage
          localStorage.setItem('users', JSON.stringify(this.users));
        },
        deep: true
      }
    }
  }
</script>

<style lang="scss">
  @import 'assets/css/normalize.css';
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');
  body,html {
    font-family: 'Ubuntu', sans-serif;
  }
  .tools {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .btn {
        border: none;
        border-radius: 5px;
        color: #3498db;
        padding: 5px 10px;
        //background: rgba(236, 240, 241,.5);
        background: transparent;
        &:hover,
        &:focus {
          color: rgba(41, 128, 185,1.0);
          background: rgba(236, 240, 241,1);
        }
        &:focus {
          outline: none;
        }
      }
  }
    
</style>