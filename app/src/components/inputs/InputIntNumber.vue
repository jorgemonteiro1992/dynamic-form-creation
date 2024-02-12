<template>
    <label
        class="field-int-number__label display--block" 
        :for="field.id"
    >
        {{ field.name }}
    </label>
    <input 
        :id="field.id"
        class="field-int-number__input display--block"
        type="number"
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