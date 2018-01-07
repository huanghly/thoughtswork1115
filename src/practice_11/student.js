const Person = require('./person');
module.exports = class Student extends Person {
    constructor(prosition, name, age, klass) {
        super(prosition, name, age);
        this.class = klass;
    }
    introduce() {
        let p = super.introduce();
        if (this.hasOwnProperty("class") && this.class.leader === this) {
            return p + " I am a Student. I am Leader of " + this.class.getDisplayName() + ".";
        } else {
            return p + " I am a Student. I am at " + this.class.getDisplayName() + ".";
        }

    }
}