<template>
    <div>
        <br>
        ****************Emit****************
        <br> <br>
        setup(context){
        context.emit('newParentData','value')
        }
    </div>
</template>

<script>
export default {
    name: 'tenth'
}
</script>

<style scoped></style>