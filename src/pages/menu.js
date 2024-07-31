import Layout from '@/components/Layout';
import React, { useState } from 'react';


const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const menuData = {
    Chats: [
      'Kolkata Phulka',
      'Panipuri (3 Variety of Paani)',
      'Papdi Chats',
      'Assorted Chats',
      'Sev Puri',
      'Aloo Puri',
      'Bhel Puri',
      'Chinese Bhel',
      'Bombay Bhel',
      'Matar Handi Chats',
      'Aloo Tikki Ragada',
      'Aloo Tikki Chole',
      'Samosa Chats',
      'Mini Kachori Chats',
      'Kachori Chats',
      'Paneer Chilada',
      'Moong Dal Chats (Utharkandi)',
      'Masala Puri (South)',
      'Dahi Puri',
      'Fruits Chats',
      'Corn Chats',
      'Tava Chats',
      'Banarasi Chats',
      'Jhalmuri',
      'Palak Patti Chats',
      'Sweet Potato Chats',
      'Barbeque Chats',
      'Katori Chats',
      'Pav Bhaji',
      'Vada Pav',
    ],
    'Vegetable Dishes': [
      'Mix Veg',
      'Veg Kolhapuri',
      'Veg Haryali',
      'Tava Veg',
      'Veg Makhni',
      'Methi Matar Malai',
      'Corn Methi Malai',
      'Corn Palak',
      'Matar Palak',
      'Gobi Aloo Gravy',
      'Gobi Aloo Dry',
      'Gobi Aloo Matar',
      'Dum Aloo',
      'Kashmiri Dum Aloo',
      'Veg Hyderabadi',
      'Jharkhandi Dum Aloo',
      'Kadai Mix Veg',
      'Dry Aloo',
      'Jeera Aloo',
      'Aloo Matar',
      'Aloo Jhol',
      'Aloo Baingan Palak',
      'Bhindi Masala',
      'Pindi Chole',
      'Chira',
      'Lauki Kofta',
      'Kathal Sabji',
      'Turai Sabji',
      'Kadu Sabji',
      'Bharwa Shimla Mirch',
      'Aloo Methi',
      'Kadai Mushroom',
      'Baingan Bharta',
    ],
    Tandoor: [
      'Paneer Malai Tikka',
      'Tandoori Paneer Tikka',
      'Haryani Paneer Tikka',
      'Cream Paneer Tikka',
      'Mint Paneer Tikka',
      'Mushroom Sholay Kebab',
      'Malai Mushroom',
      'Spicey Tandoori Mushroom',
      'Aloo Bhukara',
      'Gobi Tandoori Tikka',
      'Veg Seekh Kebab Tandoori Tikka',
      'Broccoli Tandoori Kebab Tikka',
      'Pineapple Tandoori Tikka',
      'Shakarkandi Tandoori Tikka',
      'Apple Tandoori Tikka',
    ],
    'Paneer Dishes': [
      'Paneer Butter Masala',
      'Malai Paneer',
      'Paneer Tikka Masala',
      'Kadai Paneer',
      'Paneer Makhni',
      'Zafrani Paneer',
      'Kesariya Paneer',
      'Shahi Paneer',
      'Paneer Pasanda',
      'Afghani Paneer',
      'Mughlai Paneer',
      'Kohlapuri Paneer',
      'Palak Paneer',
      'Mehti Malai Paneer',
      'Matar Paneer',
    ],
    Chinese: [
      'Paneer Chilly',
      'Baby Corn Chilly',
      'Paneer Pepper Fry',
      'Baby Corn Pepper Fry',
      'Potato Chilly',
      'Mushroom Chilly',
      'Mushroom Manchurian',
      'Paneer Manchurian',
      'Baby Corn Manchurian',
      'Gobi Manchurian',
      'Veg Ball Manchurian',
      'Paneer Sesame Kebab',
      'Mix Manchurian',
      'Spring Noodles',
      'Veg Cheese Roll',
    ],
    Starters: [
      'Cheese Stuffed Ball',
      'Harabhara Kebab',
      'Spring Roll',
      'Cocktail Samosa',
      'Cocktail Kachori',
      'French Fries',
      'Veg Cutlet',
      'Pakoda (Assorted Paneer, Veg, Gobi)',
      'Veg Nuggets',
      'Mushroom Kebab (Fry)',
      'Crispy Baby Corn',
      'Dahi Kebab',
      'Moong Dal Pakodi',
      'Sprout Tikki Kebab',
    ],
    Sweets: [
      'JALEBI RABRI',
      'MALPUA RABRI',
      'MOONG DAL HALWA',
      'BADAM HALWA',
      'GAJAR HALWA',
      'DOODHI HALWA',
      'DAL BADAM HALWA',
      'MALAI LADOO',
      'CHOCOLATE MALAI LADOO',
      'COCONUT CHEENA PAYAS',
      'MINI RAS MALAI',
      'RASGULLA',
      'GULAB JAMUN',
      'RAJBHOG',
      'RASBHARI',
      'BOONDI BAKED',
      'DRY FRUIT BARFI',
      'BESAN BARFI',
      'MALAI CHAM-CHAM',
      'MALAI GULLA',
      'MALAI SANDWICH',
      'KHEER KADAM',
      'CHINAR JALPAI',
      'SANDESH',
      'GUR SANDESH',
      'MANGO CHAM-CHAM',
      'MALAI ROLL',
      'MALAI CHAAP',
    ],
    Salads: [
      'GREEN SALAD',
      'FINGER CUT SALAD',
      'SPROUT SALAD',
      'CABBAGE POTATO SALAD',
      'CORN SUMMER SALAD',
      'MEXICAN SALAD',
      'ITALIAN CHIPPED SALAD',
      'BRIGHT SPRING SALAD',
      'TACO SALAD',
      'PASTA SALAD',
      'TOMATO SUMMER SALAD',
      'CHICKPEA SALAD',
      'TOFU SALAD',
      'SPICY WATERMELON SALAD',
      'SPICY PINEAPPLE SALAD',
      'FRUIT SUMMER SALAD',
      'BLACK BEAN CORN SALAD',
    ],
    Juices: [
      'VIRGIN MOJITO',
      'BLUE LIME',
      'GUAVA SPICE',
      'KIWI SANGRIA',
      'BLACK CURRENT MOJITO',
      'FRUIT PUNCH',
      'KALA KHATTA',
      'ORANGE MINT MOJITO',
      'GREEN APPLE',
      'TERI MERI MOCKTAIL',
      'LICHI BLOSSOM',
      'SODA SHIKANJI',
      'JALJEERA',
      'SEASONAL FRUIT JUICE',
    ],
  };

  const toggleCategory = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <Layout>
    <div className="bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-merriweather text-3xl font-bold text-red text-center mb-8">Menu</h1>

        {Object.keys(menuData).map((category, index) => (
          <div key={index} className="mb-6">
            <div
              className="bg-white shadow-md rounded-lg p-6 cursor-pointer"
              onClick={() => toggleCategory(category)}
            >
              <h2 className="text-xl font-montserrat font-semibold">{category}</h2>
            </div>
            {activeCategory === category && (
              <div className="bg-white shadow-md rounded-lg p-4 mt-2">
                <ul className="list-disc list-inside text-gray-700">
                  {menuData[category].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default MenuPage;
