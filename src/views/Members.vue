<template>
    <div class="memberListContainer">
        <h3 class="header">Our members keep us going and brighten our day!</h3>
            <div v-for="member in members" :key="member.id.value">
                <div class="imageContainer">
                    <img v-bind:src="member.picture.large" v-bind:alt="member" class="memberImage">
                </div>
                <div class="nameContainer">
                    {{member.name.first}}
                    {{member.name.last}}
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            members: null,
        }
    },

    mounted() {
            axios.get(`https://randomuser.me/api/?results=15`)
            .then(res => {this.members = res.data.results})
    }
}
</script>

<style scoped>
.header{
    text-align: center;
}
.memberListContainer{
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.memberImage{
    border-radius: 1.5em;
    padding-bottom: 1em;
}
.nameContainer {
    padding-bottom: 2em;
}
</style>