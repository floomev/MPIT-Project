<template >
  <div v-if="next === 1">Какую погоду вы предпочитаете?</div>
    <input v-if="next === 1"
  type="radio"
  value="Солнечную"
  :checked="picked == 'One'"
  id="one"
  @change="e => picked = e.target.value"
/> <label v-if="next === 1" for="one">Солнечную</label>
  
<input v-if="next === 1"
  type="radio"
  value="Пасмурную"
  :checked="picked == 'Two'"
  id="two"
  @change="e => picked = e.target.value"
/><label v-if="next === 1" for="one">Пасмурную</label>
<input v-if="next === 1"
  type="radio"
  value="Ветренная"
  :checked="picked == 'One'"
  id="three"
  @change="e => picked = e.target.value"
/> <label v-if="next === 1" for="one">Ветренную</label>



<button v-if=" next === 1" @click=" next = 2,  this.answers.push(this.picked)" >Далее</button>







<div v-if="next === 2">В какой местности вы любите отдыхать?</div>
    <input v-if="next === 2"
  type="radio"
  value="Лесная"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 2" for="one">Лесная</label>
<input v-if="next === 2"
  type="radio"
  value="Сельская"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 2" for="one">Сельская</label>
<input v-if="next === 2"
  type="radio"
  value="Горная"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 2" for="one">Горная</label>



<button @click="next = 3, this.answers.push(this.picked)" v-if=" next === 2">Далее</button>

<button @click="GPT()">Посмотреть результаты</button>




 <div v-if="next === 3">Сколько вам лет?</div>
    <input v-if="next === 3"
  type="radio"
  value="меньше 18 лет"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 3" for="one">меньше 18 лет</label>
<input v-if="next === 3"
  type="radio"
  value="18-44"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 3" for="one">18-44</label>
<input v-if="next === 3"
  type="radio"
  value="45-70"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 3" for="one">45-70</label>



<button @click="next = 4, this.answers.push(this.picked)" v-if=" next === 3"  >Далее</button>






<div v-if="next === 4">На какой бюджет вы рассчитываете?</div>
    <input v-if="next === 4"
  type="radio"
  value="меньше 10000"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 4" for="one">меньше 10000</label>
<input v-if="next === 4"
  type="radio"
  value="меньше 50000"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 4" for="one">меньше 50000</label>
<input v-if="next === 4"
  type="radio"
  value="до 100000 и больше"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 4" for="one">до 100000 и больше</label>



<button @click="next = 5, this.answers.push(this.picked)" v-if=" next === 4">Далее</button> 






<div v-if="next === 5">Какой тип размещения вы предпочитаете?</div>
    <input v-if="next === 5"
  type="radio"
  value="Отель"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 5" for="one">Отель</label>
<input v-if="next === 5"
  type="radio"
  value="Кемпинг"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 5" for="one">Кемпинг</label>
<input v-if="next === 5"
  type="radio"
  value="Частный дом"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 5" for="one">Частный дом</label>



<button v-if=" next === 5" @click=" next = 6,this.answers.push(this.picked)" >Далее</button>






<div v-if="next === 6">Какой тип отдыха вы предпочитаете?</div>
    <input v-if="next === 6"
  type="radio"
  value="Активный(горные лыжи, пещие прогулки и т.д)"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 6" for="one">Активный(горные лыжи, пещие прогулки и т.д)</label>
<input v-if="next === 6"
  type="radio"
  value="Пляжный"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 6" for="one">Пляжный</label>
<input v-if="next === 6"
  type="radio"
  value="Культурный"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 6" for="one">Культурный</label>



<button @click=" next = 7, this.answers.push(this.picked)" v-if=" next === 6">Далее</button> 



<div v-if="next === 7">Какой тип транспорта предпочитаете использовать для поездки?</div>
    <input v-if="next === 7"
  type="radio"
  value="Автомобиль"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 7" for="one">Автомобиль</label>
<input v-if="next === 7"
  type="radio"
  value="Поезд"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 7" for="one">Поезд</label>
<input v-if="next === 7"
  type="radio"
  value="Пешим способом"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 7" for="one">Пешим способом</label>



<button @click=" next = 8, this.answers.push(this.picked)" v-if=" next === 7">Далее</button> 





<div v-if="next === 8">Предпочитаете ли вы:</div>
    <input v-if="next === 8"
  type="radio"
  value="Туры"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 8" for="one">Туры</label>
