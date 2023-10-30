<template >
   <div class="top"></div>
    <div class="card11">
        <div class="imgm"> <img src="../pictures/Star.png" alt="star" class="img111">

            <router-link :to="{name: 'poem'}"
            class="router-link"> <img class="img222" src="../pictures/Quiez.png" alt="quiezes">
            </router-link>

         
          <img class="img333" src="../pictures/Asker.png" alt="asker">
          <img class="img444" src="../pictures/Info.png" alt="information">
        </div>
        
        </div>
        <div class="textt"><h1>Шерегеш</h1>
            <p>Популярный горнолыжный курорт, расположенный в Кемеровской области на севере Алтайского края, в России. Этот курорт привлекает тысячи туристов своей красивой природой, богатством снежных склонов и качественными горнолыжными трассами.</p> </div>
    <div class="card12">
        <div class="img2">
            <img src="../pictures/Star.png" alt="star" class="img555">

            <router-link :to="{name: 'poem'}"
            class="router-link"><img class="img666" src="../pictures/Quiez.png" alt="quiezes"></router-link> 

          <img class="img777" src="../pictures/Asker.png" alt="asker">
          <img class="img888" src="../pictures/Info.png" alt="information">
        </div>
        
        </div>
        <div class="text2">
            <h1>Горная Шория</h1>
            <p>Территория окруженная величественными горами, каскадными водопадами, глубокими лесами и прекрасными озерами. Это место привлекает туристов своим уникальным природным наследием, богатыми возможностями для активного отдыха и оздоровления.</p>
        
    </div>
    <footer >
        <div class="footer"></div>
    </footer>
</template>
<script>
export default {
    data () {
     return {
        
     }
    }
}
    
</script>
<style>
   .top {
    background-image: url(../pictures/TOP.png);
    width: 888.227px;
height: 67.851px;
margin-left: 480px;
margin-top: 50px;
   }
   .card11 {
    background-image: url(../pictures/Rectangle33.png);
    width: 1111px;
    height: 278px;
    margin: 50px;
   
   }
    .textt p {
        width: 1217px;
height: 181px;
color: #000;

font-family: Arial, Helvetica, sans-serif;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: normal;
 
        
    }
    .textt {
        margin-left: 111px;
    }
    .textt h1 {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 70px;
font-style: normal;
font-weight: 700;
line-height: normal;
    }
    .card12 {
        background-image: url(../pictures/Rectangle34.png);
        width: 1111px;
        margin-left: 680px;
        height: 278px;
        margin-bottom: 50px;
    }
    .text2 h1 {
        color: #000;

text-align: right;
font-family: Arial, Helvetica, sans-serif;
font-size: 70px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-right: 110px;
    }
    .text2 p {
       
flex-shrink: 0;
color: #000;

text-align: right;
font-family: Arial, Helvetica, sans-serif;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: right;
margin-left:400px;
margin-right: 110px;
    }
    .text2 {
        margin-bottom: 100px;
    }
    .img111 {
        margin-top: 220px;
        margin-left: 100px;
        margin-right: 20px;
    }
    .img222{
        margin-right: 20px;
    }
    .img333 {
        margin-right: 15px;
        
    }
    .img444{
        margin-bottom:  1px;
    }
    .img555 {
      margin-top: 218px; 
      margin-left: 100px; 
      margin-right: 20px;
    }
    .img666 {
        margin-right: 20px;  
    }
    .img777 {
        margin-right: 15px;  
    }
    
</style>