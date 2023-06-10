const router = require('express').Router();

const notesRouter = require('./notesHtml.js');

// const app = express();

router.use('/notes', notesRouter);

module.exports = router;