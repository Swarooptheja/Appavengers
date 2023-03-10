
let express=require('express')
// const Allbooks = require('../Modal/Userallbooksmodal')
const asyncHandler = require("express-async-handler");
const { isAdmin, authMiddleware } = require('../Conection/authmiddleware');
const { generateToken } = require('../Conection/jwttoken');
const { Allbooks } = require('../Modal/Userallbooksmodal');
const { Bestsellerbooks } = require('../Modal/Userbestsellerbooks');
const { Biography } = require('../Modal/Userbiography');
const { Computer } = require('../Modal/Usercomputer');
const { Distonary } = require('../Modal/userdistonary');
const { Frenchbooks } = require('../Modal/Userfrenchbooks');
const { Geography } = require('../Modal/Usergeography');
const { German } = require('../Modal/Usergermany');
const { Hindi } = require('../Modal/Userhindi');
const { law } = require('../Modal/Userlaw');
const { lifestyle } = require('../Modal/Userlifestyle');
const { Malayalam } = require('../Modal/Usermalayalam');
const { Marati } = require('../Modal/Usermarati');
const { Mathematics } = require('../Modal/Usermathematics');
const { Medicine } = require('../Modal/Usermedicine');
const { Other } = require('../Modal/Userother');
const { Recentpublish } = require('../Modal/Userrecentpublish');
const { User } = require('../Modal/Usersignup');
const { Tamilbooks } = require('../Modal/usertamilmodal');
const { Telugubooks } = require('../Modal/Usertelugumodal');
let Userrouterallbooks=express.Router()



//posted data

Userrouterallbooks.post("/",authMiddleware, isAdmin, asyncHandler(async(req,res)=>{
     let payload=req.body
    try{
       let newallbooks=new Telugubooks(payload)
       await newallbooks.save()
       res.json(newallbooks)
    }
    catch (error) {
        throw new Error(error);
      }
    
})
)



//getdata ***********************************************

Userrouterallbooks.get('/',asyncHandler(async(req,res)=>{
  try{
    res.send('welcome to the home page')
  }
  catch(err){
    throw new Error(err)
  }
}))
Userrouterallbooks.get("/allbooks",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await Allbooks.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await Allbooks.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))

  Userrouterallbooks.get("/bestsellerbooks",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await Bestsellerbooks.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await Bestsellerbooks.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))
  Userrouterallbooks.get("/biography",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await Biography.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await Biography.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))
  Userrouterallbooks.get("/computerbooks",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await Computer.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await Computer.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))
  Userrouterallbooks.get("/distonarybooks",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await Distonary.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await Distonary.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))
  Userrouterallbooks.get("/frenchbooks",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await Frenchbooks.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await Frenchbooks.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))
  Userrouterallbooks.get("/geographybooks",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await Geography.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await Geography.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))
  Userrouterallbooks.get("/germanybooks",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await German.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await German.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))
  Userrouterallbooks.get("/hindibooks",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await Hindi.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await Hindi.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))
  Userrouterallbooks.get("/lawbooks",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await law.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await law.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))

  Userrouterallbooks.get("/lifestylebooks",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await lifestyle.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await lifestyle.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))
  Userrouterallbooks.get("/mayayalambooks",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await Malayalam.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await Malayalam.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))
  Userrouterallbooks.get("/maratibooks",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await Marati.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await Marati.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))
  Userrouterallbooks.get("/mathematicsbooks",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await Mathematics.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await Mathematics.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))
  Userrouterallbooks.get("/medicinebooks",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await Medicine.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await Medicine.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))
  Userrouterallbooks.get("/otherbooks",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await Other.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await Other.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))

  Userrouterallbooks.get("/recentbooks",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await Recentpublish.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await Recentpublish.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))
  Userrouterallbooks.get("/telugubooks",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await Telugubooks.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await Telugubooks.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))
  Userrouterallbooks.get("/tamilbooks",  asyncHandler(async (req, res) => {
    const {orderBy} = req.query
    try {
      if(orderBy){
        let num=+orderBy
        console.log(orderBy,"orderby")
       let data= await Tamilbooks.aggregate([
        {
          $addFields: {
            price: {
              $convert: {
                input: { $substr: ["$price", 3, -1] },
                to: "double",
                onError: 0
              }
            }
          }
        },
        {
          $match: { price: { $ne: 0 } }
        },
        {
          $sort: { price:num }
        }
      ])
        res.send(data)  
      }
      else{
        const product=await Tamilbooks.find()
        res.send(product)

      }
    } catch (err) {
      throw new Error(err)
    }
  }))

//signup********************************************


Userrouterallbooks.post("/register",asyncHandler(async(req,res)=>{
  const email = req.body.email;
  const mobile=req.body.mobile
const findUser = await User.findOne({email,mobile});
if (!findUser) {
  const newUser = await User.create(req.body);
  res.json(newUser);
}
   else {
    throw new Error("User Already Exists")
  }
}))



// login *************************************************************


Userrouterallbooks.post("/login",asyncHandler(async(req,res)=>{
    const { email, password } = req.body;
    // // check if user exists or not
    const findUser = await User.findOne({ email:email });
    // console.log(findUser)
    if (findUser && (await findUser.isPasswordMatched(password))) {
      console.log(findUser,"finduser")
   
   
      res.json({
        _id: findUser?._id,
        firstname: findUser?.firstname,
        lastname: findUser?.lastname,
        email: findUser?.email,
        mobile: findUser?.mobile,
        token: generateToken(findUser?._id),
      });
    } 
    else {
      throw new Error("Invalid Credentials");
    }
}))


//single product page**************************************************

Userrouterallbooks.get("/allbooks/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await Allbooks.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))


Userrouterallbooks.get("/bestsellerbooks/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await Bestsellerbooks.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))

Userrouterallbooks.get("/biograpybooks/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await Biography.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))

Userrouterallbooks.get("/computer/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await Computer.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))

Userrouterallbooks.get("/distonary/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await Distonary.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))

Userrouterallbooks.get("/frenchbooks/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await Frenchbooks.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))

Userrouterallbooks.get("/geographybooks/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await Geography.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))

Userrouterallbooks.get("/germanybooks/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await German.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))

Userrouterallbooks.get("/hindibooks/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await Hindi.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))

Userrouterallbooks.get("/lawbooks/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await law.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))

Userrouterallbooks.get("/lifestyle/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await lifestyle.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))

Userrouterallbooks.get("/malayalambooks/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await Malayalam.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))

Userrouterallbooks.get("/maratibooks/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await Marati.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))

Userrouterallbooks.get("/mathematicsbooks/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await Mathematics.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))

Userrouterallbooks.get("/medicinebooks/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await Medicine.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))
Userrouterallbooks.get("/otherbooks/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await Other.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))

Userrouterallbooks.get("/recentpublishbooks/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await Recentpublish.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))

Userrouterallbooks.get("/tamilbooks/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await Tamilbooks.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))

Userrouterallbooks.get("/telugubooks/singleproduct/:id",asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // console.log(id)
    try {
      const findProduct = await Telugubooks.findById(id);
      res.json(findProduct);
    } catch (error) {
      throw new Error(error);
    }
}))








module.exports={
    Userrouterallbooks
}