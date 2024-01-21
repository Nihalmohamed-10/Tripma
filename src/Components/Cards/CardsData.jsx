import {card1,card2,card3,card4} from "../../images/Images";
import { card5,card6,card7 } from "../../images/Images";
import { user1,user2,user3,star4,star5 } from "../../images/Images";
import { Hawaain,San1,San2,San3, HawaainThree, HawaainTwo, Delta, Japan,Korean,Emirates,Japan1,Japan2,Japan3 } from "../../images/Images";



 export const cardData = [
  {
    id: 1,
    img: card1,
    place: "The Bund, Shanghai",
    price: "$598",
    highlight: "China’s most international city",
  },
  {
    id: 2,
    img: card2,
    place: "Sydney Opera House, Sydney",
    price: "$981",
    highlight: "Take a stroll along the famous harbor",
  },
  {
    id: 3,
    img: card4,
    place: "Kōdaiji Temple, Kyoto",
    price: "$633",
    highlight: "Step back in time in the Gion district",
  },
  {
    id: 4,
    img: card3,
    place: "Tsavo East National Park, Kenya",
    price: "$981",
    highlight:
      "Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert.",
  },
];

export const secondCardData= [
    {
        id: 1,
        img: card5,
        place: "Stay among the atolls in Maldives",
        highlight: "From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages.",
      },
      {
        id: 2,
        img: card6,
        place: "Experience the Ourika Valley in Morocco",
        highlight: "Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East.",
      },
      {
        id: 3,
        img: card7,
        place: "Live traditionally in Mongolia",
        highlight: "Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel.",
      },
]

export const userData = [
  {
    id: 1,
    userImage: user1,
    name: "Yifei Chen",
    place: "Seoul, South Korea | April 2019",
    rateImg: star5,
    review:
      "What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me read more...",
  },
  {
    id: 2,
    userImage: user2,
    name: "Kaori Yamaguchi",
    place: "Honolulu, Hawaii | February 2017",
    rateImg: star4,
    review:
      "My family and I visit Hawaii every year, and we usually book our flights using other services. Tripma was recommened to us by a long time friend, and I’m so glad we tried it out! The process was easy and read more...",
  },
  {
    id: 3,
    userImage: user3,
    name: "Anthony Lewis",
    place: "Berlin, Germany | April 2019",
    rateImg: star5,
    review:"When I was looking to book my flight to Berlin from LAX, Tripma had the best browsing experiece so I figured I’d give it a try. It was my first time using Tripma, but I’d definitely recommend it to a friend and use it for read more..."
  }
];

export const AirlineData= [
  {
      id:1,
      duration: '16h 45m',
      name: "Hawaiian",
      image: Hawaain,
      time: '7.00AM-4.15PM',
      stops: '1 stop',
      stopTime:'2h 45m in HNL',
      price:'$624',
      round:'round trip'
  },
  {
      id:2,
      duration: '18h 22m',
      name: "Japan Airlines",
      image: Japan,
      time: '7.35AM-12.15PM',
      stops: '1 stop',
      stopTime:'50min in HKG',
      price:'$663',
      round:'round trip'
  },
  {
      id:3,
      duration: '18h 04m',
      name: "Hawaiian",
      image: Hawaain,
      time: '8.20AM-2.15PM',
      stops: '1 stop',
      stopTime:'1h 50m in PVG',
      price:'$690',
      round:'round trip'
  },
  {
      id:4,
      duration: '18h 04m',
      name: "Delta",
      image: Delta,
      time: '9.47AM-4.15PM',
      stops: '1 stop',
      stopTime:'4h 05m in ICN',
      price:'$756',
      round:'round trip'
  },
  {
    id:5,
    duration: '16h 45m',
    name: "Hawaiian",
    image: Hawaain,
    time: '7.00AM-4.15PM',
    stops: '1 stop',
    stopTime:'2h 45m in HNL',
    price:'$624',
    round:'round trip'
},
{
    id:6,
    duration: '18h 22m',
    name: "Japan Airlines",
    image: Japan,
    time: '7.35AM-12.15PM',
    stops: '1 stop',
    stopTime:'50min in HKG',
    price:'$663',
    round:'round trip'
},
{
    id:7,
    duration: '18h 04m',
    name: "Hawaiian",
    image: Hawaain,
    time: '8.20AM-2.15PM',
    stops: '1 stop',
    stopTime:'1h 50m in PVG',
    price:'$690',
    round:'round trip'
},
{
    id:8,
    duration: '18h 04m',
    name: "Delta",
    image: Delta,
    time: '9.47AM-4.15PM',
    stops: '1 stop',
    stopTime:'4h 05m in ICN',
    price:'$756',
    round:'round trip'
},
  
]
export const placesInJapan= [
  {
      id: 1,
      img: Japan1,
      place: "Hotel Kaneyamaen and Bessho SASA",
      highlight: "Located at the base of Mount Fuji, Hotel Kaneyamaen is a traitional japanese ryokan with a modern twist. Enjoy a private onsen bath and a private multi-course kaiseki dinner.",
    },
    {
      id: 2,
      img: Japan2,
      place: "HOTEL THE FLAG 大阪市",
      highlight: "Make a stop in Osaka and stay at HOTEL THE FLAG, just a few minutes walk to experience the food culture surrounding Dontonbori. Just one minute away is the Shinsaibashi shopping street",
    },
    {
      id: 3,
      img: Japan3,
      place: "9 Hours Shinjuku",
      highlight: "Experience a truly unique stay in an authentic Japanese capsule hotel. 9 Hours Shinjuku is minutes from one of Japan’s busiest train stations. Just take the NEX train from Narita airport!",
    },
];

