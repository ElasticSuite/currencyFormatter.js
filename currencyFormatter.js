// CurrencyFormatter.js
// ---------------------------------------------------------------------
// Version: 2.0
// Release Date: 9 Jan 2018
// Created by the Bx team at OSREC Technologies (https://osrec.co.uk)
//
// Check out Bx @ https://usebx.com for free invoicing, expenses & project management
// If you use this library in a commercial project, we appreciate a link back to https://osrec.co.uk :)

var OSREC = OSREC || {};

OSREC.CurrencyFormatter = {
  symbols: {
    AED: "د.إ.‏",
    AFN: "؋",
    ALL: "Lekë",
    AMD: "֏",
    ANG: "Naf",
    AOA: "Kz",
    ARS: "$",
    AUD: "$",
    AWG: "Afl.",
    AZN: "₼",
    BAM: "KM",
    BBD: "$",
    BDT: "৳",
    BGN: "лв.",
    BHD: "د.ب.‏",
    BIF: "FBu",
    BMD: "$",
    BND: "$",
    BOB: "Bs",
    BRL: "R$",
    BSD: "$",
    BTN: "Nu.",
    BWP: "P",
    BYN: "p.",
    BYR: "р.",
    BZD: "$",
    CAD: "$",
    CDF: "FC",
    CHF: "CHF",
    CLP: "$",
    CNY: "￥",
    COP: "$",
    CRC: "₡",
    CUC: "$",
    CUP: "$",
    CVE: "​",
    CZK: "Kč",
    DJF: "Fdj",
    DKK: "kr",
    DOP: "$",
    DZD: "DA",
    EGP: "£",
    ERN: "Nfk",
    ETB: "Br",
    EUR: "€",
    FJD: "$",
    FKP: "£",
    GBP: "£",
    GEL: "₾",
    GHS: "GH₵",
    GIP: "£",
    GMD: "D",
    GNF: "FG",
    GTQ: "Q",
    GYD: "$",
    HKD: "HK$",
    HNL: "L",
    HRK: "kn",
    HTG: "G",
    HUF: "Ft",
    IDR: "Rp",
    ILS: "₪",
    INR: "₹",
    IQD: "د.ع.‏",
    IRR: "ریال",
    ISK: "kr",
    JMD: "$",
    JOD: "د.أ.‏",
    JPY: "¥",
    KES: "Ksh",
    KGS: "сом",
    KHR: "៛",
    KMF: "CF",
    KPW: "₩",
    KRW: "₩",
    KWD: "د.ك.‏",
    KYD: "$",
    KZT: "₸",
    LAK: "₭",
    LBP: "L£",
    LKR: "Rs",
    LRD: "$",
    LSL: "lLS",
    LYD: "د.ل.‏",
    MAD: "د.م.‏",
    MDL: "L",
    MGA: "Ar",
    MKD: "den",
    MMK: "K",
    MNT: "₮",
    MOP: "MOP$",
    MRO: "UM",
    MRU: "UM",
    MUR: "Rs",
    MWK: "MK",
    MXN: "$",
    MYR: "RM",
    MZN: "MTn",
    NAD: "$",
    NGN: "₦",
    NIO: "C$",
    NOK: "kr",
    NPR: "Rs",
    NZD: "$",
    OMR: "ر.ع.‏",
    PAB: "B/.",
    PEN: "S/.",
    PGK: "K",
    PHP: "₱",
    PKR: "ر",
    PLN: "zł",
    PYG: "₲",
    QAR: "ر.ق.‏",
    RON: "lei",
    RSD: "дин.",
    RUB: "₽",
    RWF: "RF",
    SAR: "ر.س.‏",
    SBD: "$",
    SCR: "SR",
    SDG: "ج.س.",
    SEK: "kr",
    SGD: "$",
    SHP: "£",
    SLL: "Le",
    SOS: "S",
    SRD: "$",
    SSP: "£",
    STD: "Db",
    STN: "Db",
    SYP: "£",
    SZL: "E",
    THB: "฿",
    TMT: "ТМТ",
    TND: "DT",
    TOP: "T$",
    TRY: "₺",
    TTD: "$",
    TWD: "$",
    TZS: "TSh",
    UAH: "₴",
    UGX: "USh",
    USD: "$",
    UYU: "$",
    UZS: "сўм",
    VEF: "Bs",
    VND: "₫",
    VUV: "VT",
    WST: "WS$",
    XAF: "FCFA",
    XCD: "$",
    XOF: "CFA",
    XPF: "CFP",
    YER: "ر.ي.‏",
    ZAR: "R",
    ZMW: "K",
  },

  // all others have 2 decimal places
  decimalPlaces: {
    BIF: 0,
    CLP: 0,
    DJF: 0,
    GNF: 0,
    ISK: 0,
    JPY: 0,
    KRW: 0,
    PYG: 0,
    RWF: 0,
    UGX: 0,
    VND: 0,
    VUV: 0,
    XPF: 0,
    BHD: 3,
    IQD: 3,
    JOD: 3,
    KWD: 3,
    LYD: 3,
    OMR: 3,
    TND: 3,
  },

  defaultLocales: {
    AED: "ar_AE",
    AFN: "fa_AF",
    ALL: "sq",
    AMD: "hy",
    ANG: "nl",
    AOA: "pt_AO",
    ARS: "es_AR",
    AUD: "en",
    AWG: "nl_AW",
    AZN: "az",
    BAM: "bs",
    BBD: "en_BB",
    BDT: "bn_BD",
    BGN: "bg",
    BHD: "ar_BH",
    BIF: "fr_BI",
    BMD: "en_BM",
    BND: "ms_BN",
    BOB: "es_BO",
    BRL: "pt_BR",
    BSD: "en_BS",
    BTN: "dz",
    BWP: "en_BW",
    BYN: "be",
    BYR: "be",
    BZD: "en_BZ",
    CAD: "en_CA",
    CDF: "fr_CD",
    CHF: "de_CH",
    CLP: "es_CL",
    CNY: "zh_Hans_CN",
    COP: "es_CO",
    CRC: "es_CR",
    CUP: "es_CU",
    CVE: "pt_CV",
    CZK: "cs",
    DJF: "fr_DJ",
    DKK: "da_DK",
    DOP: "es_DO",
    DZD: "ar_DZ",
    EGP: "ar_EG",
    ERN: "ti_ER",
    ETB: "am",
    EUR: "de",
    FJD: "en_FJ",
    FKP: "en_FK",
    GBP: "en",
    GEL: "ka",
    GHS: "en_GH",
    GIP: "en_GI",
    GMD: "en_GM",
    GNF: "fr_GN",
    GTQ: "es_GT",
    GYD: "en_GY",
    HKD: "zh_Hans_HK",
    HNL: "es_HN",
    HRK: "hr_HR",
    HTG: "en",
    HUF: "hu_HU",
    IDR: "id",
    ILS: "he",
    INR: "en_IN",
    IQD: "ar_IQ",
    IRR: "fa_IR",
    ISK: "is",
    JMD: "en_JM",
    JOD: "ar_JO",
    JPY: "ja",
    KES: "en_KE",
    KGS: "ky",
    KHR: "km",
    KMF: "ar",
    KPW: "ko_KP",
    KRW: "ko_KR",
    KWD: "ar_KW",
    KYD: "en_KY",
    KZT: "kk",
    LAK: "lo",
    LBP: "ar_LB",
    LKR: "si",
    LRD: "en_LR",
    LSL: "en_LS",
    LYD: "ar_LY",
    MAD: "ar",
    MDL: "ro",
    MGA: "fr_MG",
    MKD: "mk",
    MMK: "my",
    MNT: "mn",
    MOP: "zh",
    MRO: "ar_MR",
    MRU: "ar_MR",
    MUR: "en_MU",
    MVR: "en",
    MWK: "en",
    MXN: "es_MX",
    MYR: "ms_MY",
    MZN: "pt_MZ",
    NAD: "en_NA",
    NGN: "en_NG",
    NIO: "es_NI",
    NOK: "nb_NO",
    NPR: "ne",
    NZD: "en_NZ",
    OMR: "ar_OM",
    PAB: "es_PA",
    PEN: "es_PE",
    PGK: "en_PG",
    PHP: "fil",
    PKR: "ur_PK",
    PLN: "pl",
    PYG: "es_PY",
    QAR: "ar_QA",
    RON: "ro",
    RSD: "sr",
    RUB: "ru",
    RWF: "rw",
    SAR: "ar_SA",
    SBD: "en_SB",
    SCR: "en_SC",
    SDG: "ar_SD",
    SEK: "sv_SE",
    SGD: "en_SG",
    SHP: "en_SH",
    SLL: "en_SL",
    SOS: "so_SO",
    SRD: "nl_SR",
    SSP: "en",
    STD: "pt_ST",
    STN: "pt_ST",
    SYP: "ar_SY",
    SZL: "en_SZ",
    THB: "th",
    TJS: "en",
    TMT: "tk",
    TND: "ar_TN",
    TOP: "to",
    TRY: "tr_TR",
    TTD: "en_TT",
    TWD: "zh_Hant_TW",
    TZS: "sw_TZ",
    UAH: "uk",
    UGX: "en_UG",
    USD: "en_US",
    UYU: "es_UY",
    UZS: "uz",
    VEF: "es_VE",
    VND: "vi",
    VUV: "en_BI",
    WST: "en_AS",
    XAF: "fr",
    XCD: "en",
    XOF: "fr",
    XPF: "fr_PF",
    YER: "ar_YE",
    ZAR: "zu",
    ZMW: "en_ZM",
    ZWL: "en_ZW",
  },

  locales: {
    af: { p: "!#,##0.00", g: " ", d: "," },
    af_NA: { h: "af" },
    af_ZA: { h: "af" },
    agq: { p: "#,##0.00!", g: " ", d: "," },
    agq_CM: { h: "agq" },
    ak: { p: "!#,##0.00", g: ",", d: "." },
    ak_GH: { h: "ak" },
    am: { p: "!#,##0.00", g: ",", d: "." },
    am_ET: { h: "am" },
    ar: { p: "! #,##0.00", g: ",", d: "." },
    ar_001: { h: "ar" },
    ar_AE: { h: "ar" },
    ar_BH: { p: "! #,##0.000", g: ",", d: "." },
    ar_DJ: { h: "ar" },
    ar_DZ: { p: "! #,##0.00", g: ".", d: "," },
    ar_EG: { h: "ar" },
    ar_EH: { h: "ar" },
    ar_ER: { h: "ar" },
    ar_IL: { h: "ar" },
    ar_IQ: { p: "! #,##0.000", g: ",", d: "." },
    ar_JO: { p: "! #,##0.000", g: ",", d: "." },
    ar_KM: { h: "ar" },
    ar_KW: { p: "! #,##0.000", g: ",", d: "." },
    ar_LB: { p: "! #,##0.00", g: ".", d: "," },
    ar_LY: { p: "! #,##0.000", g: ".", d: "," },
    ar_MA: { p: "! #,##0.00", g: ".", d: "," },
    ar_MR: { p: "! #,##0.00", g: ".", d: "," },
    ar_OM: { p: "! #,##0.000", g: ".", d: "," },
    ar_PS: { h: "ar" },
    ar_QA: { h: "ar" },
    ar_SA: { h: "ar" },
    ar_SD: { h: "ar" },
    ar_SO: { h: "ar" },
    ar_SS: { h: "ar" },
    ar_SY: { h: "ar" },
    ar_TD: { h: "ar" },
    ar_TN: { p: "! #,##0.000", g: ".", d: "," },
    ar_YE: { h: "ar" },
    as: { p: "! #,##,##0.00", g: ",", d: "." },
    as_IN: { h: "as" },
    asa: { p: "#,##0.00 !", g: ",", d: "." },
    asa_TZ: { h: "asa" },
    ast: { p: "#,##0.00 !", g: ".", d: "," },
    ast_ES: { h: "ast" },
    az: { p: "! #,##0.00", g: ".", d: "," },
    az_Cyrl: { h: "az" },
    az_Cyrl_AZ: { h: "az" },
    az_Latn: { h: "az" },
    az_Latn_AZ: { h: "az" },
    bas: { p: "#,##0.00 !", g: " ", d: "," },
    bas_CM: { h: "bas" },
    be: { p: "#,##0.00 !", g: " ", d: "," },
    be_BY: { h: "be" },
    bem: { p: "!#,##0.00", g: ",", d: "." },
    bem_ZM: { h: "bem" },
    bez: { p: "#,##0.00!", g: ",", d: "." },
    bez_TZ: { h: "bez" },
    bg: { p: "#,##0.00 !", g: " ", d: "," },
    bg_BG: { h: "bg" },
    bm: { p: "!#,##0.00", g: ",", d: "." },
    bm_ML: { h: "bm" },
    bn: { p: "#,##,##0.00!", g: ",", d: "." },
    bn_BD: { h: "bn" },
    bn_IN: { h: "bn" },
    bo: { p: "! #,##0.00", g: ",", d: "." },
    bo_CN: { h: "bo" },
    bo_IN: { h: "bo" },
    br: { p: "#,##0.00 !", g: " ", d: "," },
    br_FR: { h: "br" },
    brx: { p: "! #,##,##0.00", g: ",", d: "." },
    brx_IN: { h: "brx" },
    bs: { p: "#,##0.00 !", g: ".", d: "," },
    bs_Cyrl: { h: "bs" },
    bs_Cyrl_BA: { h: "bs" },
    bs_Latn: { h: "bs" },
    bs_Latn_BA: { h: "bs" },
    ca: { p: "#,##0.00 !", g: ".", d: "," },
    ca_AD: { h: "ca" },
    ca_ES: { h: "ca" },
    ca_ES_VALENCIA: { h: "ca" },
    ca_FR: { h: "ca" },
    ca_IT: { h: "ca" },
    ce: { p: "#,##0.00 !", g: ",", d: "." },
    ce_RU: { h: "ce" },
    cgg: { p: "!#,##0.00", g: ",", d: "." },
    cgg_UG: { h: "cgg" },
    chr: { p: "!#,##0.00", g: ",", d: "." },
    chr_US: { h: "chr" },
    ckb: { p: "!#,##0.00", g: ",", d: "." },
    ckb_IQ: { h: "ckb" },
    ckb_IR: { h: "ckb" },
    cs: { p: "#,##0.00 !", g: " ", d: "," },
    cs_CZ: { h: "cs" },
    cu: { p: "#,##0.00 !", g: " ", d: "," },
    cu_RU: { h: "cu" },
    cy: { p: "!#,##0.00", g: ",", d: "." },
    cy_GB: { h: "cy" },
    da: { p: "#,##0.00 !", g: ".", d: "," },
    da_DK: { h: "da" },
    da_GL: { h: "da" },
    dav: { p: "!#,##0.00", g: ",", d: "." },
    dav_KE: { h: "dav" },
    de: { p: "#,##0.00 !", g: ".", d: "," },
    de_AT: { p: "! #,##0.00", g: " ", d: "," },
    de_BE: { h: "de" },
    de_CH: { p: "! #,##0.00;!-#,##0.00", g: "'", d: "." },
    de_DE: { h: "de" },
    de_LI: { p: "! #,##0.00", g: "'", d: "." },
    de_LU: { h: "de" },
    dje: { p: "#,##0.00!", g: " ", d: "." },
    dje_NE: { h: "dje" },
    dsb: { p: "#,##0.00 !", g: ".", d: "," },
    dsb_DE: { h: "dsb" },
    dua: { p: "#,##0.00 !", g: " ", d: "," },
    dua_CM: { h: "dua" },
    dyo: { p: "#,##0.00 !", g: " ", d: "," },
    dyo_SN: { h: "dyo" },
    dz: { p: "!#,##,##0.00", g: ",", d: "." },
    dz_BT: { h: "dz" },
    ebu: { p: "!#,##0.00", g: ",", d: "." },
    ebu_KE: { h: "ebu" },
    ee: { p: "!#,##0.00", g: ",", d: "." },
    ee_GH: { h: "ee" },
    ee_TG: { h: "ee" },
    el: { p: "#,##0.00 !", g: ".", d: "," },
    el_CY: { h: "el" },
    el_GR: { h: "el" },
    en: { p: "!#,##0.00", g: ",", d: "." },
    en_001: { h: "en" },
    en_150: { p: "#,##0.00 !", g: ".", d: "," },
    en_AG: { h: "en" },
    en_AI: { h: "en" },
    en_AS: { h: "en" },
    en_AT: { p: "! #,##0.00", g: ",", d: "." },
    en_AU: { h: "en" },
    en_BB: { h: "en" },
    en_BE: { p: "#,##0.00 !", g: ".", d: "," },
    en_BI: { p: "!#,##0", g: ",", d: "." },
    en_BM: { h: "en" },
    en_BS: { h: "en" },
    en_BW: { h: "en" },
    en_BZ: { h: "en" },
    en_CA: { h: "en" },
    en_CC: { h: "en" },
    en_CH: { p: "! #,##0.00;!-#,##0.00", g: ",", d: "." },
    en_CK: { h: "en" },
    en_CM: { h: "en" },
    en_CX: { h: "en" },
    en_CY: { h: "en" },
    en_DE: { h: "en" },
    en_DG: { h: "en" },
    en_DK: { h: "en" },
    en_DM: { h: "en" },
    en_ER: { h: "en" },
    en_FI: { p: "!#,##0.00", g: " ", d: "." },
    en_FJ: { h: "en" },
    en_FK: { h: "en" },
    en_FM: { h: "en" },
    en_GB: { h: "en" },
    en_GD: { h: "en" },
    en_GG: { h: "en" },
    en_GH: { h: "en" },
    en_GI: { h: "en" },
    en_GM: { h: "en" },
    en_GU: { h: "en" },
    en_GY: { h: "en" },
    en_HK: { h: "en" },
    en_IE: { h: "en" },
    en_IL: { h: "en" },
    en_IM: { h: "en" },
    en_IN: { p: "! #,##,##0.00", g: ",", d: "." },
    en_IO: { h: "en" },
    en_JE: { h: "en" },
    en_JM: { h: "en" },
    en_KE: { h: "en" },
    en_KI: { h: "en" },
    en_KN: { h: "en" },
    en_KY: { h: "en" },
    en_LC: { h: "en" },
    en_LR: { h: "en" },
    en_LS: { h: "en" },
    en_MG: { h: "en" },
    en_MH: { h: "en" },
    en_MO: { h: "en" },
    en_MP: { h: "en" },
    en_MS: { h: "en" },
    en_MT: { h: "en" },
    en_MU: { h: "en" },
    en_MW: { h: "en" },
    en_MY: { h: "en" },
    en_NA: { h: "en" },
    en_NF: { h: "en" },
    en_NG: { h: "en" },
    en_NL: { p: "! #,##0.00;! -#,##0.00", g: ",", d: "." },
    en_NR: { h: "en" },
    en_NU: { h: "en" },
    en_NZ: { h: "en" },
    en_PG: { h: "en" },
    en_PH: { h: "en" },
    en_PK: { h: "en" },
    en_PN: { h: "en" },
    en_PR: { h: "en" },
    en_PW: { h: "en" },
    en_RW: { h: "en" },
    en_SB: { h: "en" },
    en_SC: { h: "en" },
    en_SD: { h: "en" },
    en_SE: { p: "!#,##0.00", g: " ", d: "." },
    en_SG: { h: "en" },
    en_SH: { h: "en" },
    en_SI: { h: "en" },
    en_SL: { h: "en" },
    en_SS: { h: "en" },
    en_SX: { h: "en" },
    en_SZ: { h: "en" },
    en_TC: { h: "en" },
    en_TK: { h: "en" },
    en_TO: { h: "en" },
    en_TT: { h: "en" },
    en_TV: { h: "en" },
    en_TZ: { h: "en" },
    en_UG: { p: "!#,##0", g: ",", d: "." },
    en_UM: { h: "en" },
    en_US: { h: "en" },
    en_US_POSIX: { p: "! #0.00", g: ",", d: "." },
    en_VC: { h: "en" },
    en_VG: { h: "en" },
    en_VI: { h: "en" },
    en_VU: { h: "en" },
    en_WS: { h: "en" },
    en_ZA: { p: "!#,##0.00", g: " ", d: "," },
    en_ZM: { h: "en" },
    en_ZW: { h: "en" },
    eo: { p: "!#,##0.00", g: " ", d: "," },
    eo_001: { h: "eo" },
    es: { p: "#,##0.00 !", g: ".", d: "," },
    es_419: { p: "!#,##0.00", g: ",", d: "." },
    es_AR: { p: "! #,##0.00", g: ".", d: "," },
    es_BO: { h: "es" },
    es_BR: { h: "es" },
    es_CL: { p: "!#,##0;!-#,##0", g: ".", d: "," },
    es_CO: { p: "! #,##0.00", g: ".", d: "," },
    es_CR: { p: "#,##0.00 !", g: " ", d: "," },
    es_CU: { h: "es" },
    es_DO: { h: "es" },
    es_EA: { h: "es" },
    es_EC: { p: "!#,##0.00;!-#,##0.00", g: ".", d: "," },
    es_ES: { h: "es" },
    es_GQ: { p: "!#,##0.00", g: ".", d: "," },
    es_GT: { h: "es" },
    es_HN: { h: "es" },
    es_IC: { h: "es" },
    es_MX: { h: "es" },
    es_NI: { h: "es" },
    es_PA: { h: "es" },
    es_PE: { h: "es" },
    es_PH: { h: "es" },
    es_PR: { h: "es" },
    es_PY: { p: "! #,##0;! -#,##0", g: ".", d: "," },
    es_SV: { h: "es" },
    es_US: { h: "es" },
    es_UY: { p: "! #,##0.00", g: ".", d: "," },
    es_VE: { p: "!#,##0.00;!-#,##0.00", g: ".", d: "," },
    et: { p: "#,##0.00 !", g: " ", d: "," },
    et_EE: { h: "et" },
    eu: { p: "#,##0.00 !", g: ".", d: "," },
    eu_ES: { h: "eu" },
    ewo: { p: "#,##0.00 !", g: " ", d: "," },
    ewo_CM: { h: "ewo" },
    fa: { p: "‎!#,##0.00", g: ",", d: "." },
    fa_AF: { h: "fa" },
    fa_IR: { h: "fa" },
    ff: { p: "#,##0.00 !", g: " ", d: "," },
    ff_CM: { h: "ff" },
    ff_GN: { h: "ff" },
    ff_MR: { h: "ff" },
    ff_SN: { h: "ff" },
    fi: { p: "#,##0.00 !", g: " ", d: "," },
    fi_FI: { h: "fi" },
    fil: { p: "!#,##0.00", g: ",", d: "." },
    fil_PH: { h: "fil" },
    fo: { p: "#,##0.00 !", g: ".", d: "," },
    fo_DK: { h: "fo" },
    fo_FO: { h: "fo" },
    fr: { p: "#,##0.00 !", g: " ", d: "," },
    fr_BE: { p: "#,##0.00 !", g: ".", d: "," },
    fr_BF: { h: "fr" },
    fr_BI: { p: "#,##0 !", g: ".", d: "," },
    fr_BJ: { h: "fr" },
    fr_BL: { h: "fr" },
    fr_CA: { h: "fr" },
    fr_CD: { h: "fr" },
    fr_CF: { h: "fr" },
    fr_CG: { h: "fr" },
    fr_CH: { p: "! #,##0.00;!-#,##0.00", g: " ", d: "." },
    fr_CI: { h: "fr" },
    fr_CM: { h: "fr" },
    fr_DJ: { p: "! #,##0;!-#,##0", g: " ", d: "." },
    fr_DZ: { h: "fr" },
    fr_FR: { h: "fr" },
    fr_GA: { h: "fr" },
    fr_GF: { h: "fr" },
    fr_GN: { p: "! #,##0;!-#,##0", g: " ", d: "." },
    fr_GP: { h: "fr" },
    fr_GQ: { h: "fr" },
    fr_HT: { h: "fr" },
    fr_KM: { h: "fr" },
    fr_LU: { p: "#,##0.00 !", g: ".", d: "," },
    fr_MA: { p: "#,##0.00 !", g: ".", d: "," },
    fr_MC: { h: "fr" },
    fr_MF: { h: "fr" },
    fr_MG: { h: "fr" },
    fr_ML: { h: "fr" },
    fr_MQ: { h: "fr" },
    fr_MR: { h: "fr" },
    fr_MU: { h: "fr" },
    fr_NC: { h: "fr" },
    fr_NE: { h: "fr" },
    fr_PF: { p: "#,##0 !", g: " ", d: "," },
    fr_PM: { h: "fr" },
    fr_RE: { h: "fr" },
    fr_RW: { h: "fr" },
    fr_SC: { h: "fr" },
    fr_SN: { h: "fr" },
    fr_SY: { h: "fr" },
    fr_TD: { h: "fr" },
    fr_TG: { h: "fr" },
    fr_TN: { h: "fr" },
    fr_VU: { h: "fr" },
    fr_WF: { h: "fr" },
    fr_YT: { h: "fr" },
    fur: { p: "! #,##0.00", g: ".", d: "," },
    fur_IT: { h: "fur" },
    fy: { p: "! #,##0.00;! #,##0.00-", g: ".", d: "," },
    fy_NL: { h: "fy" },
    ga: { p: "!#,##0.00", g: ",", d: "." },
    ga_IE: { h: "ga" },
    gd: { p: "!#,##0.00", g: ",", d: "." },
    gd_GB: { h: "gd" },
    gl: { p: "#,##0.00 !", g: ".", d: "," },
    gl_ES: { h: "gl" },
    gsw: { p: "#,##0.00 !", g: "’", d: "." },
    gsw_CH: { h: "gsw" },
    gsw_FR: { h: "gsw" },
    gsw_LI: { h: "gsw" },
    gu: { p: "!#,##,##0.00", g: ",", d: "." },
    gu_IN: { h: "gu" },
    guz: { p: "!#,##0.00", g: ",", d: "." },
    guz_KE: { h: "guz" },
    gv: { p: "!#,##0.00", g: ",", d: "." },
    gv_IM: { h: "gv" },
    ha: { p: "! #,##0.00", g: ",", d: "." },
    ha_GH: { h: "ha" },
    ha_NE: { h: "ha" },
    ha_NG: { h: "ha" },
    haw: { p: "!#,##0.00", g: ",", d: "." },
    haw_US: { h: "haw" },
    he: { p: "#,##0.00 !", g: ",", d: "." },
    he_IL: { h: "he" },
    hi: { p: "!#,##,##0.00", g: ",", d: "." },
    hi_IN: { h: "hi" },
    hr: { p: "#,##0.00 !", g: ".", d: "," },
    hr_BA: { h: "hr" },
    hr_HR: { h: "hr" },
    hsb: { p: "#,##0.00 !", g: ".", d: "," },
    hsb_DE: { h: "hsb" },
    hu: { p: "#,##0.00 !", g: " ", d: "," },
    hu_HU: { h: "hu" },
    hy: { p: "! #,##0.00", g: ".", d: "," },
    hy_AM: { h: "hy" },
    id: { p: "!#,##0.00", g: ".", d: "," },
    id_ID: { h: "id" },
    ig: { p: "!#,##0.00", g: ",", d: "." },
    ig_NG: { h: "ig" },
    ii: { p: "!#,##0.00", g: ",", d: "." },
    ii_CN: { h: "ii" },
    is: { p: "#,##0 !", g: ".", d: "," },
    is_IS: { h: "is" },
    it: { p: "#,##0.00 !", g: ".", d: "," },
    it_CH: { p: "! #,##0.00;!-#,##0.00", g: "'", d: "." },
    it_IT: { h: "it" },
    it_SM: { h: "it" },
    ja: { p: "!#,##0", g: ",", d: "." },
    ja_JP: { h: "ja" },
    jgo: { p: "! #,##0.00", g: ".", d: "," },
    jgo_CM: { h: "jgo" },
    jmc: { p: "!#,##0.00", g: ",", d: "." },
    jmc_TZ: { h: "jmc" },
    ka: { p: "#,##0.00 !", g: " ", d: "," },
    ka_GE: { h: "ka" },
    kab: { p: "#,##0.00!", g: " ", d: "," },
    kab_DZ: { h: "kab" },
    kam: { p: "!#,##0.00", g: ",", d: "." },
    kam_KE: { h: "kam" },
    kde: { p: "!#,##0.00", g: ",", d: "." },
    kde_TZ: { h: "kde" },
    kea: { p: "#,##0.00 !", g: " ", d: "," },
    kea_CV: { h: "kea" },
    khq: { p: "#,##0.00!", g: " ", d: "." },
    khq_ML: { h: "khq" },
    ki: { p: "!#,##0.00", g: ",", d: "." },
    ki_KE: { h: "ki" },
    kk: { p: "#,##0.00 !", g: " ", d: "," },
    kk_KZ: { h: "kk" },
    kkj: { p: "!#,##0.00", g: ".", d: "," },
    kkj_CM: { h: "kkj" },
    kl: { p: "!#,##0.00;!-#,##0.00", g: ".", d: "," },
    kl_GL: { h: "kl" },
    kln: { p: "!#,##0.00", g: ",", d: "." },
    kln_KE: { h: "kln" },
    km: { p: "!#,##0.00", g: ".", d: "," },
    km_KH: { h: "km" },
    kn: { p: "!#,##0.00", g: ",", d: "." },
    kn_IN: { h: "kn" },
    ko: { p: "!#,##0", g: ",", d: "." },
    ko_KP: { h: "ko" },
    ko_KR: { p: "!#,##0", g: ",", d: "." },
    kok: { p: "! #,##,##0.00", g: ",", d: "." },
    kok_IN: { h: "kok" },
    ks: { p: "! #,##,##0.00", g: ",", d: "." },
    ks_IN: { h: "ks" },
    ksb: { p: "#,##0.00!", g: ",", d: "." },
    ksb_TZ: { h: "ksb" },
    ksf: { p: "#,##0.00 !", g: " ", d: "," },
    ksf_CM: { h: "ksf" },
    ksh: { p: "#,##0.00 !", g: " ", d: "," },
    ksh_DE: { h: "ksh" },
    kw: { p: "!#,##0.00", g: ",", d: "." },
    kw_GB: { h: "kw" },
    ky: { p: "#,##0.00 !", g: " ", d: "," },
    ky_KG: { h: "ky" },
    lag: { p: "!#,##0.00", g: ",", d: "." },
    lag_TZ: { h: "lag" },
    lb: { p: "#,##0.00 !", g: ".", d: "," },
    lb_LU: { h: "lb" },
    lg: { p: "#,##0.00!", g: ",", d: "." },
    lg_UG: { h: "lg" },
    lkt: { p: "!#,##0.00", g: ",", d: "." },
    lkt_US: { h: "lkt" },
    ln: { p: "#,##0.00 !", g: ".", d: "," },
    ln_AO: { h: "ln" },
    ln_CD: { h: "ln" },
    ln_CF: { h: "ln" },
    ln_CG: { h: "ln" },
    lo: { p: "!#,##0.00;!-#,##0.00", g: ".", d: "," },
    lo_LA: { h: "lo" },
    lrc: { p: "! #,##0.00", g: ",", d: "." },
    lrc_IQ: { h: "lrc" },
    lrc_IR: { h: "lrc" },
    lt: { p: "#,##0.00 !", g: " ", d: "," },
    lt_LT: { h: "lt" },
    lu: { p: "#,##0.00!", g: ".", d: "," },
    lu_CD: { h: "lu" },
    luo: { p: "#,##0.00!", g: ",", d: "." },
    luo_KE: { h: "luo" },
    luy: { p: "!#,##0.00;!- #,##0.00", g: ",", d: "." },
    luy_KE: { h: "luy" },
    lv: { p: "#0.00 !", g: " ", d: "," },
    lv_LV: { h: "lv" },
    mas: { p: "!#,##0.00", g: ",", d: "." },
    mas_KE: { h: "mas" },
    mas_TZ: { h: "mas" },
    mer: { p: "!#,##0.00", g: ",", d: "." },
    mer_KE: { h: "mer" },
    mfe: { p: "!#,##0.00", g: " ", d: "." },
    mfe_MU: { h: "mfe" },
    mg: { p: "!#,##0.00", g: ",", d: "." },
    mg_MG: { h: "mg" },
    mgh: { p: "!#,##0.00", g: ".", d: "," },
    mgh_MZ: { h: "mgh" },
    mgo: { p: "! #,##0.00", g: ",", d: "." },
    mgo_CM: { h: "mgo" },
    mk: { p: "! #,##0.00", g: ".", d: "," },
    mk_MK: { h: "mk" },
    ml: { p: "!#,##0.00", g: ",", d: "." },
    ml_IN: { h: "ml" },
    mn: { p: "! #,##0.00", g: ",", d: "." },
    mn_MN: { h: "mn" },
    mr: { p: "!#,##0.00", g: ",", d: "." },
    mr_IN: { h: "mr" },
    ms: { p: "!#,##0.00", g: ",", d: "." },
    ms_BN: { p: "! #,##0.00", g: ".", d: "," },
    ms_MY: { h: "ms" },
    ms_SG: { h: "ms" },
    mt: { p: "!#,##0.00", g: ",", d: "." },
    mt_MT: { h: "mt" },
    mua: { p: "!#,##0.00", g: ".", d: "," },
    mua_CM: { h: "mua" },
    my: { p: "! #,##0.00", g: ",", d: "." },
    my_MM: { h: "my" },
    mzn: { p: "!#,##0.00", g: ",", d: "." },
    mzn_IR: { h: "mzn" },
    naq: { p: "!#,##0.00", g: ",", d: "." },
    naq_NA: { h: "naq" },
    nb: { p: "! #,##0.00", g: " ", d: "," },
    nb_NO: { h: "nb" },
    nb_SJ: { h: "nb" },
    nd: { p: "!#,##0.00", g: ",", d: "." },
    nd_ZW: { h: "nd" },
    ne: { p: "! #,##0.00", g: ",", d: "." },
    ne_IN: { h: "ne" },
    ne_NP: { h: "ne" },
    nl: { p: "! #,##0.00;! -#,##0.00", g: ".", d: "," },
    nl_AW: { h: "nl" },
    nl_BE: { p: "#,##0.00 !", g: ".", d: "," },
    nl_BQ: { h: "nl" },
    nl_CW: { h: "nl" },
    nl_NL: { h: "nl" },
    nl_SR: { h: "nl" },
    nl_SX: { h: "nl" },
    nmg: { p: "#,##0.00 !", g: " ", d: "," },
    nmg_CM: { h: "nmg" },
    nn: { p: "#,##0.00 !", g: " ", d: "," },
    nn_NO: { h: "nn" },
    nnh: { p: "! #,##0.00", g: ".", d: "," },
    nnh_CM: { h: "nnh" },
    nus: { p: "!#,##0.00", g: ",", d: "." },
    nus_SS: { h: "nus" },
    nyn: { p: "!#,##0.00", g: ",", d: "." },
    nyn_UG: { h: "nyn" },
    om: { p: "!#,##0.00", g: ",", d: "." },
    om_ET: { h: "om" },
    om_KE: { h: "om" },
    or: { p: "! #,##,##0.00", g: ",", d: "." },
    or_IN: { h: "or" },
    os: { p: "! #,##0.00", g: " ", d: "," },
    os_GE: { h: "os" },
    os_RU: { h: "os" },
    pa: { p: "! #,##,##0.00", g: ",", d: "." },
    pa_Arab: { h: "pa" },
    pa_Arab_PK: { h: "pa" },
    pa_Guru: { h: "pa" },
    pa_Guru_IN: { h: "pa" },
    pl: { p: "#,##0.00 !", g: " ", d: "," },
    pl_PL: { h: "pl" },
    prg: { p: "#,##0.00 !", g: " ", d: "," },
    prg_001: { h: "prg" },
    ps: { p: "#,##0.00 !", g: ".", d: "," },
    ps_AF: { h: "ps" },
    pt: { p: "!#,##0.00", g: ".", d: "," },
    pt_AO: { h: "pt" },
    pt_BR: { h: "pt" },
    pt_CH: { h: "pt" },
    pt_CV: { p: "!#,##0", g: ".", d: "," },
    pt_GQ: { h: "pt" },
    pt_GW: { h: "pt" },
    pt_LU: { h: "pt" },
    pt_MO: { h: "pt" },
    pt_MZ: { h: "pt" },
    pt_PT: { p: "#,##0.00 !", g: " ", d: "," },
    pt_ST: { h: "pt" },
    pt_TL: { h: "pt" },
    qu: { p: "! #,##0.00", g: ",", d: "." },
    qu_BO: { p: "! #,##0.00", g: ".", d: "," },
    qu_EC: { h: "qu" },
    qu_PE: { h: "qu" },
    rm: { p: "#,##0.00 !", g: "’", d: "." },
    rm_CH: { h: "rm" },
    rn: { p: "#,##0.00!", g: ".", d: "," },
    rn_BI: { h: "rn" },
    ro: { p: "#,##0.00 !", g: ".", d: "," },
    ro_MD: { h: "ro" },
    ro_RO: { h: "ro" },
    rof: { p: "!#,##0.00", g: ",", d: "." },
    rof_TZ: { h: "rof" },
    root: { p: "! #,##0.00", g: ",", d: "." },
    ru: { p: "#,##0.00 !", g: " ", d: "," },
    ru_BY: { h: "ru" },
    ru_KG: { h: "ru" },
    ru_KZ: { h: "ru" },
    ru_MD: { h: "ru" },
    ru_RU: { h: "ru" },
    ru_UA: { h: "ru" },
    rw: { p: "!#,##0", g: ".", d: "," },
    rw_RW: { h: "rw" },
    rwk: { p: "#,##0.00!", g: ",", d: "." },
    rwk_TZ: { h: "rwk" },
    sah: { p: "!#,##0.00", g: ",", d: "." },
    sah_RU: { h: "sah" },
    saq: { p: "!#,##0.00", g: ",", d: "." },
    saq_KE: { h: "saq" },
    sbp: { p: "#,##0.00!", g: ",", d: "." },
    sbp_TZ: { h: "sbp" },
    se: { p: "#,##0.00 !", g: " ", d: "," },
    se_FI: { h: "se" },
    se_NO: { h: "se" },
    se_SE: { h: "se" },
    seh: { p: "#,##0.00!", g: ".", d: "," },
    seh_MZ: { h: "seh" },
    ses: { p: "#,##0.00!", g: " ", d: "." },
    ses_ML: { h: "ses" },
    sg: { p: "!#,##0.00;!-#,##0.00", g: ".", d: "," },
    sg_CF: { h: "sg" },
    shi: { p: "#,##0.00!", g: " ", d: "," },
    shi_Latn: { h: "shi" },
    shi_Latn_MA: { h: "shi" },
    shi_Tfng: { h: "shi" },
    shi_Tfng_MA: { h: "shi" },
    si: { p: "!#,##0.00", g: ",", d: "." },
    si_LK: { h: "si" },
    sk: { p: "#,##0.00 !", g: " ", d: "," },
    sk_SK: { h: "sk" },
    sl: { p: "#,##0.00 !", g: ".", d: "," },
    sl_SI: { h: "sl" },
    smn: { p: "!#,##0.00", g: ",", d: "." },
    smn_FI: { h: "smn" },
    sn: { p: "!#,##0.00", g: ",", d: "." },
    sn_ZW: { h: "sn" },
    so: { p: "!#,##0.00", g: ",", d: "." },
    so_DJ: { h: "so" },
    so_ET: { h: "so" },
    so_KE: { h: "so" },
    so_SO: { h: "so" },
    sq: { p: "#,##0.00 !", g: " ", d: "," },
    sq_AL: { h: "sq" },
    sq_MK: { h: "sq" },
    sq_XK: { h: "sq" },
    sr: { p: "#,##0.00 !", g: ".", d: "," },
    sr_Cyrl: { h: "sr" },
    sr_Cyrl_BA: { h: "sr" },
    sr_Cyrl_ME: { h: "sr" },
    sr_Cyrl_RS: { h: "sr" },
    sr_Cyrl_XK: { h: "sr" },
    sr_Latn: { h: "sr" },
    sr_Latn_BA: { h: "sr" },
    sr_Latn_ME: { h: "sr" },
    sr_Latn_RS: { h: "sr" },
    sr_Latn_XK: { h: "sr" },
    sv: { p: "#,##0.00 !", g: " ", d: "," },
    sv_AX: { h: "sv" },
    sv_FI: { h: "sv" },
    sv_SE: { h: "sv" },
    sw: { p: "!#,##0.00", g: ",", d: "." },
    sw_CD: { p: "!#,##0.00", g: ".", d: "," },
    sw_KE: { h: "sw" },
    sw_TZ: { h: "sw" },
    sw_UG: { h: "sw" },
    ta: { p: "! #,##,##0.00", g: ",", d: "." },
    ta_IN: { h: "ta" },
    ta_LK: { h: "ta" },
    ta_MY: { p: "! #,##0.00", g: ",", d: "." },
    ta_SG: { p: "! #,##0.00", g: ",", d: "." },
    te: { p: "!#,##,##0.00", g: ",", d: "." },
    te_IN: { h: "te" },
    teo: { p: "!#,##0.00", g: ",", d: "." },
    teo_KE: { h: "teo" },
    teo_UG: { h: "teo" },
    th: { p: "!#,##0.00", g: ",", d: "." },
    th_TH: { h: "th" },
    ti: { p: "!#,##0.00", g: ",", d: "." },
    ti_ER: { h: "ti" },
    ti_ET: { h: "ti" },
    tk: { p: "#,##0.00 !", g: " ", d: "," },
    tk_TM: { h: "tk" },
    to: { p: "! #,##0.00", g: ",", d: "." },
    to_TO: { h: "to" },
    tr: { p: "#,##0.00 !", g: ".", d: "," },
    tr_CY: { h: "tr" },
    tr_TR: { h: "tr" },
    twq: { p: "#,##0.00!", g: " ", d: "." },
    twq_NE: { h: "twq" },
    tzm: { p: "#,##0.00 !", g: " ", d: "," },
    tzm_MA: { h: "tzm" },
    ug: { p: "!#,##0.00", g: ",", d: "." },
    ug_CN: { h: "ug" },
    uk: { p: "#,##0.00 !", g: " ", d: "," },
    uk_UA: { h: "uk" },
    ur: { p: "! #,##,##0.00", g: ",", d: "." },
    ur_IN: { h: "ur" },
    ur_PK: { h: "ur" },
    uz: { p: "#,##0.00 !", g: " ", d: "," },
    uz_Arab: { p: "#,##0.00 !", g: ".", d: "," },
    uz_Arab_AF: { h: "uz" },
    uz_Cyrl: { p: "! #,##0.00", g: " ", d: "," },
    uz_Cyrl_UZ: { h: "uz" },
    uz_Latn: { h: "uz" },
    uz_Latn_UZ: { h: "uz" },
    vai: { p: "!#,##0.00", g: ",", d: "." },
    vai_Latn: { h: "vai" },
    vai_Latn_LR: { h: "vai" },
    vai_Vaii: { h: "vai" },
    vai_Vaii_LR: { h: "vai" },
    vi: { p: "! #,##0", g: ".", d: "," },
    vi_VN: { h: "vi" },
    vo: { p: "!#,##0.00", g: ",", d: "." },
    vo_001: { h: "vo" },
    vun: { p: "!#,##0.00", g: ",", d: "." },
    vun_TZ: { h: "vun" },
    wae: { p: "!#,##0.00", g: "’", d: "," },
    wae_CH: { h: "wae" },
    xog: { p: "#,##0.00 !", g: ",", d: "." },
    xog_UG: { h: "xog" },
    yav: { p: "#,##0.00 !", g: " ", d: "," },
    yav_CM: { h: "yav" },
    yi: { p: "!#,##0.00", g: ",", d: "." },
    yi_001: { h: "yi" },
    yo: { p: "!#,##0.00", g: ",", d: "." },
    yo_BJ: { h: "yo" },
    yo_NG: { h: "yo" },
    yue: { p: "!#,##0.00", g: ",", d: "." },
    yue_HK: { h: "yue" },
    zgh: { p: "#,##0.00!", g: " ", d: "," },
    zgh_MA: { h: "zgh" },
    zh: { p: "!#,##0.00", g: ",", d: "." },
    zh_Hans: { h: "zh" },
    zh_Hans_CN: { h: "zh" },
    zh_Hans_HK: { h: "zh" },
    zh_Hans_MO: { h: "zh" },
    zh_Hans_SG: { h: "zh" },
    zh_Hant: { h: "zh" },
    zh_Hant_HK: { h: "zh" },
    zh_Hant_MO: { h: "zh" },
    zh_Hant_TW: { h: "zh" },
    zu: { p: "!#,##0.00", g: ",", d: "." },
    zu_ZA: { h: "zu" },
  },

  getFormatDetails: function (p) {
    var locales = OSREC.CurrencyFormatter.locales;
    var defaultLocales = OSREC.CurrencyFormatter.defaultLocales;
    var symbols = OSREC.CurrencyFormatter.symbols;
    var decimalPlaces = OSREC.CurrencyFormatter.decimalPlaces;

    var locale,
      currency,
      symbol,
      pattern,
      decimal,
      group,
      valueOnError,
      mantissaLength;

    // Perform checks on inputs and set up defaults as needed (defaults to en, USD)

    p = p || {};

    currency = (p.currency || "USD").toUpperCase();
    locale = locales[p.locale || defaultLocales[currency]];
    mantissaLength =
      typeof decimalPlaces[currency] !== "undefined"
        ? decimalPlaces[currency]
        : 2;

    if (typeof locale.h !== "undefined") {
      locale = locales[locale.h];
    } // Locale inheritance

    symbol =
      typeof p.symbol === "undefined"
        ? symbols[currency] || currency
        : p.symbol === null
        ? ""
        : p.symbol;
    pattern = p.pattern || locale.p;
    decimal = p.decimal || locale.d;
    group = p.group || locale.g;
    valueOnError = typeof p.valueOnError === "undefined" ? 0 : p.valueOnError;

    var formatDetails = {
      pattern: pattern,
      decimal: decimal,
      group: group,
      symbol: symbol,
      mantissaLength: mantissaLength,
      valueOnError: valueOnError,
      postFormatFunction: p.postFormatFunction,
    };

    return formatDetails;
  },

  toFixed: function (n, precision) {
    return (
      Math.round(Number(n) * Math.pow(10, precision)) / Math.pow(10, precision)
    ).toFixed(precision);
  },

  getFormatter: function (p) {
    var formatDetails = OSREC.CurrencyFormatter.getFormatDetails(p);

    var pattern = formatDetails.pattern;
    var decimal = formatDetails.decimal;
    var group = formatDetails.group;
    var symbol = formatDetails.symbol;
    var mantissaLength = formatDetails.mantissaLength;
    var valueOnError = formatDetails.valueOnError;
    var postFormatFunction = formatDetails.postFormatFunction;

    // encodePattern Function - returns a few simple characteristics of the pattern provided

    var encodePattern = function (pattern) {
      var numberFormatPattern = pattern.trim().match(/[#0,\.]+/)[0];

      var split = numberFormatPattern.split(".");
      var c = split[0]; // Decimal chars
      // mantissa/decimalPlaces should be a function of currency code alone
      var decimalPlaces = mantissaLength;

      var groups = c.split(",");
      var groupLengths = groups.map(function (g) {
        return g.length;
      });
      var zeroLength = (groups[groups.length - 1].match(/0/g) || []).length;

      var paddingSplit = pattern.split(numberFormatPattern);

      var encodedPattern = {
        pattern: pattern,
        decimalPlaces: decimalPlaces,
        frontPadding: paddingSplit[0],
        backPadding: paddingSplit[1],
        groupLengths: groupLengths,
        zeroLength: zeroLength,
      };

      return encodedPattern;
    };

    // Zero Padding helper function

    var pad = function (n, width) {
      n = n + "";
      return n.length >= width
        ? n
        : new Array(width - n.length + 1).join("0") + n;
    };

    // Format function

    var format = function (n, f) {
      var formattedNumber = OSREC.CurrencyFormatter.toFixed(
        Math.abs(n),
        f.decimalPlaces
      );

      var splitNumber = formattedNumber.split(".");

      var segment = "";

      var cursor = splitNumber[0].length;

      var maxGroupIndex = f.groupLengths.length - 1;

      var groupIndex = maxGroupIndex;

      if (maxGroupIndex > 0) {
        while (cursor > 0) {
          if (groupIndex < 1) {
            groupIndex = 1;
          } // Always reset to the last group length (useful for big numbers)

          var currentGroupLength = f.groupLengths[groupIndex];

          var start = cursor - currentGroupLength;

          segment = splitNumber[0].substring(start, cursor) + f.group + segment;

          cursor -= currentGroupLength;

          --groupIndex;
        }

        segment = segment.substring(0, segment.length - 1);
      } else {
        segment = splitNumber[0];
      }

      if (segment.length < f.zeroLength) {
        segment = pad(segment, f.zeroLength);
      }

      var formattedNumber =
        f.frontPadding +
        segment +
        (typeof splitNumber[1] === "undefined"
          ? ""
          : f.decimal + splitNumber[1]) +
        f.backPadding;

      return formattedNumber.replace(/\!/g, symbol).trim();
    };

    // Use encode function to work out pattern

    var patternArray = pattern.split(";");

    var positiveFormat = encodePattern(patternArray[0]);

    positiveFormat.symbol = symbol;
    positiveFormat.decimal = decimal;
    positiveFormat.group = group;

    var negativeFormat =
      typeof patternArray[1] === "undefined"
        ? encodePattern("-" + patternArray[0])
        : encodePattern(patternArray[1]);

    negativeFormat.symbol = symbol;
    negativeFormat.decimal = decimal;
    negativeFormat.group = group;

    var zero =
      typeof patternArray[2] === "undefined"
        ? format(0, positiveFormat)
        : patternArray[2];

    return function (n) {
      if (isNaN(n)) {
        return valueOnError;
      }
      var formattedNumber;
      n = Number(n);
      if (n > 0) {
        formattedNumber = format(n, positiveFormat);
      } else if (n == 0) {
        formattedNumber = zero.replace("!", symbol);
      } else {
        formattedNumber = format(n, negativeFormat);
      }
      return typeof postFormatFunction === "function"
        ? postFormatFunction(n, formattedNumber)
        : formattedNumber;
    };
  },

  formatAll: function (p) {
    var formatter = OSREC.CurrencyFormatter.getFormatter(p);

    var matches = document.querySelectorAll(p.selector);

    for (var i = 0; i < matches.length; ++i) {
      matches[i].innerHTML = formatter(matches[i].textContent);
    }
  },

  formatEach: function (selector) {
    var formatters = {};

    var matches = document.querySelectorAll(selector);

    for (var i = 0; i < matches.length; ++i) {
      try {
        var ccy = matches[i].getAttribute("data-ccy");

        if (typeof formatters[ccy] === "undefined") {
          formatters[ccy] = OSREC.CurrencyFormatter.getFormatter({
            currency: ccy,
          });
        }

        var formatter = formatters[ccy];

        matches[i].innerHTML = formatter(matches[i].textContent);
      } catch (e) {
        console.log(e);
      }
    }
  },

  format: function (n, p) {
    var formatterFunction = OSREC.CurrencyFormatter.getFormatter(p);

    return formatterFunction(n);
  },

  parse: function (str, p) {
    var decimal = OSREC.CurrencyFormatter.getFormatDetails(p).decimal;
    var mult = str.indexOf("-") >= 0 ? -1 : 1;
    return (
      Math.abs(
        Number(
          str
            .replace(new RegExp(`[^0-9${decimal}]`, "g"), "")
            .replace(decimal, ".")
        )
      ) * mult
    );
  },
};

var hasDefine = typeof define === "function";
var hasExports = typeof module !== "undefined" && module.exports;
var root = typeof window === "undefined" ? global : window;

if (hasDefine) {
  // AMD Module
  define([], function () {
    return OSREC.CurrencyFormatter;
  });
} else if (hasExports) {
  // Node.js Module
  module.exports = OSREC.CurrencyFormatter;
} else {
  // Assign to the global object
  // This makes sure that the object really is assigned to the global scope
  root.OSREC = OSREC;
}
