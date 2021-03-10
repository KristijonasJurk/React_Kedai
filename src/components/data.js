import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import { MdNewReleases } from 'react-icons/md';
import { GiConverseShoe, GiLifeJacket, GiArmoredPants, GiUnderwear } from 'react-icons/gi';
import { FcOldTimeCamera, FcMusic, FcFilmReel, FcLandscape, FcEditImage, FcBullish, FcHome, FcGoogle, FcHeadset, FcHighPriority, FcLike, FcOk, FcElectricity, FcBinoculars, FcAdvertising, FcDebian, FcRating, FcSlrBackSide, FcUp, FcSportsMode, FcCheckmark, FcIdea } from "react-icons/fc";
import React from 'react';

export const sublinks = [
    {
        page: `Home`,
        links: [
            { label: 'Main Page', icon: <FcHome />, url: '/' },
            { label: 'Google', icon: <FcGoogle />, url: '/' },
        ],
    },
    {
        page: `Women's`,
        links: [
            { label: 'New', icon: <FcHeadset />, url: '/womens' },
            { label: 'Shoes', icon: <FcElectricity />, url: '/womens' },
            { label: 'Tops', icon: <FcLike />, url: '/womens' },
            { label: 'Jackets', icon: <FcAdvertising />, url: '/womens' },
            { label: 'Denim', icon: <FcDebian />, url: '/womens' },
            { label: 'Vintage', icon: <FcOk />, url: '/womens' },
            { label: 'Sale', icon: <FcHighPriority />, url: '/womens' },
        ],
    },
    {
        page: `Men's`,
        links: [
            { label: 'New', icon: <FcIdea />, url: '/mens' },
            { label: 'Shoes', icon: <FcSlrBackSide />, url: '/mens' },
            { label: 'Jackets', icon: <FcUp />, url: '/mens' },
            { label: 'Activewear', icon: <FcSportsMode />, url: '/mens' },
            { label: 'Bottoms', icon: <FcCheckmark />, url: '/mens' },
            { label: 'Vintage', icon: <FcRating />, url: '/mens' },
            { label: 'Sale', icon: <FcBinoculars />, url: '/mens' },
        ],
    },
    {
        page: 'Lifestyle',
        links: [
            { label: 'Accessories', icon: <FcOldTimeCamera />, url: '/lifestyle' },
            { label: 'Lifestyle & Blog', icon: <FcEditImage />, url: '/lifestyle' },
            { label: 'Music', icon: <FcMusic />, url: '/lifestyle' },
            { label: 'Books & Movies', icon: <FcFilmReel />, url: '/lifestyle' },
            { label: 'Outdoors', icon: <FcLandscape />, url: '/lifestyle' },
            { label: 'Trends', icon: <FcBullish />, url: '/lifestyle' },

        ],
    },
]
//=====GRID=====
export const mainGrid1 = [
    { src: 'https://images.ctfassets.net/q602vtcuu3w3/1Mgf8LBYI0r7MfVpJE57dK/bf5dee236028ae3823d2d43db8a968df/21_FEB_WK4_MYSTERY_PROMO_EM10.jpg?w=2160&q=80&fm=webp' },
    { src: 'https://images.ctfassets.net/q602vtcuu3w3/kGOc6xA0BYa15gQEEcqIg/21cb125ca3fe21a24d59aad4c7a1ef06/200301_cd_UK_01_lr.jpg?w=1280&q=80&fm=webp', title: 'OUTDOORS BRAND EDIT', text: 'Gear up for your next outdoor adventure in ready-for-anything apparel and accessories from your favorite brands.  merch and more  your favorite artists. Shop Graphics.  your favorite artists. Shop Graphics. ' },
    { src: 'https://images.ctfassets.net/q602vtcuu3w3/37TpxZl5QCMmmXdarLY63i/b901705f22025d0a86d6b202cf59911b/210301-WK1-MGW-2.jpg?q=80&fm=webp', title: 'NEW SHOES: ACTIVE EDITION', text: 'Trail sneakers, running shoes and sandals for your next day.' },
    { src: 'https://images.ctfassets.net/q602vtcuu3w3/4fv2QUZ8DQgHFS4NfX2u4S/17dabf874daa8cd553033984cd3470b4/210301-WK1-HP-3.jpg?q=80&fm=webp', title: 'NEW IN THE GRAPHICS SHOP', text: 'All-new music graphics ft. your favorite artists. Shop Graphics' },
    { src: 'https://images.ctfassets.net/q602vtcuu3w3/67ewt3KkaY2kTOte9AIhC6/ee6e7df96e8377c331c8efccdbc1ec5a/210301_hgw_rr_UK_02.jpg?w=1280&q=80&fm=webp', title: 'NEW FURNITURE: UPSTATE MODERN', text: 'Bright wood furniture, soft, modern textures, classic kitchenware and punches of deep hues offer an updated take on rustic charm. Merch and more, plus tons of vinyl, from new releases to reissues and special, limited edition UO Exclusives. Shop' }
]
export const mainGrid2 = [
    { src: 'https://images.ctfassets.net/q602vtcuu3w3/30Ied4M9BKbzjPrILTyYmf/f67dd59f9395b4a9519bdae1631e0757/210301-WK1-MGW-M-7.jpg?q=80&fm=webp', title: 'NEW DROP: OBEY CLOTHING', text: 'The latest apparel and accessories from the popular streetwear brand. Shop' },
    { src: 'https://images.ctfassets.net/q602vtcuu3w3/5V3BrO4TFyCMSXNGFDMNuD/8e847e83dd10f429b5cd426bfa36cf46/210302_mgw_UK_03.jpg?q=80&fm=webp', title: 'BACK IN STOCK', text: 'Music is everything, and it’s all right here. Audio gear, record players.' },
    { src: 'https://images.ctfassets.net/q602vtcuu3w3/57BFwC47dZRXFdNmaFRrxI/3b8c19ba8628620f8d2c12980752cf6c/210301-WK1-MGW-M-6.jpg?q=80&fm=webp', title: 'KEDAI EXCLUSIVES', text: 'Music is everything, and it’s all right here. Audio gear, record players.' },
    { src: 'https://images.ctfassets.net/q602vtcuu3w3/4aTcU9lmXkXifLSduqbOto/b27f9d5d71ce2ac7b2c15dc3191c32ed/210301-WK1-HP-M-1.jpg?q=80&fm=webp', title: 'THE MUSIC SHOP', text: 'Music is everything, and it’s all right here. Audio gear, record players.' }
]

