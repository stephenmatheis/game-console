// QUESTION: #1
// Consider you must build a system that calls for Dogs and Cats, which both Speak ("bark" and "meow", respectively).
// How would you model this?
// Hint: They are both Animals and all Animals Speak.

// Option #1: Class Implementation
// -------------------------------
interface Animal {
    speak: () => string | void;
}

export class Dog implements Animal {
    speak(): string {
        return 'bark';
    }
}

const goodBoy = new Dog();
console.log(goodBoy.speak()); // returns string

export class Cat implements Animal {
    speak(): string {
        return 'meow';
    }
}

const spicyNiceCat = new Cat();
console.log(spicyNiceCat.speak()); // ✅ returns string

/******************************************************************************/

// Option #2: Class Inheritance
// ----------------------------

interface BaseAnimalAttributes {
    getName(): string;
    speak(): string;
}

export abstract class BaseAnimal implements BaseAnimalAttributes {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract speak(): string;

    getName(): string {
        return this.name;
    }
}

export class BasicDog extends BaseAnimal {
    constructor(name: string) {
        super(name);
    }

    speak(): string {
        return 'Woof!';
    }

    rollOver(): string {
        return `${this.getName()} happily does a barrel roll!`;
    }
}

const bestBoy = new BasicDog();
console.log(bestBoy.speak());
console.log(bestBoy.rollOver()); // missing name
bestBoy.name = 'Peanut Butter';

export class BasicCat extends BaseAnimal {
    constructor(name: string) {
        super(name);
    }

    // speak(): string {
    //     return 'Meow';
    // }

    knockGlassOffTable(): string {
        return `${this.getName()} looks you straight in the eye while knocking your glass off the table.`;
    }
}

const theirMajesty = new BasicCat('Bagels');
console.log(theirMajesty.speak()); // missing speak()
console.log(theirMajesty.knockGlassOffTable());

/******************************************************************************/

// Option #3: Factory
//

export type AnimalProps = {
    name?: string;
    speak: () => string;
};

export type FriendShaped = AnimalProps & {
    blep: () => string;
};

export function CreateDog({ name, isBlepping }: { name?: string; isBlepping: boolean }): FriendShaped {
    return {
        name,
        speak() {
            return 'Borf!';
        },
        blep() {
            return isBlepping ? `${name} sticks out their tongue! ` : `${name} no cute blep for us.`;
        },
    };
}

const goodestBoy = CreateDog({ name: 'Cheddar', isBlepping: false });
console.log(goodestBoy.blep());
console.log(goodestBoy.name);
console.log(goodestBoy.speak());

goodestBoy.name = 'Carrots';

console.log(goodestBoy.name);

export type GremlinShaped = AnimalProps & {
    getName: () => string;
    ignore: () => string;
    giveTreat: () => void;
} & AnimalProps;

export function CreateCat({ name }: { name: string }): GremlinShaped {
    let hasTreat = false;

    return {
        getName() {
            return name;
        },
        speak() {
            return hasTreat ? `${name} forgives your insolence.` : `${name} is giving you the silent TREATment.`;
        },
        ignore() {
            return `${name} is ignoring you. It is super effective.`;
        },
        giveTreat() {
            hasTreat = true;
        },
    };
}

const houseGoblin = CreateCat({ name: 'Soup' });
console.log(houseGoblin.name);
console.log(houseGoblin.getName());
houseGoblin.name = 'Kimchi';
console.log(houseGoblin.name);
console.log(houseGoblin.getName());

console.log(houseGoblin.speak());
houseGoblin.giveTreat();
console.log(houseGoblin.speak());

const houseGremlin = CreateCat({ name: 'Pepper' });
console.log(houseGremlin.speak());

export function CreateFrozenCat({ name }: { name: string }): GremlinShaped {
    let hasTreat = false;

    return Object.freeze({
        getName() {
            return name;
        },
        speak() {
            return hasTreat ? `${name} forgives your insolence.` : `${name} is giving you the silent TREATment.`;
        },
        ignore() {
            return `${name} is ignoring you. It is super effective.`;
        },
        giveTreat() {
            hasTreat = true;
        },
    });
}

const yardBeast = CreateFrozenCat({ name: 'Mochi' });
console.log(yardBeast.name);
console.log(yardBeast.getName());
yardBeast.name = 'Curry';
console.log(yardBeast.name);
console.log(yardBeast.getName());

console.log(yardBeast.speak());
yardBeast.giveTreat();
console.log(yardBeast.speak());
