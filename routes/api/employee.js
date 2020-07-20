const router = require("express").Router();
const employeeController = require("../../controllers(employeeController")

// Matches with "/api/posts"
router
  .route("/")
  .get(employeeController.findAll)
  .post(employeeController.create);

// Matches with "/api/posts/:id"
router
  .route("/:first_name")
  .get(employeeController.findByfirst_name)
  .put(employeeController.update)
  .delete(employeeController.remove);

router
  .route("/:last_name")
  .route(employeeController.findBylast_name)
  .put(employeeController.update)
  .delete(employeeController.remove);
router
  .route("/:department")
  .route(employeeController.finddepartment)
  .put(employeeController.update)
  .delete(employeeController.remove);

router
  .route("/:title")
  .route(employeeController.findtitle)
  .put(employeeController.update)
  .delete(employeeController.remove);

router
.route("/:image")
.route(employeeController.findimage)
.put(employeeController.update)
.delete(employeeController.remove);

  



module.exports = router;
