"use strict";
(() => {
var exports = {};
exports.id = 442;
exports.ids = [442];
exports.modules = {

/***/ 5224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Benefit)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Photographed/BenefitHeader.js

function BenefitHeader() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mx-auto text-center mb-16",
        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
            className: "font-semibold text-lg text-primary uppercase mb-4 tracking-widest lg:text-xl",
            children: "Benefit"
        })
    });
};

// EXTERNAL MODULE: ./context/app-context.js
var app_context = __webpack_require__(5049);
;// CONCATENATED MODULE: ./components/Photographed/BenefitBody.js



function BenefitBody() {
    const context = (0,external_react_.useContext)(app_context/* AppContext */.I);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-wrap gap-x-8 gap-y-16 gap xl:gap-x-12 xl:gap-y-20 justify-center",
        children: context.benefits.map((benefit)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full max-w-full md:max-w-xs lg:max-w-sm xl:max-w-lg group",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full h-full flex flex-col items-center bg-[#FFEFE6] relative px-6 py-12 dark:bg-black/20 transition-all ease-out duration-150 group-hover:-translate-y-8 group-hover:shadow-lg group-hover:shadow-dark/20 dark:group-hover:shadow-black/30",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-12 h-12 p-2 absolute bg-primary -top-8 rounded-full text-center font-bold text-3xl text-light md:w-16 md:h-16 md:p-3 md:text-4xl transition-all ease-out duration-100 group-hover:scale-0",
                            children: benefit.id + 1
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "text-xl font-bold text-dark mt-2 md:text-2xl md:mt-4 dark:text-light",
                            children: benefit.content
                        })
                    ]
                })
            }, benefit.id))
    });
};

;// CONCATENATED MODULE: ./components/Photographed/Benefit.js




function Benefit() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "benefit",
        className: "pt-16 pb-28 bg-light dark:bg-dark",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full px-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(BenefitHeader, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(BenefitBody, {})
                ]
            })
        })
    });
};


/***/ }),

/***/ 1667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Featured)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./components/Photographed/FeaturedHeader.js


function FeaturedHeader() {
    const { t  } = (0,external_next_i18next_.useTranslation)("photographed");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "text-center mb-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-3xl font-bold mb-5 md:text-4xl dark:text-light",
                children: t("featured.title")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "w-full text-xl leading-normal md:leading-relaxed md:text-2xl lg:w-5/6 lg:mx-auto dark:text-light",
                children: t("featured.subtitle")
            })
        ]
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./context/app-context.js
var app_context = __webpack_require__(5049);
;// CONCATENATED MODULE: ./components/Photographed/FeaturedBody.js



function FeaturedBody() {
    const context = (0,external_react_.useContext)(app_context/* AppContext */.I);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-wrap gap-y-16 px-4",
        children: context.featured.map((feat)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "md:min-h-[70vh] group",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "h-full rounded-lg flex flex-col justify-center relative overflow-hidden transition-all ease-out duration-300 group-hover:scale-95 group-hover:shadow-xl group-hover:shadow-dark/30 dark:group-hover:shadow-black/30",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `z-[2] w-[90%] p-5 lg:w-1/2 lg:p-10 my-auto ${feat.id % 2 !== 0 ? "text-right ml-auto" : ""} transition-all duration-75 group-hover:w-full`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-3xl md:text-5xl font-bold mb-4 dark:text-light",
                                    children: feat.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "leading-normal text-lg md:text-2xl md:leading-relaxed dark:text-light",
                                    children: feat.content
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `absolute z-[1] ${feat.id % 2 === 0 ? "bg-gradient-to-r" : "bg-gradient-to-l right-0"} from-[#BDF7F1] via-[#BDF7F1] min-h-full w-full lg:w-[75%] dark:from-secondary dark:via-secondary transition-all ease-out duration-300 group-hover:w-full group-hover:bg-[#BDF7F1] dark:group-hover:bg-secondary`
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("picture", {
                            className: "absolute w-full h-full",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                    srcSet: feat.image,
                                    type: "image/webp"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: `absolute object-cover w-[80%] h-full ${feat.id % 2 === 0 ? "right-0" : "left-0"} dark:opacity-70`,
                                    src: feat.image,
                                    alt: feat.title
                                })
                            ]
                        })
                    ]
                })
            }, feat.id))
    });
};

;// CONCATENATED MODULE: ./components/Photographed/Featured.js



function Featured() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "py-16 dark:bg-dark",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(FeaturedHeader, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(FeaturedBody, {})
            ]
        })
    });
};


/***/ }),

