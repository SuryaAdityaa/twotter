<template>
    <div class="createTwootPanel">
        <form action="" class="createTwootPanel__create-twoots" @submit.prevent="createNewTwoot">
            <div class="createTwootPanel__input">
                <label for="newTwoot"> New Twoot </label>
                <textarea rows="4" id="newTwoot" v-model="state.newTwootContent"/>
            </div>

            <div class="createTwootPanel__twoot-submit">
                <div class="createTwootPanel__twoot-type">
                    <label for="newTwootType">Type </label>
                    <select name="newTwootType" id="newTwootType" v-model="state.selectedTwootType">
                        <option 
                            :value="option.value" 
                            v-for="(option, index) in state.twootTypes" 
                            :key="index">
                            {{ option.name }}
                        </option>
                    </select>
                </div>
                <button>Twoot!</button>
            </div>
        </form>
    </div>
</template>

<script>

import {reactive, computed} from 'vue';

export default {
    name: "CreateTwootPanel",
    setup(props, ctx) {
        const state = reactive({
            newTwootContent: '',
            selectedTwootType: 'instant',
            twootTypes: [
                {value: 'draft', name: 'Draft'},
                {value: 'instant', name: 'Instant Twoot'}
            ]
        });

        const newTwootCharacterCount = computed(() => state.newTwootContent.length);

        function createNewTwoot() {
            if (state.newTwootContent && state.selectedTwootType !== "draft") {
               ctx.emit('add-twoot', state.newTwootContent);
               state.newTwootContent = '';
            }
        }
        return {
            state, 
            newTwootCharacterCount, 
            createNewTwoot
        }
    }
}
</script>

<style scoped>
    label {
        font-weight: 700;
        font-size: 18px;
    }

    .createTwootPanel {
        margin: 50px 0;
    }
    .createTwootPanel__input {
        display: flex;
        flex-direction: column;
    }
    .createTwootPanel__twoot-submit {
        display: flex;
        justify-content: space-between;
        margin: 30px 0;
    }
    .createTwootPanel__twoot-submit > button {
        background-color: rebeccapurple;
        padding: 10px 20px;
        cursor: pointer;
        color: #fff;
        border: none;
    }
</style>