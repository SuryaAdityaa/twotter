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

import TwootItem from "../components/TwootItem";
import { useRoute } from "vue-router";
import CreateTwootPanel from "../components/CreateTwootPanel";
import {users} from "../assets/users";
import { reactive, computed } from '@vue/reactivity';

export default {
    name: "UserProfile",
    components: { TwootItem, CreateTwootPanel },
    setup() {

        const route = useRoute();
        const userId = computed(() => route.params.userId);

        // If (userId) fetchUserFromApi(userId)

        const state = reactive({
            followers: 0,
            user: users[userId.value - 1] || users[1]
            
        })

        function addTwoot(twoot) {
            state.user.twoots.unshift({
                id: state.user.twoots.length + 1,
                content: twoot,
            })
        }

        return {
            state,
            addTwoot,
            userId,
        }
    },
}
</script>

<style lang="scss" scoped>
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 50px 5%;
    grid-gap: 50px;

    .user-profile__user-panel { 
        margin-right: 50px;

        .user-profile__info {
            padding: 20px;
            display: flex;
            flex-direction: column;
            border-radius: 5px;
            border: 1px solid #DFE3E8;     
            background-color: #fff;

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
        }
    }
    .user-profile__twoots-wrapper {
        display: grid;
        grid-gap: 30px;
    }
}  

</style>