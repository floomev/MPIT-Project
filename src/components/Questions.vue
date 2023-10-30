<template >
  <div class="container">
    <div class="inputs">


      <div>
    <div class="questions" v-if="next === 1">Какую погоду вы предпочитаете?</div>
   
      <div class="form_radio_btn">
        <input v-if="next === 1"
  type="radio"
  value="Солнечную"
  :checked="picked == 'One'"
  id="one"
  @change="e => picked = e.target.value" 
/> <label v-if="next === 1" for="one">Солнечную</label>
      </div>
  <div class="form_radio_btn">
    <input v-if="next === 1"
  type="radio"
  value="Пасмурную"
  :checked="picked == 'Two'"
  id="two"
  @change="e => picked = e.target.value" 
/><label v-if="next === 1" for="one">Пасмурную</label>
  </div>
 <div class="form_radio_btn">
  <input v-if="next === 1"
  type="radio"
  value="Ветренная"
  :checked="picked == 'One'"
  id="three"
  @change="e => picked = e.target.value" 
/> <label v-if="next === 1" for="one">Ветренную</label></div>
</div>

    










<div>
<div class="questions" v-if="next === 2">В какой местности вы любите отдыхать?</div>
<div class="form_radio_btn"><input v-if="next === 2"
  type="radio"
  value="Лесная"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 2" for="one">Лесная</label>
</div>
<div class="form_radio_btn"><input v-if="next === 2"
  type="radio"
  value="Сельская"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 2" for="one">Сельская</label>
</div>
<div class="form_radio_btn"><input v-if="next === 2"
  type="radio"
  value="Горная"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 2" for="one">Горная</label></div>


   </div> 



<div>
<div class="questions" v-if="next === 3">Сколько вам лет?</div>
<div class="form_radio_btn">

    <input v-if="next === 3"
  type="radio"
  value="меньше 18 лет"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 3" for="one">меньше 18 лет</label>
</div> 
<div class="form_radio_btn">
<input v-if="next === 3"
  type="radio"
  value="18-44"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 3" for="one">18-44</label>
</div> 
<div class="form_radio_btn">
<input v-if="next === 3"
  type="radio"
  value="45-70"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 3" for="one">45-70</label>

</div>
 </div>










<div>
<div class="questions" v-if="next === 4">На какой бюджет вы рассчитываете?</div>
<div class="form_radio_btn">
<input v-if="next === 4"
  type="radio"
  value="меньше 10000"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 4" for="one">меньше 10000</label>
</div>
<div class="form_radio_btn">
<input v-if="next === 4"
  type="radio"
  value="меньше 50000"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 4" for="one">меньше 50000</label>
</div>
<div class="form_radio_btn">
<input v-if="next === 4"
  type="radio"
  value="до 100000 и больше"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 4" for="one">до 100000 и больше</label>

</div>
</div>    










<div>
<div class="questions" v-if="next === 5">Какой тип размещения вы предпочитаете?</div>
<div class="form_radio_btn">
 <input v-if="next === 5"
  type="radio"
  value="Отель"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 5" for="one">Отель</label>
</div>
<div class="form_radio_btn">
<input v-if="next === 5"
  type="radio"
  value="Кемпинг"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 5" for="one">Кемпинг</label>
</div>
<div class="form_radio_btn">
<input v-if="next === 5"
  type="radio"
  value="Частный дом"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"/> 
  <label v-if="next === 5" for="one">Частный дом</label>
</div>
   
</div>











<div class="questions" v-if="next === 6">Какой тип отдыха вы предпочитаете?</div>
<div class="form_radio_btn">
<input v-if="next === 6"
  type="radio"
  value="Активный(горные лыжи, пещие прогулки и т.д)"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 6" for="one">Активный(горные лыжи, пещие прогулки и т.д)</label>
</div>
<div class="form_radio_btn">
<input v-if="next === 6"
  type="radio"
  value="Пляжный"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 6" for="one">Пляжный</label>
</div>
<div class="form_radio_btn">
<input v-if="next === 6"
  type="radio"
  value="Культурный"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 6" for="one">Культурный</label>
</div>
    






<div>

<div class="questions" v-if="next === 7">Какой тип транспорта предпочитаете использовать для поездки?</div>
   <div class="form_radio_btn"> <input v-if="next === 7"
  type="radio"
  value="Автомобиль"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 7" for="one">Автомобиль</label>
   </div>
<div class="form_radio_btn">
<input v-if="next === 7"
  type="radio"
  value="Поезд"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 7" for="one">Поезд</label>
</div>
<div class="form_radio_btn">
<input v-if="next === 7"
  type="radio"
  value="Пешим способом"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 7" for="one">Пешим способом</label>

</div>
</div>









<div>
<div class="questions" v-if="next === 8">Предпочитаете ли вы:</div>

<div class="form_radio_btn">
<input v-if="next === 8"
  type="radio"
  value="Туры"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 8" for="one">Туры</label>
</div>
 <div class="form_radio_btn">
<input v-if="next === 8"
  type="radio"
  value="Экскурсии"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 8" for="one">Экскурсии</label>
 </div> 
 <div class="form_radio_btn">
<input v-if="next === 8"
  type="radio"
  value="Самостоятельные путешествия"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 8" for="one">Самостоятельные путешествия</label>
 </div>  
 </div>










<div>
<div class="questions" v-if="next === 9">Примерная цель вашей поездки:</div>
<div class="form_radio_btn">
 <input v-if="next === 9"
  type="radio"
  value="Отдохнуть"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 9" for="one">Отдохнуть</label>
</div>
<div class="form_radio_btn">
<input v-if="next === 9"
  type="radio"
  value="Узнать больше о родном крае"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 9" for="one">Узнать больше о родном крае</label>
