<template>
    <input type="text" class="search-field"
           v-bind:value="value"
           v-on:input="$emit('input', $event.target.value)">
    `
    })
</template>

<script>
    export default {
        name: "Searchform"
    }
</script>

<style scoped>

</style>