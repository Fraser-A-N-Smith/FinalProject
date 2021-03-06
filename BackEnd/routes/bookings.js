const router = require("express").Router();
const { MongoBookings } = require("../persistence/MongoBookings.js");
const { Movies } = require("../persistence/Movies.js");
const { Discussion } = require("../persistence/Discussion");

router.post("/create", (req, res, next) => {
  const booking = new MongoBookings(req.body);
  console.log(req.body);
  console.log(booking);

  booking
    .save()

    .then((result) => {
      res.status(201).send(`${result.movieTitle} saved to database!`);
    })

    .catch((error) => {
      next(error);
    });
});

router.post("/direct", (req, res, next) => {
  const movie = new Movies(req.body);
  console.log(req.body);
  console.log(movie);

  movie
    .save()

    .then((result) => {
      res.status(201).send(`${result.title} saved to database!`);
    })

    .catch((error) => {
      next(error);
    });
});

router.get("/getAll", (req, res) => {
  console.log("getAll");
  MongoBookings.find((error, bookingList) => {
    if (error) {
      console.log(`error :( : ${error}`);
    }
    res.send(bookingList).status(202);
  });
});

router.get("/watchAll", (req, res) => {
  console.log("watchAll");
  Movies.find((error, bookingList) => {
    if (error) {
      console.log(`error :( : ${error}`);
    }
    res.send(bookingList).status(202);
  });
});

router.post("/createComment", (req, res, next) => {
  const discussion = new Discussion(req.body);

  discussion
    .save()

    .then((result) => {
      console.log(discussion);
      res.status(201).send(`${result} saved to database!`);
    })

    .catch((error) => {
      next(error);
    });
});


router.get("/getAllComments", (req, res) => {
  console.log("getAll");
  Discussion.find((error, discussionList) => {
    if (error) {
      console.log(`error :( : ${error}`);
    }
    res.send(discussionList).status(202);
  });
});

module.exports = router;
