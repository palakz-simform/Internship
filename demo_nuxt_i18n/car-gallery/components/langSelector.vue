<template>
    <div>
        SWITCH lANGUAGE
        <br>
        <select v-model="language">
            <option v-for="item in locales" :key="typeof item === 'object' ? item.code : item"
                :value="typeof item === 'object' ? item.code : item">{{ typeof item === 'object' ? item.name : item
                }}</option>
        </select>
    </div>
</template>

<script setup>
// import { setLocale } from 'vue-i18n-routing';

const { locales, locale, setLocale } = useI18n()
const language = computed({
    get: () => locale.value,
    set: (value) => {
        setLocale(value)
    }
}

)
</script>

<style lang="scss" scoped></style>