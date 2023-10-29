<template>
    <div class="Many" v-for="(el, index) in list">Say 'Hi' on the
        <button @click="sayHi" :id ='index'>{{el.language }}</button>
    </div>
</template>
<script>
export default {
    data (){
        return {
            list: [
                {text: 'Hello',
                 language: 'English'
                },
                {text: 'Привет',
                language: 'Russian'
                 },
                {text: 'Bonjur',
                language: 'French'
                },
                {text: 'Hola',
                language: 'Spanish'
                 },
                {text: 'Ciao',
                language: 'Italian'
                }
            ]
        }
    },
    methods: {
        sayHi(event) {
            console.log(event.target.id);
            alert(this.list[event.target.id].text)
        }
    },
}
</script>
<style>
    .Many {
        display: flex;
        flex-direction: row;
    }
</style>