<input v-if="next === 8"
  type="radio"
  value="Экскурсии"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 8" for="one">Экскурсии</label>
<input v-if="next === 8"
  type="radio"
  value="Самостоятельные путешествия"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 8" for="one">Самостоятельные путешествия</label>



<button @click=" next = 9,this.answers.push(this.picked)" v-if=" next === 8">Далее</button> 





<div v-if="next === 9">Примерная цель вашей поездки:</div>
    <input v-if="next === 9"
  type="radio"
  value="Отдохнуть"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 9" for="one">Отдохнуть</label>
<input v-if="next === 9"
  type="radio"
  value="Узнать больше о родном крае"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 9" for="one">Узнать больше о родном крае</label>
<input v-if="next === 9"
  type="radio"
  value="Заняться какой-либо местной активностью(лыжи, дайвинг и т.д)"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 9" for="one">Заняться какой-либо местной активностью(лыжи, дайвинг и т.д)</label>



<button @click=" next = 10,this.answers.push(this.picked)" v-if=" next === 9">Далее</button> 





<div v-if="next === 10">Какое питание предпочитаете?</div>
    <input v-if="next === 10"
  type="radio"
  value="Умеренное"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 10" for="one">Умеренное</label>
<input v-if="next === 10"
  type="radio"
  value="Вегетарианское"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 10" for="one">Вегетарианское</label>
<input v-if="next === 10"
  type="radio"
  value="Национальные местные блюда"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 10" for="one">Национальные местные блюда</label>



<button @click=" next = 11, this.answers.push(this.picked)" v-if=" next === 10">Далее</button>  

<div v-if="next === 11">{{ this.answerGPT.response }}</div>
   <button @click="console.log(answers)">LOG</button>
</template>
<script>
export default {
 
  data() {
    return {
      picked: '',
      next: 1,
       answers: [],
      answerGPT: ''
      
    }
    
  },
  methods: {
    async GPT(){
        
      const url = 'https://chatgpt-gpt4-ai-chatbot.p.rapidapi.com/ask';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'd6e4a3a2b8mshcc934869fcd57f7p1b1a8bjsn394b2082772b',
		'X-RapidAPI-Host': 'chatgpt-gpt4-ai-chatbot.p.rapidapi.com'
	},
	body: JSON.stringify ({
		query: `Подбери пользователю место, в котором он может отдохнуть в Кемеровской области в кузбассе, порекомендуй занятия и активности,заведения для питания и проживания в соответствии с его
    бюджетом, возрастом и остальными параметрами если он:
                      предпочитает
                       ${this.answers[0]} погоду,
                       ${this.answers[1]} местность ,
                       если ему ${this.answers[2]} лет,
                       он имеет бюждет примерно: ${this.answers[3]},
                       тип размещения, который он предпочитает: ${this.answers[4]},
                       тип отдыха, который он предпочитает: ${this.answers[5]},
                       тип транспорта, который он предпочитает использовать для поездки:${this.answers[6]},
                       он предпочитает: ${this.answers[7]},
                       примерная цель его поездки: ${this.answers[8]},
                       питание, которое он предпочитает: ${this.answers[9]}
                      основываясь на ресурсах:
                      https://www.kp.ru/russia/kemerovskaya-oblast/
                      https://visit-kuzbass.ru/
                      https://dzen.ru/a/X7dtFmohDxzAOkgO

                      https://visit-kuzbass.ru/blog/vkus-sibiri-chto-poprobovat-v-kuzbasse
                      https://rsport.ria.ru/20230125/turizm-1847090271.html
                      https://visit-kuzbass.ru/events/
                      https://www.nbcrs.org/regions/kemerovskaya-oblast/top-ekskursiy
                      https://www.stud24.ru/geography/turizm-v-kemerovskoj-oblasti/487753-1893196-page1.html


                      и погодных данных в месте, куда ты порекомендуешь съездить:
                      https://www.gismeteo.ru/catalog/russia/kemerovo-oblast/
                      https://yandex.ru/pogoda/region/11282
                      https://weather.rambler.ru/world/rossiya/kemerovskaya-oblast/`
	})
};

try {
	const response = await fetch(url, options);
	this.answerGPT = await response.json();
	console.log(this.answerGPT);
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
