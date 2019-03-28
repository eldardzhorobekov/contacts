<template>
    <header :class="{header: true}">
      <div  class="logo">contacts</div>
    </header>
</template>

<script>
    export default {
      props: ["searchString"],
      data() {
        return {
          showSearchInput: false,
        }
      },
    }
</script>

<style lang="scss" scoped>
  
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    border-bottom: 1px solid #ccc;
    .logo {
      font-family: 'Avenir','Helvetica', sans-serif;
      font-size: 24px;
      color: rgba(0,0,0,0.5);
      padding: 0 20px;
      text-transform: uppercase;
    }
  }

@media only screen and (min-width: 480px) {
  .header{
    justify-content: flex-start;
    &,
    &.search-input-active {
      .logo {
        display: block;
      }
      .search-area {
        display: flex;
        .hide-search-input {
          display: none;
        }
      }
      .search-btn{
        display: none;
      }
    }
  }
}
</style>