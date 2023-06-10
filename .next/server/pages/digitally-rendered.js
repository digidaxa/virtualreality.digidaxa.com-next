"use strict";
(() => {
var exports = {};
exports.id = 11;
exports.ids = [11];
exports.modules = {

/***/ 5937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Benefit)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Digitally-Rendered/BenefitHeader.js

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
;// CONCATENATED MODULE: ./components/Digitally-Rendered/BenefitBody.js



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

;// CONCATENATED MODULE: ./components/Digitally-Rendered/Benefit.js




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

/***/ 5162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Comparison)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./components/Digitally-Rendered/ComparisonHeader.js


function ComparisonHeader() {
    const { t  } = (0,external_next_i18next_.useTranslation)("digitally-rendered");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mx-auto text-center mb-14",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "font-semibold text-lg text-primary uppercase mb-4 tracking-widest lg:text-xl",
                children: "Comparison"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "font-semibold text-dark text-2xl mb-2 sm:text-3xl lg:text-4xl dark:text-light",
                children: t("comparison.title")
            })
        ]
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./context/app-context.js
var app_context = __webpack_require__(5049);
;// CONCATENATED MODULE: ./components/Digitally-Rendered/ComparisonBody.js



function ComparisonBody() {
    const context = (0,external_react_.useContext)(app_context/* AppContext */.I);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-wrap gap-10 lg:gap-16 justify-center",
        children: context.comparison.map((compare)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `pt-10 pb-8 px-8 rounded-md shadow-2xl shadow-dark/30 w-full md:max-w-lg lg:max-w-md hover:translate-y-2 hover:shadow-2xl hover:shadow-primary/70 transition-all duration-100 ease-in-out dark:hover:shadow-primary/50 ${compare.id === 1 ? "bg-light dark:bg-light/10" : "bg-primary"} dark:shadow-black`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: `text-3xl font-semibold text-center ${compare.id === 1 ? "text-dark dark:text-light" : "text-light"}`,
                        children: compare.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "mt-6",
                        children: compare.comparisons.map((comparison)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: `text-lg mb-2 flex gap-2 items-center ${compare.id === 1 ? "text-dark dark:text-light" : "text-light"}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: `${compare.id === 1 ? "text-primary" : "text-light"}`,
                                        children: compare.icon
                                    }),
                                    comparison.text
                                ]
                            }, comparison.id))
                    })
                ]
            }, compare.id))
    });
};

;// CONCATENATED MODULE: ./components/Digitally-Rendered/Comparison.js



function Comparison() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "comparison",
        className: "pt-16 pb-28 bg-[#FFEFE6] dark:bg-black",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ComparisonHeader, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(ComparisonBody, {})
            ]
        })
    });
};


/***/ }),

/***/ 1731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Featured)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./context/app-context.js
var app_context = __webpack_require__(5049);
;// CONCATENATED MODULE: ./components/Digitally-Rendered/FeaturedBody.js



function FeaturedBody() {
    const context = (0,external_react_.useContext)(app_context/* AppContext */.I);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-wrap gap-y-32 md:gap-y-16 lg:gap-y-24 xl:gap-y-36 px-4",
        children: context.featured.map((feat)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `bg-[#FFEFE6] relative rounded-md flex justify-center items-center md:min-h-[160px] lg:min-h-[220px] xl:min-h-[344px] ${feat.id % 2 !== 0 ? "md:text-right" : ""} dark:bg-black/30 transition-all ease-out duration-200 hover:md:min-h-[180px] hover:lg:min-h-[260px] group hover:xl:min-h-[400px] hover:-translate-y-10`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${feat.id % 2 === 0 ? "flex bg-secondary p-4 absolute items-center mx-auto rounded -top-20 w-[150px] md:rounded-md md:left-5 md:-top-5 md:w-[180px] md:h-[180px] lg:rounded-lg lg:px-5 lg:left-10 lg:-top-10 lg:w-[260px] lg:h-[260px] xl:w-[400px] xl:h-[400px] xl:left-14 xl:-top-14 group-hover:left-0" : "flex bg-secondary p-4 absolute items-center mx-auto rounded -top-20 w-[150px] md:rounded-md md:right-5 md:-top-5 md:w-[180px] md:h-[180px] lg:rounded-lg lg:px-5 lg:right-10 lg:-top-10 lg:w-[260px] lg:h-[260px] xl:w-[400px] xl:h-[400px] xl:right-14 xl:-top-14 group-hover:right-0"} transition-all ease-in-out duration-200 group-hover:-top-5 group-hover:md:top-0 group-hover:w-full group-hover:md:w-[180px] group-hover:lg:w-[260px] group-hover:xl:w-[400px] group-hover:justify-center`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: `font-bold text-center text-dark text-xl md:text-2xl lg:text-4xl xl:text-6xl ${feat.id % 2 === 0 ? "md:text-left" : "md:text-right"}`,
                            children: feat.title
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `pt-[4.5rem] pb-5 w-full px-5 md:py-0 md:w-[calc(100%-220px)] lg:w-[calc(100%-330px)] xl:w-[calc(100%-500px)] ${feat.id % 2 === 0 ? "ml-auto md:pl-0 md:pr-10" : "mr-auto md:pr-0 md:pl-10"}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `text-dark text-center md:text-left md:text-sm lg:text-lg lg:leading-normal xl:text-2xl xl:leading-relaxed ${feat.id % 2 !== 0 ? "md:text-right" : ""} dark:text-light`,
                            children: feat.content
                        })
                    })
                ]
            }, feat.id))
    });
};

;// CONCATENATED MODULE: ./components/Digitally-Rendered/Featured.js


function Featured() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "py-16 bg-light dark:bg-dark",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx(FeaturedBody, {})
        })
    });
};


/***/ }),

/***/ 570:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeroBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3305);
/* harmony import */ var _HeroImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8368);
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

/***/ 3305:
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
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("digitally-rendered");
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
                to: "benefit",
                spy: true,
                smooth: true,
                className: "cursor-pointer h-12 w-12 text-xl text-light flex border-2 border-light bg-transparent justify-center items-center rounded-full shadow-lg shadow-dark/50 transition-all duration-200 hover:bg-light hover:text-dark animate-bounce",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaArrowDown, {})
            })
        ]
    });
};


/***/ }),

/***/ 8368:
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
    const img = "/img/virtual-reality/digitally-rendered/digitally-rendered.webp";
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

/***/ 3726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BW": () => (/* binding */ comparisonDataEn),
/* harmony export */   "Ml": () => (/* binding */ ctaDataEn),
/* harmony export */   "q": () => (/* binding */ benefitsDataEn),
/* harmony export */   "zH": () => (/* binding */ featuredDataEn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);


const benefitsDataEn = ()=>[
        {
            id: 0,
            content: "Introduce the products in your retail store in a more detailed and informative way."
        },
        {
            id: 1,
            content: "More cost-effective than building a physical store."
        },
        {
            id: 2,
            content: "24-hour access for shoppers to find their favorite products in your retail store anytime and anywhere."
        },
        {
            id: 3,
            content: "Greater reach."
        },
        {
            id: 4,
            content: "Get more sales profit than before."
        }, 
    ];
const featuredDataEn = ()=>[
        {
            id: 0,
            title: "Make Your Virtual Retail Store Limitless",
            content: "Give customers a virtual shopping experience that is different and more real. Present your product collection with interactive 3D models. With one touch, customers will get complete information about the desired product. Customers will be free to choose because the products available are more exhaustive than in physical stores. This technology will bring in potential customers who are interested in the products in your retail store."
        },
        {
            id: 1,
            title: "More Cost and Time Saving",
            content: "Building a digital retail store is more cost-effective. It also saves time customers will get their favorite products faster from your digital retail store because it doesn't take long to make like a physical shop. Less cost to build a shop and more profit earned."
        },
        {
            id: 2,
            title: "Memorable Virtual Shopping Experience",
            content: "Help your customers discover products in a 360 virtual store environment with interactive media to make your virtual store memorable. A simple and easy way of shopping makes customers come back to visit your store and buy your products."
        }, 
    ];
const comparisonDataEn = ()=>[
        {
            id: 0,
            title: "Digital Stores",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaCheckCircle, {}),
            comparisons: [
                {
                    id: 0,
                    text: "More cost-effective manufacture."
                },
                {
                    id: 1,
                    text: "Accessed it anywhere."
                },
                {
                    id: 2,
                    text: "Require fewer employees."
                },
                {
                    id: 3,
                    text: "Accessed it 24 hours."
                },
                {
                    id: 4,
                    text: "Can make purchases anytime."
                },
                {
                    id: 5,
                    text: "No need to rent a physical place."
                },
                {
                    id: 6,
                    text: "More complete products because there are no limited places."
                },
                {
                    id: 7,
                    text: "Wider market reach."
                },
                {
                    id: 8,
                    text: "No maintenance fee required."
                },
                {
                    id: 9,
                    text: "It doesn't take long to make."
                }, 
            ]
        },
        {
            id: 1,
            title: "Physical Stores",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaTimesCircle, {}),
            comparisons: [
                {
                    id: 0,
                    text: "More manufacturing cost."
                },
                {
                    id: 1,
                    text: "Limited to only one region."
                },
                {
                    id: 2,
                    text: "Need more employees."
                },
                {
                    id: 3,
                    text: "Limited operating hours."
                },
                {
                    id: 4,
                    text: "Only when the shop is open."
                },
                {
                    id: 5,
                    text: "Need to rent physical space."
                },
                {
                    id: 6,
                    text: "Fewer products due to limited space."
                },
                {
                    id: 7,
                    text: "Narrower market reach."
                },
                {
                    id: 8,
                    text: "Requires a lot of maintenance costs."
                },
                {
                    id: 9,
                    text: "It takes more time to make."
                }, 
            ]
        }, 
    ];
const ctaDataEn = ()=>[
        {
            id: 0,
            title: "Change Your Strategy Now!",
            text: "Fill your digital store with highly realistic and more complete 3D products than a physical store. Promote your retail store in a more modern and interactive way. 360 Digitally Rendered is the best medium to introduce your retail store to more extensive.",
            button: "Start Now"
        }, 
    ];



/***/ }),

/***/ 8292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$f": () => (/* binding */ comparisonData),
/* harmony export */   "RA": () => (/* binding */ ctaData),
/* harmony export */   "mU": () => (/* binding */ benefitsData),
/* harmony export */   "u5": () => (/* binding */ featuredData)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);


const benefitsData = ()=>[
        {
            id: 0,
            content: "Kenalkan produk di toko ritelmu lebih detail dan informatif."
        },
        {
            id: 1,
            content: "Lebih hemat biaya daripada membangun toko fisik."
        },
        {
            id: 2,
            content: "Akses 24 jam untuk pembeli menemukan produk favoritnya di toko ritelmu kapan saja dan di mana saja."
        },
        {
            id: 3,
            content: "Jangkauan yang lebih besar."
        },
        {
            id: 4,
            content: "Dapatkan keuntungan penjualan yang lebih besar dari sebelumnya."
        }, 
    ];
const featuredData = ()=>[
        {
            id: 0,
            title: "Jadikan Toko Ritel Virtualmu Tanpa Batas",
            content: "Berikan pelanggan pengalaman belanja secara virtual yang berbeda dan lebih nyata. Hadirkan koleksi produkmu dengan model 3D yang interaktif. Hanya sekali klik pelanggan akan mendapatkan informasi lengkap dari produk yang diinginkan. Pelanggan bisa leluasa memilih karena produk yang tersedia lebih lengkap daripada di toko fisik. Teknologi ini akan mendatangkan pelanggan potensial yang benar-benar tertarik dengan produk di toko ritelmu."
        },
        {
            id: 1,
            title: "Lebih Hemat Biaya dan Waktu",
            content: "Membangun toko ritel digital sudah pasti lebih hemat biaya. Selain itu juga hemat waktu, pelanggan akan lebih cepat mendapatkan produk favorit dari toko ritel digital milikmu karena pembuatannya yang tidak selama membangun toko fisik. Lebih sedikit biaya untuk membangun toko dan lebih banyak keuntungan yang didapatkan."
        },
        {
            id: 2,
            title: "Pengalaman Belanja Virtual yang Memorable",
            content: "Bantu pelangganmu menemukan produk di lingkungan 360 toko virtual dengan media yang interaktif menjadikan toko virtualmu mudah diingat. Cara belanja yang simple dan mudah membuat pelanggan kembali untuk mengunjungi toko dan membeli produkmu."
        }, 
    ];
const comparisonData = ()=>[
        {
            id: 0,
            title: "Toko Digital",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaCheckCircle, {}),
            comparisons: [
                {
                    id: 0,
                    text: "Lebih hemat biaya pembuatan."
                },
                {
                    id: 1,
                    text: "Bisa diakses di mana saja."
                },
                {
                    id: 2,
                    text: "Hanya perlu satu orang admin untuk mengatur toko."
                },
                {
                    id: 3,
                    text: "Bisa diakses 24 jam."
                },
                {
                    id: 4,
                    text: "Bisa melakukan pembelian kapanpun."
                },
                {
                    id: 5,
                    text: "Tidak perlu menyewa tempat fisik."
                },
                {
                    id: 6,
                    text: "Produk lebih lengkap karena tidak terbatas tempat."
                },
                {
                    id: 7,
                    text: "Jangkauan pasar lebih luas."
                },
                {
                    id: 8,
                    text: "Tidak memerlukan biaya maintenance."
                },
                {
                    id: 9,
                    text: "Pembuatannya tidak memerlukan waktu yang lama."
                }, 
            ]
        },
        {
            id: 1,
            title: "Toko Fisik",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaTimesCircle, {}),
            comparisons: [
                {
                    id: 0,
                    text: "Lebih banyak biaya pembuatan."
                },
                {
                    id: 1,
                    text: "Terbatas hanya satu wilayah."
                },
                {
                    id: 2,
                    text: "Memerlukan karyawan yang lebih banyak."
                },
                {
                    id: 3,
                    text: "Terbatas jam operasional."
                },
                {
                    id: 4,
                    text: "Hanya saat toko buka."
                },
                {
                    id: 5,
                    text: "Perlu menyewa tempat fisik."
                },
                {
                    id: 6,
                    text: "Produk lebih sedikit karena terbatas tempat."
                },
                {
                    id: 7,
                    text: "Jangkauan pasar lebih sempit."
                },
                {
                    id: 8,
                    text: "Memerlukan banyak biaya maintenance."
                },
                {
                    id: 9,
                    text: "Pembuatannya memerlukan waktu yang lebih lama."
                }, 
            ]
        }, 
    ];
const ctaData = ()=>[
        {
            id: 0,
            title: "Ubah Strategimu Sekarang!",
            text: "Toko digital yang penuh dengan produkmu dalam bentuk 3D yang sangat realistis dan lebih lengkap daripada toko fisik. Promosikan toko ritelmu dengan lebih modern dan interaktif. 360 Digitally Rendered adalah media yang tepat untuk mengenalkan toko ritelmu dengan jangkauan yang lebih luas.",
            button: "Mulai Sekarang"
        }, 
    ];



/***/ }),

/***/ 5423:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DigitallyRendered),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Digitally_Rendered_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(570);
/* harmony import */ var _components_Digitally_Rendered_Benefit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5937);
/* harmony import */ var _components_partials_CTA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6648);
/* harmony import */ var _components_Digitally_Rendered_Featured__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1731);
/* harmony import */ var _components_Digitally_Rendered_Comparison__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5162);
/* harmony import */ var _api_data_id_DigitallyRenderedData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8292);
/* harmony import */ var _api_data_en_DigitallyRenderedData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3726);
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5049);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2712);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Digitally_Rendered_Hero__WEBPACK_IMPORTED_MODULE_3__, _components_Layout__WEBPACK_IMPORTED_MODULE_11__]);
([_components_Digitally_Rendered_Hero__WEBPACK_IMPORTED_MODULE_3__, _components_Layout__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function DigitallyRendered() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    let benefits;
    let featured;
    let comparison;
    let cta;
    if (router.locale === "id") {
        benefits = (0,_api_data_id_DigitallyRenderedData__WEBPACK_IMPORTED_MODULE_8__/* .benefitsData */ .mU)();
        featured = (0,_api_data_id_DigitallyRenderedData__WEBPACK_IMPORTED_MODULE_8__/* .featuredData */ .u5)();
        comparison = (0,_api_data_id_DigitallyRenderedData__WEBPACK_IMPORTED_MODULE_8__/* .comparisonData */ .$f)();
        cta = (0,_api_data_id_DigitallyRenderedData__WEBPACK_IMPORTED_MODULE_8__/* .ctaData */ .RA)();
    } else {
        benefits = (0,_api_data_en_DigitallyRenderedData__WEBPACK_IMPORTED_MODULE_9__/* .benefitsDataEn */ .q)();
        featured = (0,_api_data_en_DigitallyRenderedData__WEBPACK_IMPORTED_MODULE_9__/* .featuredDataEn */ .zH)();
        comparison = (0,_api_data_en_DigitallyRenderedData__WEBPACK_IMPORTED_MODULE_9__/* .comparisonDataEn */ .BW)();
        cta = (0,_api_data_en_DigitallyRenderedData__WEBPACK_IMPORTED_MODULE_9__/* .ctaDataEn */ .Ml)();
    }
    const appContextValue = {
        benefits,
        featured,
        comparison
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        title: "Digitally Rendered - Virtual Reality Digidaxa",
        description: "Berbelanja Lebih Interaktif Di Toko Ritel Virtual.",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Digitally_Rendered_Hero__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context_app_context__WEBPACK_IMPORTED_MODULE_10__/* .AppContext.Provider */ .I.Provider, {
                value: appContextValue,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Digitally_Rendered_Benefit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Digitally_Rendered_Featured__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Digitally_Rendered_Comparison__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_partials_CTA__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                cta: cta
            })
        ]
    });
};
const getStaticProps = async ({ locale  })=>({
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__.serverSideTranslations)(locale, [
                "common",
                "digitally-rendered"
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
var __webpack_exports__ = __webpack_require__.X(0, [952,142,213], () => (__webpack_exec__(5423)));
module.exports = __webpack_exports__;

})();