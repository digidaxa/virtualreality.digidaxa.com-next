"use strict";
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 2712:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Partials_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4766);
/* harmony import */ var _Partials_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3777);
/* harmony import */ var _Partials_BacktoTopButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2356);
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5049);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Partials_Header__WEBPACK_IMPORTED_MODULE_5__]);
_Partials_Header__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function Layout(props) {
    const { children , title , description  } = props;
    const { i18n , t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: language , 1: setLanguage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(router.locale);
    const changeLanguage = (lng)=>{
        i18n.changeLanguage(lng);
        router.push(router.pathname, router.pathname, {
            locale: lng
        });
    };
    const onClickLanguageHandler = (lng)=>{
        changeLanguage(lng);
        setLanguage(lng);
    };
    const appContextValue = {
        language,
        onClickLanguageHandler
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: "Virtual Reality, Virtual Reality Kampanye Marketing, Virtual Reality Bisnis, Branding, Advertising 360 Digitally Rendered, 360 Photographed"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "publisher",
                        content: "Digidaxa Studio"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "author",
                        content: "Digidaxa Studio"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "google-site-verification",
                        content: "9baqhs5op3xQAxMfqY5modcRkK11NL9muQgk0Foa1ns"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "msvalidate.01",
                        content: "47C0F3EB11BA1877012CF1A7E8FABBFB"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: "https://virtualreality.digidaxa.id"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "mask-icon",
                        href: "/img/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/img/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "theme-color",
                        content: "#FB6107"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "msapplication-TileColor",
                        content: "#FB6107"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "manifest",
                        href: "/manifest.json"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: "https://virtualreality.digidaxa.id/"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: "/img/logo192.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:image",
                        content: "/img/logo192.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:description",
                        content: description
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "#content",
                className: "skip-link focus:top-0 hover:text-light/50",
                children: t("common:skipButtonText")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context_app_context__WEBPACK_IMPORTED_MODULE_8__/* .AppContext.Provider */ .I.Provider, {
                value: appContextValue,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Partials_Header__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        id: "content",
                        className: "z-20",
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Partials_BacktoTopButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Partials_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BacktoTopButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable jsx-a11y/anchor-is-valid */ 

function BacktoTopButton() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: "content",
        spy: true,
        smooth: true,
        id: "backtotop",
        className: "fixed z-50 cursor-pointer hidden justify-center items-center bottom-4 p-4 right-4 h-14 w-14 bg-primary rounded-full shadow-lg shadow-dark/50 hover:animate-pulse",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "block h-5 w-5 rotate-45 border-t-2 border-l-2 mt-2"
        })
    });
};


/***/ }),

/***/ 3620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CTA)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function CTA({ cta  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "cta",
        className: "pt-32 pb-16 dark:bg-dark",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full px-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mx-auto text-center py-14 px-10 bg-secondary/30 lg:p-16",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "font-semibold text-dark text-2xl sm:text-3xl xl:text-4xl dark:text-light",
                            children: cta[0].title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mt-6 mb-8 text-lg lg:text-2xl lg:leading-relaxed xl:mb-16 dark:text-light",
                            children: cta[0].text
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://wa.me/+6285172243818",
                            className: "text-base font-semibold bg-primary text-light rounded-full px-5 py-4 hover:shadow-xl hover:bg-primary/80 transition duration-75 ease-out lg:text-lg lg:px-11 lg:py-5",
                            children: cta[0].button
                        })
                    ]
                })
            })
        })
    });
};


/***/ }),

/***/ 3777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./components/Partials/FooterAddress.js


function FooterAddress() {
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "text-lg font-medium text-dark mb-7 lg:text-xl dark:text-light",
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            className: "mb-1 leading-normal",
            children: t("footer.address")
        })
    });
};

;// CONCATENATED MODULE: ./components/Partials/SocialMediaIcon.js

function SocialMediaIcon({ socials  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex items-center",
        children: socials.map((social)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                id: social.id,
                href: social.url,
                target: "_blank",
                rel: "noreferrer",
                className: "w-11 h-11 mr-3 rounded-full flex justify-center items-center bg-primary text-light hover:bg-primary/80",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    className: "fill-current",
                    role: "img",
                    width: "20",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: social.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: social.path
                        })
                    ]
                })
            }, social.id))
    });
};

;// CONCATENATED MODULE: ./components/Partials/FooterCompany.js

