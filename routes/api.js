const apiRouter = require("express").Router();

const gamesRouter = require("./games.js");
const categoriesRouter = require("./categories.js");
const usersRouter = require("./users.js");

apiRouter.use("/api", usersRouter);
apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", categoriesRouter);

module.exports = apiRouter;