/***/ 3575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeroBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6584);
/* harmony import */ var _HeroImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1693);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HeroImage__WEBPACK_IMPORTED_MODULE_2__]);
_HeroImage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Hero() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "hero",
        className: "flex flex-wrap relative min-h-screen items-center bg-light overflow-hidden dark:bg-dark",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeroImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container z-[1]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-wrap text-center justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeroBody__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HeroBody)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7163);
/* harmony import */ var react_scroll_modules__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll_modules__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);




function HeroBody() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("photographed");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex flex-wrap justify-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "w-full font-bold text-light text-4xl mt-1 mb-5 lg:leading-tight lg:text-5xl",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "drop-shadow-md shadow-dark",
                            children: t("hero.title")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "w-full text-2xl drop-shadow-md shadow-dark font-medium text-light mb-8 lg:w-3/5 lg:mb-12 lg:leading-normal lg:text-3xl",
                        children: t("hero.subtitle")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll_modules__WEBPACK_IMPORTED_MODULE_1__.Link, {
                to: "reinforcement",
                spy: true,
                smooth: true,
                className: "cursor-pointer h-12 w-12 text-xl text-light flex border-2 border-light bg-transparent justify-center items-center rounded-full shadow-lg shadow-dark/50 transition-all duration-200 hover:bg-light hover:text-dark animate-bounce",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaArrowDown, {})
            })
        ]
    });
};


/***/ }),

/***/ 1693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HeroImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4165);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _partials_Panorama__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2596);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_partials_Panorama__WEBPACK_IMPORTED_MODULE_4__]);
_partials_Panorama__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function HeroImage() {
    const img = "/img/virtual-reality/photographed/photographed.webp";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "absolute object-cover min-h-screen w-full h-full opacity-90 dark:opacity-60 hover:cursor-grab active:cursor-grabbing",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.Canvas, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__.OrbitControls, {
                    enableZoom: false,
                    autoRotate: true,
                    rotateSpeed: -0.5,
                    autoRotateSpeed: 1,
                    target: [
                        0,
                        0,
                        0
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
                    fallback: null,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_Panorama__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        img: img
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Reinforcement)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./context/app-context.js
var app_context = __webpack_require__(5049);
;// CONCATENATED MODULE: ./components/Photographed/ReinforcementBody.js




function ReinforcementBody() {
    const context = (0,external_react_.useContext)(app_context/* AppContext */.I);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-wrap gap-8 justify-center mt-10",
        children: context.reinforcement.map((reinforce)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full md:w-[calc(50%-2rem)] group",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full h-full flex flex-col bg-light/20 rounded-md transition-all ease-out duration-150 group-hover:scale-105 group-hover:bg-secondary/50 group-hover:shadow-xl group-hover:shadow-dark/20",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "p-6 items-center text-light",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-2xl inline-block md:mb-3 md:text-3xl",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaQuoteLeft, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-2xl font-semibold mb-2 md:text-3xl",
                                children: reinforce.heading
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-lg leading-relaxed md:text-xl",
                                children: reinforce.text
                            })
                        ]
                    })
                })
            }, reinforce.id))
    });
};

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./components/Photographed/ReinforcementHeader.js


function ReinforcementHeader() {
    const { t  } = (0,external_next_i18next_.useTranslation)("photographed");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-wrap mt-10 justify-center md:gap-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "w-full py-2 text-light text-3xl font-bold md:w-[calc(45%-2rem)] md:text-5xl lg:text-6xl lg:leading-tight",
                children: t("reinforcement.title")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "w-full py-2 text-light text-xl md:w-[calc(55%-2rem)] md:text-2xl md:leading-relaxed lg:text-3xl lg:leading-loose",
                children: t("reinforcement.subtitle")
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Photographed/Reinforcement.js



function Reinforcement() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "reinforcement",
        className: "pt-16 pb-28 bg-primary",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ReinforcementHeader, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(ReinforcementBody, {})
            ]
        })
    });
};


/***/ }),

/***/ 2596:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Panorama)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2949);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_1__]);
three__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Panorama({ img  }) {
    const texture = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useLoader)(three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader, img);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("mesh", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sphereBufferGeometry", {
                attach: "geometry",
                args: [
                    500,
                    60,
                    40
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meshBasicMaterial", {
                attach: "material",
                map: texture,
                side: three__WEBPACK_IMPORTED_MODULE_1__.BackSide
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ml": () => (/* binding */ ctaDataEn),
/* harmony export */   "b3": () => (/* binding */ reinforcementQuoteEn),
/* harmony export */   "q": () => (/* binding */ benefitsDataEn),
/* harmony export */   "zH": () => (/* binding */ featuredDataEn)
/* harmony export */ });
const reinforcementQuoteEn = ()=>[
        {
            id: 0,
            heading: "Research from Market Research Future (MRF)",
            text: "reveals that by 2025, the virtual reality industry will increase to 73.7% of CAGR."
        },
        {
            id: 1,
            heading: "Virtual Reality helps increase Sales Potential",
            text: "With a virtual reality tour, you can implement a “try before you buy” marketing strategy. Take your potential customers around virtually. Show the best spot you have. An engaging sensory experience triggers increased sales potential."
        }, 
    ];
