const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../controllers/userControllers');
//../controllers/userControllers

router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);


module.exports = router;

// const router = require("express").Router();
// const {
//   createUser,
//   getAllUsers,
//   getSingleUser,
//   updateUser,
//   deleteUser,
//   addFriend,
//   removeFriend,
// } = require("../../controllers//userController");

// router.route("/").post(createUser).get(getAllUsers);

// router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// router.post("/:userId/friends/:friendId", addFriend);
// router.delete("/:userId/friends/:friendId", removeFriend);

// module.exports = router;