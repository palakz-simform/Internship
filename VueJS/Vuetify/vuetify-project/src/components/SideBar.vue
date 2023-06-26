<template>
    <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>

            <template v-slot:append>
                <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
            </template>
        </v-list-item>

        <v-divider></v-divider>
        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-image" title="Color Gallery" value="color"
                @click="selectOption(true)"></v-list-item>
            <v-list-item prepend-icon="mdi-dialpad" title="Grayspace Gallery" value="account"
                @click="selectOption(false)"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            drawer: true,
            rail: true,
        }
    },
}
</script>
<script setup>
import { defineEmits } from 'vue';
const emits = defineEmits(['selectOption'])

function selectOption(isColor) {
    emits("selectOption", isColor)
}
</script>