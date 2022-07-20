const PeopleData = require("../data/people.data");
const elasticService = require("../elastic/elastic.service");

const PEOPLE_INDEX='people-index';

class PeopleService {
  async create(people) {
    try {
      const peopleResponse = await elasticService.index({
        index: PEOPLE_INDEX,
        body: people
      });
      return  PeopleData.create(peopleResponse._id, people);
    } catch(error) {
      console.log(error);
    }
      
  }
}
module.exports = new PeopleService();