function FooterCompany({ companies  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full px-4 mb-10 lg:w-1/2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "font-semibold text-dark text-xl mb-8 lg:text-2xl dark:text-light",
                children: "Company"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: companies.map((company)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        id: company.id,
                        className: "mb-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: company.url,
                            className: "text-base font-medium text-dark hover:border-b-2 border-primary hover:text-primary lg:text-lg dark:text-light dark:hover:text-primary",
                            children: company.title
                        })
                    }, company.id))
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Partials/FooterCopyright.js

function FooterCopyright() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "py-12 bg-primary/40",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container flex flex-wrap",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-1/2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://digidaxa.id",
                        className: "text-dark hover:text-primary dark:text-light dark:hover:text-primary",
                        children: "\xa9 2022 Digidaxa"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-1/2 text-right",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://digidaxa.id/terms",
                            className: "text-dark hover:text-primary dark:text-light dark:hover:text-primary",
                            children: "Terms"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "mx-3 dark:text-light",
                            children: "•"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://digidaxa.id/privacy",
                            className: "text-dark hover:text-primary dark:text-light dark:hover:text-primary",
                            children: "Privacy"
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Partials/FooterServices.js

function FooterServices({ services  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full px-4 mb-10 lg:w-1/2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "font-semibold text-dark text-xl mb-8 lg:text-2xl dark:text-light",
                children: "Services"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: services.map((service)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        id: service.id,
                        className: "mb-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: service.url,
                            className: "text-base font-medium text-dark hover:border-b-2 border-primary hover:text-primary lg:text-lg dark:text-light dark:hover:text-primary",
                            target: "_blank",
                            rel: "noreferrer",
                            children: service.title
                        })
                    }, service.id))
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/api/data/id/FooterData.js
const socialMediaData = ()=>[
        {
            id: 0,
            title: "Facebook",
            url: "https://www.facebook.com/digidaxa",
            path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        },
        {
            id: 1,
            title: "Instagram",
            url: "https://www.instagram.com/digidaxa",
            path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
        },
        {
            id: 2,
            title: "TikTok",
            url: "https://tiktok.com/@digidaxa.studio",
            path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
        },
        {
            id: 3,
            title: "Twitter",
            url: "https://www.twitter.com/digidaxa",
            path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
        },
        {
            id: 4,
            title: "Gmail",
            url: "mailto:digidaxa@gmail.com",
            path: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
        }, 
    ];
const servicesData = ()=>[
        {
            id: 0,
            title: "VR Shop",
            url: "https://virtualreality.digidaxa.id/"
        },
        {
            id: 1,
            title: "AR Filter",
            url: "https://arfilter.digidaxa.id/"
        },
        {
            id: 2,
            title: "AR Print",
            url: "https://arprint.digidaxa.id/"
        },
        {
            id: 3,
            title: "AR Pack",
            url: "https://arpack.digidaxa.id/"
        },
        {
            id: 4,
            title: "AR 3D Web",
            url: "https://arweb.digidaxa.id/"
        },
        {
            id: 5,
            title: "Smart CGI Background",
            url: "https://smartcgi.digidaxa.id/"
        }, 
    ];
const companiesData = ()=>[
        {
            id: 0,
            title: "FAQ",
            url: "https://www.digidaxa.id/faq"
        },
        {
            id: 1,
            title: "Karir",
            url: "https://www.digidaxa.id/karir"
        },
        {
            id: 2,
            title: "Mengapa Digidaxa?",
            url: "https://www.digidaxa.id/mengapa-digidaxa"
        },
        {
            id: 3,
            title: "Berkolaborasi dengan Kami",
            url: "https://www.digidaxa.id/collab"
        }, 
    ];


;// CONCATENATED MODULE: ./pages/api/data/en/FooterData.js
const socialMediaDataEn = ()=>[
        {
            id: 0,
            title: "Facebook",
            url: "https://www.facebook.com/digidaxa",
            path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        },
        {
            id: 1,
            title: "Instagram",
            url: "https://www.instagram.com/digidaxa",
            path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
        },
        {
            id: 2,
            title: "TikTok",
            url: "https://tiktok.com/@digidaxa.studio",
            path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
        },
        {
            id: 3,
            title: "Twitter",
            url: "https://www.twitter.com/digidaxa",
            path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
        },
        {
            id: 4,
            title: "Gmail",
            url: "mailto:digidaxa@gmail.com",
            path: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
        }, 
    ];
