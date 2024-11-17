import express from "express";
import { auth } from "../auth/auth.js";
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(cookieParser());


//@route     GET api/saluto
//@desc      display name of the user
//@acccess   Public
router.get('/saluto', (req, res) => { 
    
    res.send("Hei ciaoo Benvenuto nella mia prima API!")
});




//@route     Post api/login
//@desc      logon user
//@acccess   public
router.post('/login', auth, (req, res,next) => { 
    //res.send(`Benvenuto ${req.body.nome}`);
    res.cookie("auth", true);
   // res.cookie("nome", req.body.nome);
    const nome = req.body.nome;

    console.log(nome);
    
    //  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    //  console.log(fullUrl);
    res.redirect(`user/${nome}`);
});


//@route     GET api/userHome
//@desc      page of the user home
//@acccess   private
router.get('/user/:nome', (req, res) => { 
     
    const nome= decodeURI(req.params.nome);
     const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl.replace("%20",".")}`;
     console.log(fullUrl);

    if (req.cookies.auth!==undefined) {
        
        res.send(`Benvenuto ${nome}`);
    }
    else {
        
        res.status(401).send("Non sei Authorizzato");
    }

});



router.get('/logout', (req, res) => { 
 
    const allCookies = Object.keys(req.cookies);

    allCookies.forEach((cookieName) => {
        res.clearCookie(cookieName);
    })
    res.redirect('saluto');
});
 

export default router;