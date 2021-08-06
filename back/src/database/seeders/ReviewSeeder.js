const Review = require("../../models/Review");
const faker = require('faker-br');

 const seedReview = async function () {
   try {

     for (let i = 0; i < 10; i++) {

      let review = await Review.create({
        comment: faker.lorem.paragraph(),
        UserId: i+1,
        ProductId: i+1,
        createdAt: new Date(),
        updatedAt: new Date()
      });

    }

  } catch (err) { console.log(err +'!'); }
}

module.exports = seedReview;