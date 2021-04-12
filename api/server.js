const express = require('express');
const mock_data = require("./mock_data.js")
const Insta = require('scraper-instagram');
const InstaClient = new Insta();
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/api/hashtag", (req, res) => {
  let hashtag = req.body.post;
  InstaClient.getHashtag(req.body.post)
  .then((hashtag) => {
    res.send({
      data: hashtag
    })
    console.log(hashtag)
  }).catch(err => console.error(err));
  // res.send({
  //   data: mock_data.data
  // })
});



if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  }); 
}

app.listen(port, () => console.log(`Listening on port ${port}`));
