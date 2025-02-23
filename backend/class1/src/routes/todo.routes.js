import express from "express"
import { createTodo, deleteTodo, getTodoList, updatTodoData } from "../controller/todo.controller.js"

const router = express.Router()

router
   .post('/' ,  createTodo )
   .get("/" ,  getTodoList)
   .patch("/:todoId" , updatTodoData )
   .delete("/:todoId" , deleteTodo )


export  const  todoRouter = router 