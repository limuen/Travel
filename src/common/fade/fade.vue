<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
    export default {
        name:'fade'
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varible.styl'
    .v-enter,.v-leave-to
        opacity 0
    .v-enter-active,.v-leave-active
        transition:opacity .5s
</style>