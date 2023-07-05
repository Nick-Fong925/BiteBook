const express = require("express");

const PORT = 4500;
const app = express();
app.use(express.json());

app.listen(PORT, () => console.log(`Listening at ${PORT}`));

app.get("/", (req, res) => {
  res.send("BiteBook");
});

/* argument: business_id_or_alias

const sdk = require('api')('@yelp-developers/v1.0#oa2slikgpsix');

sdk.auth('Bearer Ct7456pN6K9U7VwukVG1ceKYLq5u3E3bbsOyH7oeStxc4_OoKFWK3Y6zT_EKrs3gK_tlmwcN5yROebpLBb6EWncBjl0fs964lckcc4VcDUn41KTOXV_ofxpWWYyWZHYx');
sdk.v3_business_info({business_id_or_alias: 'arguement'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

*/

/*
const sdk = require('api')('@yelp-developers/v1.0#oa2slikgpsix');

sdk.auth('Bearer Ct7456pN6K9U7VwukVG1ceKYLq5u3E3bbsOyH7oeStxc4_OoKFWK3Y6zT_EKrs3gK_tlmwcN5yROebpLBb6EWncBjl0fs964lckcc4VcDUn41KTOXV_ofxpWWYyWZHYx');
sdk.v3_business_search({
  location: '%22Vancouver%22%2C%22Richmond%22',
  term: 'food%2C%20restaurants%2C%20bars%2C%20cafe',
  radius: '30000',
  categories: '',
  price: '2',
  sort_by: 'rating',
  limit: '23'
})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));
*/