const servicesDataEn = ()=>[
        {
            id: 0,
            title: "VR Shop",
            url: "https://virtualreality.digidaxa.id/"
        },
        {
            id: 1,
            title: "AR Filter",
            url: "https://arfilter.digidaxa.id/"
        },
        {
            id: 2,
            title: "AR Print",
            url: "https://arprint.digidaxa.id/"
        },
        {
            id: 3,
            title: "AR Pack",
            url: "https://arpack.digidaxa.id/"
        },
        {
            id: 4,
            title: "AR 3D Web",
            url: "https://arweb.digidaxa.id/"
        },
        {
            id: 5,
            title: "Smart CGI Background",
            url: "https://smartcgi.digidaxa.id/"
        }, 
    ];
const companiesDataEn = ()=>[
        {
            id: 0,
            title: "FAQ",
            url: "https://www.digidaxa.id/faq"
        },
        {
            id: 1,
            title: "Career",
            url: "https://www.digidaxa.id/karir"
        },
        {
            id: 2,
            title: "Why Digidaxa?",
            url: "https://www.digidaxa.id/mengapa-digidaxa"
        },
        {
            id: 3,
            title: "Collab with Us",
            url: "https://www.digidaxa.id/collab"
        }, 
    ];


;// CONCATENATED MODULE: ./components/Partials/Footer.js









function Footer() {
    const router = (0,router_.useRouter)();
    let socialMedia;
    let services;
    let companies;
    if (router.locale === "id") {
        socialMedia = socialMediaData();
        services = servicesData();
        companies = companiesData();
    } else {
        socialMedia = socialMediaDataEn();
        services = servicesDataEn();
        companies = companiesDataEn();
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "dark:bg-dark",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container bg-primary/0 pt-36",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-wrap",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-11 w-full px-4 lg:w-1/2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mb-5 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("picture", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                                    srcSet: "/img/logo graphic + typeface.webp",
                                                    type: "image/webp"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/logo graphic + typeface.webp",
                                                    alt: "Logo Digidaxa",
                                                    className: "mr-2 h-9 sm:h-10 lg:h-14"
                                                })
                                            ]
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-2xl font-light text-secondary sm:text-3xl xl:text-4xl",
                                            children: "Virtual Reality"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(FooterAddress, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(SocialMediaIcon, {
                                    socials: socialMedia
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-11 flex w-full flex-wrap lg:w-1/2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(FooterServices, {
                                    services: services
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(FooterCompany, {
                                    companies: companies
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FooterCopyright, {})
        ]
    });
};


/***/ }),

/***/ 6340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HamburgerButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function HamburgerButton({ isActiveHamburger , onClickHamburger  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        id: "hamburger",
        className: `block absolute right-4${isActiveHamburger ? " hamburger-active" : ""} lg:hidden`,
        type: "button",
        onClick: ()=>onClickHamburger(),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "hamburger-line transition duration-300 ease-in-out origin-top-left"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "hamburger-line transition duration-300 ease-in-out"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "hamburger-line transition duration-300 ease-in-out origin-top-left"
            })
        ]
    });
};


/***/ }),

/***/ 4766:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var auto_bind_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4753);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _HamburgerButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6340);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2006);
/* harmony import */ var _LanguageButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7498);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([auto_bind_react__WEBPACK_IMPORTED_MODULE_2__]);
auto_bind_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const DarkModeToggle = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\Partials\\Header.js -> " + "./DarkModeToggle"
        ]
    },
    ssr: false
});
class Header extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    constructor(props){
        super(props);
        this.state = {
            isActiveHamburger: false,
            isDropdownOpen: false
        };
        (0,auto_bind_react__WEBPACK_IMPORTED_MODULE_2__["default"])(this);
    }
    componentDidMount() {
        window.onscroll = ()=>{
            const header = document.querySelector("header");
            const backtotop = document.querySelector("#backtotop");
            const fixedNav = header.offsetTop;
            if (window.pageYOffset > fixedNav) {
                header.classList.add("navbar-fixed");
                backtotop.classList.remove("hidden");
                backtotop.classList.add("flex");
            } else {
                header.classList.remove("navbar-fixed");
                backtotop.classList.remove("flex");
                backtotop.classList.add("hidden");
            }
        };
    }
    onClickHamburgerHandler = ()=>{
        this.setState((prevState)=>({
                isActiveHamburger: !prevState.isActiveHamburger
            }));
    };
    onClickDropdownHandler = ()=>{
        this.setState((prevState)=>({
                isDropdownOpen: !prevState.isDropdownOpen
            }));
    };
    onClickDropdownLinkHandler = ()=>{
        this.setState({
            isDropdownOpen: false
        });
    };
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
            className: "absolute top-0 left-0 z-10 flex w-full items-center bg-transparent",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "px-4 flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center cursor-pointer py-6 text-lg font-bold text-primary",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("picture", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                                        srcSet: "/img/logo.webp",
                                                        type: "image/webp"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/img/logo.webp",
                                                        alt: "Logo Digidaxa",
                                                        className: "mr-2 h-8 w-8"
                                                    })
                                                ]
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-xl text-secondary",
                                                children: "Virtual Reality"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LanguageButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-center px-4 lg:flex-row-reverse",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DarkModeToggle, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HamburgerButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    isActiveHamburger: this.state.isActiveHamburger,
                                    onClickHamburger: this.onClickHamburgerHandler
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    onClickDropdown: this.onClickDropdownHandler,
                                    onClickDropdownLink: this.onClickDropdownLinkHandler,
                                    isActiveHamburger: this.state.isActiveHamburger,
                                    isDropdownOpen: this.state.isDropdownOpen
                                })
                            ]
                        })
                    ]
                })
            })
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LanguageButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5049);



