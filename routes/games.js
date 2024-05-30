const {sendAllGames, sendGameCreated, sendGameDeleted, sendGameUpdated, sendGameById} = require("../controllers/games");
const { checkAuth } = require("../middlewares/auth");
const {findAllGames, createGame, deleteGame, findGameById, updateGame, checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsGameExists, checkIsVoteRequest} = require("../middlewares/games");

const gamesRouter = require("express").Router();


gamesRouter.get("/games", findAllGames, sendAllGames);

gamesRouter.post("/games",
findAllGames,
 checkIsGameExists,
  checkIfCategoriesAvaliable,
   checkEmptyFields,
    checkAuth,
      createGame,
       sendGameCreated
    );
    gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.delete("/games/:id",deleteGame, checkAuth, sendGameDeleted );
gamesRouter.put("/games/:id",
findGameById,
checkIsVoteRequest,
 checkIfUsersAreSafe,
 checkIfCategoriesAvaliable,
 checkEmptyFields,
 checkAuth,
 updateGame,
 sendGameUpdated 
 );

module.exports = gamesRouter;