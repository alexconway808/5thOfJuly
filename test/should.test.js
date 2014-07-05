var chai = require('chai'),
    should = chai.should(),
    practice = require('../practice.js');

//console.logs every number up to count then call, CB function

describe ("5th of July Tests", function(){

  it("Should print to zero", function() {
    practice.printZeroTo(10, function() {
      console.log("done");
    });
  });

  it("Should add a and b then invoke cb", function(){  
    practice.asyncAdd(2, 3, function(answer){
      console.log("the answer is " + answer);
    });
  });

  it("Should return array of names filtered", function(){    

    var people = [
      {
        name: "derek",
        age: 20
      },
      {
        name: "alex",
        age: 21
      },
      {
        name: "peter",
        age: 22
      },
      {
        name: "shannon",
        age: 23
      },
      {
        name: "justin",
        age: 24
      }
    ];

    var odd_people = practice.filter(people,function(person){
      return person.age % 2 != 0;
    });

    odd_people.should.eql(["alex", "shannon"]);

  });  
});
