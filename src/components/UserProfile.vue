<template>
    <div class="user-profile">
        @{{ user.username }} - {{ fullName }}
        <strong>Followers</strong> {{ followers }}
        <button @click="followUser">Follow</button>
    </div>
</template>

<script>
export default {
    name: "UserProfile",
    data() { 
        return {
        followers: 0,
        user: {
            username: 'suryaaditya',
            firstName: 'Surya',
            lastName: 'Aditya',
            email: 'me@suryaaditya.com',
            isAdmin: 'true',
        }
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
        }
    },
    mounted() {
        this.followUser();
    }
}
</script>

<style>

</style>