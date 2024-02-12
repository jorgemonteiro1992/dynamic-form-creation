<template>
    <label 
        class="field-password__label display--block" 
        :for="field.id"
    >
        {{ field.name }}
    </label>
    <input
        :id="field.id"
        class="field-password__input display--block"
        type="password"
        :name="field.id"
    />
</template>

<script setup lang="ts">
// Imports
import { toRefs } from 'vue';
import  { Field } from '@/types';

// Define props.
interface Props {
    field: Field
}
const props = defineProps<Props>();
const { field } = toRefs( props );
</script>

<style lang="scss" scoped>
    @import '@/styles/inputs.scss';
</style>