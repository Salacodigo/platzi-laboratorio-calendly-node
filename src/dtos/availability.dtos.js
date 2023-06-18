const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const { listTimeZones } = require('timezone-support');

/*
Lo que debe venir
{
	"date": "2022-07-18",
	"timezone": "America/Bogota",
	"scheduleId": "62d021227d296e54cdd0e159"
}
*/


const date = Joi.date().iso();
const timezone = Joi.string().valid(...listTimeZones());
const scheduleId = Joi.objectId();

const checkAvailabilityDTO = Joi.object({
    date: date.required(),
    timezone: timezone.required(),
    scheduleId: scheduleId.required(),
});

module.exports = { checkAvailabilityDTO };