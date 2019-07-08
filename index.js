/*
var request = require("request");

var options = { method: 'GET',
url: 'https://developers.coinmarketcal.com/v1/events',
qs: { max: '10', coins: 'vechain' },
headers:
{ Accept: 'application/json',
  'Accept-Encoding': 'deflate, gzip',
  'x-api-key': 'SUJDQfIY6U4UDWbsNEED7rtCkhElHacaWFibIVIj' } };

request(options, function (error, response, body) {
if (error) throw new Error(error);

console.log(body);
});
*/


const ical = require('ical-generator');
var moment = require('moment');

const cal = ical();

cal.events([
    {
        start: new Date(),
        end: new Date(new Date().getTime() + 3600000),
        summary: 'Example Event',
        description: 'It works ;)',
        url: 'http://sebbo.net/'
    }
]);

console.log(cal.events());

cal.save('test.ics', function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved.");
});