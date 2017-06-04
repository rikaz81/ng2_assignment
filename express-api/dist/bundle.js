/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
var CONFIG = { secretKey: 'ramo' };

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_vechicle_route__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_wizard_route__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_user_route___ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(2);
// console.log("Hello World");
// console.log("Hot Re-Load Enabled...456!");









//application initialization
var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

//enables POST, PUT body data to beretreived as JSON
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());

app.set('port', 3000);

__WEBPACK_IMPORTED_MODULE_5_mongoose___default.a.Promise = global.Promise;
//connect to mongoDB instance created on mongoLabs
__WEBPACK_IMPORTED_MODULE_5_mongoose___default.a.connect('mongodb://root:root@ds133231.mlab.com:33231/hogwarts');

//tells express where your view will be
app.set('views', 'src/views');
app.set('view engine', 'pug');
//plug demo
app.get('/', function (req, res) {
    res.render('hello');
});

//middleware ex: implementation of authentication
// app.use('/wizard', (req, res, next) => {
//     console.log("something happened");
//     let token = req.headers['x-access-token'];
//     if (!token) {
//         res.status(401).json({ message: "Not Authorized" });
//     } else {
//         jwt.verify(token, CONFIG.secretKey, (err, decoded) => {
//             if (err) {
//                 res.status(401).json({ message: "Invalid Token" });
//             } else {
//                 req.decoded = decoded;
//                 next();
//             }
//         });
//     }
// });

//skipauthentication temp
// app.use('/wizard', (req, res) => {
//     console.log("something happened");
//     let token = req.headers['x-access-token'];
//     // next();
//     // if (!token) {
//     //     res.status(401).json({ message: "Not Authorized" });
//     // } else {
//     //     jwt.verify(token, CONFIG.secretKey, (err, decoded) => {
//     //         if (err) {
//     //             res.status(401).json({ message: "Invalid Token" });
//     //         } else {
//     //             req.decoded = decoded;
//     //             next();
//     //         }
//     //     });
//     // }
// });


app.use('/vechicle', function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/user', function (req, res, next) {
    console.log("access user route");
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', function (req, res) {
    // res.send('Hello World !!!');

    //Sending JSON Response
    res.json({ 'message': 'Hello World' });
});

// app.post('/example-post', (req, res) => {

//     res.json({
//         message: 'Post Successful',
//         payload: req.body,
//         headers: req.headers
//     });
// });

app.use('/vechicle', __WEBPACK_IMPORTED_MODULE_2__routes_vechicle_route__["a" /* VECHICLE_ROUTES */]);

app.use('/wizard', __WEBPACK_IMPORTED_MODULE_3__routes_wizard_route__["a" /* WIZARD_ROUTES */]);

//localhost:3000/user/register
app.use('/user', __WEBPACK_IMPORTED_MODULE_4__routes_user_route___["a" /* USER_ROUTES */]);

