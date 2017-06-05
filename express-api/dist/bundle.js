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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_vechicle_route__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_user_route___ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(2);







//application initialization
var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

//enables POST, PUT body data to beretreived as JSON
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());

app.set('port', 3000);

__WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.Promise = global.Promise;
//connect to mongoDB instance created on mongoLabs
__WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.connect('mongodb://root:root@ds151141.mlab.com:51141/osakamotorsdb');

//skipauthentication temp
// app.use('/vechicle', (req, res) => {
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

    // let token = req.headers['x-access-token'];
    // if (!token) {
    //     res.status(401).json({ message: "Not Authorized" });
    // } else {
    //     jwt.verify(token, CONFIG.secretKey, (err, decoded) => {
    //         if (err) {
    //             res.status(401).json({ message: "Invalid Token" });
    //         } else {
    //             req.decoded = decoded;
    //             next();
    //         }
    //     });
    // }

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

// app.get('/', (req, res) => {
//     // res.send('Hello World !!!');

//     //Sending JSON Response
//     res.json({ 'message': 'Hello World' });
// });


app.use('/vechicle', __WEBPACK_IMPORTED_MODULE_2__routes_vechicle_route__["a" /* VECHICLE_ROUTES */]);

app.use('/user', __WEBPACK_IMPORTED_MODULE_3__routes_user_route___["a" /* USER_ROUTES */]);

//to run the server
app.listen(app.get('port'), function () {
    //EC6 syntax
    // console.log(`Node Server is running on port EC6 : ${app.get('port')}`);
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VECHICLE_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_vechicle_model__ = __webpack_require__(6);



//
var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

//get all vechicle 
router.get('/', function (req, res) {

    __WEBPACK_IMPORTED_MODULE_1__models_vechicle_model__["a" /* Vechicle */].find(function (err, vechicles) {
        if (err) res.send(err);

        res.json(vechicles);

        // res.json({ 'data': vechicles, 'decoded': req.decoded._doc });
    });
});

//add vechicle 
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
});

//delete vechicle by ID
router.delete('/:id', function (req, res) {
    console.log('Vechicle ID ---> ' + req.params.id);

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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map