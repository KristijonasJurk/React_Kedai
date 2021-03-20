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

export const womensBrowse = ['New', 'Shoes', 'Tops', 'Coats & Jackets', 'Swimwear', 'Bottoms', 'Vintage', 'Summer']

export const womensProducts = [
    {
        id: 101,
        title: 'New Balance 530 Silver & Red Trainers',
        price: '99.00',
        color: 'silver',
        text: 'Throw it back to the 90s in these vibrant New Balance runners. Patched leather, suede and mesh allow for breathability in all the right places. Equipped with New Balance Enerp technology and grip rubber soles for lightweight stability and optimal traction.',
        material: ' Leather, Rubber',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315455531641_007_e?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315455531641_007_f?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315455531641_007_g?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=720'],
        categories: ['shoes', 'vintage', `women's`],
        tags: '',
        amount: 1
    },
    {
        id: 102,
        title: 'Colorado Springs Baby T-Shirt',
        price: '29.00',
        color: ['Chocolate', 'Light Grey'],
        text: 'Iconic canvas high-top from the experts at Converse. Fitted with a cushioned footbed, sturdy rubber sole and toe-cap. Finished with cotton laces and metal eyelets.',
        material: '100% Cotton',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0119477795100_021_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0119477795100_021_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0119477795100_021_e?$redesign-zoom-5x$='],
        img2: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0119477795100_006_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=960', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0119477795100_006_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0119477795100_006_d?$redesign-zoom-5x$='],
        categories: ['tops', `women's`, 'new'],
        tags: 'Back in Stock',
        amount: 1
    },
    {
        id: 103,
        title: 'Birkenstock Arizona Black EVA Sandals',
        price: '49.00',
        color: 'Black',
        text: 'The Birkenstock Arizona is the classic summer sandal, now available in super lightweight and flexible EVA. The high-quality, odour-neutral material is also waterproof, washable and extremely easy to care for. Complete with an anatomically-shaped footbed with a deep heel, arch support and toe grip.',
        material: 'EVA (ethylene vinyl acetate)',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0314619250064_001_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=960', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0314619250064_001_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0314619250064_001_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0314619250064_001_f?$redesign-zoom-5x$='],
        categories: ['shoes', 'summer', `women's`, 'new'],
        tags: 'Back in Stock',
        amount: 1
    },
    {
        id: 104,
        title: 'Converse Chuck Taylor All Star Black Canvas High Top Trainers',
        price: '69.00',
        color: ['Black', 'White'],
        text: 'Iconic canvas high-top from the experts at Converse. Fitted with a cushioned footbed, sturdy rubber sole and toe-cap. Finished with cotton laces + metal eyelets.',
        material: 'Cotton, rubber, mixed metal',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315451220111_018_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=960', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315451220111_018_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315451220111_018_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315451220111_018_f?$redesign-zoom-5x$='],
        img2: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315451221002_010_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=640', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315451221002_010_d?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=640', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315451221002_010_e?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=640', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315451221002_010_f?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=640'],
        categories: ['shoes', 'summer', `women's`, `men's`],
        tags: '',
        amount: 1
    },
    {
        id: 105,
        title: 'New Balance 574 Grey Trainers',
        price: '99.00',
        color: 'Grey',
        text: 'Leather trainers by New Balance with a retro runner look. Features a lace-up front and finished with a grippy rubber sole.',
        material: 'Leather, tectile, rubber',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315455535560_004_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315455535560_004_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315455535560_004_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315455535560_004_f?$redesign-zoom-5x$='],
        categories: ['shoes', `women's`, `men's`],
        tags: '',
        amount: 1
    },
    {
        id: 106,
        title: 'Dr. Martens Clarissa Quad Sandals',
        price: '169.00',
        color: 'Black',
        text: 'The Clarissa by Dr. Martens is the same classic gladiator sandal we love, with three straps, an adjustable ankle buckle and all the Docs DNA, but now set on an empowering Quad extra-high platform sole.',
        material: 'Leather, Rubber',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0314428570203_001_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0314428570203_001_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0314428570203_001_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0314428570203_001_f?$redesign-zoom-5x$='],
        categories: ['shoes', 'summer', `women's`],
        tags: '',
        amount: 1
    },
    {
        id: 107,
        title: 'New Balance 452 White & Orange Trainers',
        price: '85.00',
        color: 'White',
        text: 'Throwback dad trainers from New Balance. Features leather uppers with perforated detailing and logo accents throughout. Finished with a grippy rubber sole.',
        material: 'Leather, Rubber',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315455531679_010_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315455531679_010_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315455531679_010_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315455531679_010_f?$redesign-zoom-5x$='],
        categories: ['shoes', `men's`, `women's`, 'new'],
        tags: '',
        amount: 1
    },
    {
        id: 108,
        title: 'Kedai Phoenix Plunging Tie-Back Tank Top',
        price: '29.00',
        color: ['Plum', 'Gold'],
        text: 'Noughties-inspired tank top with a summer-ready style. Sleeveless silhouette Ft. a plunging V-neck, wide shoulder straps, ruched chest, cropped length and a tie-up fastening to reverse.',
        material: '100% Cotton',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0148265380020_055_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0148265380020_055_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0148265380020_055_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0148265380020_055_f?$redesign-zoom-5x$='],
        img2: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0148265380020_072_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=960', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0148265380020_072_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0148265380020_072_e?$redesign-zoom-5x$='],
        categories: ['tops', `women's`],
        tags: '',
        amount: 1
    },
    {
        id: 109,
        title: 'New Balance 452 White & Red Trainers',
        price: '79.00',
        color: 'White',
        text: 'Retro feel dad trainers from New Balance. Features leather uppers with perforated detailing and logo accents throughout. Finished with a grippy rubber sole.',
        material: 'Leather, Rubber',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315455531012_000_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315455531012_000_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315455531012_000_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315455531012_000_f?$redesign-zoom-5x$='],
        categories: ['shoes', `women's`, 'new'],
        tags: '',
        amount: 1
    },
    {
        id: 110,
        title: 'Converse Chuck Taylor All Star Ceramic Green Canvas High Top Trainers',
        price: '69.00',
        color: 'DarkSeaGreen',
        text: 'Iconic canvas high-top from the experts at Converse. Fitted with a cushioned footbed, sturdy rubber sole and toe-cap. Finished with cotton laces and metal eyelets.',
        material: 'Cotton, Rubber, Mixed metal',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315451225009_030_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315451225009_030_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315451225009_030_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0315451225009_030_f?$redesign-zoom-5x$='],
        categories: ['shoes', `women's`, 'new'],
        tags: 'Back in Stock',
        amount: 1
    },
    {
        id: 111,
        title: 'Birkenstock Boston Mocha Suede Clogs',
        price: '115.00',
        color: 'Bisque',
        text: 'The classic Boston clogs by Birkenstock with a mink suede upper. Ft. an adjustable buckle at the strap and finished with a padded foam footbed that offers long-lasting cushioning with high rebound capacity.',
        material: 'Suede, Cork, Rubber',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0314619250140_020_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=960', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0314619250140_020_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0314619250140_020_f?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0314619250140_020_g?$redesign-zoom-5x$='],
        categories: ['shoes', 'vintage', `women's`],
        tags: '',
        amount: 1
    },
    {
        id: 112,
        title: 'White Izzy Smocked Blouse',
        price: '39.00',
        color: 'White',
        text: 'Delicate and femme smocked detailing blouse from Kedai. Features a v-neckline and puff sleeves with elasticated accents. Finished with a cropped peplum-inspired hem.',
        material: '100% Cotton',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0111657781612_010_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0111657781612_010_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0111657781612_010_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0111657781612_010_f?$redesign-zoom-5x$='],
        categories: ['tops', `women's`, 'new'],
        tags: '',
        amount: 1
    },
    {
        id: 113,
        title: 'Kedai frans... Cropped Pique Polo Shirt',
        price: '32.00',
        color: 'Pink',
        text: 'Updated polo shirt by iets frans... designed with a cropped stretch hem. Features a polo collar with quarter-button placket and short sleeves, finished with a contrast logo detail to chest. Exclusive to Kedai.',
        material: '100% Cotton',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0112347826537_066_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0112347826537_066_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0112347826537_066_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0112347826537_066_f?$redesign-zoom-5x$='],
        categories: ['tops', `women's`],
        tags: '',
        amount: 1
    },
    {
        id: 114,
        title: 'Kedai Knitted Cricket Vest',
        price: '49.00',
        color: ['DarkOliveGreen', 'DarkRed'],
        text: 'Oversized cricket vest with a slouchy fit. Sleeveless style Ft. a deep V-neck and tipped rib trims. Finished with an embroidered crest design and a textured knit fabrication.',
        material: '60% Cotton, 40% Acrylic',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0114345141496_030_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0114345141496_030_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0114345141496_030_e?$redesign-zoom-5x$='],
        img2: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0114345141496_060_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=960', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0114345141496_060_d?$redesign-zoom-5x$='],
        categories: ['tops', `women's`],
        tags: 'Back in Stock',
        amount: 1
    },
    {
        id: 115,
        title: 'Kedai Nancy Button-Through Blouse',
        price: '49.00',
        color: 'Azure',
        text: 'Lightweight blouse with a woven fabrication and cut-out lace detailing. Boxy fit Ft. a button-through construction with revere collar, three-quarter-length sleeves and a cropped length hem.',
        material: 'Viscose',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0111742881311_040_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0111742881311_040_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0111742881311_040_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0111742881311_040_f?$redesign-zoom-5x$='],
        categories: ['tops', 'summer', `women's`, 'new'],
        tags: '',
        amount: 1
    },
    {
        id: 116,
        title: 'Carhartt WIP Provence Hooded Chase Sweatshirt',
        price: '95.00',
        color: 'Magenta',
        text: 'Staple hoodie by Carhartt WIP. Features a plain design and pullover style Ft. an adjustable drawstring hood, raglan sleeves, ribbed trims and a slouchy pouch pocket. Finished with a gold logo detail embroidered to cuff.',
        material: '58% Cotton, 42% Polyester',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0180621400150_050_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0180621400150_050_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0180621400150_050_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0180621400150_050_f?$redesign-zoom-5x$='],
        categories: ['tops', `women's`],
        tags: '',
        amount: 1
    },
    {
        id: 117,
        title: 'BDG Patchwork Corduroy Harrington Jacket',
        price: '99.00',
        color: 'BurlyWood',
        text: 'Classic Harrington jacket by BDG. Designed with a cord fabrication and patchwork style. Zip-through construction Ft. a spread collar, drop shoulders, long sleeves and stretch trims, finished with an embroidered BDG crest. Exclusive to Kedai.',
        material: '100% Cotton',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0115593379991_020_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=960', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0115593379991_020_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0115593379991_020_e?$redesign-zoom-5x$='],
        categories: ['jackets', `women's`, 'new'],
        tags: 'Back in Stock',
        amount: 1
    },
    {
        id: 118,
        title: 'BDG Lucia Lavender Corduroy Shacket',
        price: '115.00',
        color: 'Lavender',
        text: 'Effortless shacket by BDG, cut from a heavyweight cord fabrication. Features a button-through construction Ft. spread collar, long sleeves, adjustable cuffs and four side pockets to front. Exclusive to Kedai.',
        material: '100% Cotton',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0115252560565_053_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0115252560565_053_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0115252560565_053_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0115252560565_053_f?$redesign-zoom-5x$='],
        categories: ['jackets', `women's`, 'new'],
        tags: '',
        amount: 1
    },
    {
        id: 119,
        title: 'Ivy Patchwork Quilted Jacket',
        price: '179.00',
        color: 'Brown',
        text: 'Mid-length coat with a quilted fabrication and all-over patchwork print. Features an open front with volume sleeves, tie-up belt and two oversized side pockets.',
        material: 'Main: 100% Viscose, Fill: 100% Polyester',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0115370060002_095_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0115370060002_095_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0115370060002_095_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0115370060002_095_f?$redesign-zoom-5x$='],
        categories: ['jackets', `women's`],
        tags: '',
        amount: 1
    },
    {
        id: 120,
        title: 'MINKPINK Davina Wrap Bikini Top',
        price: '39.00',
        color: 'GoldenRod',
        text: 'Skimpy bikini top by MINKPINK, finished with a vintage-inspired paisley print. Features non-wired triangle cups with adjustable spaghetti straps, backstrap and a tie-up wrap-around detail.',
        material: 'Hand wash',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0145464888019_020_b?$xlarge$=&fit=constrain&fmt=webp&qlt=80&wid=960', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0145464888019_020_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0145464888019_020_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0145464888019_020_f?$redesign-zoom-5x$='],
        categories: ['swimwear', 'summer', `women's`, 'new'],
        tags: '',
        amount: 1
    },
    {
        id: 121,
        title: 'Out From Under Seamless Bandeau Bikini Top',
        price: '22.00',
        color: ['Chocolate', 'Ivory'],
        text: 'Seamless swim top by Out From Under & only at Urban Outfitters. Classic bandeau silhouette with a straight neckline & cropped fit.',
        material: '93% Polyamide, 7% spandex',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0145341872036_020_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0145341872036_020_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0145341872036_020_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0145341872036_020_f?$redesign-zoom-5x$='],
        img2: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0145341872036_237_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0145341872036_237_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0145341872036_237_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0145341872036_237_f?$redesign-zoom-5x$='],
        categories: ['swimwear', 'summer', `women's`],
        tags: '',
        amount: 1
    },
    {
        id: 122,
        title: 'MINKPINK Pink Tamworth Bikini Top',
        price: '65.00',
        color: 'Pink',
        text: 'Bikini bra by MINKPINK, designed with an all-over check print. Balcony-style bra with underwired cups and adjustable straps, finished with a clasp closure to reverse.',
        material: '80% Polyamide, 20% Elastane',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0145464880098_066_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0145464880098_066_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0145464880098_066_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0145464880098_066_f?$redesign-zoom-5x$='],
        categories: ['swimwear', 'summer', `women's`, 'new'],
        tags: 'Back in Stock',
        amount: 1
    },
    {
        id: 123,
        title: 'BDG White Roll Hem Denim Mom Shorts',
        price: '39.00',
        color: 'White',
        text: 'High-rise denim shorts by BDG with classic five-pocket styling and Mom fit. Finished with rolled hems and a brand patch to reverse hem. Only at Urban Outfitters.',
        material: '100% Cotton',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0125593370049_010_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0125593370049_010_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0125593370049_010_e?$redesign-zoom-5x$='],
        categories: ['bottoms', 'summer', `women's`],
        tags: '',
        amount: 1
    },
    {
        id: 124,
        title: 'Urban Outfitters Archive Tan Tailored Flared Trousers',
        price: '55.00',
        color: 'Khaki',
        text: 'Throwback flared trousers by the team at Urban Renewal. Cut with a high-rise waistband, belt loops, classic pocket silhouette, slim fit and flared silhouette.',
        material: '100% Cotton',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0418643730075_023_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0418643730075_023_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0418643730075_023_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0418643730075_023_f?$redesign-zoom-5x$='],
        categories: ['bottoms', `women's`],
        tags: '',
        amount: 1
    },
    {
        id: 125,
        title: 'Dickies Elizaville Pink Workwear Trousers',
        price: '69.00',
        color: 'Pink',
        text: 'Skate style trousers by Dickies. Made from a durable twill construction Ft. a mid-rise, belt loops, button and zip fly, four-pocket design and straight-leg silhouette. Finished with creases and a brand patch at reverse.',
        material: '100% Cotton',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0180902470034_066_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0180902470034_066_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0180902470034_066_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0180902470034_066_f?$redesign-zoom-5x$='],
        categories: ['bottoms', `women's`],
        tags: '',
        amount: 1
    },
    {
        id: 126,
        title: 'Urban Renewal Vintage Black Boxing Shorts',
        price: '49.00',
        color: 'Black',
        text: 'Branded vintage boxing shorts, sourced by the team at Urban Renewal. Each pair features an elasticated waist, a relaxed fit and a branded design.',
        material: '100% Vintage fibres',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0413652650007_001_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0413652650007_001_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0413652650007_001_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0413652650007_001_f?$redesign-zoom-5x$='],
        categories: ['bottoms', 'vintage', `women's`, 'new'],
        tags: 'Vintage look',
        amount: 1
    },
    {
        id: 127,
        title: 'Urban Renewal Vintage Black Boxing Shorts',
        price: '49.00',
        color: 'Black',
        text: 'Branded vintage boxing shorts, sourced by the team at Urban Renewal. Each pair features an elasticated waist, a relaxed fit and a branded design.',
        material: '100% Vintage fibres',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0413652650007_001_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0413652650007_001_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0413652650007_001_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0413652650007_001_f?$redesign-zoom-5x$='],
        categories: ['bottoms', 'vintage', `women's`],
        tags: '',
        amount: 1
    },
    {
        id: 128,
        title: 'Urban Renewal Remade From Vintage Embroidered Pink Stripe Shirt',
        price: '39.00',
        color: 'Pink',
        text: 'True vintage shirt with an upcycled addition, customised and brought to you by Urban Renewal. Each unique piece features a spread collar, button-through construction and long sleeves. Finished with a striped fabrication and embroidered logo detail.',
        material: '100% Vintage fibres',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0414621551115_066_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0414621551115_066_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0414621551115_066_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0414621551115_066_f?$redesign-zoom-5x$='],
        categories: ['vintage', `women's`],
        tags: 'Vintage look',
        amount: 1
    },
    {
        id: 129,
        title: 'Out From Under Naya Wide Leg Trousers',
        price: '55.00',
        color: ['Brown', 'Plum'],
        text: 'Lightweight cotton trousers from Out From Under. Features a loose style, a high rise waist with elastics at the sides, pleating details and a cropped length. Only at Kedai.',
        material: '100% Cotton',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0142264849005_020_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0142264849005_020_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0142264849005_020_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0142264849005_020_f?$redesign-zoom-5x$='],
        img2: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0142264849005_065_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0142264849005_065_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0142264849005_065_e?$redesign-zoom-5x$='],
        categories: ['bottoms', 'vintage', `women's`, 'new'],
        tags: '',
        amount: 1
    },
    {
        id: 130,
        title: 'Vagabond Cosmo 2.0 Loafers',
        price: '139.00',
        color: 'Black',
        text: 'Chunky leather loafer style from Vagabond. Featuring all-black upper set on a solid sole for a subtle lift. Finished with classic, visible stitching and contoured penny strap.',
        material: 'Leather',
        img: ['https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0311432520010_001_b?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0311432520010_001_d?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0311432520010_001_e?$redesign-zoom-5x$=', 'https://s7g10.scene7.com/is/image/UrbanOutfittersEU/0311432520010_001_f?$redesign-zoom-5x$='],
        categories: ['shoes', `women's`, 'new'],
        tags: 'Back in Stock',
        amount: 1
    },
]


