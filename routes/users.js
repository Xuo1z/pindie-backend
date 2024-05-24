const usersRouter = require('express').Router();
  
  const { findAllUsers, createUser, deleteUser, findUserById, updateUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, hashPassword, checkIsUserExists } = require('../middlewares/users');
  const {sendAllUsers, sendUserCreated, sendUserDeleted, sendUserUpdated} = require('../controllers/users');
  
  usersRouter.get('/users', findAllUsers, sendAllUsers);
  usersRouter.post('/users',findAllUsers,checkIsUserExists,checkEmptyNameAndEmailAndPassword, hashPassword, createUser, sendUserCreated);
  usersRouter.delete('/users/:id', deleteUser, sendUserDeleted);
  usersRouter.put('/users/:id', findUserById, checkEmptyNameAndEmail, updateUser, sendUserUpdated);

  module.exports = usersRouter;