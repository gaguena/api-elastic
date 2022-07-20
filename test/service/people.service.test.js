const PeopleData = require("../../src/data/people.data");
const peopleService = require("../../src/service/people.service");

describe('People service Tests', () => {
    test('Create people success', async () => {
        const peopleData = new PeopleData('7777777777', 'Pessoa exemplo', 'exemplo@leroymerlin.com.br')
        const peopleResponse = await peopleService.create(peopleData);
        expect(peopleData.document).toBe(peopleResponse.document);
        expect(peopleData.name).toBe(peopleResponse.name);
        expect(peopleData.email).toBe(peopleResponse.email);
    });
});
