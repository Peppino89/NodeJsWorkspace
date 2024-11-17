import express from "express";
import { auth } from "../auth/auth.js";
import cookieParser from "cookie-parser";

const router = express.Router();

router.use(cookieParser());


//@route     GET api/saluto
//@desc      display name of the user
//@acccess   Public
router.get('/saluto', (req, res) => { 
    
    //res.cookie("test", "my-cookie");//creo il cookie
    res.send("Hei ciaoo Benvenuto nella mia prima API!")
    //console.log("Cookies: " + req.cookies.test);

});

//  router.get('/saluto/removeCookie', (req, res) => { 
    
//      res.clearCookie("test"); //per eliminare il cookie
//      res.send("cookie removed"); 

//  });

// router.get('/saluto/modifyCookie', (req, res) => { 

//     res.cookie("test", "new-cookie");//modifico il cookie
//     res.send("Cookie modificato");
// });


//@route     Post api/login
//@desc      logon user
//@acccess   private
 router.post('/login', auth, (req, res) => { 
     
     
     res.send(`Benvenuto ${req.body.nome}`);
     
 });


 //@route     GET api/login
//@desc      logon user
//@acccess   private
 




export default router;