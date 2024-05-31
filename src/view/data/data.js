function generateRandomName() {
    const words = ["Allen Solly", "Polo", "Regular Fit", "T-Shirt", "Men's"];
    const name = words.sort(() => Math.random() - 0.5).slice(0, 3).join(' ');
    return name;
}
const fetchImages = async (query) => {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=f5s3hKmMK17AYqBrwKG8A_OF1odGw4Fnmikqgg9hAGw&`);
    const data = await response.json();
    return data.results;
};

const fetchImageUrls = async (query, width, height) => {
    const images = await fetchImages(query, width, height); 
    return images.map((image) => image.urls.small);
};


  
  const imageUrls = await fetchImageUrls('jeans');
  
  const imageUrls1 = await fetchImageUrls('shirt');
  const imageUrls2 = await fetchImageUrls('shoes');
export const bestseller=[
   
    {
        id:1,
        name:"Men's Glide Walking Shoes|EVA Outsole|PU Foam|Air Mesh",
        img:imageUrls2[2],
        price:'200 ',
        delprice:"1299",
        imgdiscribtion:require('../Images/gifforshop.png')
    },
    {
        id:2,
        name:generateRandomName(),
        img:imageUrls2[4],
        delprice:"1279",
        price:'300 '
    },
    {
        id:3,
        name:"Unisex Adult Ignite Multiplay Sports Shoes for Men & Women ",
        img:imageUrls1[2],
        delprice:"1379",
        price:'299 '
    },
    {
        id:4,
        name:"Men's Dynamite Running Shoes with Bouncy EVA Outsole & Laces",
        img:require('../Images/productpage4.png'),
        delprice:"1579",
        price:'199 '
       
    },
    {
        id:5,
        name:"Men's OXYFIT (N) Walking Shoes",
        img:require('../Images/productpage1.png'),
        delprice:"1479",
        price:'399 '
    },
    {
        id:6,
        name:"Men's Wonder-13 Sports Running Shoes…",
        img:require('../Images/sport1.png'),
        delprice:"1179",
        price:'499 '
    },
    {
        id:1,
        name:"Men's North Plus Running Shoes",
        img:require('../Images/sport2.png'),
        delprice:"779",
        price:'599 '
    },
    {
        id:2,
        name:"Mens Sx0675g Walking Shoe",
        img:require('../Images/sport3.png'),
        delprice:"1979",
        price:'449 '
    },
    {
        id:3,
        name:"Force 10 Sports Shoes for Men",
        img:require('../Images/sport4.png'),
        delprice:"2279",
        price:'479 '
    },
    {
        id:1,
        name:"Clovia Women's Cotton Solid Non-Padded Full",
        img:require('../Images/sport5.png'),
        delprice:"1979",
        price:'496 '
    },
    {
        id:2,
        name:"Full Coverage Regular Bra",
        img:require('../Images/sport6.png'),
        delprice:"1909",
        price:'459 '
    },
    {
        id:3,
        name:"BODYSIZE Cotton Front Open Bra for Women Daily Use",
        img:require('../Images/sport7.png'),
        price:'469 ',
        delprice:"1569",
        Description:" Product Description",
        imgdiscribtion:require('../Images/sport7banner.png'),
        imgdiscribtion2:require('../Images/sport7banner2.png')


    },
    {
        id:1,
        name:" | Non-Padded, Non-Wired|| Non-Padded, Non-Wired || ",
        img:require('../Images/sport8.png'),
        delprice:"1379",
        price:'399 '
    },
    {
        id:2,
        name:"Mens I-and Laceup Casual Shoes,",
        img:require('../Images/sport9.png'),
        price:'359 ',
        delprice:"1979",
    },
    {
        id:3,
        name:"Mens Shuttle Walking Shoe",
        img:require('../Images/sport10.png'),
        delprice:"1569",
        price:'779 '
    },
    {
        id:1,
        name:"Clovia Women's Cotton Solid Non-Padded Full Cup Wire Free Everyday Br  ",
        img:require('../Images/sport11.png'),
        delprice:"1211",
        price:'899 '
    },
    {
        id:2,
        name:"ADDIZ Men's Sports Regular Fit Lycra Track Pant with Two Side Pockets (Pack of 2)",
        img:require('../Images/sport12.png'),
        delprice:"1123",
        price:'999 '
    },
    {
        id:3,
        name:"Facto Power Women's Lightly Removable Padded, Wire Free Tube Bra, for Running",
        img:require('../Images/sport13.png'),
        delprice:"1749",
        price:'1499 '
    },
    
]
export const Product = [
    {
        id: 1,
        name: "Facto Power Women's Lightly Removable Padded, Wire Free Tube Bra, for Running",
        img: imageUrls1[6],
        delprice: "1749",
        price: "1499"
    },
    {
        id: 2,
        name: "Adidas Men's Running Shoes",
        img:imageUrls1[7],
        delprice: "4999",
        price: "3999"
    },
    {
        id: 3,
        name: "Nike Women's Training Shorts",
        img:imageUrls1[8],
        delprice: "2999",
        price: "2499"
    },
    {
        id: 4,
        name: "Puma Unisex Cap",
        img: imageUrls1[9],
        delprice: "999",
        price: "799"
    },
    {
        id: 5,
        name: "Reebok Men's Training T-Shirt",
        img:imageUrls1[8],
        delprice: "1999",
        price: "1499"
    },
    {
        id: 6,
        name: "Under Armour Women's Sports Bra",
        img:imageUrls[3],
        delprice: "2499",
        price: "1999"
    }
];

export const shop = [
    {
        id: 1,
        name: generateRandomName(),
        img: require('../Images/shop1.5.jpg'),
        price: "79999",
        delprice: "74999"
    },
    {
        id: 2,
        name: generateRandomName(),
        img: require('../Images/shop2.2.jpg'),
        price: "64999",
        delprice: "59999"
    },
    {
        id: 3,
        name: generateRandomName(),
        img: require('../Images/shop2.3.jpg'),
        price: "72999",
        delprice: "67999"
    }
];

 export const shoping=[
    {
        id:1,
        name:"Allen Solly Men's Regular Fit Polo||Solly Men's Regular Fit Polo||MEN'S T-Shirt||T-SHIRT",
        img:imageUrls1[3],
        price: "799",
        delprice: "899"
        
    },
    {
        id:2,
        name:"Leriya Fashion - Oversized Fit T Shirt for Men| t Shirt for Men| Drop Shoulder t-Shirt for Men",
        img:imageUrls1[4],
        price: "729",
        delprice: "799"
     
    },
   
   
    {
        id:3,
        name:"Leriya Fashion - Oversized Fit T Shirt for Men| t Shirt for Men| Drop Shoulder t-Shirt for Men",
        img:imageUrls1[5],
        price: "724",
        delprice: "999"
     
    },
    
    {
        id:3,
        name:"Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-01-04)",
        img:imageUrls1[6],
        price: "729",
        delprice: "999"
      
    },
    {
        id:3,
        name:"Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-01-04)",
        img:imageUrls1[7],
        price: "799",
        delprice: "999"
      
    },
 ]

export let addtocart=[
  
]




const First = [
  {
    id: 1,
    name: generateRandomName(),
    img: imageUrls[0],
    price: "729",
    delprice: "6799"
  },
  {
    id: 2,
    name: generateRandomName(),
    img: imageUrls[1],
    price: "999",
    delprice: "2999"
  },
  {
    id: 3,
    name: generateRandomName(),
    img: imageUrls[2],
    price: "729",
    delprice: "999"
  },
]

export default First;


/*Sports Section Data */
const spo_product = await fetchImageUrls('Shoes');
const spo_product1 = await fetchImageUrls('Nike');
const spo_product2 = await fetchImageUrls('T-shirts');
const spo_product3 = await fetchImageUrls('Watchs');
const spo_product4 = await fetchImageUrls('cricket bats');
 export const Sports=[
    {
         id:'1',
      name:generateRandomName(),
      img:spo_product[0],
      price:'400',
      delprice:'599'
    },
    { id:'1',
    name:generateRandomName(),
    img:spo_product[1],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product[2],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product[3],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product[4],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product[5],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product[6],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product[7],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product[8],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product[9],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product1[0],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product1[1],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product1[2],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product1[3],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product1[4],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product1[5],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product2[0],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product2[1],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product2[2],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product2[2],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product2[3],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product2[4],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product2[5],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product2[6],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product2[7],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product2[8],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product2[9],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product1[6],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product1[7],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product1[8],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product1[9],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product4[0],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product4[1],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product4[2],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product4[3],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product4[4],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product4[5],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product4[6],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product3[1],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product3[2],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product3[3],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product3[4],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product3[5],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product3[6],
    price:'400',
    delprice:'599'
  },
  { id:'1',
    name:generateRandomName(),
    img:spo_product3[7],
    price:'400',
    delprice:'599'
  },
  { id:'1',
  name:generateRandomName(),
  img:spo_product3[8],
  price:'400',
  delprice:'599'
},
{ id:'1',
name:generateRandomName(),
img:spo_product3[9],
price:'400',
delprice:'599'
},


  

];
