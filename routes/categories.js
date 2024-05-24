 
  const categoriesRouter = require('express').Router();
  
  const { findAllCategories, createCategory, deleteCategory, findCategoryById, updateCategory, checkEmptyName, checkIsCategoryExists } = require('../middlewares/categories');
  const {sendAllCategories, sendCategoryCreated, sendCategoryDeleted, sendCategoryUpdated} = require('../controllers/categories');
  
  categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
  categoriesRouter.post('/categories', findAllCategories, checkIsCategoryExists, createCategory, sendCategoryCreated);
  categoriesRouter.delete('/categories/:id', deleteCategory, sendCategoryDeleted);
  categoriesRouter.put('/categories/:id', findCategoryById, checkEmptyName, updateCategory, sendCategoryUpdated);

  module.exports = categoriesRouter;
  