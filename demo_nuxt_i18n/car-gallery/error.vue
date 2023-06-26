<script setup>
const error = useError();

const handleError = () => {
    clearError({
        redirect: "/",
    });
};
</script>


<template>
    <div class="error-page">
        <NavBar />
        <div class="not-found">
            <h1 class="error-code">{{ error ? error.statusCode : '' }}</h1>
            <h1>{{ error ? error.message : 'Unknown error occured' }}</h1>
            <p>Please <NuxtLink :to="'/'" @click="handleError"> <span>click</span> </NuxtLink> here to access the home page
            </p>
        </div>
        <CarFooter />
    </div>
</template>




<style scoped>
h1.error-code {
    font-size: 80px;
}

.error-page {
    background-color: black;
}

.not-found {
    text-align: center;
    margin-top: 150px;
}

h1 {
    color: rgb(35, 177, 172);
}

p {
    font-size: 20px;
    color: white;
}

span {
    color: rgb(35, 177, 172);
    text-decoration: underline;
    cursor: pointer;
}
</style>
