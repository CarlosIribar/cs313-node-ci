const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var url = require('url');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/calc', function(request, response) {
    handleCalc(request, response);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  
  
  function handleCalc(request, response) {
    var requestUrl = url.parse(request.url, true);
  
    console.log("Query parameters: " + JSON.stringify(requestUrl.query));
  
    // TODO: Here we should check to make sure we have all the correct parameters
  
    var type = requestUrl.query.type;
    var weigth = Number(requestUrl.query.weigth);

    response.render('pages/getResults', {rate: calculateRate(weigth, type)});
  
  }

  function calculateRate(weigth, type) {
    if (type == 'Letters (Stamped)') {
      return lettersStamped(weigth)
    }
    if (type == 'Letters (Metered)') {
      return lettersMetered(weigth);
    }
    if (type == 'Large Envelopes (Flats)') {
      return largeEnvelops(weigth);
    }
    if (type == 'First-Class Package Service—Retail') {
      return firstClass(weigth);
    }
  }

  function lettersMetered(weigth) {
    if (weigth <= 1 ) {
      return 0.47;
    } else if (weigth <= 2 ) {
      return 0.68;
    } else if (weigth <= 3 ) {
      return 0.89;
    } else {
      return 1.10;
    }
  }

  function lettersStamped(weigth) {
    if (weigth <= 1 ) {
      return 0.50;
    } else if (weigth <= 2 ) {
      return 0.71;
    } else if (weigth <= 3 ) {
      return 0.92;
    } else {
      return 1.13;
    }
  }

  function largeEnvelops(weigth) {
    if (weigth <= 1 ) {
      return 1;
    } else if (weigth <= 2 ) {
      return 1.21;
    } else if (weigth <= 3 ) {
      return 1.42;
    } else if (weigth <= 4 ) {
      return 1.63;
    } else if (weigth <= 5 ) {
      return 1.84;
    } else if (weigth <= 6 ) {
      return 2.05;
    } else if (weigth <= 7 ) {
      return 2.26;
    } else if (weigth <= 8 ) {
      return 2.47;
    } else if (weigth <= 9 ) {
      return 2.68;
    } else if (weigth <= 10 ) {
      return 2.89;
    } else if (weigth <= 11 ) {
      return 3.10;
    } else if (weigth <= 12 ) {
      return 3.31;
    } else {
      return 3.53
    }
  }

  function firstClass(weigth) {
    if (weigth <= 1 ) {
      return 3.5;
    } else if (weigth <= 2 ) {
      return 3.5;
    } else if (weigth <= 3 ) {
      return 3.5;
    } else if (weigth <= 4 ) {
      return 3.5;
    } else if (weigth <= 5 ) {
      return 3.75;
    } else if (weigth <= 6 ) {
      return 3.75;
    } else if (weigth <= 7 ) {
      return 3.75;
    } else if (weigth <= 8 ) {
      return 3.75;
    } else if (weigth <= 9 ) {
      return 4.10;
    } else if (weigth <= 10 ) {
      return 4.45;
    } else if (weigth <= 11 ) {
      return 4.80;
    } else if (weigth <= 12 ) {
      return 5.15;
    } else {
      return 5.50;
    }
  }