export const mensBrowse = ['New', 'Shoes', 'Jackets', 'Activewear', 'Bottoms', 'Vintage', 'Sale']

export const mensProducts = [

    {
        id: 150,
        title: 'Salomon XA-Pro 1 Sneaker',
        price: '170.00',
        color: 'Purple',
        text: 'Hiking sneaker by Salomon with a drawcord style lace-up front. Features overlays at the uppers for an outdoorsy look. Supportive shoe with cushioning throughout and finished with a textured rubber sole.',
        material: 'Mesh, rubber',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/59158618_050_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/59158618_050_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/59158618_050_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/59158618_050_f?$redesign-zoom-5x$'],
        categories: ['shoes', 'new', `men's`],
        tags: 'Back in Stock',
        amount: 1
    },
    {
        id: 151,
        title: 'HOKA ONE ONE® Kaha GORE-TEX Boot',
        price: '220.00',
        color: ['Black', 'Cream'],
        text: 'Lightweight waterproof hiking boot from HOKA ONE ONE®. The GTX full-grain leather upper offers support and comfort while the EVA, classic HOKA ONE ONE® foam and Vibram Megagrip high-traction soles and tread make sure you are steady on your feet all day long. Complete with 5mm multi-directional lugs.',
        material: 'GORE-TEX waterproofing, leather, EVA, rubber',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/53787446_001_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/53787446_001_f?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/53787446_001_g?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/53787446_001_d?$redesign-zoom-5x$'],
        img2: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/53787446_003_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=960', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/53787446_003_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/53787446_003_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/53787446_003_f?$redesign-zoom-5x$'],
        categories: ['shoes', 'activewear', `men's`],
        tags: '',
        amount: 1
    },
    {
        id: 152,
        title: 'HOKA ONE ONE® Speedgoat 4 Running Shoe',
        price: '145.00',
        color: ['Red', 'Navy'],
        text: 'Speedgoat 4 runners from HOKA ONE ONE®. Updated mesh upper provides breathability while 3D printed overlays offer additional midfoot support and lockdown for a more secure feel. Complete with gusseted tongue with strategic cutouts for breathability, lacing eye-rows with a small winged component to ensure a secure fit and lightweight foam midsole for a more responsive ride. Wider forefoot offers an accommodating fit while Vibram® Megagrip rubber outsole provides grip in wet and dry conditions. Finished with 5mm “stepped” lugs and zonal rubber placement adds support and stability.',
        material: 'Textile, rubber',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/56135288_060_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/56135288_060_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/56135288_060_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/56135288_060_f?$redesign-zoom-5x$'],
        img2: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/56135288_040_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/56135288_040_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/56135288_040_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/56135288_040_f?$redesign-zoom-5x$'],
        categories: ['shoes', 'activewear', 'new', `men's`],
        tags: '',
        amount: 1
    },
    {
        id: 153,
        title: 'Nike Air Force 1 ’07 Stitch Sneaker',
        price: '90.00',
        color: ['Black ', 'Green'],
        text: 'A bold take on the Air Force 1 ’07 CV1724 sneaker by Nike with a contrast stitch style. Padded low-top silhouette with swoosh detailing to the sides and perforation at the toe. Finished with a durable rubber outsole.',
        material: 'Leather, rubber',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/58877572_018_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/58877572_018_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/58877572_018_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/58877572_018_f?$redesign-zoom-5x$'],
        img2: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/58877572_030_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=960', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/58877572_030_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/58877572_030_e?$redesign-zoom-5x$'],
        categories: ['shoes', `men's`],
        tags: '',
        amount: 1
    },
    {
        id: 154,
        title: 'Nike Challenger OG Sneaker',
        price: '90.00',
        color: 'SkyBlue',
        text: 'The classic athletic sneaker by Nike with a low-profile upper and lace-up front. Features a leather & textile upper with essential Nike swoosh detailing to the sides. Finished with a grippy rubber outsole.',
        material: 'Leather, mesh, nylon, rubber',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/56521503_045_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/56521503_045_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/56521503_045_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/56521503_045_f?$redesign-zoom-5x$'],
        categories: ['shoes', 'vintage', `men's`],
        tags: 'Vintage Look',
        amount: 1
    },
    {
        id: 155,
        title: 'Dr. Martens Core 1460 8-Eye Boot',
        price: '150.00',
        color: ['Black', 'Maroon'],
        text: 'Classic 8-eye boot from the experts at Dr. Martens. Smooth leather outer with 8-eye lace closure. Complete with branded pull-tab + rubber. Goodyear-welted sole with iconic yellow stitching.',
        material: 'Leather, rubber',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/46604476_001_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/46604476_001_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/46604476_001_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/46604476_001_f?$redesign-zoom-5x$'],
        img2: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/46604476_061_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/46604476_061_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/46604476_061_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/46604476_061_f?$redesign-zoom-5x$'],
        categories: ['shoes', 'sale', `men's`],
        tags: '',
        amount: 1
    },
    {
        id: 156,
        title: 'adidas Adilette Slide Sandal',
        price: '45.00',
        color: ['White', 'Black'],
        text: 'Favorite pool slides from adidas. Slip-on silhouette offers a textured three-stripe foot strap and a contoured footbed for comfort. Finished with a grippy rubber outsole.',
        material: 'Rubber',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/48975288_010_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/48975288_010_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/48975288_010_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/48975288_010_f?$redesign-zoom-5x$'],
        img2: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/48975288_001_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/48975288_001_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/48975288_001_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/48975288_001_f?$redesign-zoom-5x$'],
        categories: ['shoes', `men's`],
        tags: '',
        amount: 1
    },
    {
        id: 157,
        title: 'OBEY Captain Corduroy Jacket',
        price: '125.00',
        color: 'Red',
        text: 'Cotton cord jacket by streetwear label OBEY. Features a standard fit with a zip-through front and a tab collar. Topped with flap pockets at the waist and elasticated trims at the cuffs & hem. Finished with a logo accent at the left chest.',
        material: '100% Cotton',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/60030509_060_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/60030509_060_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/60030509_060_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/60030509_060_f?$redesign-zoom-5x$'],
        categories: ['jackets', `men's`],
        tags: '',
        amount: 1
    },
    {
        id: 158,
        title: 'Kedai Sherpa Bomber Jacket',
        price: '89.00',
        color: 'Black',
        text: 'Sherpa jacket in a classic bomber silhouette. Ft. a full-zip closure topped with a pointed collar, front slip pockets and cinched elasticated at cuffs and hem.',
        material: '100% Polyester',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/73285868_001_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/73285868_001_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/73285868_001_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/73285868_001_f?$redesign-zoom-5x$'],
        categories: ['jackets', 'new', `men's`],
        tags: '',
        amount: 1
    },
    {
        id: 159,
        title: 'BDG Buffalo Check Shirt Jacket',
        price: '79.00',
        color: ['Rose', 'Teal'],
        text: 'Update your style for spring with this muted buffalo check shirt by BDG. Features a warm fabrication with a button front and tab collar. Topped with patch pockets at the chest. Includes button detailing at the cuffs and a notched hem. Urban Outfitters exclusive.',
        material: '54% Polyester, 39% acrylic, 7% other',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/61010054_065_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/61010054_065_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/61010054_065_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/61010054_065_f?$redesign-zoom-5x$'],
        img2: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/61010054_105_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/61010054_105_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/61010054_105_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/61010054_105_f?$redesign-zoom-5x$'],
        categories: ['jackets', `men's`],
        tags: '',
        amount: 1
    },
    {
        id: 160,
        title: 'Standard Cloth Oliver Nylon Short',
        price: '34.00',
        color: ['Purple', 'Chocolate'],
        text: 'Simple nylon shorts from Standard Cloth, exclusively available at UO! Cut in a relaxed fit that hits just above the knee, these shorts are rendered from lightweight nylon and topped with a stretchy elastic waistband with adjustable drawstring closure. Finished with front slip pockets and a single back patch pocket. Standard Cloth is committed to using quality materials, offering great fits and leaving no detail unconsidered. Welcome to your new favorites.',
        material: '100% Nylon',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/55648349_050_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/55648349_050_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/55648349_050_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/55648349_050_f?$redesign-zoom-5x$'],
        img2: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/55648349_021_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/55648349_021_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/55648349_021_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/55648349_021_f?$redesign-zoom-5x$'],
        categories: ['bottoms', `men's`],
        tags: '',
        amount: 1
    },
    {
        id: 161,
        title: 'Katin Local Corduroy Short',
        price: '62.00',
        color: ['Brown', 'Tan'],
        text: 'Simple nylon shorts from Standard Cloth, exclusively available at UO! Cut in a relaxed fit that hits just above the knee, these shorts are rendered from lightweight nylon and topped with a stretchy elastic waistband with adjustable drawstring closure. Finished with front slip pockets and a single back patch pocket. Standard Cloth is committed to using quality materials, offering great fits and leaving no detail unconsidered. Welcome to your new favorites.',
        material: '100% Nylon',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/54994322_020_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/54994322_020_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/54994322_020_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/54994322_020_f?$redesign-zoom-5x$'],
        img2: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/54994322_023_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/54994322_023_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/54994322_023_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/54994322_023_f?$redesign-zoom-5x$'],
        categories: ['bottoms', 'vintage', `men's`],
        tags: 'Back in Stock',
        amount: 1
    },
    {
        id: 162,
        title: 'Kedai Embroidered Corduroy Beach Pant',
        price: '69.00',
        color: ['Green', 'Tan'],
        text: 'Pull-on cord beach pants from Urban Outfitters. Ribbed cotton is cut in a relaxed silhouette with an elasticized waistband with belt loops, 4-pocket styling and an adjustable drawstring closure at the interior. Finished with embroidered icons throughout.',
        material: '100% Cotton',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/57974701_030_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/57974701_030_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/57974701_030_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/57974701_030_f?$redesign-zoom-5x$'],
        img2: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/57974701_023_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/57974701_023_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/57974701_023_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/57974701_023_f?$redesign-zoom-5x$'],
        categories: ['bottoms', 'vintage', `men's`],
        tags: 'Vintage Look',
        amount: 1
    },
    {
        id: 163,
        title: 'iets frans… Washed Black Short',
        price: '42.00',
        color: 'Black',
        text: 'Athleisure shorts from iets frans... Crafted from soft jersey cotton. Finished with iets frans… branding at the left thigh.',
        material: '100% Cotton',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/72903784_001_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/72903784_001_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/72903784_001_e?$redesign-zoom-5x$'],
        categories: ['bottoms', 'activewear', `men's`],
        tags: '',
        amount: 1
    },
    {
        id: 164,
        title: 'BDG Double Knee Work Pant– Light Wash',
        price: '69.00',
        color: 'Blue',
        text: 'Denim work pants from BDG, featuring a bluebell wash. Straight silhouette is cut in a relaxed fit with carpenter-pocket styling, zip fly and button waist closure. Totally basic, totally necessary, BDG is our true staple collection. Borrowing style tips from the collegiate crowd, BDG gives classic fits an original twist.',
        material: '100% Cotton',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/58910928_106_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/58910928_106_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/58910928_106_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/58910928_106_g?$redesign-zoom-5x$'],
        categories: ['bottoms', 'vintage', `men's`],
        tags: 'Vintage Look',
        amount: 1
    },
    {
        id: 165,
        title: 'adidas Tiro 21 Track Pant',
        price: '50.00',
        color: 'Black',
        text: 'Essential recycled poly track pants by adidas topped with the brand’s signature 3-stripe accents to the sides. Athletic style with a tapered silhouette & pockets at the sides and back.',
        material: 'Recycled polyester',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/58730631_001_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/58730631_001_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/58730631_001_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/58730631_001_f?$redesign-zoom-5x$'],
        categories: ['bottoms', 'activewear', `men's`],
        tags: '',
        amount: 1
    },
    {
        id: 166,
        title: 'Tried And True Co. Vintage Yosemite Wildlife Tee',
        price: '100.00',
        color: 'Blue',
        text: 'Printed vintage tee brought to you in its original form. Regular fit t-shirt with short sleeves and a classic crew neck. Staying true to their streetwear roots, Tried And True Co. sources timeless vintage pieces that feel authentic to nostalgic ‘90s culture. Sustaining sentimentality and making relics relevant, the LA-based vintage boutique has been blending old school classics with modern aesthetics since 2012.',
        material: '100% Cotton',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/62058672_044_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/62058672_044_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/62058672_044_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/62058672_044_f?$redesign-zoom-5x$'],
        categories: ['vintage', `men's`],
        tags: 'Vintage Look',
        amount: 1
    },
    {
        id: 167,
        title: 'BDG Grey Lined Hooded Jacket',
        price: '119.00',
        color: 'Grey',
        text: 'Cozy and warm hooded jacket by BDG. Made from a sturdy canvas fabric with a soft fleece lining. Cut with a fixed hood, zip-up fastening, drop shoulders and long sleeves. Finished with fitted cuffs and a stretch hem.',
        material: 'Shell: 100% Cotton, Lining: 80% Polyester, 20% Acrylic',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/73382822_040_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/73382822_040_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/73382822_040_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/73382822_040_f?$redesign-zoom-5x$'],
        categories: ['jackets', 'vintage', `men's`],
        tags: '',
        amount: 1
    },
    {
        id: 168,
        title: 'Kedai Brown Teddy Veat',
        price: '69.00',
        color: 'Orange',
        text: 'Warm teddy vest, part of Kedai staple collection. Features a mock neck, front zip fastening, sleeveless design and tonal embroidery logo to front chest.',
        material: '100% Polyester',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/73908550_072_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/73908550_072_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/73908550_072_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/73908550_072_f?$redesign-zoom-5x$'],
        categories: ['jackets', `men's`],
        tags: '',
        amount: 1
    },
    {
        id: 169,
        title: 'Dr. Martens 1490 10-Eye Boot',
        price: '160.00',
        color: 'Black',
        text: 'Standard Docs laced high in a 10-eye silhouette. 1490 boots offer a premium leather upper in a smooth finish with tonal laces + back pull-tab. Air-cushioned sole features grooved edges and iconic yellow stitching. With their iconic 90s grunge styling, British boot- maker Dr.Martens is known for ultra - premium craftsmanship.With cushy soles and mandatory break-in period, these classic leather goods are lifers, for sure.',
        material: 'Leather, rubber',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/46604351_001_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/46604351_001_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/46604351_001_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/46604351_001_f?$redesign-zoom-5x$'],
        categories: ['shoes', `men's`],
        tags: '',
        amount: 1
    },
    {
        id: 170,
        title: 'Salomon X-ULTRA ADV Running Shoe',
        price: '100.00',
        color: ['Black', 'White'],
        text: 'Outdoor-ready running shoe by Salomon with a lightweight and breathable upper. Mesh construction with the brands Quicklace® front.Fitted with a SensiFit™ midsole and finished with a durable Contagrip® TD outsole for maximum traction on most terrains.',
        material: 'Textile, rubber',
        img: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/56966211_001_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/56966211_001_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/56966211_001_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/56966211_001_f?$redesign-zoom-5x$'],
        img2: ['https://s7d5.scene7.com/is/image/UrbanOutfitters/56966211_031_b?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/56966211_031_d?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/56966211_031_e?$redesign-zoom-5x$', 'https://s7d5.scene7.com/is/image/UrbanOutfitters/56966211_031_f?$redesign-zoom-5x$'],
        categories: ['shoes', 'activewear', `men's`],
        tags: '',
        amount: 1
    },
]