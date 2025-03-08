import express from "express"
import todoController from "../controller/todo.controller.js"

const router = express.Router()

router
   .post('/' ,  todoController.createTodo )
   .get("/" ,  todoController.getTodoList)
   .patch("/:todoId" , todoController.updateTodoData )
   .delete("/:todoId" , todoController.deleteTodo )


export  const  todoRouter = router 