const {sendAllGames, sendGameCreated, sendGameDeleted, sendGameUpdated} = require("../controllers/games");
const {findAllGames, createGame, deleteGame, findGameById, updateGame, checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsGameExists} = require("../middlewares/games");

const gamesRouter = require("express").Router();


gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games",findAllGames, checkEmptyFields, checkIsGameExists, createGame, sendGameCreated);
gamesRouter.delete("/games/:id",deleteGame, sendGameDeleted );
gamesRouter.put("/games/:id",
findGameById,
 checkIfUsersAreSafe,
 checkIfCategoriesAvaliable,
 checkEmptyFields,
 updateGame,
 sendGameUpdated 
 );

module.exports = gamesRouter;