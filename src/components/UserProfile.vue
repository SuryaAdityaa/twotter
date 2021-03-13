<template>
    <div class="user-profile">
        <div class="user-profile__user-panel">
            <h1 class="user-profile__user-title">@{{ user.username }}</h1>
            <div class="user-profile__admin-badge" v-if="user.isAdmin">
                Admin
            </div>
            <div class="user-profile__admin-badge" v-else>
                Not Admin
            </div>
            <div class="user-profile__follower-count">
                <strong>Followers</strong> {{ followers }}
                <button @click="followUser">Follow</button>
            </div>
            <form action="" class="user-profile__create-twoots" @submit.prevent="createNewTwoot">
                <label for="newTwoot"> New Twoot </label>
                <textarea rows="4" id="newTwoot" v-model="newTwootContent"/>

                <div class="user-profile__create-twoot-type">
                    <label for="newTwootType">Type </label>
                    <select name="newTwootType" id="newTwootType" v-model="selectedTwootType">
                        <option 
                            :value="option.value" 
                            v-for="(option, index) in twootTypes" 
                            :key="index">
                            {{ option.name }}
                        </option>
                    </select>
                </div>
                <button>Twoot!</button>
            </form>
        </div>
        
        <div class="user-profile__twoots-wrapper">
            <TwootItem 
                v-for="twoot in user.twoots" 
                :key="twoot.id" 
                :username="user.username" 
                :twoot="twoot" 
                @favorite="toggleFavourite"
            />
        </div>
    </div>
</template>

<script>

import TwootItem from "./TwootItem";

export default {
    name: "UserProfile",
    components: { TwootItem },
    data() { 
        return {
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
            newTwootContent: '',
            selectedTwootType: 'instant',
            twootTypes: [
                {value: 'draft', name: 'Draft'},
                {value: 'instant', name: 'Instant Twoot'}
            ],
        }
    },
    watch: {
        followers(newFollowerCount, oldFollowerCount) {
            if (oldFollowerCount < newFollowerCount) {
                console.log(`${this.user.username} has gained a follower!`);
            }
        }
    },
    computed: {
        fullName() {
            return `${this.user.firstName} ${this.user.lastName}`
        }
    },
    methods: {
        followUser() {
            this.followers++;
        },
        toggleFavorite(id) {
            console.log(`Favorite twoot #${id}`);
        },
        createNewTwoot() {
            if (this.newTwootContent && this.selectedTwootType !== "draft") {
                this.user.twoots.unshift({
                    id: this.user.twoots.length + 1,
                    content: this.newTwootContent,
                })
                this.newTwootContent = '';
            }
        }
    },
    mounted() {
        this.followUser();
    }
}
</script>

<style lang="scss" scoped>
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 50px 5%;
    grid-gap: 50px;

    .user-profile__user-panel {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        border: 1px solid #DFE3E8;

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
    }
    .user-profile__twoots-wrapper {
        display: grid;
        grid-gap: 10px;
    }
}
</style>