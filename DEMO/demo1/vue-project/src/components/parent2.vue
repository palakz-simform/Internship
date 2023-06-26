<template>
    <slotcomp>Parent 2</slotcomp>
</template>

<script>
import slotcomp from './slot.vue'
export default {
    name: 'parent2',
    components: {
        slotcomp
    }
}
</script>