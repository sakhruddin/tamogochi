//  Игра Tamogochi

const tamogotchi = {
    name: 'lecha',
    meal: 3,
    energy: 3,
    mood: 4,
    getStatus: function () {
      if(this.meal < 1 || this.energy < 1 || this.mood < 1){
        
        return `я умер`
      } 
    
      let eat1 
      let sleep1
      let play1
      if (this.meal < 3){
        eat1 = `я голоден (${this.meal})`
      } else eat1 =`я не голоден (${this.meal})`
      
      if(this.energy < 3){
        sleep1 = `я хочу спать (${this.energy})`
      } else sleep1 = `я не хочу спать (${this.energy})`
      
      if(this.mood < 3){
        play1 = `я хочу спать (${this.mood})`
      } else play1 = `я не хочу спать (${this.mood})`
      
      let str = `Имя: ${this.name}, Еда: ${eat1}, Энергия: ${sleep1}, Настроение: ${play1}.`
      return str;
      
    },
    
   setName: function (name) {
    this.name = name;
    
  },
  
  
 eat: function () {
   if(this.meal < 5){
     return this.meal++
   }
   this.food--
 },
 
 sleep: function () {
   if(this.energy < 5){
     this.energy++
   }
   this.meal--
 },
 
 play: function (){
   if(this.mood < 5){
      this.mood++
   }
   this.energy--
   
 },
 
  };
  
  tamogotchi.play()
  console.log(tamogotchi.getStatus())