//======SLIDE1======

export const slide1 = [
    { id: 0, src: 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0325630720017_010_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720', text: 'Asics GEL-Kayano 5 360 White and Black Trainers', src2: 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0325630720017_010_d?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720' },
    { id: 1, src: 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0325414410253_001_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720', text: 'Vans Anaheim Factory Authentic Black Suede Trainers', src2: 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0325414410253_001_d?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720' },
    { id: 2, src: 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0325455530143_001_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720', text: 'New Balance Black & Red XRCT Lifestyle Trainers', src2: 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0325455530143_001_d?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720' },
    { id: 3, src: 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0325630720021_001_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720', text: 'Asics Black Gel-Nandi 360 Trainers', src2: 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0325630720021_001_d?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720' },
    { id: 4, src: 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0325291620392_061_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720', text: 'adidas Originals Red Suede Gazelle trainers', src2: 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0325291620392_061_d?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720' },
    { id: 5, src: 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0322428570031_001_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720', text: 'Dr. Martens 8-Eyelet Boots', src2: 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0322428570031_001_d?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720' },
    { id: 6, src: 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0323440490002_001_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720', text: 'Ralph Lauren Black Cayson Pool Sliders', src2: 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0323440490002_001_d?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720' },
    { id: 7, src: 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0321428570021_001_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720', text: 'Dr. Martens Bex 3-Eye Black Oxford Shoes', src2: 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0321428570021_001_d?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720' },
    { id: 8, src: 'https://s7d5.scene7.com/is/image/UrbanOutfitters/44653293_001_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720', text: 'Birkenstock Arizona EVA Sandal', src2: 'https://s7d5.scene7.com/is/image/UrbanOutfitters/44263150_005_e?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720' },
    { id: 9, src: 'https://s7d5.scene7.com/is/image/UrbanOutfitters/59129734_030_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720', text: 'Reebok Club C Revenge Sneaker', src2: 'https://s7d5.scene7.com/is/image/UrbanOutfitters/59129734_030_d?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720' }
]

export const aboutData = 'Kedai is a lifestyle retailer dedicated to inspiring customers through a unique combination of product, creativity and cultural understanding. Founded in 1970 in a small space across the street from Sapiegos Rumai, Kedai now operates in over 200 stores in Lithuania, United States and Europe, offering experiential retail environments and a well-curated mix of on-trend women’s and men’s shoes, from sneakers, boots and sandals to shoes with fur on them, hats, and backpacks, as well as beauty, intimates, swim and a collection of handpicked vintage clothing. Our Music + Tech collection is a go-to destination for vinyl, record players and tech accessories. Visit our stores, where all are welcome and there’s always something new to see, or shop online at kristijonokedai.com and get free shipping on LT orders over 50eu. For special offers, one-of-a-kind prizes and more, download the our app and join Kedai Rewards! Want to be part of the conversation? Follow, share and shop @KedaiShop.';