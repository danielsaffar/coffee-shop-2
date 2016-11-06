var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: { beans:10  },
    americano: { beans: 5 },
    doubleShot: {beans:15 },
    frenchPress: { beans:12 },
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method
   if (!this.drinkRequirements[drinkType]){
     console.log("Sorry we don't make " + drinkType);
   }
   
   else if(this.drinkRequirements[drinkType] && coffeeShop.beans >= this.drinkRequirements[drinkType].beans) { 
      console.log( coffeeShop.beans-= this.drinkRequirements[drinkType].beans);
   }
   
   else  {
    console.log("We are out of beans!");
   }
  }
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");