<template>
    <slot name="header" :myname="'Palak'" :surname="'Z'">Slot-header</slot><br>
    <slot>Slot-defalut</slot><br>
    <slot name="footer">Slot-footer</slot>
</template>