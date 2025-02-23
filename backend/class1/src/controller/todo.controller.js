import { Todos } from "../model/todo.model.js";

export const createTodo = async( req , res )=>{
     try {
        console.log("body" ,  req.body );
        const { title , description } = req.body
        
        if(!title ){
           return res.staus(400).json({
                success : false , 
                message : "title is required"
            })
        }

        const todo =await Todos.create({
            title  ,
            description 
        })

        return res.status(201).json({
            success : true ,
            message : " todo create successfully " ,
            todo 
        })
        
     } catch (error) {
        
        console.error( "error => " , error );
        
        return res.status(500).json({
            success : false , 
            message : " Internal Error "
        })

     }
}


export const getTodoList = async(req , res)=>{

    try {
        const todos = await Todos.find()

        if(todos.length){

            return res.status(200).json({
                success: true ,
                message : " fetch all todo list " ,
                data : todos
            })

        } else {

            return res.status(200).json({
                success: true ,
                message : " No todos are availabe ! " ,
                data : []
            })

        }


        
    } catch (error) {
        return res.status(500).json({
            success: false , 
            message : " Internal Error  "
        })
    }
} 


export const updatTodoData = async(req , res)=>{

    try {

        const { todoId } = req.params 
        const { title , description , isComplete } = req.body
        let completeDate = ""
        let todo = {}

        const todoExist = await Todos.findById(todoId)
    
        if( !todoExist ) {
            return res.status(400).json({
                success: false ,
                message : "Todo not exist " ,
               
            })
        }

        if(!title ){
            return res.staus(400).json({
                 success : false , 
                 message : "title is required"
             })
         }

         if( isComplete ) {
             completeDate = Date.now()
             todo = await Todos.findByIdAndUpdate(todoId , { ...req.body , completeAt : completeDate  } , {new : true})
            } else{
                
                todo = await Todos.findByIdAndUpdate(todoId , { ...req.body , completeAt : null  } , {new : true} )
         }

     
      return res.status(200).json({
        success : true ,
        message : "Todo update success "  ,
        data : todo
      })
        
    } catch (error) {
        console.error ( error )
         return res.status(500).json({
            success: false , 
            message : " Internal Error  "
        })
    }

}


export const deleteTodo = async(req , res)=>{
   
        try {
            const { todoId } = req.params 
            const todo = await Todos.findById(todoId)
    
            if( !todo ) {
                return res.status(400).json({
                    success: false ,
                    message : "Todo not exist " ,
                   
                })
            }

           
               await Todos.findByIdAndDelete(todoId)
    
                return res.status(200).json({
                    success: true ,
                    message : " todo delete success  " ,
                    data : todo
                })
    
        
    
            
        } catch (error) {
            return res.status(500).json({
                success: false , 
                message : " Internal Error  "
            })
        }

}