<template>
    <div class="headerContainer">
        <h3 class="header">Our members keep us going and brighten our day!</h3>
            <div class="memberGridContainer">
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
.headerContainer {
    font-size: 1.5em;
}
.memberGridContainer{
    display: grid;
    grid-column: auto;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
}
.header{
    text-align: center;
    padding-top: 1em;
    padding-bottom: 2em;
}
.memberImage{
    border-radius: 1.5em;
    padding-bottom: 1em;
}
.nameContainer {
    padding-bottom: 2em;
}

@media (max-width: 715px) {
    .memberGridContainer{
        grid-template-columns: auto;
    }
}
</style>