const { Router } = require("express");
const axios = require("axios");

const router = Router();

router.post("backend/storage/hook", (request, response) => {
  console.log(request.body);

  response.status(200);
  response.json({});

  return;
});

module.exports = router;
