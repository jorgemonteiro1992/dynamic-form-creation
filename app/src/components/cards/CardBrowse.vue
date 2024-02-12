<template>
    <div 
        v-if="hasData"
        class="card display--flex"
    >
        <a 
            v-for="(item, index) in cardData.data" 
            :key="index"
            class="card__link"
            :href="String( item.link )" 
            target="_blank"
            :title="item.text"
        >
            <img class="card__link__image" :src="item.imageUri" :alt="item.text" />
        </a>
    </div>
</template>

<script setup lang="ts">
// Imports
import { toRefs, watch, reactive, computed } from 'vue';
import  { Field, Data } from '@/types';
import  { get } from '@/utils/request';

// Define props.
interface Props {
    field: Field
}
const props = defineProps<Props>();
const { field } = toRefs( props );

// Defines a default object for metadata 
const cardData = reactive<Data>({
    id: '',
    parent: '',
    data: []
});

/****************************************************
 * COMPUTED PROPERTIES
 ***************************************************/
// Checks if metadata has fields.
const hasData = computed( () => ( cardData?.data?.length ?? 0 ) > 0 );

/****************************************************
 * WATCHES
 ***************************************************/
watch( 
    // Watches when dataUri has value, so a new API request can be made with the new data.
    () => field.value?.dataUri, async newData => {
        if ( newData )
            Object.assign( cardData, await get({ endpoint: newData }) );    
    }, { immediate: true });
</script>

<style lang="scss" scoped>
    .card {
        gap: 20px;
    }
</style>