const benefitsDataEn = ()=>[
        {
            id: 0,
            content: "Make your business look more real in a virtual tour."
        },
        {
            id: 1,
            content: "Tell your business services and facilities more informatively."
        },
        {
            id: 2,
            content: "24-hour access makes it easy for your visitors to find the best place to vacation with just a 360 visual."
        },
        {
            id: 3,
            content: "Show the best spots of your business unlimited in virtual environment from live image capture."
        }, 
    ];
const featuredDataEn = ()=>[
        {
            id: 0,
            image: "/img/virtual-reality/photographed/hotel.webp",
            title: "Hotel/Villa",
            content: "Show a comfortable stay in the best rooms. Virtual Tour 360 shows the best details and spots that normal photos cannot. Describe your best facilities and services through an environment created from live image capture."
        },
        {
            id: 1,
            image: "/img/virtual-reality/photographed/resto.webp",
            title: "Restaurant/Cafe",
            content: "Give an extraordinary experience to your visitors not only for delicious food but a comfortable and instagramable place through a virtual tour. Tell the best spots of your restaurant/cafe in a realistic virtual environment."
        },
        {
            id: 2,
            image: "/img/virtual-reality/photographed/toko.webp",
            title: "Retail Store",
            content: "Give the virtual shopping experience through 360 photographs of your retail store with real experience. Show the completeness of your product collection anytime and anywhere. Make your retail store promotion more modern than others."
        },
        {
            id: 3,
            image: "/img/virtual-reality/photographed/wisata.webp",
            title: "Tourist Attraction",
            content: "Visualize more real the beauty of the tourist attractions that you have. Attractive promotions will bring in many visitors from anywhere. Help your visitors find their favorite photo spots through a virtual tour."
        }, 
    ];
const ctaDataEn = ()=>[
        {
            id: 0,
            title: "Ready to transform your business with us?",
            text: "",
            button: "Get it Now"
        }, 
    ];



/***/ }),

/***/ 4332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CX": () => (/* binding */ reinforcementQuote),
/* harmony export */   "RA": () => (/* binding */ ctaData),
/* harmony export */   "mU": () => (/* binding */ benefitsData),
/* harmony export */   "u5": () => (/* binding */ featuredData)
/* harmony export */ });
const reinforcementQuote = ()=>[
        {
            id: 0,
            heading: "Menurut riset dari Market Research Future (MRF)",
            text: "Hingga tahun 2025 memperkirakan industri virtual reality ini akan meningkat hingga 73.7% dari CAGR."
        },
        {
            id: 1,
            heading: "Virtual Reality Membantu Meningkatkan Potensi Penjualan",
            text: "Dengan virtual reality tour, Anda bisa menerapkan strategi pemasaran “try before you buy”.  Ajak calon customermu berkeliling secara virtual. Tunjukkan spot terbaik yang Anda miliki. Pengalaman sensorik yang menarik memicu potensi penjualan semakin naik."
        }, 
    ];
const benefitsData = ()=>[
        {
            id: 0,
            content: "Buat bisnismu terlihat lebih nyata dalam sebuah virtual tour."
        },
        {
            id: 1,
            content: "Beritahu pelayanan dan fasilitas yang dimiliki bisnismu dengan lebih informatif."
        },
        {
            id: 2,
            content: "Akses 24 jam memudahkan pengunjungmu menemukan tempat terbaik untuk berlibur hanya melalui sebuah visual 360."
        },
        {
            id: 3,
            content: "Tunjukkan spot terbaik dari bisnismu secara tak terbatas pada lingkungan virtual dari tangkapan gambar secara langsung."
        }, 
    ];
