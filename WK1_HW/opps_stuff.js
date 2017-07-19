/*-------------------------------------
||
|| CATS
||
-------------------------------------*/
class Cat {
    constructor(name) {
        this.name = name;
        this.numLegs = 4;
        this.tail = "long";

    }
}


class Lion extends Cat {
    constructor(name,tail) {
        super(name,tail);
        this.mane = true;
        this.coat = "tawny";

    }
}

class Tiger extends Cat {
    constructor(name) {
        super(name);
        this.coat = "stupid";

    }
}

/*-------------------------------------
||
|| DOGs
||
-------------------------------------*/

class Dog {
    constructor(name,cute){
        this.name = name;
        this.numLegs = 3;
        this.tail = true;
        this.cute =cute;
    }
}
class Pitbull extends Dog {
    constructor(name,cute){
        super(name,cute);

    }
}
class Husky extends Dog {
    constructor(name,cute){
        super(name,cute);
        this.huge = "Massive";
    }
}
class TERRIER extends Dog {
    constructor(name,cute){
        super(name,cute);
        this.huge = "Small";
    }
}
class Boxer extends Dog {
    constructor(name,cute){
        super(name,cute);
        this.huge = "Big";
    }
}
/*-------------------------------------
||
|| BIRDS
||
-------------------------------------*/
class Bird {
    constructor(name,beak){
        this.name = name;
        this.numLegs = 2;
        this.tail = true;
        this.beak =beak;
    }
}

class Tweety extends Dog {
    constructor(name,beak){
        super(name,beak);
        this.coat = "Colorful";

    }
}

class Bluejay extends Dog {
    constructor(name,beak){
        super(name,beak);
        this.coat = "Blue";

    }
}
class Raven extends Dog {
    constructor(name,beak){
        super(name,beak);

    }
}


var simba = new Lion("simba");
var larry = new Tiger("larry");


console.log(larry.name, larry.tail);



document.getElementById("zooBtn").addEventListener("click", function(){
    console.log(simba.name, simba.tail , simba.mane);

});