export const peopleInSan = [
  {
    id: 1,
    img: San1,
    place: "Shanghai, China",
    price: "$598",
    highlight: "An international city rich in culture",
  },
  {
    id: 2,
    img: San2,
    place: "Nairobi, Kenya",
    price: "$1,248",
    highlight: "Dubbed the Safari Capital of the World",
  },
  {
    id: 3,
    img: San3,
    place: "Seoul, South Korea",
    price: "$589",
    highlight: "This modern city is a traveler’s dream",
  },
];

export const priceGrid=[
  { 
    id:1,
    th:'3/7',
    tr1:'$837',
    tr2:'$837',
    tr3:'$634',
    tr4:'$1308',
    tr5:'$592'
  },
  { 
    id:2,
    th:'3/8',
    tr1:'$592',
    tr2:'$592',
    tr3:'$592',
    tr4:'$624',
    tr5:'$624'
  },
  { 
    id:3,
    th:'3/9',
    tr1:'$592',
    tr2:'$592',
    tr3:'$624',
    tr4:'$624',
    tr5:'$1038'
  },
  { 
    id:4,
    th:'2/10',
    tr1:'$1308',
    tr2:'$837',
    tr3:'$592',
    tr4:'$837',
    tr5:'$837'
  },
  { 
    id:5,
    th:'2/11',
    tr1:'$837',
    tr2:'$1308',
    tr3:'$592',
    tr4:'$837',
    tr5:'$624'
  },
]

export const ReturnAirlineData= [
  {
      id:1,
      duration: '16h 45m',
      name: "Hawaiian",
      image: Hawaain,
      time: '7.00AM-4.15PM',
      stops: '1 stop',
      stopTime:'2h 45m in HNL',
      price:'$624',
      round:'round trip'
  },
  {
      id:2,
      duration: '18h 22m',
      name: "Japan Airlines",
      image: Japan,
      time: '7.35AM-12.15PM',
      stops: '1 stop',
      stopTime:'50min in HKG',
      price:'$663',
      round:'round trip'
  },
  {
      id:3,
      duration: '18h 04m',
      name: "Hawaiian",
      image: Hawaain,
      time: '8.20AM-2.15PM',
      stops: '1 stop',
      stopTime:'1h 50m in PVG',
      price:'$690',
      round:'round trip'
  },
  {
      id:4,
      duration: '18h 04m',
      name: "Delta",
      image: Delta,
      time: '9.47AM-4.15PM',
      stops: '1 stop',
      stopTime:'4h 05m in ICN',
      price:'$756',
      round:'round trip'
  },
  {
    id:5,
    duration: '16h 45m',
    name: "Hawaiian",
    image: Hawaain,
    time: '7.00AM-4.15PM',
    stops: '1 stop',
    stopTime:'2h 45m in HNL',
    price:'$624',
    round:'round trip'
},
{
    id:6,
    duration: '18h 22m',
    name: "Japan Airlines",
    image: Japan,
    time: '7.35AM-12.15PM',
    stops: '1 stop',
    stopTime:'50min in HKG',
    price:'$663',
    round:'round trip'
},
{
    id:7,
    duration: '18h 04m',
    name: "Hawaiian",
    image: Hawaain,
    time: '8.20AM-2.15PM',
    stops: '1 stop',
    stopTime:'1h 50m in PVG',
    price:'$690',
    round:'round trip'
},
{
    id:8,
    duration: '18h 04m',
    name: "Delta",
    image: Delta,
    time: '9.47AM-4.15PM',
    stops: '1 stop',
    stopTime:'4h 05m in ICN',
    price:'$756',
    round:'round trip'
},
  
]

export const PassengerData=[

  {
    input1:'First name*',
    input2:'Middle',
    input3:'Last name*',
    input4:'Suffix',
    input5:'Date of birth*',
    input6:'Email address*',
    input7:'Phone number*',
    input8:'Redress number',
    input9:'Known traveller number*'
  }
]