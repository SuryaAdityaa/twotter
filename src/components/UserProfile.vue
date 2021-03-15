<template>
    <div class="user-profile">
        <div class="user-profile__user-panel">
            <div class="user-profile__info">
                <h1 class="user-profile__user-title">@{{ state.user.username }}</h1>
                <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
                    Admin
                </div>
                <div class="user-profile__admin-badge" v-else>
                    Not Admin
                </div>
                <div class="user-profile__follower-count">
                    <strong>Followers</strong> {{ state.followers }}
                </div>
            </div>
            <CreateTwootPanel
                @addTwoot="addTwoot"
            />
        </div>
        
        <div class="user-profile__twoots-wrapper">
            <TwootItem 
                v-for="twoot in state.user.twoots" 
                :key="twoot.id" 
                :username="state.user.username" 
                :twoot="twoot" 
            />
        </div>
    </div>
</template>

<script>

import TwootItem from "./TwootItem";
import CreateTwootPanel from "./CreateTwootPanel"
import { reactive } from '@vue/reactivity';

export default {
    name: "UserProfile",
    components: { TwootItem, CreateTwootPanel },
    setup() {
        const state = reactive({
            followers: 0,
            user: {
                username: 'suryaaditya',
                firstName: 'Surya',
                lastName: 'Aditya',
                email: 'me@suryaaditya.com',
                isAdmin: true,
                twoots: [
                    {id: 1, content: "Twotter is amazing"},
                    {id: 2, content: "Twotter is not amazing"},
                ],
            },
            
        })

        function addTwoot(twoot) {
            state.user.twoots.unshift({
                id: state.user.twoots.length + 1,
                content: twoot,
            })
        }

        return {
            state,
            addTwoot
        }
    },
}
</script>

<style scoped>
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 50px 5%;
    grid-gap: 50px;
}
.user-profile__user-panel { 
    margin-right: 50px;
}
.user-profile__info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid #DFE3E8;     
    background-color: #fff;
}
h1 {
    margin: 0;
    font-size: 30px;
}  
.user-profile__admin-badge {
    background: rebeccapurple;
    color: #fff;
    border-radius: 5px;
    margin: 10px 0;
    margin-right: auto;
    padding: 0 10px;
    font-weight: bold;
}
.user-profile__create-twoots {
    margin: 20px 0 0;
    padding: 20px 0 0;
    widows: 100%;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #DFE3E8;
}
.user-profile__twoots-wrapper {
        display: grid;
        grid-gap: 10px;
    }
</style>