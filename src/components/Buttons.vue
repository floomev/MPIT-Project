<template>
   <div class="card1"></div>
   <div class="card2"></div>
   <div class="card3">
    </div>
    <div class="card4">
        <div class="textBox">
            <h1>Шерегеш</h1>
            <p>Популярный горнолыжный курорт,
            расположенный в кемеровской областина севере Алтайского края, в России.
            Этот курорт привлекает тысячи туристов своей красивой природой, богатством
            снежных склонов и качественными 
            горнолыжными трассами
            </p>
        </div>
        <div class="pictureBox"></div>
    </div>
    <div class="card6"><div class="pictureBox1"></div>
        <div class="textBox1">
            <h1>Горная Шория</h1>
            <p>Территория окруженная величественными горами, каскадными
                водопадами, глубокими лесами и прекрасными озерами. Это место
                привлекает туристов своим уникальным природным наследием, богатыми возможностями
                для активного отдыха и оздоровления
            </p>
        </div>
        
    </div>
    <div>
        <div class="Find">
            <div>
                <router-link :to="{name: 'Questions'}"
                class="router-link">/
            <div class="routerImg"></div>
                </router-link>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    data (){
        return {
            
        }
    },
   
}
</script>
<style>
   .card1{
    background-image: url(../pictures/1.jpg);
    
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100px;
   } 
   .card2{
    background-image: url(../pictures/2.jpg);
    margin-top: 30px;
    height: 750px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100px;
   } 
   .card3{
    background-image: url(../pictures/dh.jpg);
    margin-top: 30px;
    height: 300px;
    background-repeat: no-repeat;
   
    border-radius: 100px;
   } 
   .card4{
    display: flex;
    
   }
   .pictureBox {
    background-image: url(../pictures/35.png);
    height: 580px;
    width: 880px;
    margin-left: 200px;
    background-size: cover;
    background-repeat: no-repeat;
   }
   .textBox {
    width: 60vh;
    margin-left: 70px;
    
   }
   .textBox h1 {
   
    font-size: 90px;
   }
   .textBox p {
   
   font-size: 30px;
  }
  .card6{
    display: flex;
    margin-top: 120px;
   }
   .pictureBox1{
    background-image: url(../pictures//34.png);
    width :1800px ;
    height: 570px;
    background-size: cover;
    margin-left: 50px;
   }
   .textBox1 h1 {
    font-size: 90px;
   }
   .textBox1 p {
   
   font-size: 30px;
  }
  .textBox1 {
    width: 1700px;
    padding: 60px;
    margin-bottom: 100px;
  }
  .Find {
    background-image: url(../pictures//пыпып.jpg);
    height: 1000px;
    width: 1800px;
    background-size: cover;
    margin-left: 30px;
    border-radius: 100px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .routerImg {
    background-image: url(../pictures/Приступить.png);
    height: 120px;
    width: 520px;
    background-size: cover;
    margin-left: 630px;
    margin-top: 530px;
  }
</style>