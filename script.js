(function() {

  angular.module('sortTable', [])
    .controller('mainCtrl', function() {
      var main = this;
      main.persons = 
       [

// COT  COT  COT  COT  COT  COT  COT 

       {
        salida:"08:35",
        destino:"Montevideo",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"19:00",
        destino:"Montevideo",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"22:00",
        destino:"Montevideo",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"12:45",
        destino:"Chuy",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"12:45",
        destino:"Castillos",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"16:20",
        destino:"La Paloma",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"21:05",
        destino:"La Paloma",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"08:35",
        destino:"Pan de Azúcar",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"19:00",
        destino:"Pan de Azúcar",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"22:00",
        destino:"Pan de Azúcar",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"08:35",
        destino:"San Carlos",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"19:00",
        destino:"San Carlos",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"22:00",
        destino:"San Carlos",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"12:45",
        destino:"Punta del Diablo",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"16:20",
        destino:"La Pedrera",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"21:05",
        destino:"La Pedrera",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"08:35",
        destino:"San Carlos",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"19:00",
        destino:"San Carlos",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"22:00",
        destino:"San Carlos",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"08:35",
        destino:"Aero. Carrasco",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"19:00",
        destino:"Aero. Carrasco",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"22:00",
        destino:"Aero. Carrasco",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },{
        salida:"12:45",
        destino:"La Coronilla",
        empresa:"COT",
        frecuencia:"Lun a Dom",
      },
// RUTAS D.SOL  RUTAS D.SOL  RUTAS D.SOL  RUTAS D.SOL 
      {
        salida:"15:30",
        destino:"Montevideo",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"17:00",
        destino:"Montevideo",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"21:00",
        destino:"Montevideo",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"11:00",
        destino:"Pan de Azúcar",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"15:30",
        destino:"Pan de Azúcar",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"17:00",
        destino:"Pan de Azúcar",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{  
        salida:"21:00",
        destino:"Pan de Azúcar",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"11:00",
        destino:"San Carlos",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"15:30",
        destino:"San Carlos",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"17:00",
        destino:"San Carlos",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{  
        salida:"21:00",
        destino:"San Carlos",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"17:50",
        destino:"Chuy",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"21:50",
        destino:"Chuy",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"17:50",
        destino:"Castillos",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"21:50",
        destino:"Castillos",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"13:30",
        destino:"La Paloma",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"10:20",
        destino:"Punta del Diablo",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"17:50",
        destino:"Punta del Diablo",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"21:50",
        destino:"Punta del Diablo",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"13:30",
        destino:"La Pedrera",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"10:20",
        destino:"La Coronilla",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"17:50",
        destino:"La Coronilla",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },{
        salida:"21:50",
        destino:"La Coronilla",
        empresa:"RUTAS D.SOL",
        frecuencia:"Lun a Dom",
      },
// COTEC  COTEC  COTEC  COTEC  COTEC  COTEC  COTEC  COTEC 
      {
        salida:"05:15",
        destino:"Chuy",
        empresa:"COTEC",
        frecuencia:"Lun a Vie",
      },{
        salida:"07:00",
        destino:"La Paloma",
        empresa:"COTEC",
        frecuencia:"Lun a Dom",
      },{
        salida:"10:00",
        destino:"La Paloma",
        empresa:"COTEC",
        frecuencia:"Lun a Sáb",
      },{
        salida:"13:00",
        destino:"La Paloma",
        empresa:"COTEC",
        frecuencia:"Lun a Vie",
      },{
        salida:"15:00",
        destino:"La Paloma",
        empresa:"COTEC",
        frecuencia:"Lun a Sáb",
      },{
        salida:"16:00",
        destino:"La Paloma",
        empresa:"COTEC",
        frecuencia:"Lun a Sáb",
      },{
        salida:"17:45",
        destino:"La Paloma",
        empresa:"COTEC",
        frecuencia:"Lun a Sáb",
      },

// CYNSA  CYNSA  CYNSA  CYNSA  CYNSA  CYNSA  CYNSA 
      {
        salida:"09:40",
        destino:"Montevideo",
        empresa:"CYNSA",
        frecuencia:"Lun a Dom",
      },{
        salida:"05:40",
        destino:"Montevideo",
        empresa:"CYNSA",
        frecuencia:"Lun a Vie",
      },{
        salida:"14:45",
        destino:"Montevideo",
        empresa:"CYNSA",
        frecuencia:"Lun a Dom",
      },{
        salida:"14:45",
        destino:"Montevideo",
        empresa:"CYNSA",
        frecuencia:"Lun a Dom",
      },{
        salida:"13:00",
        destino:"Montevideo",
        empresa:"CYNSA",
        frecuencia:"Lun a Vie",
      },{
        salida:"14:45",
        destino:"San Carlos",
        empresa:"CYNSA",
        frecuencia:"Lun a Dom",
      },{
        salida:"13:00",
        destino:"San Carlos",
        empresa:"CYNSA",
        frecuencia:"Lun a Vie",
      },{
        salida:"09:40",
        destino:"San Carlos",
        empresa:"CYNSA",
        frecuencia:"Lun a Dom",
      },{
        salida:"09:40",
        destino:"Pan de Azúcar",
        empresa:"CYNSA",
        frecuencia:"Lun a Dom",
      },{
        salida:"14:45",
        destino:"Pan de Azúcar",
        empresa:"CYNSA",
        frecuencia:"Lun a Dom",
      },{
        salida:"13:00",
        destino:"Pan de Azúcar",
        empresa:"CYNSA",
        frecuencia:"Lun a Vie",
      },{
        salida:"08:00",
        destino:"Chuy",
        empresa:"CYNSA",
        frecuencia:"Lun a Dom",
      },{
        salida:"08:00",
        destino:"Castillos",
        empresa:"CYNSA",
        frecuencia:"Lun a Dom",
      },{
        salida:"08:00",
        destino:"La Coronilla",
        empresa:"CYNSA",
        frecuencia:"Lun a Dom",
      },{
        salida:"08:00",
        destino:"Punta del Diablo",
        empresa:"CYNSA",
        frecuencia:"Lun a Dom",
      },{
        salida:"11:10",
        destino:"La Paloma",
        empresa:"CYNSA",
        frecuencia:"Lun a Dom",
      },{
        salida:"15:10",
        destino:"La Paloma",
        empresa:"CYNSA",
        frecuencia:"Lun a Vie",
      },{
        salida:"19:30",
        destino:"La Paloma",
        empresa:"CYNSA",
        frecuencia:"Lun a Dom",
      },{
        salida:"11:10",
        destino:"La Pedrera",
        empresa:"CYNSA",
        frecuencia:"Lun a Dom",
      },{
        salida:"15:10",
        destino:"La Pedrera",
        empresa:"CYNSA",
        frecuencia:"Lun a Dom",
      },{
        salida:"19:30",
        destino:"La Pedrera",
        empresa:"CYNSA",
        frecuencia:"Lun a Dom",
      },

// TURESTE TURESTE TURESTE TURESTE TURESTE TURESTE
 
      {
        salida:"07:55",
        destino:"Treinta y Tres",
        empresa:"TURESTE",
        frecuencia:"Lun a Dom",
      },{
        salida:"19:10",
        destino:"Treinta y Tres",
        empresa:"TURESTE",
        frecuencia:"Lun a Dom",
      },{
        salida:"07:55",
        destino:"Velazquez",
        empresa:"TURESTE",
        frecuencia:"Lun a Dom",
      },{
        salida:"19:10",
        destino:"Velazquez",
        empresa:"TURESTE",
        frecuencia:"Lun a Dom",
      },{
        salida:"07:55",
        destino:"Lascano",
        empresa:"TURESTE",
        frecuencia:"Lun a Dom",
      },{
        salida:"19:10",
        destino:"Lascano",
        empresa:"TURESTE",
        frecuencia:"Lun a Dom",
      },{
        salida:"07:35",
        destino:"San Carlos",
        empresa:"TURESTE",
        frecuencia:"Lun a Dom",
      },{
        salida:"07:35",
        destino:"Maldonado",
        empresa:"TURESTE",
        frecuencia:"Lun a Dom",
      },

// ROCHA-TOUR ROCHA-TOUR ROCHA-TOUR ROCHA-TOUR

      {
        salida:"06:15",
        destino:"La Paloma",
        empresa:"ROCHA-TOUR",
        frecuencia:"Lun a Vie",
      },{
        salida:"08:00",
        destino:"La Paloma",
        empresa:"ROCHA-TOUR",
        frecuencia:"Lun a Vie",
      },{
        salida:"08:00",
        destino:"La Pedrera",
        empresa:"ROCHA-TOUR",
        frecuencia:"Lun a Vie",
      },{
        salida:"11:00",
        destino:"La Paloma",
        empresa:"ROCHA-TOUR",
        frecuencia:"Lun a Vie",
      },{
        salida:"11:00",
        destino:"La Pedrera",
        empresa:"ROCHA-TOUR",
        frecuencia:"Lun a Vie",
      },{
        salida:"14:30",
        destino:"La Paloma",
        empresa:"ROCHA-TOUR",
        frecuencia:"Lun a Vie",
      },{
        salida:"14:30",
        destino:"La Pedrera",
        empresa:"ROCHA-TOUR",
        frecuencia:"Lun a Vie",
      },{
        salida:"16:30",
        destino:"La Pedrera",
        empresa:"ROCHA-TOUR",
        frecuencia:"Lun a Vie",
      },{
        salida:"16:30",
        destino:"La Paloma",
        empresa:"ROCHA-TOUR",
        frecuencia:"Lun a Vie",
      },

// CLIMEZUL CLIMEZUL CLIMEZUL CLIMEZUL CLIMEZUL  
      {
        salida:"11:30",
        destino:"Chuy",
        empresa:"CLIMEZUL",
        frecuencia:"Lun a Vie",
      },

// GONZA TOUR   GONZA TOUR   GONZA TOUR   GONZA TOUR  

      {
        salida:"19:00",
        destino:"La Paloma",
        empresa:"GONZA-TOUR",
        frecuencia:"Lun a Dom",
      },{
        salida:"21:00",
        destino:"La Paloma",
        empresa:"GONZA-TOUR",
        frecuencia:"Lun a Dom",
      }];

      main.orderType = 'salida';
      main.orderReverse = false;

      main.changeSortType = function(orderType) {
        if (main.orderType == orderType) {
          main.orderReverse = !main.orderReverse;
        } else {
          main.orderType = orderType;
        }
      }
      
      main.isSortType = function (orderType) {
        return (main.orderType == orderType);
      };

      main.isOrderedReverse = function () {
        return !main.orderReverse;
      }
    });
})();
