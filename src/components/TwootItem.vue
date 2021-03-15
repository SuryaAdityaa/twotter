<template>
  <div class="twoot-item" @click="favoriteTwoot(twoot.id)">
        <div class="user-profile__twoot">
            <div class="twoot-item__user">
                @{{ username }}
            </div>
            <div class="twoot-item__content">
                {{ twoot.content }}
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: "TwootItem",
    props: {
        username: {
            type: String,
            required: true,
        },
        twoot: {
            type: Object,
            required: true,
        }
    },
    methods: {
        favoriteTwoot(id) {
            this.$emit('favorite', id)
        }
    },
}
</script>

<style lang="scss" scoped>
    .twoot-item {
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        transition: all 0.25s ease;
        text-align: left;
        cursor: pointer;
        border: 1px solid #eee;
        
        &:hover {
            transform: scale(1.05, 1.05);
        }
        .twoot-item__user {
            font-size: 30px;
            font-weight: 700;
        }
    }
    
</style>