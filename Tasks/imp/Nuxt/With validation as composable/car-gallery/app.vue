<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style>
.route-enter-from {
    opacity: 0;
    transform: translateY(100px)
}

.route-enter-active {
    transition: all 0.3s ease-out;
}

.route-leave-to {
    opacity: 0;
    transform: translatey(-100px);
}

.route-leave-active {
    transition: all 0.3s ease-in;
}
</style>