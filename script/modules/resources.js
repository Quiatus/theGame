class Resource {
    #resource = null;
    #increase = null;

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
}

export class Month extends Resource {
 //
}