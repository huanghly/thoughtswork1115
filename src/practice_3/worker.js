const Person = require('./person');
module.exports = class worker {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `I am a Worker. I have a job.`;
    }
}