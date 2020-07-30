class Player {
    constructor(){
      this.name = null;
      this.index = null;
      this.distance = 0;
      this.rank = 0;
    }
    getplayercount(){
        var playercountref = database.ref('playerCount');
        playercountref.on("value",function(data){
            playercount = data.val();
        })
    }
    updateplayercount(count){
        var playercountref = database.ref('/');
        playercountref.update({
            playerCount:count
        })
    }
    updateplayerinfo(){
        var playerindex = "players/player"+this.index
        var playercountref = database.ref(playerindex);
        playercountref.set({
            name: this.name,
            distance : this.distance
        })
    }
    static getallplayersinfo(){
      var allplayerref = database.ref("players");
      allplayerref.on("value",(data)=>{
          allplayers = data.val();
      })
    }
    getfinishedcars(){
        var finishedcarsref = database.ref('finishedcars');
        finishedcarsref.on("value",(data)=>{
            this.rank = data.val();
        })
    }
    updatefinishedcars(cars){
        var finishedcarsref = database.ref('/');
        finishedcarsref.update({
            finishedcars:cars
        })
    }
}