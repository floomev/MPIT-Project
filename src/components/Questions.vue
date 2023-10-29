<template >
  <div v-if="next === 1">Question1</div>
    <input v-if="next === 1"
  type="radio"
  value="Солнечную"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 1"
  type="radio"
  value="Пасмурную"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 1"
  type="radio"
  value="Ветренная"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>


<span v-if="next === 1">{{ picked }}</span>
<button v-if=" next === 1" @click=" next = 2,  this.answers.push(picked)" >Далее</button>







<div v-if="next === 2">Question2</div>
    <input v-if="next === 2"
  type="radio"
  value="Лесная"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 2"
  type="radio"
  value="Сельская"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 2"
  type="radio"
  value="Горная"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>
<span v-if="next === 2">{{ picked }}</span>


<button @click="next = 3, this.answers.push(picked)" v-if=" next === 2">Далее</button>

<button @click="GPT()">Посмотреть результаты</button>




<!-- <div v-if="next === 3">Question3</div>
    <input v-if="next === 3"
  type="radio"
  value="Answer7"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 3"
  type="radio"
  value="Answer8"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 3"
  type="radio"
  value="Answer9"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>


<span v-if="next === 3">{{ picked }}</span>
<button @click="next = 4, this.answers.push(picked)" v-if=" next === 3"  >Далее</button>






<div v-if="next === 4">Question4</div>
    <input v-if="next === 4"
  type="radio"
  value="Answer10"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 4"
  type="radio"
  value="Answer11"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 4"
  type="radio"
  value="Answer12"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>
<span v-if="next === 4">{{ picked }}</span>


<button @click="next = 5, this.answers.push(picked)" v-if=" next === 4">Далее</button> 






<div v-if="next === 5">Question5</div>
    <input v-if="next === 5"
  type="radio"
  value="Answer13"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 5"
  type="radio"
  value="Answer14"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 5"
  type="radio"
  value="Answer15"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>


<span v-if="next === 5">{{ picked }}</span>
<button v-if=" next === 5" @click=" next = 6,this.answers.push(picked)" >Далее</button>






<div v-if="next === 6">Question6</div>
    <input v-if="next === 6"
  type="radio"
  value="Answer16"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 6"
  type="radio"
  value="Answer17"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 6"
  type="radio"
  value="Answer18"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>
<span v-if="next === 6">{{ picked }}</span>


<button @click=" next = 7, this.answers.push(picked)" v-if=" next === 6">Далее</button> 



<div v-if="next === 7">Question7</div>
    <input v-if="next === 7"
  type="radio"
  value="Answer19"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 7"
  type="radio"
  value="Answer20"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 7"
  type="radio"
  value="Answer21"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>
<span v-if="next === 7">{{ picked }}</span>


<button @click=" next = 8, this.answers.push(picked)" v-if=" next === 7">Далее</button> 





<div v-if="next === 8">Question8</div>
    <input v-if="next === 8"
  type="radio"
  value="Answer22"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 8"
  type="radio"
  value="Answer23"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 8"
  type="radio"
  value="Answer24"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>
<span v-if="next === 8">{{ picked }}</span>


<button @click=" next = 9,this.answers.push(picked)" v-if=" next === 8">Далее</button> 





<div v-if="next === 9">Question9</div>
    <input v-if="next === 9"
  type="radio"
  value="Answer25"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 9"
  type="radio"
  value="Answer26"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 9"
  type="radio"
  value="Answer27"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>
<span v-if="next === 9">{{ picked }}</span>


<button @click=" next = 10,this.answers.push(picked)" v-if=" next === 9">Далее</button> 





<div v-if="next === 10">Question10</div>
    <input v-if="next === 10"
  type="radio"
  value="Answer28"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 10"
  type="radio"
  value="Answer29"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/>
<input v-if="next === 10"
  type="radio"
  value="Answer30"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/>
<span v-if="next === 10">{{ picked }}</span>


<button @click=" next = 11, this.answers.push(picked)" v-if=" next === 10">Далее</button>  -->


   <button @click="console.log(answers[1])">LOG</button>
</template>
<script>
export default {
 
  data() {
    return {
      picked: '',
      next: 1,
       answers: []
        
      
    }
    
  },
  methods: {
    async GPT(){
        
      const url = 'https://chatgpt-chatgpt3-5-chatgpt4.p.rapidapi.com/gpt4';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'd6e4a3a2b8mshcc934869fcd57f7p1b1a8bjsn394b2082772b',
		'X-RapidAPI-Host': 'chatgpt-chatgpt3-5-chatgpt4.p.rapidapi.com'
	},
	body: {
		model: 'gpt-4-0613',
		messages: [
			{
				role: 'user',
				content: 'hello'
			}
		],
		temperature: 0.8
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text(JSON);
	console.log(result);
} catch (error) {
	console.error(error);
}
        },
  addItem() {
    this.answers.push(e.target.value)
  }
  
},
}

</script>
