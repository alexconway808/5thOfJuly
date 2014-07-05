var practice = {};

practice.name = function (){};

//Callbacks

//Console.log every number up to count, then call cb function

practice.printZeroTo = function(count, cb){
  for (var i = 0; i < count; i++){ // loop through count
    console.log(i); // print all the numbers of count
  }
  cb(); // call
};


practice.asyncAdd = function (a, b, cb){
  var sum = a + b;
  cb(sum);
  return sum;
};


practice.filter = function (ar_obs, logicFunction){
  var holdarray = [];
  for (var i = 0; i < ar_obs.length; i++){
    if (logicFunction(ar_obs[i])){  // if the
      holdarray.push(ar_obs[i].name)      
    }
  }
  return holdarray;
};





module.exports = practice;
