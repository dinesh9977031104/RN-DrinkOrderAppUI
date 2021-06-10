export const availableRewards = [
    {
        id: 1,
        title: "150 points - $2.50 off",
        eligible: true,
    },
    {
        id: 2,
        title: "340 points - any 20oz tea or coffee",
        eligible: false,
    },
    {
        id: 3,
        title: "400 points - any 2 x 20oz tea or coffee",
        eligible: false,
    },
    {
        id: 4,
        title: "500 points - any 3 x 20oz tea or coffee",
        eligible: false,
    },
]

export const locations = [
    {
        id: 1,
        title: "Home Address",
        address: "13, Vrindawan garden colony, scheme no. 140, Indore",
        operation_hours: "Saturday - Sunday Morning 9:00 AM to Night 9:00 PM",
        bookmarked: true
    },
    {
        id: 2,
        title: "Office Address",
        address: "Khandwa naka, Indore",
        operation_hours: "Monday - Friday Morning 10:00 AM to Night 8:00 PM",
        bookmarked: false
    },
   
]



export const menuList = [
    {
        id: 1,
        name: "Brown Sugar Fresh Milk Tea",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/tea1.png"),
        category: "Milk Tea"
    },
    {
        id: 2,
        name: "Matcha Milk Tea",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/tea2.png"),
        category: "Milk Tea"
    },
    {
        id: 3,
        name: "Strawberry Milk Tea",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/tea3.png"),
        category: "Milk Tea"
    },
    {
        id: 4,
        name: "Ice Lemon Tea",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/specialtea1.png"),
        category: "Specialtea"
    },

    {
        id: 5,
        name: "Black Tea",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/specialtea2.png"),
        category: "Specialtea"
    },

    {
        id: 6,
        name: "Green Tea",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/specialtea3.png"),
        category: "Specialtea"
    },

    {
        id: 7,
        name: "Berry Smoothie",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/smoothie1.png"),
        category: "Smoothie"
    },
    {
        id: 8,
        name: "Immune Booster",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/smoothie2.png"),
        category: "Smoothie"
    },
    {
        id: 9,
        name: "Very Berry",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/smoothie3.png"),
        category: "Smoothie"
    },
    {
        id: 10,
        name: "Watermelon Lychee Crush",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/smoothie4.png"),
        category: "Smoothie"
    },
    {
        id: 11,
        name: "Americano",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/coffee1.png"),
        category: "Coffee"
    },
    {
        id: 12,
        name: "Cappuccino",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/coffee2.png"),
        category: "Coffee"
    },
    {
        id: 13,
        name: "Mocha",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/coffee3.png"),
        category: "Coffee"
    },
    {
        id: 14,
        name: "Espresso",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/coffee4.png"),
        category: "Coffee"
    },
    {
        id: 15,
        name: "Long Black",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/coffee5.png"),
        category: "Coffee"
    },
    {
        id: 16,
        name: "Hash Brown",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/snack1.png"),
        category: "Snack"
    },
    {
        id: 17,
        name: "French Fries",
        description: "lorem ipsum dolor sit amet",
        price: "$4.50-$5.50",
        thumbnail: require("../assets/images/snack2.png"),
        category: "Snack"
    },
]










export const milkList = [
    {
        id: 1,
        name: "Almond Milk",
        image: require("../assets/icons/milk.png"),
    },
    {
        id: 2,
        name: "Oat Milk",
        image: require("../assets/icons/milk2.png"),
    },
    {
        id: 3,
        name: "Whole Milk",
        image: require("../assets/icons/milk3.png"),
    }
]



const promos = [
    {
        id: 1,
        name: "Mocha",
        description: "Special Offer is live today! on Mocha coffee",
        offer: "20 % OFF",
        image: require("../assets/images/coffee3.png")
    },
    {
        id: 2,
        name: "Very Barry",
        description: "Special Offer is live today! on Very Barry Smoothie",
        offer: "30 % OFF",
        image: require("../assets/images/smoothie3.png")
    },
    {
        id: 3,
        name: "Black Tea",
        description: "Special Offer is live today! on Black Tea",
        offer: "50 % OFF",
        image: require("../assets/images/tea2.png")
    },

]


const cartItem = [
    {
      id: '1',
      name: 'Green Tea',
      ingredients: 'Special Tea',
      price: '8.30',
      image: require('../assets/images/specialtea1.png'),
    },
    {
      id: '2',
      name: 'Very Barry',
      ingredients: 'Smoothie',
      price: '7.10',
      image: require('../assets/images/smoothie3.png'),
    },
    {
      id: '3',
      name: 'Mocha',
      ingredients: 'Coffee',
      price: '5.10',
      image: require('../assets/images/coffee3.png'),
    },
    {
      id: '4',
      name: 'Hash Brown',
      ingredients: 'Snack',
      price: '9.55',
      image: require('../assets/images/snack1.png'),
    },
  ]; 

const dummyData = {
    availableRewards,
    locations,
    menuList,
    milkList,
    promos,
    cartItem
};

export default dummyData;