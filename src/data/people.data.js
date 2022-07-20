module.exports = class PeopleData {
    constructor(document, name, email) {
        this.id = undefined;
        this.document = document;
        this.name = name;
        this.email = email;
    }
    static create(id, data) {
        const people = new PeopleData(data.document, data.name, data.email);
        people.id = id; 
        return people;
    }
};
