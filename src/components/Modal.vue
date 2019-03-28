<template>
    <div class="container" v-if="visible">
        <div class="cover" @click="closeModal"> </div>
        <div class="popup">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: ["visible"],
        methods: {
            closeModal: function() {
                console.log("Close Modal clicked");
                this.$parent.$emit('closeModal');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        overflow: hidden;
        .cover {
            width: 100%;
            height: 100%;
            background: rgba(0,0,255,.15);
            z-index: 101;
        }
        .popup {
            z-index: 102;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: auto;
            height: auto;
        }
    }
</style>