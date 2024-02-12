<template>
    <form class="form display--flex">
        <template v-if="hasFields">
            <h1 class="form__title">
                {{ metadata.title }}
            </h1>
            <div 
                v-for="field in metadata?.fields"
                :key="field.id"
                class="field"
            >
                <component
                    :is="typeToComponent[field.type]"
                    :field="field"
                />
            </div>
        </template>
        <div v-else>
            Something went wrong while requesting the metadata or there are no fields to dispaly.
        </div>
    </form>
</template>

<script setup lang="ts">
// Imports
import { reactive, onMounted, computed, defineAsyncComponent } from 'vue';
import  { get } from '@/utils/request';
import  { Metadata } from '@/types';

//Components
/* eslint-disable */
const inputText = defineAsyncComponent( () => import( '@/components/inputs/InputText.vue' ) );
const inputPassword = defineAsyncComponent( () => import( '@/components/inputs/InputPassword.vue' ) );
const inputIntNumber = defineAsyncComponent( () => import( '@/components/inputs/InputIntNumber.vue' ) );
const cardBrowse = defineAsyncComponent( () => import( '@/components/cards/CardBrowse.vue' ) );

// Defines a default object for metadata 
const metadata = reactive<Metadata>({
    id: '',
    title: '',
    fields: []
});

// Specifies the component to be executed based on the field type retrieved from the fetched metadata.
const typeToComponent: Record<string, any> = {
    text: inputText,
    password: inputPassword,
    int: inputIntNumber,
    card: cardBrowse
};

/**
 * Triggered when the component is mounted to the DOM.
 * Specify the API endpoint for fetching metadata then fetches data from the specified 
 * endpoint using the 'get' function and assign it to the 'metadata' reactive object.
 */
onMounted( async () => {
    const endpoint: string = '../public/data/Metadados.json'; // TODO: Change to 'https://masterlink-mock-api.mwe.pt/MlkApi/bpm_metadata/1' later
    Object.assign( metadata, await get({ endpoint }) );
});

/****************************************************
 * COMPUTED PROPERTIES
 ***************************************************/
// Checks if metadata has fields.
const hasFields = computed( () => ( metadata?.fields?.length ?? 0 ) > 0 );
</script>

<style lang="scss" scoped>
    @import '@/styles/inputs.scss';
    .form {
        max-width: 600px;
        margin: 100px auto;
        padding: 40px 20px;
        background-color: $color-orange;
        @include dimensions( 100%, auto );
        @include element-border( $color-white );
        @include rounded-corner( 8px );
        gap: 20px;
        flex-direction: column;
        @include position-grid( center, center );
        &__title {
            @include typography-specs( 24px, 32px, 700 );
            color: $color-white;
        }
    }
</style>