function LanguageButton() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_app_context__WEBPACK_IMPORTED_MODULE_2__/* .AppContext */ .I);
    let lang;
    if (context.language === "id") {
        lang = "en";
    } else {
        lang = "id";
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "button",
                id: "toggleLanguage",
                onClick: ()=>context.onClickLanguageHandler(lang)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: "toggleLanguage",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "cursor-pointer ml-1 px-[2px] uppercase text-xs border border-primary rounded text-primary hover:bg-primary hover:text-light",
                    children: context.language
                })
            })
        ]
    });
};


/***/ }),

/***/ 2006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ /* eslint-disable jsx-a11y/anchor-is-valid */ 




function Navbar({ onClickDropdown , onClickDropdownLink , isActiveHamburger , isDropdownOpen ,  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        id: "nav-menu",
        className: `${isActiveHamburger ? "" : "hidden"} absolute py-5 bg-white rounded-lg shadow-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-black/70 lg:dark:bg-transparent`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "block lg:flex",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mb-1 grup",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: router.pathname === "/" ? "cursor-pointer nav-link border-primary active:font-medium transition-all ease-in duration-75 dark:hover:text-primary dark:text-primary nav-link-active" : "cursor-pointer nav-link border-primary active:font-medium transition-all ease-in duration-75 dark:text-light dark:hover:text-primary",
                            children: t("header.home")
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "mb-1",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "cursor-pointer nav-link dropdown-btn border-primary active:font-medium transition-all ease-in duration-75 dark:text-light flex items-center dark:hover:text-primary",
                            onClick: onClickDropdown,
                            children: [
                                t("header.virtualReality"),
                                isDropdownOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaAngleDown, {
                                    className: "ml-1 transition duration-150 ease-in-out rotate-180"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaAngleDown, {
                                    className: "ml-1 transition duration-150 ease-in-out"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `mx-3 px-2 py-2 bg-white absolute rounded-md shadow ${isDropdownOpen ? "" : "hidden"} dark:text-light dark:bg-dark dark:shadow-black/70`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/photographed",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: router.pathname === "/photographed" ? "cursor-pointer bg-gray-200 dropdown-link hover:bg-gray-200 dark:hover:bg-black/30 text-primary dark:bg-black/30" : "cursor-pointer dropdown-link hover:bg-gray-200 dark:hover:bg-black/30",
                                        onClick: onClickDropdownLink,
                                        children: t("header.photographed")
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/digitally-rendered",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: router.pathname === "/digitally-rendered" ? "cursor-pointer dropdown-link hover:bg-gray-200 dark:hover:bg-black/30 text-primary bg-gray-200 dark:bg-black/30" : "cursor-pointer dropdown-link hover:bg-gray-200 dark:hover:bg-black/30",
                                        onClick: onClickDropdownLink,
                                        children: t("header.digitally")
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mb-1",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://www.digidaxa.id/tentang-kami",
                        className: "nav-link border-primary active:font-medium transition-all ease-in duration-75 dark:text-light dark:hover:text-primary",
                        children: t("header.aboutUs")
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mb-1",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://www.digidaxa.id/blog",
                        className: "nav-link border-primary active:font-medium transition-all ease-in duration-75 dark:text-light dark:hover:text-primary",
                        target: "_blank",
                        rel: "noreferrer",
                        children: t("header.blog")
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "mb-1",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://wa.me/+6285172243818",
                        className: "text-base font-semibold mx-6 flex px-6 py-2 bg-transparent border-[1px] border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all ease-in duration-75 dark:border-light dark:hover:border-primary dark:text-light lg:mx-4",
                        children: t("header.contactUs")
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 5049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ AppContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    empty: true
});


/***/ })

};
;