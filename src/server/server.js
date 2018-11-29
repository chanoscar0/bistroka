const express = require('express');
const db = require('./postgresql.js');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;


passport.use(new Strategy({
  clientID: '309065336363308',
  clientSecret: '2d572aeed2b135ac9203ba185533d98a',
  callbackURL: "http://localhost:3000/auth/facebook/callback",
  profileFields: ['email','id', 'first_name', 'gender', 'last_name', 'picture']
  
},
(accessToken, refreshToken, profile ,done) => {
  
  // console.log('got here',profile,'this is req',req)
  //find user
  // db.any("SELECT first_name, last_name FROM customer WHERE first_name= $1 AND last_name = $2", [profile.first_name, profile.last_name])
  // .then((data) => {
  //   if(data.length === 0) {
  //     // create user?
  //     // return res.status(300).send();
  //     console.log('no user ')
  //   } else{
  //     // res.locals.data = data;
  //     // return next();
  //     return cb(null, profile);
  //   }
  // })
  // .catch((err) => {
  //   console.log('ERROR: ', err)
  //   next(err);
  // })
  done(null, profile);
}
));
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:1234');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Credentials', true);
//   next();
// });

// passport.serializeUser(function(user, done) {
//   console.log('what happened')
//   done(null, user);
// });

// passport.deserializeUser(function(user, done) {
//   console.log('what happened2')
//   done(null, user);
// });

app.use(passport.initialize());
// app.use(passport.session());
app.use(bodyParser.json());
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname + '../../../index.html'));
// });

app.get('/login', (req,res) => {
  res.json('hiiiiii');
})
app.get('/appetizers', productController.getAppetizers, (req, res) => {
  res.json(res.locals.info);
});
app.get('/tempura', productController.getTempura, (req, res) => {
  res.json(res.locals.info);
});
app.get('/yakitori', productController.getYakitori, (req, res) => {
  res.json(res.locals.info);
});
app.get('/makimono', productController.getMakimono, (req, res) => {
  res.json(res.locals.info);
});
app.post('/orders', productController.postOrder, (req, res) => {
  res.json(res.locals.data);
})
app.use(express.static(__dirname + '/../../dist'));



app.get('/auth/facebook',passport.authenticate('facebook'));

 
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { session: false}), (req,res)=>{

    // Successful authentication, redirect home.
    console.log('bbbbb')
    console.log(req.user,'reqqqq');

    return res.redirect('/');
    // res.send('auth worked maybe')
  },
);


  

module.exports = app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
