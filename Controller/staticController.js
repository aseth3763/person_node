const getTestData = async (req,res)=>{
    try {
      console.log("rendering successfull");
      return res.render("home",{
        arr:["Akshay" , "Saurabh" , "Manish" , "Sahil"]
        }) 
      }
    catch (error) {
      console.log(error);
      res.status(505).json({error : "Error hai bhai"})
    }}

    const getStaticRouter = async (req,res) =>{
        try {
          console.log("rendering success");
          return res.end("<h1>My name is Akshay Seth</h1>")
        } catch (error) {
          console.log(error);
          res.status(505).json({error : " Error hai bhai"})
        }
      }

    module.exports = {
        getTestData,getStaticRouter
    };