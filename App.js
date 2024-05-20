// const heading = React.createElement("h1",{id: "heading"},"this is created using react")

import React from "react";
import ReactDOM from "react-dom/client";

const JsxHeading = function() {return(<h1>Namaste react</h1>)}

const numm = 10000;



const Header = ()=>{
     return(
          <div className="header" >
               <div className="logo-container">
                    <img className="logo" src="https://penji.co/wp-content/uploads/2022/08/2.-noodles-and-company.jpg"/>
               </div>
               <div className="nav-items">
                    <ul>
                         <li>Home</li>
                         <li>About us</li>
                         <li>Contact us</li>
                         <li>Cart</li>
                    </ul>
               </div>

          </div>
     )
}

const resList = [
     {
       "info": {
         "id": "704921",
         "name": "Chinese Wok",
         "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
         "locality": "Ravipuram",
         "areaName": "M G Road",
         "costForTwo": "₹250 for two",
         "cuisines": [
           "Chinese",
           "Asian",
           "Tibetan",
           "Desserts"
         ],
         "avgRating": 4.2,
         "parentId": "61955",
         "avgRatingString": "4.2",
         "totalRatingsString": "1K+",
         "sla": {
           "deliveryTime": 44,
           "lastMileTravel": 7.3,
           "serviceability": "SERVICEABLE",
           "slaString": "40-45 mins",
           "lastMileTravelString": "7.3 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-21 01:00:00",
           "opened": true
         },
         "badges": {
           
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "ITEMS",
           "subHeader": "AT ₹179"
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/chinese-wok-ravipuram-m-g-road-kochi-704921",
         "type": "WEBLINK"
       }
     },
     {
       "info": {
         "id": "240093",
         "name": "Pizza Hut",
         "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
         "locality": "Fort Kochi",
         "areaName": "Fort Kochi",
         "costForTwo": "₹350 for two",
         "cuisines": [
           "Pizzas"
         ],
         "avgRating": 4.3,
         "parentId": "721",
         "avgRatingString": "4.3",
         "totalRatingsString": "1K+",
         "sla": {
           "deliveryTime": 40,
           "lastMileTravel": 6.6,
           "serviceability": "SERVICEABLE",
           "slaString": "40-45 mins",
           "lastMileTravelString": "6.6 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-21 01:00:00",
           "opened": true
         },
         "badges": {
           "imageBadges": [
             {
               "imageId": "Rxawards/_CATEGORY-Pizza.png",
               "description": "Delivery!"
             }
           ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               "badgeObject": [
                 {
                   "attributes": {
                     "description": "Delivery!",
                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
                   }
                 }
               ]
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "50% OFF",
           "subHeader": "UPTO ₹100"
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/pizza-hut-fort-kochi-kochi-240093",
         "type": "WEBLINK"
       }
     },
     {
       "info": {
         "id": "89572",
         "name": "UBQ by Barbeque Nation",
         "cloudinaryImageId": "rrh9bulv6vcj4ebduth7",
         "locality": "Kacheripadi",
         "areaName": "Kacheripadi",
         "costForTwo": "₹300 for two",
         "cuisines": [
           "North Indian",
           "Barbecue",
           "Biryani",
           "Kebabs",
           "Mughlai",
           "Desserts"
         ],
         "avgRating": 3.9,
         "parentId": "10804",
         "avgRatingString": "3.9",
         "totalRatingsString": "5K+",
         "sla": {
           "deliveryTime": 62,
           "lastMileTravel": 10.5,
           "serviceability": "SERVICEABLE",
           "slaString": "60-65 mins",
           "lastMileTravelString": "10.5 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-20 16:30:00",
           "opened": true
         },
         "badges": {
           
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "50% OFF",
           "subHeader": "UPTO ₹100"
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-kacheripadi-kochi-89572",
         "type": "WEBLINK"
       }
     },
     {
       "info": {
         "id": "301957",
         "name": "Barbeque Nation",
         "cloudinaryImageId": "yv7fq1ypyq9eht2rsafk",
         "locality": "Kacheripadi",
         "areaName": "Kacheripadi",
         "costForTwo": "₹600 for two",
         "cuisines": [
           "Barbecue",
           "Biryani",
           "Kebabs",
           "Mughlai",
           "Desserts"
         ],
         "avgRating": 4,
         "parentId": "2438",
         "avgRatingString": "4.0",
         "totalRatingsString": "1K+",
         "sla": {
           "deliveryTime": 61,
           "lastMileTravel": 10.5,
           "serviceability": "SERVICEABLE",
           "slaString": "60-65 mins",
           "lastMileTravelString": "10.5 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-20 16:30:00",
           "opened": true
         },
         "badges": {
           
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "50% OFF",
           "subHeader": "UPTO ₹100"
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/barbeque-nation-kacheripadi-kochi-301957",
         "type": "WEBLINK"
       }
     },
     {
       "info": {
         "id": "64001",
         "name": "Chicking",
         "cloudinaryImageId": "86f52324ecee5fc94cbf63c4a568b672",
         "locality": "P T Jacob Road",
         "areaName": "Thopumpady",
         "costForTwo": "₹300 for two",
         "cuisines": [
           "Snacks",
           "Grill",
           "Fast Food",
           "American",
           "Pizzas",
           "Mexican",
           "Beverages"
         ],
         "avgRating": 4.3,
         "parentId": "251",
         "avgRatingString": "4.3",
         "totalRatingsString": "5K+",
         "sla": {
           "deliveryTime": 34,
           "lastMileTravel": 2.5,
           "serviceability": "SERVICEABLE",
           "slaString": "30-35 mins",
           "lastMileTravelString": "2.5 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-21 02:00:00",
           "opened": true
         },
         "badges": {
           
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "50% OFF",
           "subHeader": "UPTO ₹100"
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/chicking-p-t-jacob-road-thopumpady-kochi-64001",
         "type": "WEBLINK"
       }
     },
     {
       "info": {
         "id": "747573",
         "name": "Wow! China",
         "cloudinaryImageId": "95982cfa57cb3b7e504f2015c375fd55",
         "locality": "Kazhutumuttu",
         "areaName": "Thoppumpady",
         "costForTwo": "₹400 for two",
         "cuisines": [
           "Tibetan",
           "Chinese",
           "Asian",
           "Snacks",
           "Continental",
           "Desserts",
           "Beverages"
         ],
         "avgRating": 4.3,
         "parentId": "226836",
         "avgRatingString": "4.3",
         "totalRatingsString": "100+",
         "sla": {
           "deliveryTime": 29,
           "lastMileTravel": 2.2,
           "serviceability": "SERVICEABLE",
           "slaString": "25-30 mins",
           "lastMileTravelString": "2.2 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-20 23:00:00",
           "opened": true
         },
         "badges": {
           
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "ITEMS",
           "subHeader": "AT ₹129"
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "isNewlyOnboarded": true,
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/wow-china-kazhutumuttu-thoppumpady-kochi-747573",
         "type": "WEBLINK"
       }
     },
     {
       "info": {
         "id": "524633",
         "name": "Domino's Pizza",
         "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
         "locality": "Jacob Road",
         "areaName": "Thopumpady",
         "costForTwo": "₹400 for two",
         "cuisines": [
           "Pizzas",
           "Italian",
           "Pastas",
           "Desserts"
         ],
         "avgRating": 4.5,
         "parentId": "2456",
         "avgRatingString": "4.5",
         "totalRatingsString": "1K+",
         "sla": {
           "deliveryTime": 25,
           "lastMileTravel": 2.5,
           "serviceability": "SERVICEABLE",
           "slaString": "20-25 mins",
           "lastMileTravelString": "2.5 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-21 02:59:00",
           "opened": true
         },
         "badges": {
           "imageBadges": [
             {
               "imageId": "Rxawards/_CATEGORY-Pizza.png",
               "description": "Delivery!"
             }
           ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               "badgeObject": [
                 {
                   "attributes": {
                     "description": "Delivery!",
                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
                   }
                 }
               ]
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "₹150 OFF",
           "subHeader": "ABOVE ₹299",
           "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/dominos-pizza-jacob-road-thopumpady-kochi-524633",
         "type": "WEBLINK"
       }
     },
     {
       "info": {
         "id": "546364",
         "name": "KFC",
         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_546364.JPG",
         "locality": "Nankelil House",
         "areaName": "Thopumpady",
         "costForTwo": "₹400 for two",
         "cuisines": [
           "Burgers",
           "Fast Food",
           "Rolls & Wraps"
         ],
         "avgRating": 4.3,
         "parentId": "547",
         "avgRatingString": "4.3",
         "totalRatingsString": "1K+",
         "sla": {
           "deliveryTime": 21,
           "lastMileTravel": 2.4,
           "serviceability": "SERVICEABLE",
           "slaString": "20-25 mins",
           "lastMileTravelString": "2.4 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-21 01:00:00",
           "opened": true
         },
         "badges": {
           
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "20% OFF",
           "subHeader": "UPTO ₹50"
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/kfc-nankelil-house-thopumpady-kochi-546364",
         "type": "WEBLINK"
       }
     },
     {
       "info": {
         "id": "810722",
         "name": "Starbucks Coffee",
         "cloudinaryImageId": "2418209798927d733a50f5d2ebcc2aee",
         "locality": "Mukkadan Strip Mall",
         "areaName": "Willington Island",
         "costForTwo": "₹400 for two",
         "cuisines": [
           "Beverages",
           "Cafe",
           "Snacks",
           "Desserts",
           "Bakery",
           "Ice Cream"
         ],
         "avgRating": 4.6,
         "parentId": "195515",
         "avgRatingString": "4.6",
         "totalRatingsString": "20+",
         "sla": {
           "deliveryTime": 24,
           "lastMileTravel": 3,
           "serviceability": "SERVICEABLE",
           "slaString": "20-25 mins",
           "lastMileTravelString": "3.0 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-20 23:59:00",
           "opened": true
         },
         "badges": {
           
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "20% OFF",
           "subHeader": "UPTO ₹50"
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "isNewlyOnboarded": true,
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/starbucks-coffee-mukkadan-strip-mall-willington-island-kochi-810722",
         "type": "WEBLINK"
       }
     },
     {
       "info": {
         "id": "704922",
         "name": "Big Bowl",
         "cloudinaryImageId": "c99751d54e4e1847186c62b3309c1327",
         "locality": "Ravipuram",
         "areaName": "M G Road",
         "costForTwo": "₹250 for two",
         "cuisines": [
           "North Indian",
           "Chinese",
           "Tibetan",
           "Desserts"
         ],
         "avgRating": 4.3,
         "parentId": "434792",
         "avgRatingString": "4.3",
         "totalRatingsString": "500+",
         "sla": {
           "deliveryTime": 47,
           "lastMileTravel": 7.3,
           "serviceability": "SERVICEABLE",
           "slaString": "45-50 mins",
           "lastMileTravelString": "7.3 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-21 01:00:00",
           "opened": true
         },
         "badges": {
           
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "ITEMS",
           "subHeader": "AT ₹179"
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/big-bowl-ravipuram-m-g-road-kochi-704922",
         "type": "WEBLINK"
       }
     },
     {
       "info": {
         "id": "747574",
         "name": "Wow! Momo",
         "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
         "locality": "Kazhutumuttu",
         "areaName": "Thoppumpady",
         "costForTwo": "₹300 for two",
         "cuisines": [
           "Tibetan",
           "Healthy Food",
           "Asian",
           "Chinese",
           "Snacks",
           "Continental",
           "Desserts",
           "Beverages"
         ],
         "avgRating": 4.5,
         "parentId": "1776",
         "avgRatingString": "4.5",
         "totalRatingsString": "100+",
         "sla": {
           "deliveryTime": 32,
           "lastMileTravel": 2.2,
           "serviceability": "SERVICEABLE",
           "slaString": "30-35 mins",
           "lastMileTravelString": "2.2 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-20 23:00:00",
           "opened": true
         },
         "badges": {
           
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "ITEMS",
           "subHeader": "AT ₹99"
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "isNewlyOnboarded": true,
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/wow-momo-kazhutumuttu-thoppumpady-kochi-747574",
         "type": "WEBLINK"
       }
     },
     {
       "info": {
         "id": "53355",
         "name": "Burger King",
         "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
         "locality": "MG Road",
         "areaName": "MG Road",
         "costForTwo": "₹350 for two",
         "cuisines": [
           "Burgers",
           "American"
         ],
         "avgRating": 4.5,
         "parentId": "166",
         "avgRatingString": "4.5",
         "totalRatingsString": "10K+",
         "sla": {
           "deliveryTime": 61,
           "lastMileTravel": 10.2,
           "serviceability": "SERVICEABLE",
           "slaString": "60-65 mins",
           "lastMileTravelString": "10.2 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-20 23:00:00",
           "opened": true
         },
         "badges": {
           
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "ITEMS",
           "subHeader": "AT ₹139"
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/burger-king-mg-road-kochi-53355",
         "type": "WEBLINK"
       }
     },
     {
       "info": {
         "id": "57240",
         "name": "McDonald's",
         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/a87f58ea-72b1-4f3d-9ffe-ae74effb1073_57240.jpg",
         "locality": "MG Road",
         "areaName": "MG Road",
         "costForTwo": "₹400 for two",
         "cuisines": [
           "Burgers",
           "Beverages",
           "Cafe",
           "Desserts"
         ],
         "avgRating": 4.5,
         "parentId": "630",
         "avgRatingString": "4.5",
         "totalRatingsString": "10K+",
         "sla": {
           "deliveryTime": 45,
           "lastMileTravel": 10,
           "serviceability": "SERVICEABLE",
           "slaString": "40-45 mins",
           "lastMileTravelString": "10.0 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-20 23:45:00",
           "opened": true
         },
         "badges": {
           "imageBadges": [
             {
               "imageId": "Rxawards/_CATEGORY-Burger.png",
               "description": "Delivery!"
             }
           ]
         },
         "isOpen": true,
         "aggregatedDiscountInfoV2": {
           
         },
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               "badgeObject": [
                 {
                   "attributes": {
                     "description": "Delivery!",
                     "imageId": "Rxawards/_CATEGORY-Burger.png"
                   }
                 }
               ]
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/mcdonalds-mg-road-kochi-57240",
         "type": "WEBLINK"
       }
     },
     {
       "info": {
         "id": "54676",
         "name": "Gokul Oottupura",
         "cloudinaryImageId": "542e37cb1343ea18ba8f0a2a43074e0f",
         "locality": "Pallimukku",
         "areaName": "Pallimukku",
         "costForTwo": "₹200 for two",
         "cuisines": [
           "South Indian",
           "North Indian",
           "Kerala",
           "Chinese"
         ],
         "avgRating": 4.6,
         "parentId": "434888",
         "avgRatingString": "4.6",
         "totalRatingsString": "10K+",
         "sla": {
           "deliveryTime": 55,
           "lastMileTravel": 9.1,
           "serviceability": "SERVICEABLE",
           "slaString": "55-60 mins",
           "lastMileTravelString": "9.1 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-20 22:30:00",
           "opened": true
         },
         "badges": {
           "imageBadges": [
             {
               "imageId": "Rxawards/_CATEGORY-Kerala%20Food.png",
               "description": "Delivery!"
             },
             {
               "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
               "description": "Delivery!"
             },
             {
               "imageId": "v1695133679/badges/Pure_Veg111.png",
               "description": "pureveg"
             }
           ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               "badgeObject": [
                 {
                   "attributes": {
                     "description": "Delivery!",
                     "imageId": "Rxawards/_CATEGORY-Kerala%20Food.png"
                   }
                 },
                 {
                   "attributes": {
                     "description": "Delivery!",
                     "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                   }
                 },
                 {
                   "attributes": {
                     "description": "pureveg",
                     "imageId": "v1695133679/badges/Pure_Veg111.png"
                   }
                 }
               ]
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "20% OFF",
           "subHeader": "UPTO ₹50"
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/gokul-oottupura-pallimukku-kochi-54676",
         "type": "WEBLINK"
       }
     },
     {
       "info": {
         "id": "59495",
         "name": "Chiyang",
         "cloudinaryImageId": "tl3i1i7m0bgdd1r6uygk",
         "locality": "Kadavanthra",
         "areaName": "Kadavanthra",
         "costForTwo": "₹400 for two",
         "cuisines": [
           "Chinese"
         ],
         "avgRating": 4.4,
         "parentId": "5445",
         "avgRatingString": "4.4",
         "totalRatingsString": "10K+",
         "sla": {
           "deliveryTime": 50,
           "lastMileTravel": 9.9,
           "serviceability": "SERVICEABLE",
           "slaString": "45-50 mins",
           "lastMileTravelString": "9.9 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-20 23:00:00",
           "opened": true
         },
         "badges": {
           "imageBadges": [
             {
               "imageId": "Rxawards/_CATEGORY-Chinese.png",
               "description": "Delivery!"
             }
           ]
         },
         "isOpen": true,
         "aggregatedDiscountInfoV2": {
           
         },
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               "badgeObject": [
                 {
                   "attributes": {
                     "description": "Delivery!",
                     "imageId": "Rxawards/_CATEGORY-Chinese.png"
                   }
                 }
               ]
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/chiyang-kadavanthra-kochi-59495",
         "type": "WEBLINK"
       }
     },
     {
       "info": {
         "id": "121419",
         "name": "Palaaram",
         "cloudinaryImageId": "mz69ogfrejetsashmlrz",
         "locality": "Kadavanthra",
         "areaName": "Kadavanthra",
         "costForTwo": "₹300 for two",
         "cuisines": [
           "South Indian",
           "Chinese",
           "Arabian",
           "Kerala"
         ],
         "avgRating": 4.5,
         "parentId": "18945",
         "avgRatingString": "4.5",
         "totalRatingsString": "10K+",
         "sla": {
           "deliveryTime": 48,
           "lastMileTravel": 10.1,
           "serviceability": "SERVICEABLE",
           "slaString": "45-50 mins",
           "lastMileTravelString": "10.1 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-20 22:45:00",
           "opened": true
         },
         "badges": {
           "imageBadges": [
             {
               "imageId": "Rxawards/_CATEGORY-Coastal.png",
               "description": "Delivery!"
             }
           ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               "badgeObject": [
                 {
                   "attributes": {
                     "description": "Delivery!",
                     "imageId": "Rxawards/_CATEGORY-Coastal.png"
                   }
                 }
               ]
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "20% OFF",
           "subHeader": "UPTO ₹50"
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/palaaram-kadavanthra-kochi-121419",
         "type": "WEBLINK"
       }
     },
     {
       "info": {
         "id": "123175",
         "name": "Baskin Robbins - Ice Cream Desserts",
         "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
         "locality": "Panampilly Nagar",
         "areaName": "Thevara",
         "costForTwo": "₹199 for two",
         "cuisines": [
           "Ice Cream"
         ],
         "avgRating": 4.7,
         "veg": true,
         "parentId": "5588",
         "avgRatingString": "4.7",
         "totalRatingsString": "1K+",
         "sla": {
           "deliveryTime": 38,
           "lastMileTravel": 7.8,
           "serviceability": "SERVICEABLE",
           "slaString": "35-40 mins",
           "lastMileTravelString": "7.8 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-20 23:45:00",
           "opened": true
         },
         "badges": {
           "imageBadges": [
             {
               "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
               "description": "Delivery!"
             }
           ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               "badgeObject": [
                 {
                   "attributes": {
                     "description": "Delivery!",
                     "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                   }
                 }
               ]
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "50% OFF",
           "subHeader": "UPTO ₹100"
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-panampilly-nagar-thevara-kochi-123175",
         "type": "WEBLINK"
       }
     },
     {
       "info": {
         "id": "367962",
         "name": "La Pino'z Pizza",
         "cloudinaryImageId": "fallovrabd8hftqphizq",
         "locality": "Elamkulam",
         "areaName": "Elamkulam",
         "costForTwo": "₹300 for two",
         "cuisines": [
           "Pizzas",
           "Pastas",
           "Italian",
           "Desserts",
           "Beverages"
         ],
         "avgRating": 4.3,
         "parentId": "4961",
         "avgRatingString": "4.3",
         "totalRatingsString": "10K+",
         "sla": {
           "deliveryTime": 52,
           "lastMileTravel": 9.5,
           "serviceability": "SERVICEABLE",
           "slaString": "50-55 mins",
           "lastMileTravelString": "9.5 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-21 03:00:00",
           "opened": true
         },
         "badges": {
           
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "₹150 OFF",
           "subHeader": "ABOVE ₹699",
           "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-elamkulam-kochi-367962",
         "type": "WEBLINK"
       }
     },
     {
       "info": {
         "id": "57445",
         "name": "Subway",
         "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
         "locality": "Panampilly Nagar",
         "areaName": "Elamkulam",
         "costForTwo": "₹350 for two",
         "cuisines": [
           "Healthy Food",
           "Salads",
           "Snacks",
           "Desserts",
           "Beverages"
         ],
         "avgRating": 4.3,
         "parentId": "2",
         "avgRatingString": "4.3",
         "totalRatingsString": "10K+",
         "sla": {
           "deliveryTime": 40,
           "lastMileTravel": 7.9,
           "serviceability": "SERVICEABLE",
           "slaString": "35-40 mins",
           "lastMileTravelString": "7.9 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-05-21 01:00:00",
           "opened": true
         },
         "badges": {
           "imageBadges": [
             {
               "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
               "description": "Delivery!"
             }
           ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               "badgeObject": [
                 {
                   "attributes": {
                     "description": "Delivery!",
                     "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                   }
                 }
               ]
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "30% OFF",
           "subHeader": "UPTO ₹75"
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         }
       },
       "analytics": {
         
       },
       "cta": {
         "link": "https://www.swiggy.com/restaurants/subway-panampilly-nagar-elamkulam-kochi-57445",
         "type": "WEBLINK"
       }
     },

   ]
  



const Body = () =>{
     return(
          <div className="body" >
               <div className="search"> search </div>
               <div className="res-container">
               {resList.map((restaurant)=>(<RestaurantCard  key={restaurant.info.id} resData={restaurant}/>))}
              
               </div>
          </div>
     )
}

const StyleCard = { 
     backgroundColor: "#f0f0f0",
}



const RestaurantCard = (props) =>{
     const{resData} = props;

     const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla:{deliveryTime}
     } = resData?.info

     return(
          <div className="res-card" style={StyleCard} >
               <img  className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
               <h3>{name}</h3>
               <h4>{cuisines.join(", ")}</h4>
               <h4>{avgRating}</h4>
               <h4>{costForTwo}</h4>
               <h4>{deliveryTime} Minutes</h4>
          </div>
     )
}

const AppLayout = ()=>{
     return(
          <div className="app">
               < Header />
               < Body />
               
          </div>
     )
}




const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(< AppLayout />)