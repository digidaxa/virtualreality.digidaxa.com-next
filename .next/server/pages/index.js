"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Benefit)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./components/Home/BenefitHeader.js


function BenefitHeader() {
    const { t  } = (0,external_next_i18next_.useTranslation)("home");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mx-auto text-center mb-16",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "font-semibold text-lg text-primary uppercase mb-4 tracking-widest lg:text-xl",
                children: "Benefit"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "font-semibold text-dark text-2xl mb-2 sm:text-3xl lg:text-4xl dark:text-light",
                children: t("benefit.title")
            })
        ]
    });
};

// EXTERNAL MODULE: ./context/app-context.js
var app_context = __webpack_require__(5049);
;// CONCATENATED MODULE: ./components/Home/BenefitBody.js



function BenefitBody({ activeBenefit  }) {
    const context = (0,external_react_.useContext)(app_context/* AppContext */.I);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full px-4",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "bg-[#FFEFE6] dark:bg-black/40",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-wrap justify-center text-center py-16 px-12 items-center lg:p-28",
                children: context.benefits.map((benefit)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `${activeBenefit === benefit.id ? "" : "hidden"}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "font-semibold text-dark text-3xl mb-4 sm:text-4xl lg:mb-6 lg:text-5xl dark:text-light",
                                children: benefit.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-lg leading-relaxed lg:leading-loose lg:text-xl dark:text-light",
                                children: benefit.content
                            })
                        ]
                    }, benefit.id))
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Home/BenefitButton.js



function BenefitButton({ activeBenefit , onClickBenefit  }) {
    const context = (0,external_react_.useContext)(app_context/* AppContext */.I);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full mx-auto text-center px-4 flex flex-wrap justify-between gap-5 mb-10 xl:gap-10",
        children: context.benefitButtons.map((benefitbtn)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                id: benefitbtn.id,
                type: "button",
                className: `text-base font-semibold ${activeBenefit === benefitbtn.id ? "bg-primary text-light shadow-xl dark:shadow-black/30" : "bg-light text-primary dark:bg-dark dark:text-light/70"} rounded-full px-5 py-3 transition-all duration-150 ease-out hover:shadow-xl hover:bg-primary hover:text-light lg:px-8 lg:py-4 dark:hover:shadow-black/30`,
                onClick: ()=>onClickBenefit(benefitbtn.id),
                children: benefitbtn.name
            }, benefitbtn.id))
    });
};

;// CONCATENATED MODULE: ./components/Home/Benefit.js





function Benefit() {
    const { 0: activeBenefit , 1: setActiveBenefit  } = (0,external_react_.useState)(0);
    const onClickBenefitHandler = (benefit)=>{
        setActiveBenefit(benefit);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "portfolio",
        className: "pt-36 pb-16 bg-light dark:bg-dark",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full px-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(BenefitHeader, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(BenefitButton, {
                    activeBenefit: activeBenefit,
                    onClickBenefit: onClickBenefitHandler
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(BenefitBody, {
                    activeBenefit: activeBenefit
                })
            ]
        })
    });
};


/***/ }),

/***/ 7796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Client)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./components/Home/ClientHeader.js


function ClientHeader() {
    const { t  } = (0,external_next_i18next_.useTranslation)("home");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mx-auto text-center mb-9",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "font-semibold text-lg text-light/60 uppercase mb-4 tracking-widest lg:text-xl",
                children: "Clients"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "font-semibold text-light text-3xl mb-2 sm:text-4xl lg:text-5xl",
                children: t("clients.title")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "font-medium text-md text-light/60 md:text-xl",
                children: t("clients.subtitle")
            })
        ]
    });
};

// EXTERNAL MODULE: ./context/app-context.js
var app_context = __webpack_require__(5049);
;// CONCATENATED MODULE: ./components/Home/ClientBody.js



function ClientBody() {
    const context = (0,external_react_.useContext)(app_context/* AppContext */.I);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full px-4",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex flex-wrap items-center justify-center",
            children: context.clients.map((client)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "max-w-[120px] m-3 rounded-md py-3 px-4 bg-light grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 hover:shadow-lg hover:shadow-primary/40 md:m-4 md:max-w-[180px] xl:mx-5",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("picture", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                srcSet: `/img/clients/${client.logo}`,
                                type: "image/webp"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: `/img/clients/${client.logo}`,
                                alt: client.name,
                                className: "aspect-square object-scale-down"
                            })
                        ]
                    })
                }, client.id))
        })
    });
};

;// CONCATENATED MODULE: ./components/Home/Client.js




function Client() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "clients",
        className: "py-28 bg-[#17C3B2] dark:bg-[#0e8579]",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full px-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ClientHeader, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(ClientBody, {})
                ]
            })
        })
    });
};


/***/ }),

/***/ 3065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Feature)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./context/app-context.js
var app_context = __webpack_require__(5049);
;// CONCATENATED MODULE: ./components/Home/FeatureBody.js



function FeatureBody() {
    const context = (0,external_react_.useContext)(app_context/* AppContext */.I);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-wrap gap-12 justify-center",
        children: context.features.map((feature)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col items-center bg-light text-dark text-center rounded-md p-10 shadow-lg max-w-sm w-full md:max-w-xs hover:translate-y-2 hover:shadow-2xl hover:shadow-primary/70 transition-all duration-100 ease-in-out dark:bg-dark dark:text-light dark:hover:shadow-primary/50",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "w-20 h-20 bg-primary text-5xl text-light rounded-full flex justify-center items-center mb-4 dark:text-dark",
                        children: feature.icon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        className: "text-lg font-semibold mb-4",
                        children: feature.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: feature.content
                    })
                ]
            }, feature.id))
    });
};

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./components/Home/FeatureHeader.js


function FeatureHeader() {
    const { t  } = (0,external_next_i18next_.useTranslation)("home");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mx-auto text-center mb-16",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "font-semibold text-lg text-primary uppercase mb-4 tracking-widest lg:text-xl",
                children: "Features"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "font-semibold text-dark text-2xl mb-2 sm:text-3xl lg:text-4xl dark:text-light",
                children: t("features.title")
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Home/Feature.js




function Feature() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "feature",
        className: "py-32 bg-[#FAFAFA] dark:bg-black/90",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full px-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(FeatureHeader, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(FeatureBody, {})
                ]
            })
        })
    });
};


/***/ }),

/***/ 2825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Hero)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./components/Home/HeroLeft.js


function HeroLeft() {
    const { t  } = (0,external_next_i18next_.useTranslation)("home");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full self-center px-4 lg:w-1/2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "font-bold text-dark text-3xl mt-1 mb-5 lg:leading-tight lg:text-5xl dark:text-light",
                children: t("hero.title")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-lg font-medium text-dark mb-8 lg:mb-12 lg:leading-relaxed lg:text-xl dark:text-light",
                children: t("hero.subtitle")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://wa.me/+6285172243818",
                className: "text-base font-semibold bg-primary text-white rounded-full px-5 py-4 hover:shadow-xl hover:opacity-80 transition duration-75 ease-out lg:text-lg lg:px-11 lg:py-5",
                children: t("hero.cta")
            })
        ]
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@react-three/fiber"
var fiber_ = __webpack_require__(3784);
// EXTERNAL MODULE: external "@react-three/drei"
var drei_ = __webpack_require__(4165);
;// CONCATENATED MODULE: ./components/Home/Model.js



function Model(props) {
    const { nodes , materials  } = (0,drei_.useGLTF)("/models/vr_glasses.glb");
    return /*#__PURE__*/ jsx_runtime_.jsx("group", {
        ...props,
        dispose: null,
        children: /*#__PURE__*/ jsx_runtime_.jsx("group", {
            rotation: [
                -Math.PI / 2,
                0,
                0
            ],
            scale: 2.6,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("group", {
                rotation: [
                    Math.PI / 2,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("mesh", {
                        geometry: nodes.defaultMaterial.geometry,
                        material: materials.Glass
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("mesh", {
                        geometry: nodes.defaultMaterial_1.geometry,
                        material: materials.VR_glasses
                    })
                ]
            })
        })
    });
};
drei_.useGLTF.preload("/models/vr_glasses.glb");

;// CONCATENATED MODULE: ./components/Home/HeroRight.js





function HeroRight() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full self-end px-4 lg:w-1/2",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "relative mb-5 md:mt-10 lg:mt-0 lg:right-0",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mx-auto max-w-full relative flex flex-wrap items-center justify-center group hover:cursor-grab active:cursor-grabbing h-80 md:h-[400px] lg:h-[500px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute rounded-full transition-all ease-in duration-200 group-hover:blur-xl group-hover:scale-110 w-64 h-64 md:h-80 md:w-80 lg:w-96 lg:h-96"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(fiber_.Canvas, {
                        className: "transition-all ease-in duration-300 group-hover:scale-110",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(drei_.OrbitControls, {
                                enableZoom: false,
                                autoRotate: true,
                                autoRotateSpeed: 2
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ambientLight", {
                                intensity: 0.6
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("directionalLight", {
                                intensity: 0.5
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Suspense, {
                                fallback: null,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Model, {})
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Home/Hero.js



function Hero() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "hero",
        className: "pt-28 pb-16 dark:bg-dark",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-wrap-reverse md:flex-wrap text-center justify-center lg:text-left lg:justify-start",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(HeroLeft, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeroRight, {})
                ]
            })
        })
    });
};


/***/ }),

/***/ 3055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Portfolio)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Home/PortfolioHeader.js

function PorfolioHeader() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mx-auto text-center mb-9",
        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
            className: "font-semibold text-lg text-primary uppercase mb-4 tracking-widest lg:text-xl dark:text-light/60",
            children: "Portfolio"
        })
    });
};

// EXTERNAL MODULE: ./context/app-context.js
var app_context = __webpack_require__(5049);
;// CONCATENATED MODULE: ./components/Home/PortfolioSliderButton.js

function PorfolioSliderButton({ onClickSlider  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "justify-center items-center bottom-0 p-4 h-[48px] w-[48px] bg-dark/50 rounded-full shadow-lg shadow-dark/50 absolute top-1/2 right-0 text-4xl text-dark z-10 cursor-pointer select-none transition-colors duration-100 hover:bg-dark md:h-[72px] md:w-[72px]",
        onClick: ()=>onClickSlider(),
        type: "button",
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "block -ml-1 w-5 h-5 rotate-45 border-t-2 border-r-2 md:h-7 md:w-7 md:-ml-0"
        })
    });
};

;// CONCATENATED MODULE: ./components/Home/PortfolioBody.js
/* eslint-disable no-nested-ternary */ 



function PorfolioBody() {
    const context = (0,external_react_.useContext)(app_context/* AppContext */.I);
    const { 0: current , 1: setCurrent  } = (0,external_react_.useState)(0);
    const onClickButtonSliderHandler = ()=>{
        if (current !== context.portfolios.length - 1) {
            setCurrent(current + 1);
        } else {
            setCurrent(0);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative flex gap-10 justify-start items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PorfolioSliderButton, {
                onClickSlider: onClickButtonSliderHandler
            }),
            context.portfolios.map((portfolio)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `overflow-hidden pb-5 px-3 ${portfolio.id === current ? "scale-100" : "translate-x-full scale-90 absolute rounded-lg mt-14"} transition-all duration-500 ease-out`,
                    children: [
                        portfolio.id === current ? /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "w-full text-right text-dark text-xl ml-auto mb-3 border-b-2 pb-1 border-primary sm:text-2xl md:w-3/4 lg:text-3xl dark:text-light",
                            children: portfolio.title
                        }) : "",
                        /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                            title: portfolio.title,
                            src: portfolio.id === current ? portfolio.url : "",
                            allowFullScreen: true,
                            loading: "lazy",
                            className: `w-[320px] h-[180px] ${portfolio.id === current ? "shadow-lg shadow-primary/70 dark:shadow-dark/70" : "shadow bg-dark/30"} rounded-lg sm:w-[520px] sm:h-[292px] md:w-[640px] md:h-[360px] lg:w-[820px] lg:h-[462px]`
                        })
                    ]
                }, portfolio.id))
        ]
    });
};

;// CONCATENATED MODULE: ./components/Home/Portfolio.js




function Portfolio() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "portfolio",
        className: "pt-16 pb-28 bg-light overflow-hidden dark:bg-[#17C3B2]",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(PorfolioHeader, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(PorfolioBody, {})
            ]
        })
    });
};


/***/ }),

/***/ 9729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ VR)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Home/VRHeader.js

function VRHeader() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mx-auto text-center mb-9",
        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
            className: "font-semibold text-lg text-light uppercase mb-4 tracking-widest lg:text-xl",
            children: "Virtual Reality"
        })
    });
};

// EXTERNAL MODULE: ./context/app-context.js
var app_context = __webpack_require__(5049);
;// CONCATENATED MODULE: ./components/Home/VRBody.js



function VRBody() {
    const context = (0,external_react_.useContext)(app_context/* AppContext */.I);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-wrap justify-center",
        children: context.virtualReality.map((vr)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full pt-6 pb-10 px-4 flex flex-col text-center items-center xl:w-1/2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "w-10/12 text-light text-2xl mb-5 border-b-2 pb-4 border-light sm:text-3xl lg:text-4xl",
                        children: vr.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-wrap mb-5 relative",
                        children: vr.images.map((image)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("picture", {
                                className: "w-full md:w-1/2 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                        srcSet: image.src,
                                        type: "image/webp"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: image.src,
                                        alt: image.alt,
                                        className: "w-full aspect-square object-cover object-center grayscale opacity-70 transition-all duration-150 ease-in-out hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:-translate-y-2 hover:z-10 hover:shadow-2xl"
                                    })
                                ]
                            }, image.id))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-lg text-light w-10/12 mb-5",
                        children: vr.content
                    })
                ]
            }, vr.id))
    });
};

;// CONCATENATED MODULE: ./components/Home/VR.js




function VR() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "virtual-reality",
        className: "pt-16 pb-28 bg-primary",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(VRHeader, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(VRBody, {})
            ]
        })
    });
};


/***/ }),

/***/ 7993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ml": () => (/* binding */ ctaDataEn),
/* harmony export */   "Sj": () => (/* binding */ benefitButtonsDataEn),
/* harmony export */   "ng": () => (/* binding */ virtualRealityDataEn),
/* harmony export */   "q": () => (/* binding */ benefitsDataEn),
/* harmony export */   "tb": () => (/* binding */ clientsDataEn),
/* harmony export */   "uf": () => (/* binding */ featuresDataEn),
/* harmony export */   "xH": () => (/* binding */ portfolioDataEn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);


const clientsDataEn = ()=>[
        {
            id: 0,
            name: "Decorunic",
            logo: "decorunic.webp"
        },
        {
            id: 1,
            name: "Decorunic Project",
            logo: "decorunic-project.webp"
        },
        {
            id: 2,
            name: "Woodenic",
            logo: "woodenic.webp"
        },
        {
            id: 3,
            name: "CV. Ruang Inspirasi Indonesia",
            logo: "cvruang-inspirasi.webp"
        },
        {
            id: 4,
            name: "Firda Dental Care",
            logo: "firda.webp"
        },
        {
            id: 5,
            name: "Sekuro Village Beach Resort",
            logo: "sekuro.webp"
        },
        {
            id: 6,
            name: "Seaside Villa & Muse Beach Resto",
            logo: "seaside.webp"
        }, 
    ];
const portfolioDataEn = ()=>[
        {
            id: 0,
            title: "Decorunic Virtual Showroom",
            url: "https://vrtour.decorunic.id"
        },
        {
            id: 1,
            title: "Sekuro Village Beach Resort Virtual Reality",
            url: "https://sekurovillage.digidaxa.com"
        },
        {
            id: 2,
            title: "Firda Dental Care Virtual Reality",
            url: "https://firdadentalcare.digidaxa.com"
        },
        {
            id: 3,
            title: "Seaside Villa & Muse Beach Resto Virtual Reality",
            url: "https://seasidejepara.digidaxa.com"
        }, 
    ];
const featuresDataEn = ()=>[
        {
            id: 0,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaVrCardboard, {}),
            title: "Immersive 360, Visualization More Captivating",
            content: "Engage customers with a very attractive virtual showroom."
        },
        {
            id: 1,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaBuffer, {}),
            title: "More Efficient",
            content: "Test your product on the market through a 3D virtual showroom."
        },
        {
            id: 2,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaHandSparkles, {}),
            title: "Offer an Exciting New Experience",
            content: "Offer your product and make it attractive for your customers to visit."
        },
        {
            id: 3,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaChartLine, {}),
            title: "Increase Reach",
            content: "Reach a wider market and customers."
        },
        {
            id: 4,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaUserClock, {}),
            title: "24/7 Access",
            content: "Through your smartphone or computer, access is easy and can be done anytime and anywhere."
        }, 
    ];
const virtualRealityDataEn = ()=>[
        {
            id: 0,
            title: "Photographed",
            images: [
                {
                    id: 0,
                    src: "/img/virtual-reality/photographed-1.webp",
                    alt: "Photographed Virtual Reality"
                },
                {
                    id: 1,
                    src: "/img/virtual-reality/photographed-2.webp",
                    alt: "Photographed Virtual Reality"
                }, 
            ],
            content: "Photographed: Capture and visualize. Use any 360 photos, and your photos will be immediately visible through the panoramic view."
        },
        {
            id: 1,
            title: "Digitally Rendered",
            images: [
                {
                    id: 0,
                    src: "/img/virtual-reality/digitally-render-2.webp",
                    alt: "Digitally Rendered Virtual Reality"
                },
                {
                    id: 1,
                    src: "/img/virtual-reality/digitally-render-1.webp",
                    alt: "Digitally Rendered Virtual Reality"
                }, 
            ],
            content: "Digitally Rendered: Create virtual showrooms using CGI-like movie quality."
        }, 
    ];
const benefitsDataEn = ()=>[
        {
            id: 0,
            title: "3D Room Visualization",
            content: "Make visitors more interested and want to feel the sensation of an elegant and cool room tour. Take them on a virtual tour to discover the stunning and classy facilities at your hotel or recreation area. It is important to reach a wider market and customers."
        },
        {
            id: 1,
            title: "Virtual Shop",
            content: "Create a real 3D shopping sensation, impress customers with interactive shopping journeys by harnessing their imagination, Generate significantly longer buying sessions, and increase overall conversions. You can build a showroom based on 360 Photography or Digitally Rendered."
        },
        {
            id: 2,
            title: "Home Decoration 3D Visualization",
            content: "Make customers visualize various combinations of floor & wall tiles, 3D furniture, and accessories, create unique and interesting experiences and be able to build unforgettable customer impressions on your products."
        },
        {
            id: 3,
            title: "Virtual Fashion Showroom",
            content: "Build a memorable and more interactive experience and make customers more interested in the virtual fashion showroom."
        }, 
    ];
const benefitButtonsDataEn = ()=>[
        {
            id: 0,
            name: "For Hotels & Recreational Places"
        },
        {
            id: 1,
            name: "For Retail & Brand"
        },
        {
            id: 2,
            name: "For Manufacturers & Properties"
        },
        {
            id: 3,
            name: "For Brands & Wholesale"
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

/***/ 5695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RA": () => (/* binding */ ctaData),
/* harmony export */   "YE": () => (/* binding */ clientsData),
/* harmony export */   "cc": () => (/* binding */ portfolioData),
/* harmony export */   "d_": () => (/* binding */ virtualRealityData),
/* harmony export */   "fn": () => (/* binding */ featuresData),
/* harmony export */   "mU": () => (/* binding */ benefitsData),
/* harmony export */   "uE": () => (/* binding */ benefitButtonsData)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);


const clientsData = ()=>[
        {
            id: 0,
            name: "Decorunic",
            logo: "decorunic.webp"
        },
        {
            id: 1,
            name: "Decorunic Project",
            logo: "decorunic-project.webp"
        },
        {
            id: 2,
            name: "Woodenic",
            logo: "woodenic.webp"
        },
        {
            id: 3,
            name: "CV. Ruang Inspirasi Indonesia",
            logo: "cvruang-inspirasi.webp"
        },
        {
            id: 4,
            name: "Firda Dental Care",
            logo: "firda.webp"
        },
        {
            id: 5,
            name: "Sekuro Village Beach Resort",
            logo: "sekuro.webp"
        },
        {
            id: 6,
            name: "Seaside Villa & Muse Beach Resto",
            logo: "seaside.webp"
        }, 
    ];
const portfolioData = ()=>[
        {
            id: 0,
            title: "Decorunic Virtual Showroom",
            url: "https://vrtour.decorunic.id"
        },
        {
            id: 1,
            title: "Sekuro Village Beach Resort Virtual Reality",
            url: "https://sekurovillage.digidaxa.com"
        },
        {
            id: 2,
            title: "Firda Dental Care Virtual Reality",
            url: "https://firdadentalcare.digidaxa.com"
        },
        {
            id: 3,
            title: "Seaside Villa & Muse Beach Resto Virtual Reality",
            url: "https://seasidejepara.digidaxa.com"
        }, 
    ];
const featuresData = ()=>[
        {
            id: 0,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaVrCardboard, {}),
            title: "Imersif 360, Visualisasi Makin Menawan",
            content: "Libatkan customers dengan ruang pamer virtual yang sangat menarik."
        },
        {
            id: 1,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaBuffer, {}),
            title: "Semakin Efisien",
            content: "Uji produkmu di pasaran melalui virtual showroom 3D."
        },
        {
            id: 2,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaHandSparkles, {}),
            title: "Tawarkan Pengalaman baru yang Menarik",
            content: "Tawarkan produkmu dan bikin menarik agar mudah dikunjungi pelangganmu."
        },
        {
            id: 3,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaChartLine, {}),
            title: "Tingkatkan Jangkauan",
            content: "Jangkau pasar dan pelanggan semakin luas."
        },
        {
            id: 4,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaUserClock, {}),
            title: "Akses 24/7",
            content: "Melalui smartphone atau komputermu, akses mudah dan dapat dilakukan kapan saja dan di mana saja."
        }, 
    ];
const virtualRealityData = ()=>[
        {
            id: 0,
            title: "Photographed",
            images: [
                {
                    id: 0,
                    src: "/img/virtual-reality/photographed-1.webp",
                    alt: "Photographed Virtual Reality"
                },
                {
                    id: 1,
                    src: "/img/virtual-reality/photographed-2.webp",
                    alt: "Photographed Virtual Reality"
                }, 
            ],
            content: "Photographed: Tangkap dan visualisasikan. Gunakan foto 360 apa saja, dan foto anda akan dapat langsung dilihat melalui panoramic view."
        },
        {
            id: 1,
            title: "Digitally Rendered",
            images: [
                {
                    id: 0,
                    src: "/img/virtual-reality/digitally-render-2.webp",
                    alt: "Digitally Rendered Virtual Reality"
                },
                {
                    id: 1,
                    src: "/img/virtual-reality/digitally-render-1.webp",
                    alt: "Digitally Rendered Virtual Reality"
                }, 
            ],
            content: "Digitally Rendered: Buat ruang pamer virtual menggunakan CGI seperti kualitas film."
        }, 
    ];
const benefitsData = ()=>[
        {
            id: 0,
            title: "Visualisasi 3D Ruangan",
            content: "Buat pengunjung semakin tertarik dan ingin merasakan sensasi tour ruangan yang elegan dan keren. Bawa mereka tour secara virtual untuk mengetahui fasilitas yang memukau dan berkelas pada hotel atau tempat rekreasimu. Penting untuk menjangkau pasar dan pelanggan lebih luas."
        },
        {
            id: 1,
            title: "Toko Virtual",
            content: "Ciptakan sensasi belanja 3D yang nyata, buat pelanggan terkesan dengan perjalanan belanja interaktif dengan memanfaatkan imajinasi mereka, Hasilkan sesi pembelian yang jauh lebih lama dan tingkatkan konversi secara keseluruhan. Bisa kamu bangun dengan showroom berbasis 360 Photography atau Digitally Rendered."
        },
        {
            id: 2,
            title: "Visualisasi 3D Dekorasi Rumah",
            content: "Buat pelanggan memvisualisasikan berbagai kombinasi ubin lantai & dinding, furnitur dan aksesori 3D, ciptakan pengalaman unik dan menarik serta mampu bangun kesan pelanggan tak terlupakan pada produkmu."
        },
        {
            id: 3,
            title: "Virtual Fashion Showroom",
            content: "Bangun pengalaman berkesan dan lebih interaktif serta buat pelanggan makin tertarik dengan virtual fashion showroom."
        }, 
    ];
const benefitButtonsData = ()=>[
        {
            id: 0,
            name: "Untuk Hotel & Tempat Rekreasi"
        },
        {
            id: 1,
            name: "Untuk Ritel & Brand"
        },
        {
            id: 2,
            name: "Untuk Produsen & Properti"
        },
        {
            id: 3,
            name: "Untuk Merk & Grosir"
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

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Home_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2825);
/* harmony import */ var _components_Home_Client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7796);
/* harmony import */ var _components_Home_Portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3055);
/* harmony import */ var _components_Home_Feature__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3065);
/* harmony import */ var _components_Home_VR__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9729);
/* harmony import */ var _components_Home_Benefit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3830);
/* harmony import */ var _components_Partials_CTA__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3620);
/* harmony import */ var _api_data_id_HomeData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5695);
/* harmony import */ var _api_data_en_HomeData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7993);
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5049);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2712);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_13__]);
_components_Layout__WEBPACK_IMPORTED_MODULE_13__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














function Home() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    let clients;
    let portfolios;
    let features;
    let virtualReality;
    let benefits;
    let benefitButtons;
    let cta;
    if (router.locale === "id") {
        clients = (0,_api_data_id_HomeData__WEBPACK_IMPORTED_MODULE_10__/* .clientsData */ .YE)();
        portfolios = (0,_api_data_id_HomeData__WEBPACK_IMPORTED_MODULE_10__/* .portfolioData */ .cc)();
        features = (0,_api_data_id_HomeData__WEBPACK_IMPORTED_MODULE_10__/* .featuresData */ .fn)();
        virtualReality = (0,_api_data_id_HomeData__WEBPACK_IMPORTED_MODULE_10__/* .virtualRealityData */ .d_)();
        benefits = (0,_api_data_id_HomeData__WEBPACK_IMPORTED_MODULE_10__/* .benefitsData */ .mU)();
        benefitButtons = (0,_api_data_id_HomeData__WEBPACK_IMPORTED_MODULE_10__/* .benefitButtonsData */ .uE)();
        cta = (0,_api_data_id_HomeData__WEBPACK_IMPORTED_MODULE_10__/* .ctaData */ .RA)();
    } else {
        clients = (0,_api_data_en_HomeData__WEBPACK_IMPORTED_MODULE_11__/* .clientsDataEn */ .tb)();
        portfolios = (0,_api_data_en_HomeData__WEBPACK_IMPORTED_MODULE_11__/* .portfolioDataEn */ .xH)();
        features = (0,_api_data_en_HomeData__WEBPACK_IMPORTED_MODULE_11__/* .featuresDataEn */ .uf)();
        virtualReality = (0,_api_data_en_HomeData__WEBPACK_IMPORTED_MODULE_11__/* .virtualRealityDataEn */ .ng)();
        benefits = (0,_api_data_en_HomeData__WEBPACK_IMPORTED_MODULE_11__/* .benefitsDataEn */ .q)();
        benefitButtons = (0,_api_data_en_HomeData__WEBPACK_IMPORTED_MODULE_11__/* .benefitButtonsDataEn */ .Sj)();
        cta = (0,_api_data_en_HomeData__WEBPACK_IMPORTED_MODULE_11__/* .ctaDataEn */ .Ml)();
    }
    const appContextValue = {
        clients,
        portfolios,
        features,
        virtualReality,
        benefits,
        benefitButtons
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        title: "Virtual Reality Digidaxa - Virtual Reality untuk Advertising Kampanye Marketing dan Branding",
        description: "Solusi bangun ekosistem virtual bisnismu, mudahkan proses penjualan, dan buat pelanggan terkesan dengan virtual reality.",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_Hero__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context_app_context__WEBPACK_IMPORTED_MODULE_12__/* .AppContext.Provider */ .I.Provider, {
                value: appContextValue,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_Client__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_Portfolio__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_Feature__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_VR__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_Benefit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Partials_CTA__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                cta: cta
            })
        ]
    });
};
const getStaticProps = async ({ locale  })=>({
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__.serverSideTranslations)(locale, [
                "common",
                "home"
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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4753:
/***/ ((module) => {

module.exports = import("auto-bind/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,142,157], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();