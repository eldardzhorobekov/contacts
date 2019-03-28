<template>
  <div v-if="users">
    <ul class="users-list">
      <!-- SEARCH INPUT -->
      <div class="search-input-wrapper">
        <input  type="text"
                class="search-input"
                placeholder="Search"
                v-model="searchString">
      </div>
      <!-- USERS LIST -->
      <li class="user-wrapper"
          v-for="item,index in getUsers"
          @click="showUserInfo(item)">
          <div class="info">
            <div class="user user-avatar">
              <img :src="item.avatar" alt="user-avatar" @error="loadUserImageError(item)"><!--   -->
              <div></div>
            </div>
            <div class="user user-name">
                {{ item.name }}
            </div>
            <div class="user user-email">
              <a  :href="`mailto:${item.email}`"
                  class="href"
                  target="_blank">{{ item.email }}</a>
            </div>
            <div class="user user-phone">
                {{ item.phone }}
            </div>
            <div class="user user-address">
                {{ item.address.city }} , {{ item.address.country }}
            </div>
          </div>
          <div class="tools">
            <button class="btn edit" @click.stop="showEditModal(item)">Edit</button>
            <button class="btn delete" @click.stop="showDeleteModal(item.id)">Delete</button>
          </div>
      </li>
    </ul>
    <!--
      v-bind="userEdit" - Send only parameters of object, not object.
                          Unidirectional data flow(однонаправленный поток данных)
      @closeModal - $emit from Modal.vue
      @cancel - $emit from Edit.vue
      @onSave - $emit from Edit.vue
    -->
    <edit v-if="isUserEditVisible"
          v-bind="userEdit" 
          @closeModal="closeUserEdit"
          @cancel="closeUserEdit"
          @onSave="userEditSave($event)"/> 

    <!-- same idea as above -->
    <delete v-if="isDeleteModalVisible"
            @closeModal="closeDeleteModal"
            @cancel="closeDeleteModal"
            @onDelete="userDelete"/>
     <user-info  v-if="isUserInfoVisible"
                :user="userInfo"
                @closeModal="closeUserInfo"/>
  </div>
</template>
<script>
  import UserInfo from './UserInfo.vue';
  import UserIcon from '../assets/user.png';
  import Edit from './Edit.vue';
  import Delete from './Delete.vue'
  export default {
    components: {
      UserInfo,
      Edit,
      Delete
    },
    props: ['users'],
    data() {
      return {
        isUserInfoVisible: false,
        isUserEditVisible: false,
        isDeleteModalVisible: false,
        userInfo: null,
        userEdit: null,
        userDeleteId: -1,
        searchString: "",
      }
    },
    computed: {
      // If image load error: 403
      getDefaultUserImage() {
        return UserIcon
      },
      // Get Filtered User Objects
      getUsers() {
        // Filter for search
        const filtered = this.users.data.filter((user) => {
          return user.name.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1;
        })
        // Sort :)
        const sorted = filtered.sort((a,b) => {
          return a.name > b.name ? 1 : ((a.name < b.name) ? -1 : 0);
        })
        return sorted;
      },
    },
    methods: {
      showUserInfo: function(user) {
        this.closeAllModals();
        this.userInfo = user;
        this.isUserInfoVisible = true;
      },
      showEditModal: function(user) {
        this.closeAllModals();
        this.userEdit = user;
        this.isUserEditVisible = true;
      },
      showDeleteModal: function(id) {
        this.closeAllModals();
        this.isDeleteModalVisible = true;
        this.userDeleteId = id;
      },

      closeUserInfo: function() {
        this.isUserInfoVisible = false;
      },
      closeUserEdit: function() {
        this.isUserEditVisible = false;
      },
      closeDeleteModal: function() {
        this.isDeleteModalVisible = false;
      },
      closeAllModals() {
        this.isUserInfoVisible = false;
        this.isUserEditVisible = false;
        this.isDeleteModalVisible = false;
      },

      // Saving user information
      // : @onSave="userEditSave($event)
      userEditSave: function(ob) {
        const index = this.getIndexById(ob.id);
        if(index != null){
          this.users.data[index].name = ob.name;
          this.users.data[index].email = ob.email;
          this.users.data[index].phone = ob.phone;
          this.users.data[index].website = ob.website;
          this.users.data[index].address.city = ob.city;
          this.users.data[index].address.country = ob.country;
          this.closeUserEdit();
          console.log("Saved");
        } else {
          console.log("Index not found")
        }
      },
      // Delete user information
      userDelete: function() {
        const index = this.getIndexById(this.userDeleteId);
        if(index != null) {
          // save in cache
          localStorage.setItem('cachedUser', JSON.stringify(this.users.data[index]));
          //
          this.users.data.splice(index,1);
          this.closeDeleteModal();
          console.log("Contact was deleted!");
        } else {
          console.log("Index not found! Contact was not deleted!")
        }
      },
      // Set default image
      loadUserImageError: function(item) {
        console.log('Image failed to load');
        item['nonValidAvatar'] = item['avatar']
        item['avatar'] = UserIcon
      },
      getIndexById(id) {
        for(let i = 0; i < this.users.data.length; i++) {
            if(this.users.data[i].id == id) {
              return i;
            }
          }
      }
    }
    
  }
</script>

<style lang="scss" scoped>

  .users-list {
    padding: 0px;
    margin: 0;
    .search-input-wrapper {
      padding: 15px;
      border-bottom: 1px solid #ccc;
      .search-input {
        padding: 13px 0 13px 13px;
        background: #F5F5F5;
        border: 1px solid transparent;
        border-bottom-width: 2px;
        &:focus {
            background: white;
            outline: none;
            border: 1px solid rgba(127, 140, 141,.1);
            border-bottom: 2px solid rgba(127, 140, 141,.3);
        }
        @media only screen and (min-width: 640px) {
          & {
            min-width: 400px;
          }
        }
      }
    }
    .user-wrapper {
      list-style: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:hover {
        background: #F5F5F5;
        .tools {
          display: flex;
        }
      }
      .info {
        display: flex;
        align-items: center;
        // background: red;
        width: 100%;
        .user {
          display: block;
          min-width: 25%;
        }
        .user-avatar {
          min-width: initial;
          overflow: hidden;
          border-radius: 50%;
          margin: 10px 20px;
          width: 50px;
          height: 50px;  
          &,
          img {
            width: 50px;
            height: 50px;  
          }
        }
        .user-email {
          a {
            color: rgba(0,0,0,0.9);
            &:hover {
                text-decoration: underline;
            }
          } 
        }
        .user-email,
        .user-phone,
        .user-address {
          display: none;
        }
        @media only screen and (min-width: 640px) {
          .user-name,
          .user-phone {
              min-width: 35%;
              display: block;
          }
        }
        @media only screen and (min-width: 1200px) {
          .user-name,
          .user-phone,
          .user-email {
              min-width: 25%;
              display: block;
          }
        }
        @media only screen and (min-width: 1800px) {
          .user-name,
          .user-phone,
          .user-email,
          .user-address {
              min-width: 20%;
              display: block;
          }
        }
      }
      .tools {
        display: none;
        position: absolute;
        right: 0;
        flex: 1;
        .edit,
        .delete {
          &:hover {
            text-decoration: underline;
            background: transparent;
          }
        }
      }
    }
  }
</style>