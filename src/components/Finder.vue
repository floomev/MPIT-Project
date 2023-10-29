<template >
    <form @submit.prevent="subHandler">
        <label > Enter a card name
            <input type="text" name="cardName">
        </label>
        <label >Get a card
            <button>click</button>
        </label>
        
    </form>
    <div class="flex">
        <li class="card" v-for="el in nameCard">
            {{el.name }}
            {{el.rarity }}
            <img v-if="el.img" :src="el?.img " alt="">
            
        </li>
    </div>
    
</template>
<script>
export default {
    data () {
     return {
        nameCard: []
     }
    },
    methods: {
       async subHandler(){
        
        const url = 'https://chatgpt-api8.p.rapidapi.com/';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'd6e4a3a2b8mshcc934869fcd57f7p1b1a8bjsn394b2082772b',
		'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
	},
	body: [
		{
			content: `Подбери пользователю место, в котором он может отдохнуть в Кемеровской области в кузбассе, если он:
                      предпочитает `,
			role: 'user'
		}
	]
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
        }
    }
}
</script>
<style>
    .card {
    border: 1px solid black;
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
    
    
    }
    img {
        width: 150px;
    }
    .flex{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        margin-top: 100px;
    }
    
</style>