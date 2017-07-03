const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { type } = req.app.locals;

  res.render('index', {
    title: `express w/ ${type}`,
    isReady: true,
    stops: [
      { name: 'Tokyo' },
      { name: 'Shinagawa' },
      { name: 'Shin-Yokohama' },
    ],
    html: '<div><p>External HTML</p><img src="http://tiqav.com/2gZ.jpg" /></div>',
  });
});

module.exports = router;
