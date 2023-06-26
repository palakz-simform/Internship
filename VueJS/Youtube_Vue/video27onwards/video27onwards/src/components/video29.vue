<template>
    <div class="card">
        <header>
    <slot name="header"></slot>
</header>
<content>
    <slot name="main"></slot>
</content>
<footer>
    <slot name="footer"><button>Click me</button></slot>
</footer>
    </div>

</template>
<script>
export default{
    name:"video29",

}
</script>

<style>
.card{
    background-color: aquamarine;
    border :1px solid black;
    width:150px;
    padding: 10px 10px;
    text-align: center;
}
</style>