//to run the server
app.listen(app.get('port'), function () {
    //EC6 syntax
    console.log('Node Server is running on port EC6 : ' + app.get('port'));

    console.log('Node Server is running on port : ' + app.get('port'));
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

var user = new Schema({
    name: String,
    password: String,
    admin: Boolean
});

var User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', user);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vechicle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

var vechicle = new Schema({
    brand: String,
    vechicleModel: String,
    transmission: String,
    vtype: String,
    condition: String,
    modelYear: String,
    mileAge: String,
    price: String,
    priceNegotiable: String,
    fuelTypes: String,
    contactName: String,
    contactPlace: String,
    contactPhone: String,
    description: String,
    imgUrl: String
});

var Vechicle = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Vechicle', vechicle);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wizard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

var wizard = new Schema({
    name: String,
    house: String,
    pet: String
});

var Wizard = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Wizard', wizard);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model___ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(2);





//
var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

// //get all wizards
router.post('/authenticate', function (req, res) {

    console.log("Inside authenyication", req.body);
    // ${req.params.id}

    __WEBPACK_IMPORTED_MODULE_1__models_user_model___["a" /* User */].findOne({ name: req.body.name }, function (err, user) {
        if (err) res.send(err);

        if (!user) {
            res.status(401).json({ message: "User doesn't Exist" });
        } else {
            // req.query.password
            if (user.password === req.body.password) {
                var token = __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.sign(user, __WEBPACK_IMPORTED_MODULE_3__config__["a" /* CONFIG */].secretKey, {
                    expiresIn: 1440 //expire in 24hrs
                });
                // console.log(token);
                res.json({ message: "Succesfully logged In.....", status: true, token: token, id: user.name });
            } else {
                res.status(401).json({ message: "Invalid Password", status: false });
            }
        }
    });
});

//register user
router.post('/register', function (req, res) {

    console.log('inside register ', req.body);
    var user = new __WEBPACK_IMPORTED_MODULE_1__models_user_model___["a" /* User */]({
        name: req.body.name,
        password: req.body.password,
        admin: req.body.admin
    });

    user.save(function (err, user) {
        if (err) res.send(err);

        res.json({
            message: 'User Registered successfully!',
            data: user
        });
    });
});

var USER_ROUTES = router;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VECHICLE_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_vechicle_model__ = __webpack_require__(6);



//
var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

//get all wizards
router.get('/', function (req, res) {
    // res.send('All Wizards');

    __WEBPACK_IMPORTED_MODULE_1__models_vechicle_model__["a" /* Vechicle */].find(function (err, vechicles) {
        if (err) res.send(err);

        res.json(vechicles);

        // res.json({ 'data': vechicles, 'decoded': req.decoded._doc });
    });
});

//add wizard
router.post('/', function (req, res) {
    console.log('inside add vechicle', req.body);
    var vechicle = new __WEBPACK_IMPORTED_MODULE_1__models_vechicle_model__["a" /* Vechicle */]();
    vechicle.brand = req.body.brand;
    vechicle.vechicleModel = req.body.vechicleModel;
    vechicle.transmission = req.body.transmission;
    vechicle.vtype = req.body.vtype;
    vechicle.condition = req.body.condition;
    vechicle.modelYear = req.body.modelYear;
    vechicle.mileAge = req.body.mileAge;
    vechicle.price = req.body.price;
    vechicle.priceNegotiable = req.body.priceNegotiable;
    vechicle.contactName = req.body.contactName;
    vechicle.contactPlace = req.body.contactPlace;
    vechicle.contactPhone = req.body.contactPhone;
    vechicle.description = req.body.description;
    vechicle.imgUrl = req.body.imgUrl;

    // vechicle.imgUrl = 'http://www.copyright-free-photos.org.uk/cars/mini-cooper.jpg';

    vechicle.save(function (err, data) {
        if (err) res.send(err);

        res.json({
            message: 'Vechicle added Successfully!',
            data: data
        });
    });

    // res.send('Add Wizards');
});

//delete wizard
router.delete('/:id', function (req, res) {
    console.log('Vechicle Wizard of ID ---> ' + req.params.id);

    __WEBPACK_IMPORTED_MODULE_1__models_vechicle_model__["a" /* Vechicle */].remove({ _id: req.params.id }, function (err, data) {
        if (err) res.send(err);

        console.log('Vechicle Deleted Successfully!');
        res.json({
            message: 'Vechicle Deleted Successfully!',
            data: data
        });
    });
});

//view vechicle by ID
router.get('/:id', function (req, res) {
    // res.send(`View Wizard of ID ---> ${req.params.id}`);
    console.log('Vechicle By Id ---> ' + req.params.id);
    __WEBPACK_IMPORTED_MODULE_1__models_vechicle_model__["a" /* Vechicle */].findById('' + req.params.id, function (err, vechicle) {
        if (err) {
            // res.send(err);
            console.log(err);
        }

        res.json(vechicle);
    });
});

//edit Vechicle
router.put('/:id', function (req, res) {

    console.log('Update Vechicle Request ', req.params.id, req.body);
    __WEBPACK_IMPORTED_MODULE_1__models_vechicle_model__["a" /* Vechicle */].findById(req.params.id, function (err, vechicle) {
        if (err) res.send(err);

        vechicle.brand = req.body.brand;
        vechicle.vechicleModel = req.body.vechicleModel;
        vechicle.transmission = req.body.transmission;
        vechicle.vtype = req.body.vtype;
        vechicle.condition = req.body.condition;
        vechicle.modelYear = req.body.modelYear;
        vechicle.mileAge = req.body.mileAge;
        vechicle.price = req.body.price;
        vechicle.priceNegotiable = req.body.priceNegotiable;
        vechicle.contactName = req.body.contactName;
        vechicle.contactPlace = req.body.contactPlace;
        vechicle.contactPhone = req.body.contactPhone;
        vechicle.description = req.body.description;
        vechicle.imgUrl = req.body.imgUrl;

        vechicle.save(function (err, data) {
            if (err) res.send(err);

            res.json({
                message: 'Vechicle Updated Successfully!',
                data: data
            });
        });
    });
});

var VECHICLE_ROUTES = router;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WIZARD_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_wizard_model__ = __webpack_require__(7);



//
var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

//get all wizards
router.get('/', function (req, res) {
    // res.send('All Wizards');

    __WEBPACK_IMPORTED_MODULE_1__models_wizard_model__["a" /* Wizard */].find(function (err, wizards) {
        if (err) res.send(err);

        res.json(wizards);

        // res.json({ 'data': wizards, 'decoded': req.decoded._doc });
    });
});

//add wizard
router.post('/', function (req, res) {

    var wizard = new __WEBPACK_IMPORTED_MODULE_1__models_wizard_model__["a" /* Wizard */]();
    wizard.name = req.body.name;
    wizard.house = req.body.house;
    wizard.pet = req.body.pet;

    wizard.save(function (err, data) {
        if (err) res.send(err);

        res.json({
            message: 'Wizard added Successfully!',
            data: data
        });
    });

    // res.send('Add Wizards');
});

//view wizard by ID
router.get('/:id', function (req, res) {
    // res.send(`View Wizard of ID ---> ${req.params.id}`);

    __WEBPACK_IMPORTED_MODULE_1__models_wizard_model__["a" /* Wizard */].findById(req.params.id, function (err, wizard) {
        if (err) res.send(err);

        res.json(wizard);
    });
});

//edit wizard
router.put('/:id', function (req, res) {
    // res.send(`Update Wizard of ID ---> ${req.params.id}`);

    __WEBPACK_IMPORTED_MODULE_1__models_wizard_model__["a" /* Wizard */].findById(req.params.id, function (err, wizard) {
        if (err) res.send(err);

        wizard.name = req.body.name;
        wizard.house = req.body.house;
        wizard.pet = req.body.pet;

        wizard.save(function (err, data) {
            if (err) res.send(err);

            res.json({
                message: 'Wizard Updated Successfully!',
                data: data
            });
        });
    });
});

//delete wizard
router.delete('/:id', function (req, res) {
    // res.send(`Delete Wizard of ID ---> ${req.params.id}`);

    __WEBPACK_IMPORTED_MODULE_1__models_wizard_model__["a" /* Wizard */].remove({ _id: req.params.id }, function (err, data) {
        if (err) res.send(err);

        res.json({
            message: 'Wizard Deleted Successfully!',
            data: data
        });
    });
});

//add list of wizards
router.post('/addall', function (req, res) {
    console.log('req.body ', req.body.wizards);
    // const res_data = JSON.parse(req.body);
    // console.log(res_data);
    // array:Object=req.body;
    // let keys = req.body.json;
    // console.log(keys.length);
    // console.log(keys);
    for (var i in req.body.wizards) {
        console.log(i);
        var jj = req.body.wizards[i];
        console.log(req.body.wizards[i]);
        console.log(jj);
        var wizard = new __WEBPACK_IMPORTED_MODULE_1__models_wizard_model__["a" /* Wizard */]();
        wizard.name = jj.name;
        wizard.house = jj.house;
        wizard.pet = jj.pet;

        wizard.save(function (err, data) {
            if (err) res.send(err);

            // res.json({
            //     message: 'All Wizards added Successfully!',
            //     data: data
            // });
        });
    }

    // res.send('Add list of Wizards');
});

var WIZARD_ROUTES = router;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map