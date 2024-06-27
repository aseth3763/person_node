const Person = require("../person")

// const postData = async (req,res)=>{
//     try{
//       const data = req.body
//       console.log(data);
//       const newPerson = new Person(data);
//       // console.log(newPerson);
//       const response = await newPerson.save()
//       console.log("data saved");
//       res.status(200).json({
//         success : true,
//         message: "work successfull",
//         data : response})
  
//     }catch(err){
//         console.log(err);
//         res.status(500).json({error:"internal server error"})
//     }
    
//   }

    const postNewData = async(req,res) =>{
        try {
            const {name,email,age} = req.body

            if(!name) {
                return res.status(400).json({
                    success : false,
                    message : "name required"
                })
            }

            if(!email){
                return res.status(400).json({
                    success : false,
                    message : "email required"
                })
            }

            if(!age) {
                return res.status(400).json({
                    success : false,
                    message : "age required"
                })
            } 

            const existingPerson = await Person.findOne({name});
            if (existingPerson) {
              return res.status(400).json({
                success: false,
                message: "Name already exists"
                });
                }

            const new_data  = new Person({
                name,email,age
            })

            await new_data.save()
            return res.status(200).json({
                success: true,
                message: "new data inserted",
                data: new_data,
              });

        } catch (error) {
             return res.status(500).json({
                     success : false ,
                     message : 'error message',
                     error_message : error.error_message
                  })
        }
    }

  const getAllData = async ( req , res)=> {
    try {
        const allPerson = await Person.find()
        if(!allPerson)
          {
                return res.status(400).json({
                               success : false ,
                               message : 'no user found'
                         })
              }
                console.log("all data fetched");
                console.log(allPerson)
                return res.status(200).json({
                  success : true ,
                  message : 'all user',
                  allUser : allPerson
                  
                })
              
            } catch (error) {
              return res.status(500).json({
                     success : false ,
                     message : 'error message',
                     error_message : error.error_message
                  })
              }
  }

  const getOneData = async (req,res)=>{
    try {
      const id = req.params.id
      if(!id){
           return res.status(400).json({
             success : false ,
             message : 'id required'
           })
      }
  
      // get user
          const user = await Person.findOne({
                  _id : id
          })
  
            if(!user)
              {
                return res.status(400).json({
                  success : false ,
                  message : 'user not found'
                })
              }
        
             res.status(200).json({
                success : true ,
                message  : 'user data',
                data : user
             })
       
      }
    catch (error) {
      res.status(500).json({error:"Internal Server Error"})
    }
  }

  const updatedData =  async (req,res)=>{
    try {
      const findId = req.params.id

      const response = await Person.findByIdAndUpdate(findId,{"age":24},{
        new : true,
        runValidators:true
      })
  
      if(!response){
        res.status(404).json({error: "Person not found"})
      }
      
      console.log("Data updated");
      res.status(200).json(response)
      
    } catch (error) {
      console.log(error);
      res.status(505).json({error : " Error hai bhai"})
    }
  }

  
  const deleteData = async(req,res)=>{
    try {
      const personId = req.params.id
  
      const response = await Person.findByIdAndDelete(personId)
      if(!response){
        return res.status(404).json({error: "Person not found"})
      }
      
      res.status(200).json(response)
    } catch (error) {
      res.status(505).json({error : " Error hai bhai"})
    }
  
  }



  //
    


  module.exports = {
    // postData,
    postNewData,getAllData,getOneData,updatedData,deleteData
  }