const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary");

const User = require("../../model/user")
const Product = require("../../model/product")

module.exports={

    registerUser: async (req, res) => {
        console.log(req.body);
    
        //checking if user already existed or not
        const user = await User.findOne({ "email": req.body.email });
        if (user) {
          return res
            .status(400)
            .json({ message: "Email Already Exists, Please Login" });
        } else {
          const newUser = new User({
            
            name: req.body.name,
            user_type:req.body.user_type,
            bio:req.body.bio,
            status:req.body.status,
            last_login:req.body.last_login,
            
            image: "https://www.gravatar.com/avatar/anything?s=200&d=mm",
            
              email: req.body.email,
              password: req.body.password,
            
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then((user) =>
                  res.json({
                    message: "Registered successfully. You can log in now",
                    user: user,
                    status: 201,
                  })
                )
                .catch((err) => console.log(err));
            });
          });
        }
      },
      loginUser: async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
    
        //checking for email and password match
        User.userFind(email, password)
          .then((user) => {
            if (!user) {
              return res.status(404).json({ message: "Invalid Creadintials in login" });
            }
            const payload = {
              id: user.id,
              user_type:user.user_type,
          
              name: user.name,
              email: user.email,
              image: user.image,
              bio: user.bio,
              status: user.status,
              last_login:user.country,
         
            };
            jwt.sign(
              payload,
              "secret key",
              { expiresIn: 60 * 60 * 30 },
              (err, token) => {
                res.json({
                  message: "Logged in Successfully",
                  token: token,
                });
              }
            );
          })
    
          //if email or password not matches throw error
          .catch((err) => {
            res.status(401).json({ message: "Incorrect Credentials in login" });
          });
      },
}