const featuredData = ()=>[
        {
            id: 0,
            image: "/img/virtual-reality/photographed/hotel.webp",
            title: "Hotel/Villa",
            content: "Tunjukkan kenyamanan menginap dari kamar terbaik. Virtual Tour 360 memungkinkan untuk menunjukkan detail dan spot terbaik yang tak bisa dilakukan oleh foto biasa. Jelaskan fasilitas serta pelayanan terbaikmu melalui lingkungan yang dibuat dari tangkapan gambar secara langsung."
        },
        {
            id: 1,
            image: "/img/virtual-reality/photographed/resto.webp",
            title: "Resto/Cafe",
            content: "Berikan pengalaman yang luar biasa kepada pengunjungmu tak hanya untuk makanan yang lezat tapi tempat yang nyaman dan instagramable melalui virtual tour. Ceritakan spot terbaik dari resto/caffemu dalam lingkungan virtual yang realistis."
        },
        {
            id: 2,
            image: "/img/virtual-reality/photographed/toko.webp",
            title: "Toko Retail",
            content: "Berikan pengalaman belanja melalui 360 photographed dari toko retailmu lebih nyata. Tunjukkan kelengkapan koleksi produkmu kapan saja dan di mana saja. Jadikan promosi toko retailmu lebih modern dari yang lain."
        },
        {
            id: 3,
            image: "/img/virtual-reality/photographed/wisata.webp",
            title: "Tempat Wisata",
            content: "Visualisasikan dengan nyata keindahan tempat wisata yang kamu miliki. Promosi yang menarik akan mendatangkan banyak pengunjung dari mana saja. Bantulah pengunjungmu menemukan spot foto favoritnya melalui sebuah virtual tour."
        }, 
    ];
const ctaData = ()=>[
        {
            id: 0,
            title: "Siap mengubah bisnis Anda dengan kami?",
            text: "",
            button: "Dapatkan Sekarang"
        }, 
    ];



/***/ }),

/***/ 6334:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Photographed),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Photographed_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3575);
/* harmony import */ var _components_Photographed_Reinforcement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2094);
/* harmony import */ var _components_Photographed_Benefit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5224);
/* harmony import */ var _components_partials_CTA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6648);
/* harmony import */ var _components_Photographed_Featured__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1667);
/* harmony import */ var _api_data_id_PhotographedData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4332);
/* harmony import */ var _api_data_en_PhotographedData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2651);
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5049);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2712);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Photographed_Hero__WEBPACK_IMPORTED_MODULE_3__, _components_Layout__WEBPACK_IMPORTED_MODULE_9__]);
([_components_Photographed_Hero__WEBPACK_IMPORTED_MODULE_3__, _components_Layout__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function Photographed() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    let reinforcement;
    let benefits;
    let featured;
    let cta;
    if (router.locale === "id") {
        reinforcement = (0,_api_data_id_PhotographedData__WEBPACK_IMPORTED_MODULE_10__/* .reinforcementQuote */ .CX)();
        benefits = (0,_api_data_id_PhotographedData__WEBPACK_IMPORTED_MODULE_10__/* .benefitsData */ .mU)();
        featured = (0,_api_data_id_PhotographedData__WEBPACK_IMPORTED_MODULE_10__/* .featuredData */ .u5)();
        cta = (0,_api_data_id_PhotographedData__WEBPACK_IMPORTED_MODULE_10__/* .ctaData */ .RA)();
    } else {
        reinforcement = (0,_api_data_en_PhotographedData__WEBPACK_IMPORTED_MODULE_11__/* .reinforcementQuoteEn */ .b3)();
        benefits = (0,_api_data_en_PhotographedData__WEBPACK_IMPORTED_MODULE_11__/* .benefitsDataEn */ .q)();
        featured = (0,_api_data_en_PhotographedData__WEBPACK_IMPORTED_MODULE_11__/* .featuredDataEn */ .zH)();
        cta = (0,_api_data_en_PhotographedData__WEBPACK_IMPORTED_MODULE_11__/* .ctaDataEn */ .Ml)();
    }
    const appContextValue = {
        reinforcement,
        benefits,
        featured
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        title: "Photographed - Virtual Reality Digidaxa",
        description: "Hadirkan Pengalaman Nyata Virtual Tour dengan Teknologi Imersif.",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Photographed_Hero__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context_app_context__WEBPACK_IMPORTED_MODULE_8__/* .AppContext.Provider */ .I.Provider, {
                value: appContextValue,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Photographed_Reinforcement__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Photographed_Benefit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Photographed_Featured__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_CTA__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                cta: cta
            })
        ]
    });
};
const getStaticProps = async ({ locale  })=>({
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__.serverSideTranslations)(locale, [
                "common",
                "photographed"
            ])
        }
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4165:
/***/ ((module) => {

module.exports = require("@react-three/drei");

/***/ }),

/***/ 3784:
/***/ ((module) => {

module.exports = require("@react-three/fiber");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("react-scroll/modules");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4753:
/***/ ((module) => {

module.exports = import("auto-bind/react");;

/***/ }),

/***/ 2949:
/***/ ((module) => {

module.exports = import("three");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,142,213], () => (__webpack_exec__(6334)));
module.exports = __webpack_exports__;

})();