</div>
<div class="form_radio_btn">
<input v-if="next === 9"
  type="radio"
  value="Заняться какой-либо местной активностью(лыжи, дайвинг и т.д)"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 9" for="one">Заняться какой-либо местной активностью(лыжи, дайвинг и т.д)</label>
</div>
  </div> 










<div>
<div class="questions" v-if="next === 10">Какое питание предпочитаете?</div>
<div class="form_radio_btn">
<input v-if="next === 10"
  type="radio"
  value="Умеренное"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 10" for="one">Умеренное</label>
</div>
<div class="form_radio_btn">
<input v-if="next === 10"
  type="radio"
  value="Вегетарианское"
  :checked="picked == 'Two'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 10" for="one">Вегетарианское</label>
</div>
<div class="form_radio_btn">
<input v-if="next === 10"
  type="radio"
  value="Национальные местные блюда"
  :checked="picked == 'One'"
  @change="e => picked = e.target.value"
/> <label v-if="next === 10" for="one">Национальные местные блюда</label>
</div>
</div>
    </div>
    
    <div class="buttons">
<button v-if=" next === 1" @click=" next = 2,  this.answers.push(this.picked)" >Далее</button>
<button @click="next = 3, this.answers.push(this.picked)" v-if=" next === 2">Далее</button>
<button @click="next = 4, this.answers.push(this.picked)" v-if=" next === 3"  >Далее</button>
<button @click="next = 5, this.answers.push(this.picked)" v-if=" next === 4">Далее</button> 
<button v-if=" next === 5" @click=" next = 6,this.answers.push(this.picked)" >Далее</button>
<button @click=" next = 7, this.answers.push(this.picked)" v-if=" next === 6">Далее</button> 
<button @click=" next = 8, this.answers.push(this.picked)" v-if=" next === 7">Далее</button> 
<button @click=" next = 9,this.answers.push(this.picked)" v-if=" next === 8">Далее</button> 

<button @click=" next = 10,this.answers.push(this.picked)" v-if=" next === 9">Далее</button> 
<button @click="GPT()">Посмотреть результаты</button>




<button @click=" next = 11, this.answers.push(this.picked)" v-if=" next === 10">Далее</button>  

<div class="GPTanswer" v-if="next === 11"><p>{{ this.answerGPT.response }}</p></div>
   <button @click="console.log(answers)">LOG</button>
  </div>
  </div>
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
		'X-RapidAPI-Key': '822b18a204mshef10a0db87d4e52p156fedjsn196190db6faf',
		'X-RapidAPI-Host': 'chatgpt-gpt4-ai-chatbot.p.rapidapi.com'
	},
	body: JSON.stringify({
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
                      https://weather.rambler.ru/world/rossiya/kemerovskaya-oblast/
                      предлагай не только Шерегеш , но и другие места, такие как:
                      Томская писанница: https://tomskayapisanitsa.ru/
                      https://www.kp.ru/russia/kemerovskaya-oblast/mesta/muzej-zapovednik-tomskaya-pisanitsa/
                      Горная Шория: https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%BD%D0%B0%D1%8F_%D0%A8%D0%BE%D1%80%D0%B8%D1%8F
                      Город Белово : https://explorado.ru/mustsee/8504.php#:~:text=%D0%9F%D0%BE%D0%BC%D0%B8%D0%BC%D0%BE%20%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D0%B2%D0%B0%D1%8E%D1%89%D0%B5%D0%B9%D1%81%D1%8F%20%D0%B8%D0%BD%D1%84%D1%80%D0%B0%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D1%8B%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%20%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%B5%D0%BD,%D0%91%D0%B5%D0%BB%D0%BE%D0%B2%D0%BE%20%E2%80%93%20%D0%BD%D0%B5%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9%20%D1%88%D0%B0%D1%85%D1%82%D0%B5%D1%80%D1%81%D0%BA%D0%B8%D0%B9%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4
                      озеро Танай: https://www.tourister.ru/world/europe/russia/city/vaganovo/lakes/37289
                      Гавриловский пруд: https://www.tourister.ru/world/europe/russia/city/gavrilovka/active/45425
                      Кузедеевский разлом: https://www.tourister.ru/world/europe/russia/city/kuzedeevo/mount/43963
                      Скалы Спасские дворцы: https://www.tourister.ru/world/europe/russia/city/tashtagol/mount/43964`
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

<style>
.form_radio_btn {
	display: inline-block;
	margin-right: 10px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.form_radio_btn input[type=radio] {
	display: none;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.form_radio_btn label {
	display: inline-block;
	cursor: pointer;
	padding: 50px 50px;
	line-height: 34px;
	border: 1px solid #999;
	border-radius: 6px;
	user-select: none;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  border: 0px;
  border-radius: 50px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  
}
 
/* Checked */

 
/* Hover */
.form_radio_btn label:hover {
	color: #666;
}
 
/* Disabled */
.form_radio_btn input[type=radio]:disabled + label {
	background: #efefef;
	color: #666;
}
.container button {
  width: 200px;
  height: 50px;
  margin: 10px;
  border: 0px;
  border-radius: 30px;
  background-color: rgba(253, 245, 217, 0.705);
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 18px;
}
.container {
  background-color: rgba(0, 0, 0, 0.932);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 810px;
  border-radius: 100px;
}
.questions {
  margin-left: 20px;
  margin-bottom: 50px;
  color: white;
  font-size: 50px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.container input {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.GPTanswer {
  color: white;
  width: 700px;
  height: 500px;
  border: 1px solid white;
  border-radius: 30px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  
}
.GPTanswer p {
  margin: 30px;
  font-size: 17px;
  
}
</style>
