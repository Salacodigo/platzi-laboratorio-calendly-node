const express = require('express');

const validatorHandler = require('../middlewares/validator.handler');
const AvailabilityService = require('../services/availability.service');
const { checkAvailabilityDTO } = require('../dtos/availability.dtos');

const router = express.Router();
const service = new AvailabilityService();

router.post(
  '/',
  validatorHandler(checkAvailabilityDTO, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newAvailability = await service.check(body);
      res.json(newAvailability);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
