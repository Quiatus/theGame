class Resource {
    #resource = null;
    #increase = null;
    #decrease = null;

    getResource() {
        return this.#resource;
    }

    setResource(resource) {
        return this.#resource = resource;
    }

    addResource(add) {
        return (
            this.#increase = add, 
            this.#resource += add
        );
    }

    getIncrease() {
        return this.#increase;
    }

    setDecrease(decrease) {
        return this.#decrease = decrease;
    }

    getDecrease() {
        return this.#decrease;
    }
}

export class Month extends Resource {
 //
}

export class Pop extends Resource {
    increasePop() {
        // Pop increase is between 0.5% - 1.5% per month
        const min = Math.floor(this.getResource() * 0.005);  
        const max = Math.floor(this.getResource() * 0.015);
        // adds between 1 - 20 pop on the top of the base increase. This is to account for low increase if pop is too low
        const addPop = Math.floor(Math.random() * (max - min) + min) + Math.floor((Math.random() * 19) + 1); 
        return this.addResource(addPop)
    }
}

export class Gold extends Resource {
    increaseGold(currentPop) {
        // each 10 pops generate 1 gold, +- 25%
        const min = Math.floor(currentPop * 0.075);  
        const max = Math.floor(currentPop * 0.125);  
        const addGold = Math.floor(Math.random() * (max - min) + min);
        return this.addResource(addGold)
    }
}

export class Food extends Resource {
    consumeFood(currentPop) {
        const consumedFood = Math.floor(currentPop / 100);
        const newFood = this.getResource() - consumedFood;
        return (
            this.setResource(newFood),
            this.setDecrease(consumedFood)
        )
    }
}