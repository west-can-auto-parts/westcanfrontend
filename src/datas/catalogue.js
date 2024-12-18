const parts = [
    {
        title: 'Replacement Parts',
        subParts: [
            {
                id: 2,
                category: "TIER 1 (CATEGORY)",
                listing: "Brake Parts",
                tags: ["brake system", "vehicle safety", "Replacement Parts"],
                parts: [
                    {
                        id: 41,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Brake Rotors",
                        content: "At West Can Auto Parts, we care for the safety of the driver and the passengers and also the effective braking of the vehicle.\n\nWhether you're looking for slotted, drilled, or solid rotors, we have a wide selection to suit your needs. Upgrade your vehicle's braking performance with high-quality brake rotors. Designed to withstand intense heat and friction, our brake rotors ensure optimal stopping power and enhanced safety on the road.",
                        imageUrl1: "https://rxmechanic.com/wp-content/uploads/2022/06/Brake-Rotor.jpg",
                        imageUrl2: "https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/Lifetime_of_Brake_Rotors",
                        imageUrl3: "https://ad4062394301f5213879-385273f35a1492ed75ad0e23ea945a34.ssl.cf1.rackcdn.com/mustang-front-brake-rotors-drilled-slotted-13-23-11-14-v6-gt_be44f9e7.jpg",
                        tags: ["brake rotors", "high-performance", "heat-resistant", "safety"]
                    },
                    {
                        id: 42,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Brake Pads",
                        content: "Don't compromise on safety. Upgrade your vehicle's braking performance with high-quality brake pads from our e-commerce store. Our brake pads are engineered to provide optimal stopping power, ensuring your safety on the road. Made with premium materials, they offer excellent durability, fade resistance, and consistent performance.",
                        imageUrl1: "https://lemonbin.com/wp-content/uploads/2020/06/ceramic-brake-pads-101118-min.jpg",
                        imageUrl2: "https://images.roverparts.com/1000/LR079910G-01.jpg",
                        imageUrl3: "https://cdn.shopify.com/s/files/1/0266/0142/2896/products/D40604EA0B_915acf89-d9e8-4f85-8429-9c6da6d006c5_2048x2048.jpg?v=1643822751",
                        tags: ["brake pads", "durable", "fade-resistant", "safety"]
                    },
                    {
                        id: 43,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Brake Calipers",
                        content: "Upgrade your vehicle's braking performance with high-quality brake calipers.\n\nOur selection of brake calipers offers durability, reliability, and enhanced stopping power. Crafted with precision engineering and built to withstand rigorous conditions, our calipers ensure optimal braking efficiency.",
                        imageUrl1: "https://m.media-amazon.com/images/I/71Jgg6caDfL._AC_UF894,1000_QL80_.jpg",
                        imageUrl2: "https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/SBF_Brake_Caliper",
                        imageUrl3: "https://www.europaparts.com/media/catalog/product/cache/abf26066ecd46d435ee2486b4a5aee03/0/0/0024205883.jpg",
                        tags: ["brake calipers", "durable", "reliable", "performance"]
                    },
                    {
                        id: 44,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Brake Shoes",
                        content: "Crafted from premium materials, they provide excellent friction and heat dissipation, reducing the risk of brake fade. With a perfect fit and easy installation, our brake shoes offer a seamless upgrade for your vehicle's braking system.",
                        imageUrl1: "https://ebcbrakes.com/wp-content/uploads/2021/06/brake-shoes-min.jpg",
                        imageUrl2: "https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/Good_Quality_Brake_Shoes",
                        imageUrl3: "https://carfromjapan.com/wp-content/uploads/2020/03/brake-shoes.jpg",
                        tags: ["brake shoes", "friction", "heat dissipation", "easy installation"]
                    },
                    {
                        id: 45,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Brake Drums",
                        content: "Revolutionize your ride with our cutting-edge brake drums! Engineered for peak performance and unmatched reliability, our precision-crafted brake drums ensure optimal stopping power and superior durability. Whether you're navigating city streets or conquering rugged terrains, trust our high-quality brake drums to deliver unmatched safety and control. Designed to exceed industry standards, these essential components guarantee a smooth and responsive braking experience every time.\n\nUpgrade your vehicle today and experience the pinnacle of braking technology with our premium brake drums.",
                        imageUrl1: "https://www.my-cardictionary.com/fileadmin/user_upload/Inhalt/Produkte/Bremstrommel/bremstrommel_734x350_w734.jpg",
                        imageUrl2: "https://www.my-cardictionary.com/fileadmin/user_upload/Inhalt/Produkte/Bremstrommel/bremstrommel_734x350_w734.jpg",
                        imageUrl3: "https://cdn.shopify.com/s/files/1/2136/3225/products/rda_drum_1024x1024.jpg?v=1597289578",
                        tags: ["brake drums", "performance", "durability", "reliability"]
                    },
                    {
                        id: 46,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Brake Hydraulics",
                        content: "Say goodbye to worries and embrace peace of mind on the road. Whether it's a sudden stop or a smooth deceleration, our advanced technology ensures precise and reliable braking power.\n\nUpgrade your ride with our trusted brake hydraulics and experience the ultimate driving experience.",
                        imageUrl1: "https://www.macsautoparts.com/media/catalog/product/cache/e8278bb62b6191f0a2c63cf38a3ced70/6/4/64-20062.jpg",
                        imageUrl2: "https://i.ebayimg.com/images/g/W50AAOSwJPVdWf0F/s-l1600.jpg",
                        imageUrl3: "https://sc04.alicdn.com/kf/H043eb503755347e99d32cfe8a40df39cX.jpg",
                        tags: ["brake hydraulics", "precision", "reliable", "advanced technology"]
                    },
                    {
                        id: 47,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Brake Hardware",
                        content: "Whether you're a car enthusiast or a professional mechanic, our e-commerce store offers a wide range of high-quality brake hardware. From brake pads to rotors, calipers to brake lines, we've got you covered.\n\nUpgrade your braking system today and enjoy peace of mind on the road. Shop now and stop with confidence!",
                        imageUrl1: "https://www.corvettecentral.com/product/image/large/193135_193135.main.jpg",
                        imageUrl2: "https://cdn.shopify.com/s/files/1/0027/8770/4898/products/29373523ca4f87509357ee8292b3d74e_2816x.jpg?v=1571719814",
                        imageUrl3: "https://m.media-amazon.com/images/I/71iAx-QJbNL._SL1500_.jpg",
                        tags: ["brake hardware", "car enthusiast", "mechanic", "high-quality"]
                    },
                    {
                        id: 48,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Master Cylinders & Brake Boosters",
                        content: "Don't compromise on safety – equip your vehicle with our premium Brake Master Cylinders and Brake Boosters. Crafted with precision and passion, our products deliver unrivaled stopping power, giving you the confidence to conquer the road ahead.\n\nUpgrade your braking system today!",
                        imageUrl1: "https://www.mechanicalbooster.com/wp-content/uploads/2018/05/Brake-Booster.jpg",
                        imageUrl2: "https://brucebilt.com/wp-content/uploads/DSE050105DS-1.jpg",
                        imageUrl3: "https://carfromjapan.com/wp-content/uploads/2018/02/feature-image.jpeg",
                        tags: ["master cylinders", "brake boosters", "premium", "stopping power"]
                    },
                    {
                        id: 49,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "ABS Parts",
                        content: "With West Can Auto Parts, the Anti Lock Braking System parts ensure your vehicle stays on the road with confidence. Whether you need ABS sensors, control modules, or complete ABS assemblies, we've got you covered.",
                        imageUrl1: "https://5.imimg.com/data5/SELLER/Default/2022/7/QR/GO/EO/115586765/abs-500x500.jpg",
                        imageUrl2: "https://www.zf.com/public/FirstSpirit749x499WebP/Anti-LockBrakingSystemsMainImageWNA_71056.webp",
                        imageUrl3: "https://i0.wp.com/studentlesson.com/wp-content/uploads/2023/02/20230212_224826.jpg?fit=1200%2C863&ssl=1",
                        tags: ["ABS parts", "sensors", "control modules", "braking system"]
                    }
                ],
                content: "West Can Auto Parts is your one-stop destination for top-quality braking systems. Explore our wide selection of brake pads, rotors, calipers, and lines to ensure optimal safety and performance for your vehicle. With our reliable and durable components sourced from trusted manufacturers, you can trust that your braking system is in good hands. \n\nShop with confidence, knowing that our detailed product descriptions will guide you in finding the perfect braking system components for your specific needs. Upgrade your braking power today for a safer and more enjoyable driving experience.",
                imageUrl1: "https://res.cloudinary.com/dpeocx0yy/image/upload/v1725432149/jakosc-badana-1_fliclr.webp",
                imageUrl2: "https://images.jdmagicbox.com//rep/b2b/brake-system-part/brake-system-part-4.jpg",
                imageUrl3: "",
                tags: ["brake systems", "vehicle safety", "performance", "auto parts"]
            },
            {
                id: 3,
                category: "TIER 1 (CATEGORY)",
                listing: "Suspension Parts",
                tags: ["suspension system", "vehicle handling", "Replacement Parts"],
                parts: [
                    {
                        id: 50,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Shocks & Struts",
                        content: "Say goodbye to bumpy roads and hello to ultimate comfort and control.\n\nWhether you're a city driver or an off-road adventurer, our shocks and struts are built to handle any terrain with ease.\n\nUpgrade your vehicle today and unlock a whole new level of driving pleasure.",
                        imageUrl1: "https://images-cdn.ubuy.co.in/633b2be9131d8e0f122b26d0-coilover-struts-spring-shocks-adjustable.jpg",
                        imageUrl2: "https://cdn.shopify.com/s/files/1/2597/3112/products/KYB335080-KYB335081-KYB349218-set.jpg?v=1654040435",
                        imageUrl3: "https://www.qa1.net/images/cache/assets/uploads/images/product/Product_Category_StockMountShocksStruts-1500x1500.jpg",
                        tags: ["shocks", "struts", "comfort", "control"]
                    },
                    {
                        id: 51,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Springs",
                        content: "Our meticulously engineered springs offer unrivaled durability, ensuring a long-lasting performance upgrade for your vehicle.\n\nWith easy installation and a perfect fit for various makes and models, our Suspension Springs are the answer to your automotive dreams.",
                        imageUrl1: "https://images.customwheeloffset.com/buy2-compressed/web/58601-1-45-coil-spring-lift-kit-84-01-jeep-cherokee-4wd-dana-35-rear-axle-leaf-springs.jpg",
                        imageUrl2: "https://fcf3kb0b.cdn.imgeng.in/media/catalog/product/1/7/176EBKS-BHNG.jpg",
                        imageUrl3: "https://www.gknautomotive.com/globalassets/global-images/divisions/driveline-aftermarket--motorsport/springs.jpg",
                        tags: ["springs", "durability", "performance", "easy installation"]
                    },
                    {
                        id: 52,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Suspension Parts",
                        content: "Don't settle for a bumpy journey. From struts to control arms, we've got you covered. Experience smoother rides, enhanced handling, and reduced vibrations.",
                        imageUrl1: "https://images-cdn.ubuy.co.in/63701fb790056d406a3fa134-feiparts-8pcs-suspension-parts-lower.jpg",
                        imageUrl2: "https://www.intactmotor.com.sg/wp-content/uploads/2019/10/Steering-Parts.jpg",
                        imageUrl3: "https://m.media-amazon.com/images/I/41DRrkhhk3L.jpg",
                        tags: ["suspension parts", "handling", "vibrations", "smooth ride"]
                    },
                    {
                        id: 53,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Air Suspension",
                        content: "Explore our wide range of automotive air suspension options designed to cater to every vehicle and driving style. Experience the perfect harmony between performance and comfort.\n\nUpgrade your vehicle's suspension for superior handling and stability on any terrain.",
                        imageUrl1: "https://cdn11.bigcommerce.com/s-8yj8mwad/product_images/uploaded_images/airlift.jpg",
                        imageUrl2: "https://transport.kelsey.host/wp-content/uploads/sites/2/Air-suspension-guide-2.jpg",
                        imageUrl3: "https://cdn11.bigcommerce.com/s-m5ohba2r3k/images/stencil/1280x1280/products/5552/6999/78660__84783.1568826971.jpg?c=2",
                        tags: ["air suspension", "performance", "comfort", "stability"]
                    },
                    {
                        id: 54,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Shocks & Strut Hardware",
                        content: "From precision-engineered shocks to durable strut hardware, we offer the highest quality components that guarantee optimal vehicle stability and control. Experience enhanced safety and handling while preserving your vehicle's longevity.\n\nWith our reliable and trusted brand, you can trust us to deliver the perfect solution for your automotive needs.\n\nUpgrade your ride today and conquer the road with confidence.",
                        imageUrl1: "https://cdn.shopify.com/s/files/1/0637/7501/5144/products/BCZC_907921_P04_FRO.jpg?v=1655774785",
                        imageUrl2: "https://images-na.ssl-images-amazon.com/images/I/312i2+TDZ4L._AC_UL600_SR600,600_.jpg",
                        imageUrl3: "https://cdn.shopify.com/s/files/1/0637/7501/5144/products/BCZC_907921_P04_FRO.jpg?v=1655774785",
                        tags: ["shocks", "strut hardware", "stability", "vehicle control"]
                    }
                ],
                content: "At West Can Auto Parts, we care for the drive quality. Our extensive range includes essential components such as control arms, ball joints, shocks, struts, sway bars, and more. Whether you're looking for improved handling, increased comfort, or enhanced stability, our suspension parts are designed to meet your needs. Engineered with precision and durability in mind, these parts ensure optimal performance and safety on the road. \n\nExplore our selection today and give your vehicle the suspension upgrade it deserves. Shop now and experience a smoother, more controlled ride.",
                imageUrl1: "https://res.cloudinary.com/dpeocx0yy/image/upload/v1725432189/c2c3front_o2dqtm.jpg",
                imageUrl2: "https://cdn.classicindustries.com/assets/images/ProductImg/K/K5706612.JPG",
                imageUrl3: "https://drgi9xfhvf38z.cloudfront.net/misc/6qs1700124-p04-1485x1363-ywbwscnoyluss9ziddlv1dxlnl8.jpg",
                tags: ["suspension system", "handling", "comfort", "auto parts"]
            },
            {
                id: 4,
                category: "TIER 1 (CATEGORY)",
                listing: "Filters",
                tags: [
                    "Automotive Maintenance",
                    "Engine Protection",
                    "Lubrication Systems",
                    "Air Quality",
                    "Fuel Efficiency"
                ],
                parts: [
                    {
                        id: 55,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Engine Oil Filters",
                        content: "With easy installation and reliable performance, our Engine Oil Filters are the perfect choice for keeping your engine running smoothly and extending its lifespan. It efficiently removes impurities and contaminants from the oil, preventing damage to engine parts and ensuring optimal lubrication.",
                        imageUrl1: "https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/Quality_Oil_Filter",
                        imageUrl2: "https://autowise.com/wp-content/uploads/2018/09/spin-on-oil-filter.jpg",
                        imageUrl3: "https://s19528.pcdn.co/wp-content/uploads/2019/01/Oil-Filters.jpg",
                        tags: [
                            "Oil Filter",
                            "Engine Care",
                            "Impurity Removal",
                            "Smooth Engine Operation",
                            "Longevity"
                        ]
                    },
                    {
                        id: 56,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Engine Air Filters",
                        content: "Our filters are a smart investment for every car enthusiast or daily driver. Designed for efficiency and longevity, our filters are crafted to trap dust, pollen, and other contaminants, ensuring clean air intake and optimal engine function.\n\nSay goodbye to reduced fuel economy and sluggish acceleration.",
                        imageUrl1: "https://www.repco.co.nz/medias/A6115580.jpg?context=bWFzdGVyfGltYWdlc3w5MjQyMHxpbWFnZS9qcGVnfHN5cy1tYXN0ZXIvaW1hZ2VzL2g2NC9oNWEvOTgzMDc5ODU4OTk4Mi9BNjExNTU4MC5qcGd8OWM5NjNlNjhiMGQxZWE4YmI0NjMwYjAxYzcyOWQxYzc4NTMwMDA1MzBkYjYxNzI4NjVjMjI0YjVlNjQ2Y2QzMA",
                        imageUrl2: "https://i.pinimg.com/originals/48/e3/70/48e370a4a180503f0fe8e08d96c91b1b.jpg",
                        imageUrl3: "https://cdn.shopify.com/s/files/1/0686/7599/products/Mazda-Original-Engine-Air-Filter-Replacement-Mazda-CX-5-2013-2022-3_1200x.webp?v=1653938609",
                        tags: [
                            "Air Filter",
                            "Dust Protection",
                            "Pollen Removal",
                            "Engine Efficiency",
                            "Fuel Economy"
                        ]
                    },
                    {
                        id: 57,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Cabin Air Filters",
                        content: "Filter Out the Bad!\n\nSay goodbye to dust, pollen, and harmful airborne particles. Our Cabin Air Filters effectively trap contaminants, providing you and your passengers with cleaner, allergen-free air.\n\nGrab yours now only from West Can Auto Parts",
                        imageUrl1: "https://images-cdn.ubuy.co.in/63ad2395c0b9bc1efc496d06-dorman-259-000-cabin-air-filter.jpg",
                        imageUrl2: "https://di-uploads-pod18.dealerinspire.com/vatlandhonda/uploads/2022/02/Cabin-Air-Filter-2.jpg",
                        imageUrl3: null,
                        tags: [
                            "Cabin Filter",
                            "Allergen Removal",
                            "Clean Air",
                            "Passenger Comfort",
                            "Air Quality"
                        ]
                    },
                    {
                        id: 58,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Fuel Filters",
                        content: "Designed to maximize engine efficiency, our filters effectively trap contaminants and ensure clean fuel flow.\n\nGive your engine the care it deserves with our premium fuel filters.",
                        imageUrl1: "https://image.made-in-china.com/2f0j00yakqBAdbyocU/Car-Diesel-Fuel-Filters-23300-61060-Auto-Engine-Fuel-Filter.webp",
                        imageUrl2: "https://www.masterparts.com/wp-content/uploads/2020/07/feul-filter.jpg",
                        imageUrl3: "https://www.sherco-auto.com/mm5/graphics/00000001/5/G15-FUEL-FILTER.jpg",
                        tags: [
                            "Fuel Filter",
                            "Contaminant Removal",
                            "Engine Efficiency",
                            "Clean Fuel Flow",
                            "Engine Care"
                        ]
                    },
                    {
                        id: 59,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "PCV",
                        content: "Unlock the hidden potential of your vehicle with our Automotive PCV systems. Engineered to optimize engine performance, our products ensure efficient air circulation, minimizing oil contamination and enhancing fuel economy. Experience improved power delivery, reduced engine noise, and smoother operation.\n\nWith hassle-free installation and a perfect fit for various vehicle models, our Automotive PCV systems are a must-have upgrade for any car enthusiast.",
                        imageUrl1: "https://www.assemblymag.com/ext/resources/Newsletters/march-2018-pfen/novo-pcv-valve-900.jpg?1521662849",
                        imageUrl2: "https://www.quadratec.com/sites/default/files/styles/product_zoomed/public/product_images/Crown_Automotive_4648973AD_PCV_Valve_07-11_Jeep_Wrangler_JK_Back.jpg",
                        imageUrl3: "https://cdn11.bigcommerce.com/s-m32opxf6o2/images/stencil/1280x1280/products/7097/26311/10472_media_01__95152.1679516414.jpg?c=1",
                        tags: [
                            "PCV System",
                            "Engine Performance",
                            "Air Circulation",
                            "Oil Contamination",
                            "Fuel Economy"
                        ]
                    },
                    {
                        id: 60,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Transmission Filters",
                        content: "Upgrade Your Vehicle's Performance with Our Premium Transmission Filters!\n\nExperience smoother gear shifts and enhanced durability with our high-quality transmission filters. Designed to effectively trap contaminants and keep your transmission system clean, our filters ensure optimal performance and extend the lifespan of your vehicle.\n\nChoose from our wide range of filters, compatible with various makes and models.",
                        imageUrl1: "https://static.summitracing.com/global/images/prod/xlarge/atp-b175_xl.jpg",
                        imageUrl2: "https://www.quadratec.com/sites/default/files/styles/product_zoomed/public/product_images/5179267ac.jpg",
                        imageUrl3: "https://images-cdn.ubuy.co.in/63454421fd132a29d92600dd-wix-filters-58618-automatic.jpg",
                        tags: [
                            "Transmission Filter",
                            "Gear Shifts",
                            "Contaminant Removal",
                            "Transmission Care",
                            "Durability"
                        ]
                    },
                    {
                        id: 61,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Coolant Filters",
                        content: "Experience the power of clean coolant with our advanced filtration technology. Our coolant filters efficiently remove harmful particles, preventing clogs and extending the life of your engine.\n\nWith easy installation and reliable performance, our filters offer peace of mind and superior protection.\n\nChoose our coolant filters for a smoother ride and an engine that's built to last.",
                        imageUrl1: "https://m.media-amazon.com/images/I/51RXW0lbcDL._AC_UF894,1000_QL80_.jpg",
                        imageUrl2: "https://www.filtersplus.com.au/content/uploads/2017/11/Coolant-Filters.jpg",
                        imageUrl3: "https://www.donaldson.com/en-in/engine/filters/products/coolant/replacement-filters/donaldson-filters/_jcr_content/overview/imagetext.ctimg.jpeg/1672767023287.jpeg",
                        tags: [
                            "Coolant Filter",
                            "Particle Removal",
                            "Engine Protection",
                            "Prevent Clogs",
                            "Filtration Technology"
                        ]
                    }
                ],
                content: "Automotive filters eliminate contaminants from different systems. Air filters guard the engine against debris, oil filters keep the lubrication system clean, and fuel filters ensure clean fuel supply. By regularly replacing these filters, you can optimize engine performance, enhance fuel efficiency, and improve overall reliability. \n\nShop high-quality automotive filters at West Can Auto Parts to ensure your vehicle's longevity and smooth operation.",
                imageUrl1: "https://res.cloudinary.com/dpeocx0yy/image/upload/v1725434912/car-filters_wc8nf9-removebg-preview_wqq48l.png",
                imageUrl2: "https://media.noria.com/sites/Uploads/2018/1/24/6c5f2360-9d80-4dd0-80ce-7ee45300f431_oil-filter-xl_extra_large.jpeg",
                imageUrl3: "",
                tags: [
                    "Automotive Maintenance",
                    "Engine Protection",
                    "Lubrication Systems",
                    "Air Quality",
                    "Fuel Efficiency"
                ]
            },
            {
                id: 5,
                category: "TIER 1 (CATEGORY)",
                listing: "Wheel Bearings & Hub Assembly",
                tags: [
                    "Wheel Bearings",
                    "Hub Assembly",
                    "Vehicle Performance",
                    "Smooth Operation",
                    "Durability"
                ],
                parts: [
                    {
                        id: 62,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Wheel Bearings",
                        content: "Designed to withstand the toughest road conditions, our bearings offer exceptional performance and reliability. Enjoy enhanced handling, reduced friction, and extended longevity.\n\nOnly at West Can Auto Parts.",
                        imageUrl1: "https://cdn.shopify.com/s/files/1/0054/6786/5134/products/900FC0002_tt_2.jpg?v=1664465441",
                        imageUrl2: "https://silvhornautomotive.com/wp-content/uploads/2015/07/wheel-bearings.jpg",
                        imageUrl3: "https://www.partsbigboss.in/media/catalog/product/i/m/image_20181.jpg",
                        tags: [
                            "Wheel Bearing",
                            "Performance",
                            "Reliability",
                            "Handling",
                            "Longevity"
                        ]
                    },
                    {
                        id: 63,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Hub Assembly",
                        content: "Upgrade your vehicle's performance with our high-quality Hub Assembly only at West Can Auto Parts. Designed to provide smooth and reliable rotation, our assembly ensures optimal wheel alignment and enhanced safety on the road. With durable construction and precise engineering, it's the perfect fit for your vehicle.\n\nGrab yours now and experience a smoother ride like never before!",
                        imageUrl1: "https://www.autotrainingcentre.com/wp-content/uploads/2017/01/Grads-of-Auto-Technician-Courses-Know-Wheel-Hub-Bearings-Keep-Wheels-Spinning-Smoothly.jpg",
                        imageUrl2: "https://www.shopee365.com/media/catalog/product/cache/a1d6199b8797d1adf27d00b7ce72a9f8/r/e/rear-wheel-bearing-with-hub-for-tata-nexon.jpg",
                        imageUrl3: "https://s19528.pcdn.co/wp-content/uploads/2021/10/Wheel-Bearings-1024x512.jpg",
                        tags: [
                            "Hub Assembly",
                            "Smooth Rotation",
                            "Wheel Alignment",
                            "Safety",
                            "Durability"
                        ]
                    },
                    {
                        id: 64,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Wheel Bearing Seals & Retainers",
                        content: "Get ready to conquer the road with confidence! Our cutting-edge wheel bearing seals and retainers offer unmatched reliability and performance. Crafted from premium materials, they provide optimal protection against water, dust, and debris, ensuring smooth wheel operation and extended lifespan.\n\nChoose our top-of-the-line wheel bearing seals and retainers for a ride that exceeds expectations!",
                        imageUrl1: "https://www.roughtrax4x4.com/media/catalog/product/o/s/oskit009_oe-01-min.jpg",
                        imageUrl2: "https://s19526.pcdn.co/wp-content/uploads/2021/02/Wheel-Bearings.jpg",
                        imageUrl3: "https://images.rolliesspeedshop.com/main_product_images/BCM-2241.jpg",
                        tags: [
                            "Wheel Bearing Seals",
                            "Retainers",
                            "Reliability",
                            "Performance",
                            "Protection"
                        ]
                    },
                    {
                        id: 65,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Hub Repair Kits",
                        content: "Revive your beloved hubs with our top-notch Repair Kits! Engineered with precision, our kits restore your wheels' performance, ensuring smooth rides ahead.\n\nCrafted from durable materials, our kits guarantee long-lasting reliability. Don't let worn-out hubs slow you down; upgrade with ease!",
                        imageUrl1: "https://images-cdn.ubuy.co.in/635a3ea9f075db21450e0df2-moog-518517-hub-repair-kit.jpg",
                        imageUrl2: "https://images-cdn.ubuy.co.in/633fd4a73e85a1459557b379-skf-br930263k-wheel-bearing-and-hub.jpg",
                        imageUrl3: "https://gmb.net/wp-content/uploads/2021/07/9f42f0935e30c9cfe9d219527910264a596edb3d.jpg",
                        tags: [
                            "Hub Repair Kits",
                            "Wheels Performance",
                            "Durability",
                            "Reliability",
                            "Upgrade"
                        ]
                    }
                ],
                content: "Upgrade your vehicle's performance with our high-quality wheel bearing and hub assembly only at West Can Auto Parts. Designed to provide smooth and reliable rotation, our assembly ensures optimal wheel alignment and enhanced safety on the road. With durable construction and precise engineering, it's the perfect fit for your vehicle. \n\nGrab yours now and experience a smoother ride like never before!",
                imageUrl1: "https://res.cloudinary.com/dpeocx0yy/image/upload/v1725432259/Grads-of-Auto-Technician-Courses-Know-Wheel-Hub-Bearings-Keep-Wheels-Spinning-Smoothly_dbeyew.webp",
                imageUrl2: "https://www.shopee365.com/media/catalog/product/cache/a1d6199b8797d1adf27d00b7ce72a9f8/r/e/rear-wheel-bearing-with-hub-for-tata-nexon.jpg",
                imageUrl3: "https://s19528.pcdn.co/wp-content/uploads/2021/10/Wheel-Bearings-1024x512.jpg",
                tags: [
                    "Wheel Bearings",
                    "Hub Assembly",
                    "Vehicle Performance",
                    "Smooth Operation",
                    "Durability"
                ]
            },
            {
                id: 6,
                category: "TIER 1 (CATEGORY)",
                listing: "Timing Belts & Chains",
                tags: [
                    "Timing Belts",
                    "Timing Chains",
                    "Engine Performance",
                    "Synchronization",
                    "Engine Maintenance"
                ],
                parts: [],
                content: "Timing belts and chains are critical components in maintaining your engine's performance. They synchronize the rotation of the crankshaft and camshaft, ensuring that the engine's valves open and close at the proper times. Regular replacement can prevent costly engine damage. \n\nWest Can Auto Parts offers a wide selection of durable and reliable timing belts and chains. Visit us today to keep your engine running smoothly.",
                imageUrl1: "https://res.cloudinary.com/dpeocx0yy/image/upload/v1725432315/gates-engine-parts-tck257-64_600-_2__k912x2.jpg",
                imageUrl2: "https://d2pbmlo3fglvvr.cloudfront.net/images/products/large/15BLUEM5PK2315.png",
                imageUrl3: "https://www.bapmic.com/image/bapmic/image/data/09-2020/06/a8ca6f4a4c4c43cfa0bfb0c17a55bbcc_800x800.jpg",
                tags: [
                    "Timing Belts",
                    "Timing Chains",
                    "Engine Performance",
                    "Synchronization",
                    "Engine Maintenance"
                ]
            },
            {
                id: 7,
                category: "TIER 1 (CATEGORY)",
                listing: "Lighting & Electrical",
                content: "Ensure your vehicle's visibility and electrical systems are in top condition with our lighting and electrical parts. From headlights to tail lights, and wiring harnesses to alternators, West Can Auto Parts has everything you need to maintain a safe and functional vehicle. Our products are sourced from trusted manufacturers to guarantee quality and performance. \n\nUpgrade your vehicle's lighting and electrical components today for enhanced safety and reliability on the road.",
                imageUrl1: "https://res.cloudinary.com/dpeocx0yy/image/upload/v1725432339/29_07_2022-car_headlights_covor_image_22934624_eb82qj.jpg",
                imageUrl2: "https://cdn.trendhunterstatic.com/thumbs/automotive-lighting.jpeg",
                imageUrl3: "https://www.autoguide.com/images/content/2017/10/OSRAM-Germany.jpg",
                tags: ["visibility", "lighting", "electrical", "headlights", "tail lights", "wiring harnesses", "alternators", "vehicle safety"],
                parts: []
            },
            {
                id: 8,
                category: "TIER 1 (CATEGORY)",
                listing: "Exhaust System Parts",
                parts: [
                    {
                        id: 87,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Mufflers",
                        content: "Silence the Noise, Amplify the Style! Transform your vehicle into a sleek and refined machine with our premium exhaust mufflers. Crafted with precision and style in mind, our mufflers offer a perfect blend of improved sound reduction and eye-catching aesthetics.",
                        imageUrl1: "https://www.japspeed.co.uk/wp-content/uploads/2022/02/products-zz00405_1_-wpp1652793646385.jpg",
                        imageUrl2: "https://cdn.shopify.com/s/files/1/1174/3062/products/51cDzFw78NL._AC_SL1000.jpg?v=1615316706",
                        imageUrl3: "https://cdn.imgbin.com/21/5/2/imgbin-exhaust-system-car-muffler-exhaust-manifold-tire-automotive-exhaust-MezL0FSSHN3ZvjkR3YbFWU9Z6.jpg",
                        tags: ["mufflers", "exhaust", "sound reduction", "aesthetics", "vehicle style"]
                    },
                    {
                        id: 88,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Catalytic Converter",
                        content: "We at West Can Auto Parts believe in shaping the earth and environment into a better place! Embrace Excellence in Emission Control with Our Premium Catalytic Converters. Engineered to perfection, our converters deliver superior performance and unmatched reliability. Whether you drive a car, truck, or SUV, our extensive selection has you covered. From robust construction to advanced catalyst technology, our converters provide maximum efficiency while reducing harmful pollutants.",
                        imageUrl1: "https://cdn.kneblesauto.com/wp-content/uploads/2020/05/catalytic-converter.jpg",
                        imageUrl2: "https://www.valleychevy.com/wp-content/uploads/2021/08/ValleyChevyWhatAreCommonCatalyticConverterProblems.jpg",
                        imageUrl3: "https://s40039.pcdn.co/wp-content/uploads/2022/08/catalytic-converters.jpg",
                        tags: ["catalytic converters", "emission control", "environment", "performance", "pollutant reduction"]
                    },
                    {
                        id: 89,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Resonator",
                        content: "Enhance your listening experience with our Resonator! Immerse yourself in rich, high-fidelity sound that will transport you to another world. With advanced noise-canceling technology, you'll enjoy crystal-clear audio without any distractions. The sleek and lightweight design ensures maximum comfort during extended use.",
                        imageUrl1: "https://cdn11.bigcommerce.com/s-dhioy6s7py/images/stencil/1280x1280/products/568/13403/923675543475748683_1140-1__73290.1675283731.jpg?c=1",
                        imageUrl2: "https://cdn11.bigcommerce.com/s-dhioy6s7py/images/stencil/1280x1280/products/238/13026/94460244517331833_bottle-style-resonator__53899.1675283590.jpg?c=1",
                        imageUrl3: "https://cdn.shopify.com/s/files/1/0972/8304/products/Bottle-Style-Resonator-12inch-2022-750x_63592e58-cecc-448f-92b6-6b6fe712066e.jpg?v=1657932767",
                        tags: ["resonator", "sound quality", "noise canceling", "audio", "vehicle acoustics"]
                    },
                    {
                        id: 90,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Exhaust Pipes",
                        content: "Upgrade your ride with our high-performance exhaust pipes. Engineered for power and style, our pipes deliver the perfect blend of performance and sound. Whether you're a speed enthusiast or simply looking to enhance your vehicle's aesthetics, our exhaust pipes are the ultimate choice. Get ready to turn heads and experience exhilarating drives like never before. Shop from West Can Auto Parts and unleash the true potential of your vehicle.",
                        imageUrl1: "https://cdn11.bigcommerce.com/s-r15g944t7c/images/stencil/1280x1280/products/5020/171120/dea-3-inch-dpf-back-stainless-exhaust-pipe-only-for-nissan-navara-d23-np300-2.3l-diff-dump__67365.1676818459.jpg?c=2&imbypass=on",
                        imageUrl2: "https://sc04.alicdn.com/kf/H3bfaf82ff6c44c22b7282d11a37afb2fd.jpg",
                        imageUrl3: "https://cdn11.bigcommerce.com/s-3z96a68zes/images/stencil/1280x1280/products/166/593/Oval_xpipe_universal_kit_less_flang_fbw__21600.1498673096.jpg?c=2",
                        tags: ["exhaust pipes", "performance", "sound", "aesthetics", "vehicle upgrade"]
                    },
                    {
                        id: 91,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Exhaust Gaskets",
                        content: "Introducing the Silent Seal Exhaust Gasket, your solution to seamless engine performance. Crafted with precision and innovation, this gasket guarantees airtight sealing, reducing noise and preventing leaks. Engineered from high-quality materials, it withstands extreme temperatures and ensures long-lasting durability. Say goodbye to annoying vibrations and hello to a smooth and quiet ride.",
                        imageUrl1: "https://cdn.shopify.com/s/files/1/0144/8787/9766/products/MBG058R_ddee1853-0a80-4f1d-aa27-e850f27e94a3_large.jpg?v=1677737202",
                        imageUrl2: "https://www.stephensgaskets.co.uk/wp-content/uploads/2021/11/exhaust-gaskets-pic02.jpg",
                        imageUrl3: "https://ae01.alicdn.com/kf/S510a715819a240fd991ca7c4be80145eV.jpg_640x640Q90.jpg_.webp",
                        tags: ["exhaust gaskets", "sealing", "noise reduction", "leak prevention", "engine performance"]
                    }
                ],
                content: "Your vehicle's exhaust system is crucial for reducing emissions and ensuring optimal engine performance. West Can Auto Parts offers a comprehensive selection of exhaust system parts, including mufflers, catalytic converters, exhaust manifolds, and pipes. These components are designed to meet or exceed OEM standards, ensuring durability and reliability. \n\nKeep your vehicle's exhaust system in top shape by shopping our high-quality parts today.",
                imageUrl1: "https://res.cloudinary.com/dpeocx0yy/image/upload/v1725432370/exhaust-5571ba672b7f3-1_zsasbl.jpg",
                imageUrl2: "https://cdn.autobahnautomotive.com/images/blog/5-signs-your-exhaust-system-is-failing.jpg",
                imageUrl3: "https://cdn1.polaris.com/globalassets/motorcycles/2020/shop/accessories/cruiser/2880198_v1.jpg",
                tags: ["exhaust system", "emission reduction", "engine performance", "mufflers", "catalytic converters", "exhaust pipes"]
            },
            {
                id: 9,
                category: "TIER 1 (CATEGORY)",
                listing: "Steering Components",
                parts: [
                    {
                        id: 95,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Steering Racks",
                        content: "The Steering Rack offers precision and control like never before. With its advanced technology and sleek design, it enhances the driving experience, providing smooth and responsive handling. Built to withstand the rigors of the road, this durable rack ensures reliable performance and long-lasting durability. Upgrade your vehicle's steering system today for a truly unparalleled driving experience.",
                        imageUrl1: "https://partsavatar.ca/media/catalog/product/cache/13/image/800x800/9df78eab33525d08d6e5fb8d27136e95/h/y/hyundai-santa-fe-steering-rack-parts-1031033_1.jpg",
                        imageUrl2: "https://5.imimg.com/data5/SELLER/Default/2023/5/YP/KU/FX/5183668/180300383-1000x1000.jpg",
                        imageUrl3: "https://www.eurekar.co.uk/1.11062/steering",
                        tags: ["steering racks", "control", "handling", "driving experience", "durability"]
                    },
                    {
                        id: 96,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Steering Gears",
                        content: "Precision, Durability, Control! The steering gear that will change your driving experience. The ergonomic design and advanced technology ensure optimal control and comfort. With its smooth operation and precise response, every turn becomes effortless. Crafted from high-quality materials, this steering gear guarantees long-lasting performance, making it a reliable companion on every road.",
                        imageUrl1: "https://5.imimg.com/data5/OD/JY/MY-13056883/steering-gear-500x500.jpg",
                        imageUrl2: "https://cdn11.bigcommerce.com/s-z5a46/images/stencil/1280x1280/products/2493/14048/steering-gear-assembly-6__29064.1560890930.jpg?c=2",
                        imageUrl3: "https://images.globalpartsdirectory.com/product/0903/MT-00011.jpg",
                        tags: ["steering gears", "precision", "control", "comfort", "reliability"]
                    },
                    {
                        id: 97,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Power Steering Pumps",
                        content: "The SmoothRide Power Steering Pump is your key to effortless driving. With its advanced technology and precision engineering, it provides unparalleled control and responsiveness. Say goodbye to heavy steering and hello to a smooth, enjoyable ride. Whether you're navigating city streets or taking on winding roads, the SmoothRide Power Steering Pump delivers consistent performance and reliability.",
                        imageUrl1: "https://5.imimg.com/data5/SELLER/Default/2021/6/QF/JY/TX/38546517/power-steering-pump.jpg",
                        imageUrl2: "https://wagnertr.com/wp-content/uploads/2021/08/power-steering-pump-bmw-5-series-535i-540i-x5-x6.jpg",
                        imageUrl3: "https://image.made-in-china.com/202f0j00RmUalVqjoJkc/Steering-Gear-Power-Steering-Pump-OEM-4682249.jpg",
                        tags: ["power steering pumps", "smooth steering", "control", "responsiveness", "reliability"]
                    },
                    {
                        id: 98,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Steering Seals",
                        content: "The Defender Steering Seal is designed to protect and enhance your vehicle's steering system. Engineered with precision and durability in mind, it prevents leaks and ensures optimal performance. With its high-quality materials and perfect fit, this seal provides long-lasting protection and reliability. Say goodbye to steering issues and hello to smooth, worry-free driving.",
                        imageUrl1: "https://www.etbtyres.co.uk/wp-content/uploads/2015/12/power-steering-leak-400x300.jpg",
                        imageUrl2: "https://m.media-amazon.com/images/I/71cGzZUX12L._AC_UF894,1000_QL80_.jpg",
                        imageUrl3: "https://static1.pt-content.com/images/pt/2020/09/OIP-1.jpg",
                        tags: ["steering seals", "leak prevention", "protection", "performance", "durability"]
                    }
                ],
                content: "Maintaining control and stability on the road is essential for safe driving. West Can Auto Parts offers a wide range of steering components, including power steering pumps, steering gears, and racks. These parts are designed to improve handling, responsiveness, and overall driving experience. \n\nUpgrade your vehicle's steering system today to ensure optimal performance and safety.",
                imageUrl1: "https://res.cloudinary.com/dpeocx0yy/image/upload/v1725434882/download_rv9ypi-removebg-preview_pqyshp.png",
                imageUrl2: "https://content.advanceautoparts.com/6bd97a1/vehicle-system-media/60b707ce15f61800129d9253/images/steering-gear-box-1.jpg",
                imageUrl3: "https://m.media-amazon.com/images/I/71X0R99v8yL._AC_UF894,1000_QL80_.jpg",
                tags: ["steering components", "control", "stability", "safety", "power steering"]
            },
            {
                id: 10,
                category: "TIER 1 (CATEGORY)",
                listing: "Engine Components",
                parts: [
                    {
                        id: 99,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Gaskets & Seals",
                        content: "Introducing the Engine Shield Gasket & Seal Kit – Your Ultimate Defense Against Leaks! Engineered for durability and precision, this kit offers a reliable solution to keep your engine sealed and protected. Say goodbye to leaks and hello to maximum engine performance with our top-quality gaskets and seals. Whether you're a DIY enthusiast or a professional mechanic, our easy-to-install kit is designed to fit a wide range of vehicles, ensuring a perfect fit and long-lasting performance.",
                        imageUrl1: "https://www.rolandind.com/assets/img/categories/gaskets-main.jpg",
                        imageUrl2: "https://m.media-amazon.com/images/I/91E2-w+so8L.jpg",
                        imageUrl3: "https://cdn11.bigcommerce.com/s-jj8vhnq81r/images/stencil/1280x1280/products/331/3779/SetEngineGasketOEM1985001NewProduct1__47172.1681152293.jpg?c=2",
                        tags: ["gaskets", "seals", "engine protection", "leak prevention", "engine performance"]
                    },
                    {
                        id: 100,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Valve Train Parts",
                        content: "Precision Performance with Every Turn! Elevate your engine's power and efficiency with our premium Valve Train Parts. From high-performance camshafts to precision-engineered lifters and pushrods, our top-quality components are designed to optimize your engine's performance. Whether you're a seasoned racer or a passionate car enthusiast, our valve train parts ensure maximum power output, smooth operation, and long-lasting durability. Get ready to experience the thrill of unmatched performance with our valve train solutions.",
                        imageUrl1: "https://static.summitracing.com/global/images/prod/mediumlarge/mor-59830_w.jpg",
                        imageUrl2: "https://www.aa1car.com/images/valvetrain.gif",
                        imageUrl3: "https://www.schumann-na.com/wp-content/uploads/2020/11/ValveTrainParts1-600x400.png",
                        tags: ["valve train", "engine performance", "power", "camshafts", "lifters", "pushrods"]
                    },
                    {
                        id: 101,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Timing Parts",
                        content: "The MasterTime Timing Parts are designed to keep your engine running like clockwork. With their precision engineering and high-quality materials, these parts ensure accurate and reliable timing, enhancing overall engine performance and efficiency. Whether it's timing belts, chains, or tensioners, MasterTime provides the perfect fit for your vehicle's needs. Upgrade your engine's timing system today for a smoother and more efficient ride.",
                        imageUrl1: "https://cdn11.bigcommerce.com/s-323o4/products/10152/images/1507/Screen_Shot_2020-10-12_at_8.42.12_AM__12479.1602511303.png?c=2",
                        imageUrl2: "https://www.hughesengines.com/Upload/Timing%20Chain%20set.jpg",
                        imageUrl3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJd4P7l_q8o8iZEDj8AQIqplTf-v0mW4UjW7YUtA3t&s",
                        tags: ["timing parts", "engine timing", "precision", "belts", "chains", "tensioners"]
                    },
                    {
                        id: 102,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Crankshafts",
                        content: "The PowerDrive Crankshaft is the heart of your engine's power. Engineered for maximum strength and performance, it delivers smooth and consistent power output. Crafted from high-quality materials and precision-balanced, this crankshaft ensures optimal engine performance and durability. Whether you're building a high-performance race engine or simply replacing a worn-out crankshaft, the PowerDrive Crankshaft is the perfect choice.",
                        imageUrl1: "https://cdn11.bigcommerce.com/s-ygt7py/images/stencil/1280x1280/products/154/402/fe_crankshaft__08556.1496756533.jpg?c=2",
                        imageUrl2: "https://parts.werner-vet.com/wp-content/uploads/2021/05/diesel-crankshaft-500x500.jpg",
                        imageUrl3: "https://m.media-amazon.com/images/I/81+z+xk5r9L._AC_UL1500_.jpg",
                        tags: ["crankshafts", "engine power", "strength", "performance", "durability"]
                    }
                ],
                content: "A well-maintained engine is the key to a vehicle's longevity and performance. West Can Auto Parts offers a variety of engine components, including gaskets, seals, and valve train parts, all designed to keep your engine running smoothly. Our high-quality parts are designed to meet the highest standards, ensuring reliability and efficiency. \n\nKeep your engine in top shape by choosing from our selection of top-quality engine components.",
                imageUrl1: "https://res.cloudinary.com/dpeocx0yy/image/upload/v1725432446/istockphoto-506541011-612x612-1_yjfkzv.jpg",
                imageUrl2: "https://cdn.motor1.com/images/mgl/ZWGn2q/s1/why-its-so-important-to-choose-the-right-oil-for-your-engine.jpg",
                imageUrl3: "https://images.autoserviceprofessional.com/posts/113/main/cc-0606-cloy-01.jpg",
                tags: ["engine components", "reliability", "performance", "gaskets", "seals", "valve train"]
            },
            {
                id: 11,
                category: "TIER 1 (CATEGORY)",
                listing: "Drivetrain Parts",
                content: "The drivetrain is responsible for transferring power from the engine to the wheels. West Can Auto Parts offers a comprehensive range of drivetrain parts including transmissions, differentials, driveshafts, axles, and CV joints. Our parts are designed to deliver smooth and efficient power delivery, ensuring that your vehicle performs at its best. \n\nExplore our drivetrain parts today and keep your vehicle running smoothly.",
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725432508/new-pass-kingpin-d60-wheel-hubs-no-diff-cover_1_hadi98.jpg",
                tags: ["drivetrain", "transmission", "axles", "CV joints", "differentials", "drive shafts"],
                parts: [
                    {
                        id: 98,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Axle Shafts & CV Joints",
                        content: "Don't compromise on performance and safety. Choose our Axle Shafts & CV Joints for unmatched reliability and smooth operation. Our expertly engineered products ensure maximum efficiency, reduced vibration, and minimized wear and tear.",
                        imageUrls: [
                            "https://goworldparts.com/wp-content/uploads/2015/01/Worldparts-cv-shaft-assembly-202.jpg",
                            "https://turn5.scene7.com/is/image/Turn5/TT15762?obj=car&wid=1200&hei=900&sharpen=1",
                            "https://www.superiorengineering.com.au/image/data/product%20files/RCV/CVJ2474-30T-300M.jpg"
                        ],
                        tags: ["axle shafts", "CV joints", "performance", "reliability"]
                    },
                    {
                        id: 99,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "U Joints & Drive Shafts",
                        content: "Upgrade your vehicle's backbone with our superior U Joints & Drive Shafts. Designed for optimal performance and longevity, our precision-engineered components ensure smooth power delivery and reduce wear and tear. Whether you're tackling rough terrains or cruising on highways, our products offer unrivaled strength and reliability.",
                        imageUrls: [
                            "https://images-na.ssl-images-amazon.com/images/I/51hd93cmFQL._AC_UL600_SR600,600_.jpg",
                            "https://m.media-amazon.com/images/I/61EmPIv+hjL._AC_UF894,1000_QL80_.jpg",
                            "https://storage.googleapis.com/trt-prod-web-assets/public/Parts/Drivetrain/Driveshaft-and-U-Joints/8563c6e34a/Driveshaft-Spicer-Life__FillWzgwMCw1NzRd.jpg"
                        ],
                        tags: ["U Joints", "Drive Shafts", "performance", "longevity"]
                    },
                    {
                        id: 100,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Drive Axle Parts",
                        content: "Gear up for excellence with high-quality Drive Axle Parts! At We Can Auto Parts, we offer a wide range of superior drive axle components that guarantee optimal power transfer and exceptional efficiency. Our parts undergo rigorous testing to ensure reliability and longevity, giving you peace of mind on every journey.",
                        imageUrls: [
                            "https://www.myautovaluestore.com/img/filters:quality():format(webp)/images/doc/id/9cbaacb8-197f-4d07-afc2-2cb6388c2dda",
                            "https://m.media-amazon.com/images/I/61Z83Em8sYL._AC_UF894,1000_QL80_.jpg",
                            "https://utbshop.b-cdn.net/poze/11535/1.jpg?v=1"
                        ],
                        tags: ["drive axle", "power transfer", "efficiency", "reliability"]
                    },
                    {
                        id: 101,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Transfer Case & Parts",
                        content: "Conquer any terrain with confidence. Shop Transfer Cases & Parts. Don't let rough terrains hold you back. Our comprehensive collection of transfer cases and parts is your gateway to unmatched off-road adventures. Engineered for strength and precision, our products guarantee smooth shifting, improved traction, and reliable power distribution.",
                        imageUrls: [
                            "https://etimg.etb2bimg.com/photo/52914172.cms",
                            "https://tfloffroad.com/wp-content/uploads/2022/05/Image-5-25-22-at-9.58-AM-1024x779.jpg",
                            "https://p.globalsources.com/IMAGES/PDT/B5174350227/Jimny-Transfer-Gear-Set.jpg"
                        ],
                        tags: ["transfer case", "off-road", "traction", "power distribution"]
                    },
                    {
                        id: 102,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "CV Boots",
                        content: "Give your vehicle the attention it deserves with our premium CV Boots. Designed for durability and longevity, our boots shield your driveshaft from debris, maintaining smooth and efficient power transfer. With a range of sizes and styles available, finding the perfect fit is easy.",
                        imageUrls: [
                            "https://boodmo.com/media/images/articles/959c028.jpg",
                            "https://www.shopee365.com/media/catalog/product/cache/a1d6199b8797d1adf27d00b7ce72a9f8/c/v/cv-joint-kits-for-maruti-wagon-r-wheel-side-s10871-cjk68.jpg",
                            "https://gowesty.com/cdn/shop/products/CV-BOOT-BNDL4WD_800x.jpg?v=1652986009"
                        ],
                        tags: ["CV boots", "driveshaft", "durability", "fit"]
                    },
                    {
                        id: 103,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Differential & Parts",
                        content: "Take control of the road with our exceptional differential and parts. Crafted with precision and built to last, our products offer unparalleled reliability and performance. From limited-slip differentials to ring and pinion sets, we have everything you need to enhance your vehicle's capabilities.",
                        imageUrls: [
                            "https://p.turbosquid.com/ts-thumb/Cl/cWr1b2/dV/dif/jpg/1634402768/1920x1080/turn_fit_q99/b5d0fcf868b3bf3fb387ff815a9186aae7b832c2/dif-1.jpg",
                            "https://cdn.ecommercedns.uk/files/2/244172/4/14281094/rear-differential-component-parts.png",
                            "https://cdn.statica.eu/uploads/eshop/thumb/paouris-parts/3013615feb59d0ffeaeda65f691da5d9.png"
                        ],
                        tags: ["differential", "reliability", "performance"]
                    }
                ]
            },
            {
                id: 13,
                category: "TIER 1 (CATEGORY)",
                listing: "Fuel System Parts",
                content: "The fuel system is vital for delivering the right amount of fuel to your engine, ensuring optimal performance and efficiency. West Can Auto Parts offers a comprehensive selection of fuel system components including pumps, tanks, carburetors, injectors, and filters. Our high-quality parts are designed to keep your engine running smoothly and efficiently.",
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725432555/1627332936-newfuelinjectors-1_kptube.jpg",
                tags: ["fuel system", "pumps", "tanks", "carburetors", "injectors", "filters"],
                parts: [
                    {
                        id: 92,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Fuel Pump, Fuel Tank & Turbo System",
                        content: "Fuel your passion for speed with our premium fuel pump, tank, and turbo system. Engineered to perfection, our products guarantee optimal fuel flow, increased horsepower, and unmatched acceleration. Whether you're a professional racer or a car enthusiast, our performance-enhancing components will elevate your driving experience. Unleash the true potential of your vehicle and leave the competition in the dust.",
                        imageUrls: [
                            "https://m.media-amazon.com/images/I/41FNYg8MGHL._AC_UF894,1000_QL80_.jpg",
                            "https://m.media-amazon.com/images/I/61WVI8cG4LL.jpg",
                            "https://m.media-amazon.com/images/I/51h1RdRbtdL._AC_UL640_QL65_.jpg"
                        ],
                        tags: ["fuel pump", "fuel tank", "turbo system", "performance"]
                    },
                    {
                        id: 93,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Carburetors",
                        content: "Optimize your engine's performance with our high-quality carburetors. Designed for precision and efficiency, our carburetors provide consistent fuel delivery and improved combustion. Ideal for both classic restorations and performance upgrades, they ensure smooth operation and enhanced throttle response.",
                        imageUrls: [
                            "https://cdn11.bigcommerce.com/s-021ee/images/stencil/1280x1280/products/334/1367/1_5b5b5d5b_04bb5c77-c7f5-493f-867c-8a82c370cdd1__02996.1537532741.jpg?c=2?imbypass=on",
                            "https://cdn11.bigcommerce.com/s-021ee/images/stencil/1280x1280/products/334/1367/1_5b5b5d5b_04bb5c77-c7f5-493f-867c-8a82c370cdd1__02996.1537532741.jpg?c=2?imbypass=on",
                            "https://cdn11.bigcommerce.com/s-021ee/images/stencil/1280x1280/products/334/1367/1_5b5b5d5b_04bb5c77-c7f5-493f-867c-8a82c370cdd1__02996.1537532741.jpg?c=2?imbypass=on"
                        ],
                        tags: ["carburetors", "fuel delivery", "combustion"]
                    },
                    {
                        id: 94,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Fuel Injectors",
                        content: "Maximize your engine's efficiency with our high-performance fuel injectors. Engineered for precision and reliability, our injectors ensure optimal fuel delivery and improved combustion. Perfect for both performance upgrades and routine maintenance, they offer seamless integration and enhanced engine response. Trust our fuel injectors to keep your vehicle running at its peak.",
                        imageUrls: [
                            "https://m.media-amazon.com/images/I/51JHDuOiC8L._AC_UL640_QL65_.jpg",
                            "https://cdn11.bigcommerce.com/s-8c6dc/images/stencil/1280x1280/products/130/3579/1__21366.1488326856.jpg?c=2?imbypass=on",
                            "https://m.media-amazon.com/images/I/61Vo8l2CvlL._AC_UF894,1000_QL80_.jpg"
                        ],
                        tags: ["fuel injectors", "engine efficiency", "combustion"]
                    },
                    {
                        id: 95,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Fuel Filters",
                        content: "Ensure clean and efficient fuel delivery with our top-quality fuel filters. Designed to remove impurities and contaminants, our filters protect your engine and extend its lifespan. Easy to install and maintain, they are essential for keeping your vehicle running smoothly and efficiently. Choose our fuel filters for reliable performance and peace of mind.",
                        imageUrls: [
                            "https://m.media-amazon.com/images/I/61fDNtT2yFL._AC_UL640_QL65_.jpg",
                            "https://m.media-amazon.com/images/I/61frK26PT8L._AC_UL640_QL65_.jpg",
                            "https://cdn11.bigcommerce.com/s-02b5d/images/stencil/1280x1280/products/1920/3495/fuel-filter__02828.1607637278.jpg?c=2?imbypass=on"
                        ],
                        tags: ["fuel filters", "clean fuel delivery", "engine protection"]
                    }
                ]
            },
            {
                id: 14,
                category: "TIER 1 (CATEGORY)",
                listing: "Transmission Parts",
                content: "Transmission parts are essential for ensuring smooth and efficient gear shifts. West Can Auto Parts offers a wide range of transmission components, including both automatic and manual transmissions, as well as individual parts for repairs and upgrades. Our high-quality products guarantee reliable performance and durability.",
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725432593/a-automatic-transmission-3_vgyq5y.png",
                tags: ["transmission", "gear shifts", "performance", "durability"],
                parts: [
                    {
                        id: 104,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Automatic Transmissions",
                        content: "Experience smooth shifting and enhanced driving comfort with our automatic transmissions. Designed for precision and durability, our transmissions deliver seamless performance and reliable operation. Upgrade your vehicle with our high-quality automatic transmissions and enjoy a smoother, more responsive driving experience.",
                        imageUrls: [
                            "https://cdn11.bigcommerce.com/s-800d0/images/stencil/1280x1280/products/166/2895/4_04348.1546829397.jpg?c=2?imbypass=on",
                            "https://www.carsguide.com.au/car-advice/images/2022/11/22/6F7A8009.jpg",
                            "https://images.autotrader.com/s3/pub_images/2021/09/27/5/8d741d7f-be6f-496b-851f-f881b46b5e06_1000.jpg"
                        ],
                        tags: ["automatic transmission", "smooth shifting", "driving comfort"]
                    },
                    {
                        id: 105,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Manual Transmissions",
                        content: "Shift into high gear with our top-of-the-line manual transmissions. Engineered for performance and reliability, our manual transmissions offer precise gear selection and smooth operation. Whether you're restoring a classic car or upgrading your current vehicle, our manual transmissions provide the control and driving pleasure you desire.",
                        imageUrls: [
                            "https://www.lucasoil.com/images/products/transmissionfix-16oz.jpg",
                            "https://cdn11.bigcommerce.com/s-8b15e/images/stencil/1280x1280/products/85/1683/1_320d3081_1.jpg?c=2?imbypass=on",
                            "https://m.media-amazon.com/images/I/51F8bhPv03L._AC_SL1500_.jpg"
                        ],
                        tags: ["manual transmission", "gear selection", "performance"]
                    },
                    {
                        id: 106,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Transmission Parts",
                        content: "Keep your transmission running smoothly with our extensive range of transmission parts. From clutches to gears and everything in between, we provide high-quality components designed for durability and performance. Trust our parts to maintain optimal shifting performance and extend the life of your transmission.",
                        imageUrls: [
                            "https://m.media-amazon.com/images/I/61b5Zz1X3DL._AC_UL640_QL65_.jpg",
                            "https://cdn11.bigcommerce.com/s-022bb/images/stencil/1280x1280/products/154/2440/1__53382.1592297684.jpg?c=2?imbypass=on",
                            "https://www.repairsmith.com/img/blog/transmission-repair.jpg"
                        ],
                        tags: ["transmission parts", "clutches", "gears", "durability"]
                    }
                ]
            },
            {
                id: 15,
                category: "TIER 1 (CATEGORY)",
                listing: "Clutch & Flywheel",
                content: "Clutch and flywheel components are essential for optimal power transfer and smooth gear engagement. West Can Auto Parts offers a range of high-quality clutch kits and flywheels designed to improve performance and durability. Whether you're upgrading or replacing, our products ensure reliable and efficient operation.",
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725432625/clutch-kit-1.8t-210-225-amk-bam-including-dual-mass-flywheel-27215-p-1_m55w0n.jpg",
                tags: ["clutch", "flywheel", "power transfer", "performance"],
                parts: [
                    {
                        id: 107,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Clutch Kits",
                        content: "Experience precise shifting and smooth engagement with our high-quality clutch kits. Perfect for both performance upgrades and routine maintenance, our kits offer exceptional durability and reliable operation. Upgrade your vehicle's clutch system with our top-of-the-line components and enjoy a more responsive driving experience.",
                        imageUrls: [
                            "https://cdn11.bigcommerce.com/s-0279e/images/stencil/1280x1280/products/186/2850/1__76154.1623100582.jpg?c=2?imbypass=on",
                            "https://www.repairsmith.com/img/blog/clutch-replacement.jpg",
                            "https://m.media-amazon.com/images/I/51R8Wnif8QL._AC_SL1000_.jpg"
                        ],
                        tags: ["clutch kits", "shifting", "performance"]
                    },
                    {
                        id: 108,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Flywheels",
                        content: "Enhance your vehicle's performance with our high-quality flywheels. Designed for precision and durability, our flywheels offer improved power transfer and smoother operation. Ideal for both performance and everyday driving, our flywheels ensure reliable and efficient power delivery.",
                        imageUrls: [
                            "https://cdn11.bigcommerce.com/s-8b15e/images/stencil/1280x1280/products/152/2924/1__62992.1623101527.jpg?c=2?imbypass=on",
                            "https://cdn11.bigcommerce.com/s-0279e/images/stencil/1280x1280/products/211/2746/1__88548.1623102301.jpg?c=2?imbypass=on",
                            "https://cdn11.bigcommerce.com/s-0279e/images/stencil/1280x1280/products/191/2267/1__97066.1623103060.jpg?c=2?imbypass=on"
                        ],
                        tags: ["flywheels", "power transfer", "performance"]
                    }
                ]
            },
            {
                id: 102,
                category: "TIER 1 (CATEGORY)",
                listing: "Ignition System",
                tags: ["Ignition System", "Spark Plugs", "Ignition Coils", "Ignition Wires", "Coil Over Plugs"],
                parts: [
                    {
                        id: 204,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Spark Plugs",
                        tags: ["Spark Plugs", "Performance", "Durability", "Engine", "High Voltage"],
                        content: "Ignite your ride with our top-of-the-line Spark Plug collection! Designed for optimum performance and durability, our plugs are the perfect companions for your engine. Whether you're a thrill-seeker craving speed or a meticulous driver seeking efficiency, we have the perfect spark plug to suit your needs. Upgrade your engine today and feel the electrifying difference with our premium Spark Plugs!",
                        imageUrl1: "https://cdn.fiix.io/1/articles/sparkplugs.jpg",
                        imageUrl2: "https://di-uploads-pod36.dealerinspire.com/bmwofreading/uploads/2020/06/bmw-spark-plugs-reading-pa.jpg",
                        imageUrl3: "https://repairsmith-prod-wordpress.s3.amazonaws.com/2022/03/iStock-183811982-2.jpg"
                    },
                    {
                        id: 205,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Ignition Coils",
                        tags: ["Ignition Coils", "Horsepower", "Torque", "Acceleration", "Engine Performance"],
                        content: "Spark the Difference. Discover the secret behind maximum horsepower and torque with our premium ignition coils. Say goodbye to misfires and hello to improved acceleration. Take your driving experience to the next level!",
                        imageUrl1: "https://assets.denso-am.eu/production/news/2021/1899-013_700x467.jpg",
                        imageUrl2: "https://www.thedrive.com/uploads/2023/04/12/bestcoilpack.jpg?auto=webp",
                        imageUrl3: "https://images-cdn.ubuy.co.in/635a51cd26becf3ed657d763-autosaver88-ignition-coil-pack-of-4.jpg"
                    },
                    {
                        id: 206,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Ignition Wires",
                        tags: ["Ignition Wires", "Performance", "Conductivity", "Spark Energy", "Engine Power"],
                        content: "Ignition Wires that Spark Confidence: Upgrade Your Ride's Performance Today! Unleash the hidden power of your engine with our high-performance ignition wires. Engineered to withstand the toughest conditions, our wires deliver superior conductivity and maximum spark energy. Drive with confidence and leave others in the dust. Browse our selection now at West Can Auto Parts!",
                        imageUrl1: "https://images-cdn.ubuy.co.id/634cff8d4af9035cf9150720-mas-8-5mm-high-performance-spark-plug.jpg",
                        imageUrl2: "https://www.my-cardictionary.com/fileadmin/user_upload/Inhalt/Produkte/Zuendleitungen__Zuendkabel_/Zuendkabel_2.jpg",
                        imageUrl3: "https://static.summitracing.com/global/images/prod/xlarge/rra-18-8804-1_xl.jpg"
                    },
                    {
                        id: 207,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Coil Over Plugs",
                        tags: ["Coil Over Plugs", "Ignition Technology", "Fuel Efficiency", "Engine Performance", "Precision Engineering"],
                        content: "Experience the future of ignition technology with our state-of-the-art Coil Over Plugs. Unleash the full potential of your engine with advanced design and precision engineering. Benefit from improved fuel efficiency, smoother idling, and quicker starts.",
                        imageUrl1: "https://cdn.shopify.com/s/files/1/0064/3645/4465/products/k20coils_20590df5-927c-43c3-b173-8e5c5634b3ec_1024x1024@2x.jpg?v=1620831250",
                        imageUrl2: "https://www.standardbrand.com/media/4405/wire-and-cable-7.jpg?anchor=center&mode=crop&width=950&rnd=133120448750000000",
                        imageUrl3: "https://cdn.shopify.com/s/files/1/2493/0960/products/ce20a0f44a2b88a1136868bec867b61a.jpg?v=1618591132"
                    }
                ],
                content: "Say goodbye to sluggish starts and hello to an exhilarating driving experience with West Can Auto Parts. The Ignition System is a vital component of your vehicle's engine, ensuring reliable starts and smooth operation. It consists of ignition coils, spark plugs, and a control module that work together to generate high-voltage sparks, igniting the fuel-air mixture in the engine cylinders. Our premium selection of automotive ignition systems offers enhanced performance, fuel efficiency, and durability. Upgrade your vehicle's ignition system today for improved reliability and overall driving experience. Trust us to provide you with high-quality ignition system components that meet or exceed industry standards.",
                imageUrl1: "https://res.cloudinary.com/dpeocx0yy/image/upload/v1725432791/shopping_tbrnlk.webp",
                imageUrl2: "https://www.autotrainingcentre.com/wp-content/uploads/2014/07/Ignition-Systems.png",
                imageUrl3: "https://assets.isu.pub/document-structure/200806175023-30ed88a6b23e27abfd185b4d746640ec/v1/500ab2d3af723c525d8134abc73c252e.jpg"
            },
            {
                id: 103,
                category: "TIER 1 (CATEGORY)",
                listing: "Auto Electricals",
                tags: ["Auto Electricals", "Starter", "Alternator", "Batteries", "Engine Sensors", "Computers & Modules"],
                parts: [
                    {
                        id: 208,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Starter",
                        tags: ["Starter", "Starting System", "Vehicle Startup", "Cold Weather", "Hot Weather"],
                        content: "Crank start your engine with our Starters which are featured by top brands to bring convenience to the starting of your vehicle. Be it cold weather or hot, we got your back!",
                        imageUrl1: "https://www.seg-automotive.com/image/editorial-pictures/high-res/1440x1440/seg-automotive_starter-motors_cv_hxf95_hr.jpg",
                        imageUrl2: "https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/Starter_Motor",
                        imageUrl3: "https://vehiclefreak.com/wp-content/uploads/2023/04/Automotive-starter-motor-and-selonoid.jpg.webp"
                    },
                    {
                        id: 209,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Alternator",
                        tags: ["Alternator", "Electrical Energy", "Vehicle Power Supply", "Mechanical Energy", "Reliability"],
                        content: "This robust device converts mechanical energy from the vehicle's engine into electrical energy, ensuring a reliable power supply. Get yours now from West Can Auto Parts.",
                        imageUrl1: "https://www.ymfcarparts.co.uk/images/blog/AdobeStock_61062794.jpg",
                        imageUrl2: "https://static1.industrybuying.com/products/automotive-maintenance-and-accessories/automobile-electricals/alternator/AU.AU.AU.GE.1439247_1667909081018.webp",
                        imageUrl3: "https://www.fvpparts.com/application/files/cache/thumbnails/f63de75344d035cc05d75a4538bd1ba5.jpg"
                    },
                    {
                        id: 210,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Batteries",
                        tags: ["Batteries", "Power Supply", "Vehicle Startup", "Durability", "Electrical Systems"],
                        content: "Charge up with West Can Auto Parts! Automotive batteries are essential for powering vehicles, providing the necessary energy to start the engine, run electrical systems, and support various functions. With our high-quality selection of automotive batteries, you can ensure reliable performance and durability for your vehicle. Whether you need a battery for a car, truck, or SUV, our e-commerce website offers dependable solutions to keep you on the move.",
                        imageUrl1: "https://editorials.autotrader.ca/media/117271/00-stock-car-battery.jpg?center=0.5,0.49593495934959347&mode=crop&width=1920&height=1080&rnd=132296552039930000",
                        imageUrl2: "https://st.depositphotos.com/1001877/1623/i/600/depositphotos_16232967-stock-photo-car-battery-3d.jpg",
                        imageUrl3: "https://img.freepik.com/premium-psd/car-battery-mockup_439185-2481.jpg"
                    },
                    {
                        id: 211,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Engine Sensors",
                        tags: ["Engine Sensors", "Performance Monitoring", "Fuel Efficiency", "Engine Diagnostics", "Reliability"],
                        content: "Optimize your engine performance with high-quality engine sensors from West Can Auto Parts. Our range of engine sensors includes crucial components like oxygen sensors, temperature sensors, and pressure sensors, all designed to enhance fuel efficiency, monitor performance, and ensure reliable operation. Trust our selection for accurate diagnostics and improved engine functionality.",
                        imageUrl1: "https://5.imimg.com/data5/UG/IR/MY-4022318/engine-sensor-500x500.jpg",
                        imageUrl2: "https://cdn.autopartswarehouse.com/images/products/engine_sensor_1.jpg",
                        imageUrl3: "https://www.carbibles.com/wp-content/uploads/2021/02/Oxygen-Sensor-Check.jpg"
                    },
                    {
                        id: 212,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Computers & Modules",
                        tags: ["Computers & Modules", "Engine Control", "Vehicle Electronics", "Diagnostic Systems", "Performance"],
                        content: "Modern vehicles rely on sophisticated electronics for optimal performance. Our range of computers and modules ensures accurate engine control, efficient diagnostic systems, and enhanced vehicle electronics. Upgrade with West Can Auto Parts for cutting-edge technology and reliable performance.",
                        imageUrl1: "https://www.theengineer.co.uk/wp-content/uploads/2021/06/featured_mos.gif",
                        imageUrl2: "https://cdn.ritalin.org/assets/images/content/automotive-computer-control.jpg",
                        imageUrl3: "https://s3.amazonaws.com/mf-catalog/images/components/computers/0B7.jpg"
                    }
                ],
                content: "The Auto Electricals category encompasses a wide range of essential components designed to keep your vehicle's electrical systems running smoothly. From starters and alternators to batteries and sensors, our comprehensive selection ensures that you have access to high-quality parts for optimal vehicle performance. Discover top-notch auto electrical components to maintain reliable power supply, efficient engine control, and accurate diagnostics. Explore our collection and trust West Can Auto Parts for all your auto electrical needs.",
                imageUrl1: "https://res.cloudinary.com/dpeocx0yy/image/upload/v1725432339/29_07_2022-car_headlights_covor_image_22934624_eb82qj.jpg",
                imageUrl2: "https://images.unsplash.com/photo-1603251225402-4e4d19d28b2a",
                imageUrl3: "https://images.pexels.com/photos/3035552/pexels-photo-3035552.jpeg"
            },
            {
                id: 104,
                category: "TIER 1 (CATEGORY)",
                listing: "Automotive Belts",
                tags: ["Automotive Belts", "Belt Tensioners", "Serpentine Belts", "Tensioner Assembly", "Idler Pulleys"],
                parts: [
                    {
                        id: 213,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Serpentine Belts",
                        content: "You may ask, who runs the Power Steering Pump, Alternator and other related components? Yes, it's the Serpentine Belt. Constructed with high-quality materials, it ensures efficient power transfer and reliable performance. Our e-commerce website offers a wide selection of serpentine belts, guaranteeing durability and compatibility with various car models.",
                        tags: ["Serpentine Belts", "Power Steering", "Alternator", "Car Models"],
                        imageUrl1: "https://premiumautoproducts.com/wp-content/uploads/2021/10/Serpentine-Belts-vs-Timing-Belts.jpg",
                        imageUrl2: "https://gmb.net/wp-content/uploads/2021/07/serp-belt.jpeg",
                        imageUrl3: "https://products.blains.com/600/10/102747.webp"
                    },
                    {
                        id: 214,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Belt Tensioners",
                        content: "Squeaky belts? No more! Our Automotive Belt Tensioners ensure quiet operation and dependable performance. Say goodbye to belt issues!",
                        tags: ["Belt Tensioners", "Quiet Operation", "Dependable Performance", "Belt Issues"],
                        imageUrl1: "https://static.summitracing.com/global/images/prod/xlarge/ado-12569301_fs_xl.jpg",
                        imageUrl2: "https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/SBF_Drive_Belt_Tensioner",
                        imageUrl3: "https://autopartsu.com/wp-content/uploads/2020/12/3-blog-Why-Your-Belt-Tensioner-May-Wobble.jpg"
                    },
                    {
                        id: 215,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Tensioner Assembly",
                        content: "Discover the driving difference with our Automotive Tensioner Assembly. Engineered for precision and reliability, our assembly guarantees optimal belt tension, ensuring peak performance for your vehicle. No more belt slipping or compromising on power. Crafted with meticulous attention to detail and using high-quality materials, it offers exceptional durability and longevity.",
                        tags: ["Tensioner Assembly", "Precision", "Reliability", "Optimal Belt Tension", "Durability"],
                        imageUrl1: "https://images-cdn.ubuy.co.in/635a23abdba0d764932979eb-wflnhb-belt-tensioner-assembly-wpulleys.jpg",
                        imageUrl2: "https://image.made-in-china.com/2f0j00OiEgMcFqkskb/Belt-Tensioner-for-Ford-Ranger-Bk3q6a228bh-1766642-Bb3q6a228ad-1895944-Fb3q-6A228-Ba.webp",
                        imageUrl3: "https://www.repco.com.au/medias/A9259992.jpg?context=bWFzdGVyfGltYWdlc3w1MTc1N3xpbWFnZS9qcGVnfHN5cy1tYXN0ZXIvaW1hZ2VzL2hiOS9oZTMvOTMxMTczOTA1MjA2Mi9BOTI1OTk5Mi5qcGd8MzhmMTdhNDM0OWJhNGVlODEzZmU4ZWYyNjFlODdiNTgxYzVhZGM4ZGM3ODI2YmE5Y2Q0NzdmMTkzMDNlYzRiOQ"
                    },
                    {
                        id: 216,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Idler Pulleys",
                        content: "Smooth, Reliable, and Efficient—Discover the Perfect Idler Pulleys for Your Automotive Needs! Our Premium Pulleys Keep Your Belts Running at Optimal Tension, Ensuring Improved Performance and Extended Belt Life. Don't Settle for Less and trust West Can Auto Parts.",
                        tags: ["Idler Pulleys", "Optimal Tension", "Improved Performance", "Extended Belt Life"],
                        imageUrl1: "https://www.myautovaluestore.com/doc/id/e613c32e-53c6-40fd-82ef-4a3af3476b6e",
                        imageUrl2: "https://clickableautomotive.com.au/media/cache/sylius_shop_product_original/fe/2f/f242b0fd451e1c1c205f88254291.jpeg",
                        imageUrl3: "https://autopartsu.com/wp-content/uploads/2021/01/2-Idlers-vs-tensioners-featured-graphic.jpg"
                    }
                ],
                content: "Rev Up Your Ride with Reliable Automotive Belts! Upgrade your vehicle's performance with our premium range of automotive belts. Engineered to perfection, these belts ensure optimal power transmission, reducing the risk of breakdowns and maximizing your driving experience. Crafted with durability in mind, our belts are built to withstand extreme conditions, providing long-lasting performance and peace of mind on every journey. Trust in our cutting-edge technology and meticulous craftsmanship to keep your engine running smoothly and efficiently. Don't compromise on quality—choose our automotive belts and drive with confidence. Upgrade your ride today!",
                tags: ["Automotive Belts", "Performance Upgrade", "Durability", "Power Transmission", "Engine Efficiency"],
                imageUrl1: "https://res.cloudinary.com/dpeocx0yy/image/upload/v1725432315/gates-engine-parts-tck257-64_600-_2__k912x2.jpg",
                imageUrl2: "https://s19539.pcdn.co/wp-content/uploads/2020/01/Engine_BeltTension-1024x512.jpg",
                imageUrl3: "https://images-cdn.ubuy.co.in/634f446d5a3e5e4ffb5306d3-gates-tck328-powergrip-premium-timing.jpg"
            },
            {
                id: 105,
                category: "TIER 1 (CATEGORY)",
                listing: "Cooling System",
                parts: [
                    {
                        id: 217,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Radiator",
                        content: "Upgrade your home's heating system with our top-of-the-line radiators. Our high-quality radiators offer efficient heat distribution, keeping your space warm and cozy during the colder months. With a sleek and modern design, our radiators not only provide functionality but also enhance the aesthetics of any room. Browse our collection today and experience the perfect blend of style and warmth for your home.",
                        tags: ["Radiator", "Heat Distribution", "Modern Design", "Home Heating"],
                        imageUrl1: "https://img.freepik.com/premium-photo/car-radiator-isolated-white-background-3d-render_268321-208.jpg",
                        imageUrl2: "https://www.mishimoto.com/media/catalog/product/r/1/r162-at_1_3_swis60cpam4lhir1.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
                        imageUrl3: "https://www.repco.com.au/medias/A5384172.jpg?context=bWFzdGVyfGltYWdlc3wyMTM0ODd8aW1hZ2UvanBlZ3xzeXMtbWFzdGVyL2ltYWdlcy9oYWQvaDNiLzk2ODMzOTE0NDcwNzAvQTUzODQxNzIuanBnfDRlZDFjM2NhZDliNTJjMDAxNWVkY2I0NTIxMDIzOTNlZjEwMjk4YTgwNTMxODMzYzQzYTY3ZmYxOGVkZjgzZTM"
                    },
                    {
                        id: 218,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Coolant Reservoir Tanks & Parts",
                        content: "Stay Cool on the Road with Premium Coolant Reservoir Tanks & Parts. Your vehicle's engine deserves the best, and our collection of coolant reservoir tanks and parts delivers just that. Designed with cutting-edge technology, our products provide efficient heat dissipation, preventing engine damage and prolonging its lifespan. With easy installation and a wide range of options, we have the perfect solution.",
                        tags: ["Coolant Reservoir Tanks", "Heat Dissipation", "Engine Protection", "Easy Installation"],
                        imageUrl1: "https://images-cdn.ubuy.co.in/63a7621d0d6e39309b56b9a3-a-premium-coolant-recovery-overflow.jpg",
                        imageUrl2: "https://images-cdn.ubuy.co.in/6351f9731a2feb676c64e495-gm-genuine-parts-84368362-radiator-surge.jpg",
                        imageUrl3: "https://raneys-cdn11.imgix.net/images/stencil/1280x1280/products/195461/103798/Heavy-Duty-Pressurized-Coolant-Reservoir-603-5211__75344.1673297705.jpg?imbypass=on"
                    },
                    {
                        id: 219,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Radiator Hoses",
                        content: "Upgrade your engine's performance with our premium radiator hoses. Designed to withstand extreme temperatures and pressure, our hoses ensure efficient coolant flow, preventing overheating and maximizing your vehicle's performance.",
                        tags: ["Radiator Hoses", "Coolant Flow", "Extreme Temperatures", "Engine Performance"],
                        imageUrl1: "https://cdn.shopify.com/s/files/1/1186/7718/products/8510547_900x.jpg?v="
                    }
                ],
                tags: ["Cooling System", "Engine Components", "Heat Dissipation", "Performance Upgrade"],
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725432861/10107-2_dben9k.png"
            },
            {
                id: 106,
                category: "TIER 1 (CATEGORY)",
                listing: "Heating & Air Conditioning",
                tags: ["heating", "air conditioning", "automotive"],
                parts: [
                    {
                        id: 223,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Condenser",
                        tags: ["condenser", "cooling", "automotive"],
                        content: "Experience coolness like never before with our Automotive Condensers! Engineered to perfection, our condensers ensure optimal performance and durability for your vehicle. Say goodbye to overheating issues and hello to smooth rides. Choose our Automotive Condensers for reliability and efficiency. Upgrade your driving experience today!",
                        imageUrls: [
                            "https://restomodair.com/wp-content/uploads/2022/04/11-1142-CONDENSER-RESTOMOD-AIR-800x533.jpg",
                            "https://www.roughtrax4x4.com/media/catalog/product/cache/18844361176c4db2753e9ef5e0ed678f/a/c/acon009_-_aa_01.jpg",
                            "https://www.densoautoparts.com/wp-content/uploads/2022/09/condenser-product-photo_0.jpeg"
                        ]
                    },
                    {
                        id: 224,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Air Conditioning Compressor, Clutch & Idler Assembly",
                        tags: ["compressor", "clutch", "idler", "air conditioning"],
                        content: "Beat the heat with our Air Conditioning Compressor, Clutch & Idler Assembly! Experience unparalleled cooling efficiency and superior performance. Designed to perfection, our assembly ensures a refreshing breeze in your vehicle, even on scorching summer days. Say goodbye to sweaty commutes and hello to a comfortable ride. With our top-of-the-line compressor, clutch, and idler assembly, you'll enjoy icy-cool air throughout your journey.",
                        imageUrls: [
                            "https://m.media-amazon.com/images/I/6173NRZxDqL.jpg",
                            "https://m.media-amazon.com/images/I/41u5Xf1G2-L._AC_UF894,1000_QL80_.jpg",
                            "https://i5.walmartimages.com/asr/1ddfa95b-13e0-429d-90ae-b807c4732a54_1.088360f4f8eaa8fc3a0f53187946e963.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                        ]
                    },
                    {
                        id: 225,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Air Conditioning Filter, Valve Condenser, Evaporator & Hose",
                        tags: ["filter", "valve", "evaporator", "hose", "air conditioning"],
                        content: "Drive with Refreshing Air: Upgrade Your Automotive AC Filter for Pure Comfort. Our high-performance air conditioning filters trap dust, pollen, and odors, delivering clean, crisp air inside your vehicle. Say goodbye to stuffiness and hello to a breath of fresh air. Shop now and experience the ultimate driving comfort!",
                        imageUrls: [
                            "http://www.coolmaster.com.cn/upload/product/05%20drier%20and%20expansion%20valve.jpg$20158281043873242.jpg",
                            "http://www.coolmaster.com.cn/upload/product/07%20fitting.jpg$201582810324584260.jpg"
                        ]
                    },
                    {
                        id: 226,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Heater Valves, Heater Cores & Blowers",
                        tags: ["heater valves", "heater cores", "blowers", "heating"],
                        content: "Introducing the epitome of comfort and climate control for your vehicle! Our Automotive Air Conditioning Heater Valves, Heater Cores & Blowers will revolutionize your driving experience. Beat the scorching heat or stay cozy during chilly winters with our state-of-the-art solutions. Immerse yourself in a world of perfect temperatures, thanks to our cutting-edge technology and exceptional craftsmanship.",
                        imageUrls: [
                            "https://assets.denso-am.eu/eyJidWNrZXQiOiJhc3NldHMuZGVuc28tYW0uY29tIiwia2V5IjoicHJvZHVjdGlvbi9wcm9kdWN0cy9BbGwtQUMtYW5kLUVuZ2luZUNvb2xpbmcvYWMtaGVhdGVyLWNvcmVzL0RFTlNPLUhlYXRlci1Db3JlLWdlbmVyYWwtaW1hZ2UuanBnIiwiZWRpdHMiOnsianBlZyI6eyJxdWFsaXR5IjoxMDAsInByb2dyZXNzaXZlIjpmYWxzZSwidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWl6ZVNjYW5zIjp0cnVlfSwicmVzaXplIjp7IndpZHRoIjo3NDQsImZpdCI6ImNvdmVyIn0sInNoYXJwZW4iOnRydWV9fQ==",
                            "https://www.autohausaz.com/images/1H1819030.jpg"
                        ]
                    },
                    {
                        id: 227,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Air Conditioning & Heater Switch & Relays",
                        tags: ["switches", "relays", "air conditioning", "heating"],
                        content: "Turn up the comfort dial in your car with our Automotive Air Conditioning & Heater Switch & Relays. Say goodbye to sweaty summers and frosty winters with our state-of-the-art products. Engineered to perfection, our switches and relays offer precise temperature control and reliable performance, ensuring a cozy cabin environment all year round. Whether you're embarking on a road trip or tackling your daily commute, our top-quality components will keep you cool, calm, and collected.",
                        imageUrls: [
                            "https://i.shgcdn.com/b49aadaf-d93d-4c4c-9b5f-14fcb49143ad/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
                            "https://cdn11.bigcommerce.com/s-8yj8mwad/images/stencil/1700x1700/products/5642/23559/40amp_and_PSI_switch_copy__42655.1614716286.jpg?c=2",
                            "https://www.cars-equipment.com/base/files/shop-images/6495308/25021-1J0919506M.jpg"
                        ]
                    },
                    {
                        id: 228,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Air Conditioning Compressor Parts",
                        tags: ["compressor parts", "air conditioning"],
                        content: "We at West Can Auto Parts like to keep it cool! Escape the sweltering heat and embrace coolness on your terms with our Automotive Air Conditioning Compressor parts. Designed to perfection, our compressors deliver a refreshing blast of cold air, making every drive a delightful experience. Don't let a faulty compressor ruin your journey.",
                        imageUrls: [
                            "https://ae01.alicdn.com/kf/H05c9225f688f488899709045a8bb4b71M/cl6069-auto-air-conditioning-compressor-clutch-for-709-pv6-125mm-car-ac-spare-parts.jpg_Q90.jpg_.webp",
                            "http://www.coolmaster.com.cn/upload/product/compressor%20components.jpg$20158291594027721.jpg",
                            "https://i0.wp.com/studentlesson.com/wp-content/uploads/2022/11/images-34.jpeg?resize=722%2C425&ssl=1"
                        ]
                    }
                ],
                content: "Beat the scorching summers or chilly winters with ease, as our innovative technology delivers precise temperature regulation at the touch of a button. Embrace a seamless driving experience with our reliable and efficient Heating and AC options, and make every ride a delightful escape. Experience clean and purified air with our efficient air filtration, keeping dust and allergens at bay. Designed for exceptional performance and reliability, our Heating and Air Conditioning units ensure a serene and pleasant driving environment. Explore our range now and upgrade your automotive experience to new heights of luxury.",
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725432904/air-con-parts-raysons_qgdidc.jpg"
            },
            {
                id: 107,
                category: "TIER 1 (CATEGORY)",
                listing: "Suspension & Steering",
                tags: ["suspension", "steering", "automotive"],
                parts: [
                    {
                        id: 229,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Shock Absorbers",
                        tags: ["shock absorbers", "suspension"],
                        content: "Upgrade your vehicle's handling and comfort with our premium Shock Absorbers. Designed to enhance stability and reduce road vibrations, our shock absorbers ensure a smoother and safer driving experience. Say goodbye to bumps and jostles, and enjoy a more controlled and comfortable ride.",
                        imageUrls: [
                            "https://cdn11.bigcommerce.com/s-8yj8mwad/images/stencil/1280x1280/products/10181/46447/Monroe_Matic_Plus_Shock_Absorber__97398.1615371645.jpg?c=2",
                            "https://www.autozone.com/images/628/628-2070971.jpg",
                            "https://www.autozone.com/images/2000/2000-2070971.jpg"
                        ]
                    },
                    {
                        id: 230,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Struts",
                        tags: ["struts", "suspension"],
                        content: "Revitalize your vehicle’s suspension with our high-performance Struts. Engineered for durability and precision, our struts provide exceptional ride quality and handling. Perfect for tackling rough roads and improving stability, our struts ensure a smooth and controlled driving experience.",
                        imageUrls: [
                            "https://www.monroeshocksandsprings.com/images/products/Monroe_Magnum_Load_Adjusting_Strut-Front-1.jpg",
                            "https://www.partsgeek.com/mmparts/strut_assembly/ford/f-150.html",
                            "https://cdn11.bigcommerce.com/s-8yj8mwad/images/stencil/1280x1280/products/33493/159073/Monroe_Magnum_Load_Adjusting_Strut__64095.1616517244.jpg?c=2"
                        ]
                    },
                    {
                        id: 231,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Steering Pumps & Racks",
                        tags: ["steering pumps", "steering racks"],
                        content: "Achieve precise steering and effortless maneuvering with our advanced Steering Pumps & Racks. Designed for optimal performance and reliability, our steering components ensure a smooth and responsive driving experience. Whether you're navigating tight turns or cruising down the highway, our steering solutions will enhance your vehicle's handling and control.",
                        imageUrls: [
                            "https://www.autopartswarehouse.com/images/Steering_Pump/ACDelco/ACDelco_36-261582_001.jpg",
                            "https://www.rockauto.com/info/A1_Cardone/20-1928_G.jpg",
                            "https://www.rockauto.com/info/A1_Cardone/20-1928_1.jpg"
                        ]
                    },
                    {
                        id: 232,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Suspension Bushings & Components",
                        tags: ["suspension bushings", "suspension components"],
                        content: "Enhance your vehicle’s suspension system with our high-quality Bushings & Components. Engineered for durability and performance, our parts ensure improved handling, reduced noise, and a smoother ride. Perfect for maintaining optimal suspension function and extending the life of your vehicle's components.",
                        imageUrls: [
                            "https://cdn11.bigcommerce.com/s-8yj8mwad/images/stencil/1280x1280/products/35827/201457/Prothane_Suspension_Bushing_Kit__24-1301_1.1615316716.jpg?c=2",
                            "https://www.rockauto.com/info/Prothane/24-1301_2.jpg",
                            "https://www.autoanything.com/images/brands/prothane/Prothane-24-1301.jpg"
                        ]
                    }
                ],
                content: "Experience enhanced vehicle performance and control with our top-of-the-line Suspension & Steering products. Whether you're looking to upgrade your suspension system or improve steering precision, our components are designed for durability and superior performance. Navigate any road with confidence and comfort, and enjoy a smoother, safer ride with our expertly crafted suspension and steering solutions.",
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725434882/download_rv9ypi-removebg-preview_pqyshp.png"
            },
            {
                id: 108,
                category: "TIER 1 (CATEGORY)",
                listing: "Automotive Lighting",
                tags: ["lighting", "automotive", "visibility"],
                parts: [
                    {
                        id: 232,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Headlight Assembly & Bulbs",
                        tags: ["headlights", "bulbs", "visibility", "safety"],
                        content: "Illuminate your way with our premium Headlight Assembly & Bulbs collection. Experience enhanced visibility and safety on the road with our state-of-the-art headlights. Our meticulously crafted assemblies ensure perfect fit and easy installation for various car models. Choose from a wide range of reliable bulbs that deliver exceptional brightness and long-lasting performance. Upgrade your vehicle's style and functionality today with our top-notch Headlight Assembly & Bulbs.",
                        imageUrl1: "https://images-cdn.ubuy.co.in/63f214d99e7dfb24d9285d65-tusdar-headlight-assembly-set-w-bulbs.jpg",
                        imageUrl2: "https://images-cdn.ubuy.co.in/6400387064b31c283419f797-jsboyat-headlight-assembly-bulbs.jpg",
                        imageUrl3: "https://m.media-amazon.com/images/I/71EgWfzZhIS.jpg"
                    },
                    {
                        id: 233,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Tail Light Assembly & Bulbs",
                        tags: ["tail lights", "bulbs", "safety", "visibility"],
                        content: "Revamp your ride with our exquisite Tail Light Assembly & Bulbs collection. Unlock a world of style and safety with our cutting-edge tail lights. Our precisely engineered assemblies guarantee a seamless fit and effortless installation for diverse car models. Select from our wide array of dependable bulbs, designed to deliver remarkable brightness and enduring performance.",
                        imageUrl1: "https://images-cdn.ubuy.co.in/63643d65195bb050fe224c64-autosaver88-tail-light-assembly.jpg",
                        imageUrl2: "https://cdn.shopify.com/s/files/1/0021/9293/2915/products/144-390_x700.jpg?v=1570142557",
                        imageUrl3: "https://img.fruugo.com/product/8/71/648829718_max.jpg"
                    },
                    {
                        id: 234,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Side Marker Lights",
                        tags: ["side markers", "lighting", "visibility", "style"],
                        content: "Add a touch of brilliance to your vehicle with our stunning Side Marker Lights collection. Choose from a wide range of vibrant options that radiate with exceptional brightness. Whether you're upgrading or replacing, our premium Side Marker Lights are your ultimate choice.",
                        imageUrl1: "https://cdn.moglix.com/p/lmmJteQjNSZSN-xxlarge.jpg",
                        imageUrl2: "https://www.vignal-group.com/media/Catalogue%20Product%20Pictures/Signalisation/Feuxdeposition/198620_WEB.jpg",
                        imageUrl3: "https://www.jwspeaker.com/wp-content/uploads/led-tail-light-model-157-2016.jpg"
                    },
                    {
                        id: 235,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Turn Signal Lights",
                        tags: ["turn signals", "lighting", "safety", "visibility"],
                        content: "Signal your intentions in style with our remarkable Turn Signal Lights collection. Upgrade your vehicle's safety and appearance with our cutting-edge lights. Our turn signal lights are expertly crafted for a seamless fit and effortless installation on diverse car models.",
                        imageUrl1: "https://ae04.alicdn.com/kf/Sf4ef7336b7e0420d80cb02ca81bf3247e.jpg",
                        imageUrl2: "https://img.fruugo.com/product/5/05/238662055_max.jpg",
                        imageUrl3: "https://m.media-amazon.com/images/I/51AwO95qsUL.jpg"
                    },
                    {
                        id: 236,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Lighting Accessories",
                        tags: ["accessories", "lighting", "functionality", "style"],
                        content: "Unlock a world of possibilities with our Automotive Lighting Accessories. Elevate your vehicle's lighting game and make a statement on the road. From LED conversion kits to wiring harnesses and more, our accessories are designed to enhance functionality and style. Take control of your lighting with ease and ensure optimal performance.",
                        imageUrl1: "https://www.hy-capacity.com/userdocs/products/8302145_1_xl.jpg",
                        imageUrl2: "https://cdn.moglix.com/p/PY1bkm42o1jED-xxlarge.jpg",
                        imageUrl3: "https://static1.industrybuying.com/products/automotive-maintenance-and-accessories/automobile-electricals/car-lighting/AUT.CAR.96610795_1668303939721.webp"
                    },
                    {
                        id: 237,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Fog Lights",
                        tags: ["fog lights", "visibility", "weather", "performance"],
                        content: "Navigate through any weather condition with confidence using our high-performance Automotive Fog Lights. Designed to cut through fog, rain, and darkness, our fog lights ensure optimal visibility on the road. Choose from our premium selection of fog lights that offer exceptional brightness and durability. Get them from West Can Auto Parts. They are easy to install!",
                        imageUrl1: "https://automods.in/wp-content/uploads/2023/02/Hc19a5fdf40354f1887ff7c10190342f2B.jpg_960x960.webp",
                        imageUrl2: "https://cdn.shopify.com/s/files/1/0629/1321/6702/products/71OBpNk5knS._SL1464.jpg?v=1665927042",
                        imageUrl3: "https://cdn.shopify.com/s/files/1/0629/1321/6702/products/71fRcKGjToL._SL1500.jpg?v=1665927758"
                    }
                ],
                tags: ["automotive", "lighting", "visibility", "safety"],
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725432339/29_07_2022-car_headlights_covor_image_22934624_eb82qj.jpg"
            },
            {
                id: 109,
                category: "TIER 1 (CATEGORY)",
                listing: "Body Parts & Accessories",
                tags: ["body parts", "accessories", "style", "functionality"],
                parts: [
                    {
                        id: 238,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Bumpers & Components",
                        tags: ["bumpers", "components", "style", "functionality"],
                        content: "Upgrade your ride with our premium selection of automotive bumpers and components. Our meticulously crafted bumpers are designed to enhance both the style and functionality of your vehicle. Whether you're looking for rugged off-road bumpers or sleek and sporty options, we have the perfect fit for your needs.",
                        imageUrl1: "https://cdn.shopify.com/s/files/1/0447/7376/9381/products/1_25d4e22b-1e28-4d73-9548-e7f8f1ce8e4b_480x.jpg?v=1637519024",
                        imageUrl2: "https://cdn.shopify.com/s/files/1/1600/9425/products/W221S63FT_2_1200x1200.jpg?v=1546163342",
                        imageUrl3: "https://cdn.shopify.com/s/files/1/0582/6989/2777/products/unnamed_50.jpg?v=1677877352"
                    },
                    {
                        id: 239,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Engine Covers",
                        tags: ["engine covers", "protection", "performance", "style"],
                        content: "Introducing our exquisite Automotive Engine Covers, meticulously crafted to elevate your vehicle's performance and style. Designed with precision engineering and cutting-edge materials, our covers offer optimal protection, reducing noise and heat while enhancing aerodynamics. Experience unmatched durability and a seamless fit, as our covers are tailor-made to complement your engine's unique contours. From sleek carbon fiber finishes to bold metallic accents, choose from our diverse range of designs that fuse functionality with undeniable elegance.",
                        imageUrl1: "https://images-cdn.ubuy.co.in/633ffe60c99bfe7b266ee2d2-car-engine-cover-dry-car-engine-cover.jpg",
                        imageUrl2: "https://www.forgemotorsport.co.uk/userfiles/images/sys/products/EA888_Gen_4_Carbon_Fibre_Engine_Cover_19558jpeg.jpg",
                        imageUrl3: "https://img.fruugo.com/product/2/62/724589622_max.jpg"
                    },
                    {
                        id: 240,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Bug Deflectors",
                        tags: ["bug deflectors", "protection", "style", "durability"],
                        content: "Designed to keep pesky insects at bay, these sleek deflectors provide a shield of protection for your vehicle's hood. Say goodbye to messy splatters and enjoy a smoother ride. Crafted with durable materials and a stylish finish, our bug deflectors not only enhance your vehicle's appearance but also ensure long-lasting performance.",
                        imageUrl1: "https://cdn11.bigcommerce.com/s-d773d/images/stencil/1280x1280/products/239/1850/9304_010___93453.1538701140.jpg?c=2?imbypass=on",
                        imageUrl2: "https://cdn11.bigcommerce.com/s-08cfb/images/stencil/1280x1280/products/228/2058/2011-2016-Sierra-1500-Truck-Bug-Deflector-001__64651.1636388266.jpg?c=2?imbypass=on",
                        imageUrl3: "https://cdn11.bigcommerce.com/s-4a1f3/images/stencil/1280x1280/products/264/1722/2015-2018_Ford_F150__264__47608.1553065711.jpg?c=2?imbypass=on"
                    },
                    {
                        id: 241,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Fender Flares",
                        tags: ["fender flares", "style", "protection", "off-road"],
                        content: "Enhance your vehicle's rugged appeal with our high-quality Fender Flares. Crafted for both style and functionality, these flares add an aggressive look while protecting your vehicle from debris and mud. Ideal for off-road adventures or simply making a bold statement, our fender flares come in various designs to suit your taste.",
                        imageUrl1: "https://cdn11.bigcommerce.com/s-47a45/images/stencil/1280x1280/products/340/1697/2004_2006_Ford_F150__Fender_Flares__340__16662.1507821358.jpg?c=2?imbypass=on",
                        imageUrl2: "https://cdn11.bigcommerce.com/s-47a45/images/stencil/1280x1280/products/302/1558/15_F250_Super_Duty_Fender_Flares__302__75909.1583139025.jpg?c=2?imbypass=on",
                        imageUrl3: "https://cdn11.bigcommerce.com/s-47a45/images/stencil/1280x1280/products/308/1572/2019_Ford_F250_Super_Duty_Fender_Flares__308__13121.1586831877.jpg?c=2?imbypass=on"
                    },
                    {
                        id: 242,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Side Steps & Nerf Bars",
                        tags: ["side steps", "nerf bars", "accessories", "utility"],
                        content: "Step up your vehicle's functionality with our premium Side Steps and Nerf Bars. Designed for easy access and added safety, these accessories provide a sturdy foothold and enhance the rugged look of your ride. Whether you're upgrading for practicality or style, our Side Steps and Nerf Bars are built to last and offer exceptional performance.",
                        imageUrl1: "https://cdn11.bigcommerce.com/s-4f4b9/images/stencil/1280x1280/products/296/1574/2015_2019_Ford_F150_Running_Boards__296__63979.1562817931.jpg?c=2?imbypass=on",
                        imageUrl2: "https://cdn11.bigcommerce.com/s-4f4b9/images/stencil/1280x1280/products/295/1532/2009_2018_Dodge_Ram_1500__Side_Steps__295__63763.1555665953.jpg?c=2?imbypass=on",
                        imageUrl3: "https://cdn11.bigcommerce.com/s-4f4b9/images/stencil/1280x1280/products/294/1533/2007_2019_Toyota_Tacoma__Nerf_Bars__294__60948.1555609900.jpg?c=2?imbypass=on"
                    },
                    {
                        id: 243,
                        category: "TIER 2 (SUB CATEGORY)",
                        listing: "Window Tinting",
                        tags: ["window tinting", "privacy", "UV protection", "style"],
                        content: "Transform your vehicle with our professional Window Tinting solutions. Enjoy enhanced privacy, UV protection, and a sleek look with our high-quality tints. Our window tinting options are designed for a perfect fit and durability, ensuring your vehicle stands out while staying protected.",
                        imageUrl1: "https://cdn11.bigcommerce.com/s-947cf/images/stencil/1280x1280/products/263/1721/2017_2019_Ford_F150__Window_Tinting__263__46739.1546608314.jpg?c=2?imbypass=on",
                        imageUrl2: "https://cdn11.bigcommerce.com/s-947cf/images/stencil/1280x1280/products/264/1722/2015_2018_Ford_F150__Window_Tinting__264__22497.1546659523.jpg?c=2?imbypass=on",
                        imageUrl3: "https://cdn11.bigcommerce.com/s-947cf/images/stencil/1280x1280/products/265/1734/2020_Ford_F250_Super_Duty__Window_Tinting__265__75482.1546724903.jpg?c=2?imbypass=on"
                    }
                ],
                tags: ["body parts", "accessories", "style", "functionality"],
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725433049/shopping_zz0uvs.webp"
            }
        ],
        tags: ["Automotive", "Parts"],
    },
    {
        title: "Tools & Equipment",
        tags: ["automotive", "tools", "equipment", "DIY", "professional"],
        subParts: [
            {
                listing: "Automotive Service Tools",
                description: "Transform your garage into a powerhouse of automotive expertise with our top-of-the-line tools. Discover the perfect tools for professionals and DIY enthusiasts alike, ensuring every turn of the wrench is a success.",
                imageUrl: "https://inbound.betterpackages.com/hs-fs/hubfs/Dollarphotoclub_84282280.jpg?width=640&name=Dollarphotoclub_84282280.jpg",
                tags: ["automotive", "service", "tools", "garage"],
                parts: [
                    {
                        listing: "Hand Tools",
                        description: "Whether you're a DIY enthusiast or a seasoned professional, our hand tools provide the perfect grip and torque for every task.",
                        imageUrl: "https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/Ten_Best_Automotive_Hand_Tools_6_Apollo_297",
                        tags: ["hand tools", "DIY", "professional"]
                    },
                    {
                        listing: "Power Tools",
                        description: "Unleash the Power in Your Hands! Explore our exceptional range of automotive power tools, designed to ignite your passion for performance.",
                        imageUrl: "https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/10_Best_Automotive_Power_Tools_10_Porter_Cable",
                        tags: ["power tools", "automotive", "performance"]
                    },
                    {
                        listing: "Vises",
                        description: "From wickedly precise diagnostic scanners to tantalizingly powerful performance tuners, our e-commerce platform offers a curated selection of tools designed to ignite your passion for automotive mastery.",
                        imageUrl: "https://images-cdn.ubuy.co.in/633b302b103cf439ac755165-yost-tools-vises-445-4-5-quot.jpg",
                        tags: ["vises", "tools", "automotive"]
                    },
                    {
                        listing: "Electric Tools",
                        description: "Our high-performance electric impact wrenches effortlessly tackle stubborn lug nuts, while our cordless electric jacks effortlessly lift your vehicle with precision.",
                        imageUrl: "https://autoedu.info/wp-content/uploads/2022/01/Electric-tools.jpg",
                        tags: ["electric tools", "impact wrenches", "jacks"]
                    },
                    {
                        listing: "Tool Boxes, Chests and Carts",
                        description: "Discover the perfect companions for your tools. Our collection of tool boxes, chests, and carts will elevate your organization game to new heights.",
                        imageUrl: "https://www.supercheapauto.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw97eebf6e/images/PS004/PS004.jpg?sw=1000&sh=1000&sm=fit",
                        tags: ["tool boxes", "chests", "carts", "organization"]
                    },
                    {
                        listing: "Dollies, Pallet Trucks and Work Benches",
                        description: "Transform your workspace with our range of essential industrial equipment.",
                        imageUrl: "https://www.vestil.com/images/i1200/LTT-2145_A.jpg",
                        tags: ["dollies", "pallet trucks", "work benches", "industrial equipment"]
                    }
                ],
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725433110/Automotive-Equipment_rwz6r8.jpg"
            },
            {
                listing: "Agricultural & Heavy Industrial Products",
                description: "From Soil to Sky, we've got you covered: Unleash the true potential of your agricultural and heavy industrial ventures with our premium product range.",
                imageUrl: "https://www.deccanequipments.com/images/agriculture-machinery-manufacturers-india/delux-mechanical-reversible-plough.jpg",
                tags: ["agricultural", "heavy industrial", "equipment", "farming"],
                parts: [
                    {
                        listing: "Agricultural Equipment",
                        description: "Discover a comprehensive selection of high-performance agricultural equipment tools to elevate your farming experience.",
                        imageUrl: "https://nobowa.com/wp-content/uploads/2018/07/lg_393-1-696x365.jpg",
                        tags: ["agricultural equipment", "farming", "high-performance"]
                    },
                    {
                        listing: "Landscaping Equipment and Parts",
                        description: "Transform your outdoor spaces with our high-quality landscaping equipment and parts.",
                        imageUrl: "https://www.gamka.com/wp-content/uploads/2020/06/150bt3.jpg",
                        tags: ["landscaping equipment", "outdoor",]
                    },
                    {
                        listing: "Tractor Parts",
                        description: "Revolutionize your farming experience with top-quality tractor parts from our extensive collection.",
                        imageUrl: "https://images-cdn.ubuy.co.in/634333a6e366317f48266511-arko-tractor-parts-engine-overhaul-kit.jpg",
                        tags: ["tractor parts", "farming", "top-quality"]
                    },
                    {
                        listing: "Trailer Parts and Accessories",
                        description: "Revamp your trailer with our top-quality parts and accessories.",
                        imageUrl: "https://vaaltruckparts.co.za/wp-content/uploads/2021/08/Trailer-Accessories.jpg",
                        tags: ["trailer parts", "accessories", "revamp"]
                    },
                    {
                        listing: "Snow Plows",
                        description: "Don't let snow stand in your way. Embrace winter's icy embrace with our powerful snow plows!",
                        imageUrl: "https://www.whitescanyonford.com/static/dealer-16024/_snow-plows/MVP3.jpeg",
                        tags: ["snow plows", "winter", "powerful"]
                    },
                    {
                        listing: "Generators",
                        description: "Unleash the potential of your generator with our diverse range of components, designed to fit seamlessly into various models.",
                        imageUrl: "https://blogmedia.evbstatic.com/wp-content/uploads/engineering/2016/10/03101006/electric-generator.jpg",
                        tags: ["generators", "components", "seamless"]
                    }
                ],
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725433140/delux-mechanical-reversible-plough_uzdfkf.jpg"
            },
            {
                listing: "Shop Consumables & Tools",
                description: "From high-quality diagnostic tools to state-of-the-art lifting equipment, our products are designed to enhance efficiency and deliver unparalleled results.",
                imageUrl: "https://wfmalaysia.com.my/image/wfmalaysia/image/data/Automotive%20Equipment.jpg",
                tags: ["shop consumables", "tools", "efficiency", "diagnostic"],
                parts: [
                    {
                        listing: "Battery Chargers, Boosters and Power Packs",
                        description: "Don't let a dead battery slow you down. Recharge your batteries in no time and stay on the move with unrivaled efficiency.",
                        imageUrl: "https://img.fruugo.com/product/6/57/454107576_max.jpg",
                        tags: ["battery chargers", "boosters", "power packs"]
                    },
                    {
                        listing: "Tire Machines, Aligners and Balancers",
                        description: "Unlock the Power of Precision with our Tire Machines, Aligners, and Balancers.",
                        imageUrl: "https://mma.prnewswire.com/media/460538/Rotary_Wheel_Service_Equipment.jpg?p=facebook",
                        tags: ["tire machines", "aligners", "balancers", "precision"]
                    },
                    {
                        listing: "Shop Equipment",
                        description: "Upgrade your automotive shop with state-of-the-art equipment!",
                        imageUrl: "https://tiresupplynetwork.com/cdn/shop/collections/A9824TIE_a8a92408-eed6-48c7-b75f-44d2d70603c4_1600x.png?v=1590072296",
                        tags: ["shop equipment", "automotive", "upgrade"]
                    },
                    {
                        listing: "Lubrication Products",
                        description: "Experience smooth and efficient rides with our premium automotive lubrication products.",
                        imageUrl: "https://www.purelubrication.co.uk/wp-content/uploads/2021/02/LEProducts.png",
                        tags: ["lubrication products", "smooth", "efficient"]
                    },
                    {
                        listing: "Lifting Equipment",
                        description: "Make effortless automotive maintenance with our cutting-edge lifting equipment.",
                        imageUrl: "https://www.redlinestands.com/catalog/images/magictoolbox_cache/feabb61ae2a71c1844359f7cbe8b5d82/9/1/917/original/3816009068/MSC-6K_SP_Lift.jpg",
                        tags: ["lifting equipment", "automotive", "maintenance"]
                    },
                    {
                        listing: "Fume Extraction and Dust Collection Systems",
                        description: "Breathe easy with our cutting-edge Fume Extraction and Dust Collection Systems.",
                        imageUrl: "https://www.glacier-technology.com/wp-content/uploads/2018/11/Plasma-Cutter-Fume-Extraction.jpg",
                        tags: ["fume extraction", "dust collection", "systems"]
                    },
                    {
                        listing: "Diagnostic Equipment and Tools",
                        description: "Rev up your auto repair shop with our cutting-edge automotive diagnostic equipment and tools.",
                        imageUrl: "https://www.miamiherald.com/reviews/wp-content/uploads/2023/02/motopower-miamiherald.jpg",
                        tags: ["diagnostic equipment", "tools", "auto repair"]
                    },
                    {
                        listing: "Electric Charging Stations",
                        description: "Designed for the eco-conscious driver, our sleek and efficient charging solutions deliver a seamless experience.",
                        imageUrl: "https://www.piwinenergy.com/wp-content/uploads/2021/12/charging-stations-dc-fast-electric-charging-stations-01.jpg",
                        tags: ["electric charging stations", "eco-conscious", "efficient"]
                    },
                    {
                        listing: "Pressure and Parts Washers",
                        description: "From engine components to brake parts, our washers ensure a thorough and efficient cleaning process.",
                        imageUrl: "https://sc04.alicdn.com/kf/H4e0ae173523d4656855d16557b182f20J.jpg",
                        tags: ["pressure washers", "parts washers", "cleaning"]
                    },
                    {
                        listing: "Compressors and Hoses",
                        description: "We offer a wide range of high-quality compressors and durable hoses, ensuring optimal airflow and pressure.",
                        imageUrl: "https://images-cdn.ubuy.co.in/633aaf60b589f9756f7ab763-timbertech-airbrush-compressor-as18-2.jpg",
                        tags: ["compressors", "hoses", "airflow", "pressure"]
                    }
                ],
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725435143/image-removebg-preview_6_cdifup.png"
            },
            {
                listing: "Paint & Body Shop Equipment",
                description: "Chrome painted, matte finish, carbon finish, metallic, pearlescent- You name it, West Can Auto has them all!",
                imageUrl: "https://cdn11.bigcommerce.com/s-otbepc2/images/stencil/1280x1280/products/6736/29539/no-name-brand-automotive-spray-gun-with-adapter-z-gun-by-no-name-brand-zgun-clear__96991.1669347492.jpg?c=2?imbypass=on",
                tags: ["paint", "body shop", "equipment", "auto"],
                parts: [
                    {
                        listing: "Paint Booths",
                        description: "Discover a comprehensive selection of high-quality paint booths designed for professional-grade results.",
                        imageUrl: "https://img2.24h.com.vn/upload/2-2020/images/2020-03-03/1583233489-595-chong-xam-lau-dai-thong-cho-hoi-boong-may-son-2-600x400.jpg",
                        tags: ["paint booths", "high-quality", "professional"]
                    },
                    {
                        listing: "Body Shop Equipment",
                        description: "Upgrade your body shop with our comprehensive range of premium body shop equipment.",
                        imageUrl: "https://qtcautoparts.com/wp-content/uploads/2020/10/2000x1250.jpg",
                        tags: ["body shop", "equipment", "premium"]
                    },
                    {
                        listing: "Spray Guns",
                        description: "Achieve a flawless finish with our advanced spray guns, designed for precision and efficiency.",
                        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61Sz6ENkr-L._AC_SL1500_.jpg",
                        tags: ["spray guns", "flawless", "precision"]
                    }
                ],
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725433207/no-name-brand-automotive-spray-gun-with-adapter-z-gun-by-no-name-brand-zgun-clear__52830_wlvvj0.jpg"
            }
        ]
    },
    {
        title: "Fluids & Lubricants",
        tags: ["Fluids", "Lubricants"],
        subParts: [
            {
                listing: "Oil & Lubricants",
                description: "Trust our expertly crafted formulas to reduce friction, enhance fuel economy, and optimize engine performance. Whether you're a weekend warrior or a daily commuter, our oils and lubricants are designed to exceed your expectations.",
                imageUrl: "https://ican-group.co/wp-content/uploads/2021/12/LubricatingOil.jpg",
                tags: ["Oil", "Lubricants", "Engine Performance"],
                parts: [
                    {
                        listing: "Engine Oil",
                        description: "Your vehicle's engine need an engine oil replacement? We got your back! Revive your vehicle's heart with our premium engine oil. Unleash the true potential of your engine as our oil nourishes its vital components, reducing friction and maximizing efficiency. From smooth startups to relentless acceleration, trust our engine oil to keep your ride running like a well-oiled machine.",
                        imageUrl: "https://autobaak.nl/wp-content/uploads/2022/02/welke-motorolie-heb-ik-nodig-5w30-5w40-of-10w40.jpg",
                        tags: ["Engine Oil", "Friction Reduction", "Efficiency"]
                    },
                    {
                        listing: "Differential Oil",
                        description: "Upgrade your vehicle's performance and extend its lifespan with high-quality differential oil. Specially formulated to handle the extreme pressures and temperatures in your differential, our premium oils provide optimal lubrication and reduce friction, preventing wear and tear. Give your vehicle the care it deserves only from West Can Auto Parts!",
                        imageUrl: "https://media.istockphoto.com/id/519616442/photo/oiling-gears.jpg?s=612x612&w=0&k=20&c=o6Ek7U1_2xprdMI51dR9sOrG8TRopx5QW6Yb1foeZwE=",
                        tags: ["Differential Oil", "Lubrication", "Wear Prevention"]
                    },
                    {
                        listing: "Lubricant & Grease",
                        description: "Smooth the way! Enhance the longevity of your machinery with our high-quality lubricants and greases. Say goodbye to squeaks and resistance with our top-notch lubricants and greases. Improve efficiency and extend the lifespan of your machines with our premium lubricants and greases.",
                        imageUrl: "https://img.freepik.com/premium-photo/grease-ball-bearing-lithium-machinery-lubrication-automotive-industrial_622428-95.jpg",
                        tags: ["Lubricants", "Grease", "Machinery Maintenance"]
                    },
                    {
                        listing: "Transmission Fluid",
                        description: "Discover the secret to smooth, efficient gear shifts with our premium transmission fluid. Specially engineered for maximum performance, our fluid reduces friction, minimizes wear, and extends the life of your transmission. Designed for modern vehicles, our transmission fluid optimizes fuel efficiency and protects against heat and oxidation. Don't settle for anything less than excellence.",
                        imageUrl: "https://www.vestellubricants.com/wp-content/uploads/2020/07/product-api-gear-oil.jpg",
                        tags: ["Transmission Fluid", "Gear Shifts", "Heat Protection"]
                    },
                    {
                        listing: "Gear Oil",
                        description: "At West Can Auto Parts, our oil ensures smooth and precise gear engagements, enhancing overall performance. Say goodbye to friction and wear, as our specialized formula protects against heat and pressure, extending the lifespan of your gears. From heavy-duty applications to recreational vehicles, our gear oil delivers unparalleled protection and efficiency.",
                        imageUrl: "https://images-cdn.ubuy.co.in/633af42b6dea5b28f7350855-80w90-5.jpg",
                        tags: ["Gear Oil", "Heat Resistance", "Performance Enhancement"]
                    }
                ],
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725433643/LubricatingOil-1_ysc2e0.jpg"
            },
            {
                listing: "Fluids",
                description: "Rev up your engine's performance with our premium automotive fluids. Engineered for excellence, our fluids ensure optimal lubrication, cooling, and protection. From high-performance motor oil to reliable brake fluid, we've got your vehicle covered.",
                imageUrl: "https://img.freepik.com/free-photo/plastic-bottles-from-automobile-oils-isolated-white_93675-128248.jpg",
                tags: ["Fluids", "Lubrication", "Cooling"],
                parts: [
                    {
                        listing: "Brake & Power Steering Fluid",
                        description: "Specially formulated to meet the demanding requirements of modern braking and steering systems, our fluid provides excellent lubrication, corrosion protection, and heat resistance. It effectively maintains brake responsiveness and smooth power steering operation, extending the lifespan of critical components. Trust in our reliable fluid to enhance your driving experience and maintain the performance of your vehicle.",
                        imageUrl: "https://m.media-amazon.com/images/I/51It25MagxL.jpg",
                        tags: ["Brake Fluid", "Power Steering Fluid", "Corrosion Protection"]
                    },
                    {
                        listing: "Engine Additive & Cleaner",
                        description: "Boost your engine's performance and extend its lifespan with our advanced Engine Additive & Cleaner. Specially formulated to remove harmful deposits and improve fuel efficiency, this powerful solution optimizes combustion and reduces engine wear. Whether you have a gasoline or diesel engine, our additive delivers superior results by reducing friction and restoring lost power. Say goodbye to sluggish performance and hello to a smoother, more responsive ride.",
                        imageUrl: "https://products.blains.com/600/03/034362.webp",
                        tags: ["Engine Additive", "Fuel Efficiency", "Engine Cleaner"]
                    },
                    {
                        listing: "Adhesives & Sealants",
                        description: "These high-performance solutions offer unparalleled strength and durability, ensuring a secure bond between parts and protecting against leaks, vibrations, and harsh environments. From repairing cracks to sealing joints, our adhesives and sealants provide a seamless finish that lasts.",
                        imageUrl: "https://multimedia.3m.com/mws/media/2282275J/a-group-of-3m-marine-grade-silicone-sealants.jpg?width=1200",
                        tags: ["Adhesives", "Sealants", "Leak Protection"]
                    },
                    {
                        listing: "Antifreeze & Windshield Wash Fluid",
                        description: "At West Can Auto Parts, we care for your safety. Our windshield wash fluid is specially designed to remove dirt, grime, and bugs from your windshield, ensuring clear visibility on the road. Our antifreeze is formulated to provide optimal engine protection, preventing freezing in cold temperatures and overheating in hot conditions. Grab them now!",
                        imageUrl: "https://images.stockmeier.com/companys/STOCKMEIER_Fluids/General_pictures/shutterstock_1677963892.jpg?ixlib=php-2.1.1&q=70&s=a512a8b2e45a53001423ae6fc93a7e7f",
                        tags: ["Antifreeze", "Windshield Wash Fluid", "Engine Protection"]
                    }
                ],
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725433671/plastic-bottles-from-automobile-oils-isolated-white_93675-128248_lrmqv2.png"
            },
            {
                listing: "Cooling Chemicals",
                description: "Say goodbye to overheating nightmares and hello to smooth rides! Designed for all vehicle types, our premium formulas ensure maximum efficiency and longevity. From high-performance racing machines to daily drivers, you name it all!",
                imageUrl: "https://granvilleoil.com/froala/uploads/151fa63dd899b7f79c3bfd4a73700dcac3666090.jpg",
                tags: ["Cooling Chemicals", "Overheating Protection", "Efficiency"],
                parts: [
                    {
                        listing: "Refrigerant",
                        description: "Introducing our premium Automotive Refrigerant, the perfect solution to keep your vehicle's air conditioning system running smoothly. Designed with advanced technology, this refrigerant offers superior cooling performance and ensures optimal comfort during your drives. It is compatible with a wide range of automotive models and is easy to use, making it a must-have for any car owner. Trust our Automotive Refrigerant to provide reliable and efficient cooling, allowing you to enjoy a refreshing journey every time you hit the road.",
                        imageUrl: "https://emzone.ca/wp-content/uploads/2021/05/AC-cool-1234yf-rendering-2.jpg",
                        tags: ["Refrigerant", "Cooling", "Comfort"]
                    },
                    {
                        listing: "AC Compressor Oil",
                        description: "Upgrade your automotive AC system with our premium AC compressor oil. Specially formulated to optimize cooling performance, our oil ensures smooth operation and extends the life of your compressor. It provides excellent lubrication, reducing friction and wear for enhanced efficiency. Order now and enjoy the benefits of a well-maintained AC system!",
                        imageUrl: "https://m.media-amazon.com/images/I/619HwfBjYBL._AC_SX466_.jpg",
                        tags: ["AC Compressor Oil", "Cooling Performance", "Lubrication"]
                    }
                ],
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725433881/151fa63dd899b7f79c3bfd4a73700dcac3666090_xsgdo0.jpg"
            },
            {
                listing: "Car Wash & Wax",
                description: "You can count your vehicle in for a spa day with West Can Auto Parts! Unleash the true beauty of your vehicle with our premium formula that cleanses, shines, and protects. Our meticulously crafted blend effortlessly removes dirt, grime, and road residue, leaving behind a dazzling, showroom-worthy finish.",
                imageUrl: "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/90040294_XL1_20201021.jpg",
                tags: ["Car Wash", "Wax", "Protection"],
                parts: [
                    {
                        listing: "Wash Cleaners",
                        description: "With its gentle yet effective cleaning action, it won't damage your car's paint or finish. Suitable for all vehicle types, our Automotive Wash Cleaners provide a thorough and streak-free clean, making your car sparkle like new. Experience the difference for yourself and give your vehicle the care it deserves.",
                        imageUrl: "https://images-cdn.ubuy.co.in/639c56192910c628e7675e82-autodeco-23pcs-car-wash-cleaning-tools.jpg",
                        tags: ["Wash Cleaners", "Paint Protection", "Thorough Clean"]
                    },
                    {
                        listing: "Interior & Exterior Care Products",
                        description: "At West Can Auto, we have a premium selection which includes everything you need to maintain a pristine appearance and protect your car from the elements. From top-quality cleaning solutions and polishes to luxurious upholstery and dashboard protectants, we have it all. Trust in our high-performance formulas to restore shine, remove dirt, and preserve the elegance of your automobile.",
                        imageUrl: "https://carorbis.com/wp-content/uploads/2022/04/Car-wash-01.png",
                        tags: ["Interior Care", "Exterior Care", "Protection"]
                    },
                    {
                        listing: "Polish",
                        description: "Specially formulated to restore and enhance your vehicle's paintwork, our polishes effortlessly remove surface imperfections, swirl marks, and light scratches, leaving a glossy, mirror-like finish. Our advanced formula provides long-lasting protection against UV rays and environmental contaminants, ensuring your car stays beautiful for longer. Experience professional-quality results at home with our easy-to-use automotive polish products.",
                        imageUrl: "https://cdn.shopify.com/s/files/1/0029/3476/7665/files/CPSL5K-1_combo.jpg?v=1682917002",
                        tags: ["Polish", "Paint Restoration", "UV Protection"]
                    }
                ],
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725433900/90040294_XL1_20201021_noy53o.webp"
            }
        ]
    },
    {
        title: "Industrial & Safety",
        tags: ["Industrial", "Safety"],
        subParts: [
            {
                listing: "Safety",
                description: "Prioritize Safety, Elevate Success! At West Can Auto Parts, we believe that safety is the foundation of every successful industry. With our unwavering commitment to ensuring a secure work environment, we empower businesses to thrive without compromising their most valuable asset. Have a scroll at our catalog.",
                imageUrl: "https://media.licdn.com/dms/image/C4E12AQHcWrdK8WO6Nw/article-cover_image-shrink_720_1280/0/1571393347094?e=2147483647&v=beta&t=G3GcH3VjNv62uz4mB8IFFx86rV0ttiwVibCh9BHYqus",
                tags: ["Safety", "Work Environment", "Secure"],
                parts: [
                    {
                        listing: "Protection Apparel",
                        description: "Our collection features top-quality gear, including high-visibility vests, hard hats, gloves, and protective clothing. Engineered with durability and comfort in mind, our apparel ensures maximum protection against hazards such as falls, impacts, and chemical exposure. Don't compromise on safety.",
                        imageUrl: "https://media.istockphoto.com/id/654731004/vector/worker-with-personal-protective-equipment-and-safety-icons.jpg?s=612x612&w=0&k=20&c=tKstInuW8WVyeJfOd1fDq83WnBwuiAlTBKLekXl00JY=",
                        tags: ["Protection Apparel", "High-Visibility", "Protective Clothing"]
                    },
                    {
                        listing: "First Aid Kits",
                        description: "At West Can Auto Parts, health and safety comes first! A must-have for any workplace. Packed with essential medical supplies and equipment, our kit equips you to handle emergencies with confidence. From bandages and disinfectants to CPR masks and splints, our kit covers a wide range of injuries and accidents.",
                        imageUrl: "https://familydoctor.org/wp-content/uploads/2017/04/shutterstock_102226078.jpg",
                        tags: ["First Aid Kits", "Health", "Medical Supplies", "Emergency"]
                    },
                    {
                        listing: "Fire Extinguishers",
                        description: "Ensure the utmost safety in your industrial settings with our top-of-the-line fire extinguishers. Designed specifically for industrial environments, our fire extinguishers are equipped with advanced features to tackle various types of fires effectively. Invest in our industrial fire extinguishers today and safeguard your workplace from potential fire emergencies.",
                        imageUrl: "https://www.aesm.com.au/uploads/133/29/Fire-Extinguisher-Types-Scaled-Cmprsd.jpeg",
                        tags: ["Fire Extinguishers", "Fire Safety", "Industrial"]
                    }
                ],
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725434795/download_tn7ab1-removebg-preview_tf0oau.png"
            },
            {
                listing: "Janitorial & Sanitation",
                description: "Discover our top-of-the-line Workshop Janitorial & Sanitation Products designed to meet your every cleaning need. From powerful degreasers to eco-friendly disinfectants, our extensive range delivers exceptional performance and reliability. With our cutting-edge solutions, you can maintain a pristine workspace, optimize productivity, and ensure a safe and healthy environment for your team.",
                imageUrl: "https://agmaas.com/wp-content/uploads/2021/04/Janitorial-Supplies.png",
                tags: ["Janitorial", "Sanitation", "Cleaning"],
                parts: [
                    {
                        listing: "Chemicals & Cleaners",
                        description: "Our extensive collection features highly effective products designed to tackle dirt, grime, and germs, leaving your space pristine and hygienic. From floor cleaners and disinfectants to window cleaners and odor eliminators, we offer reliable solutions that ensure a clean and healthy environment. Shop now for a spotless and inviting atmosphere.",
                        imageUrl: "https://www.leonardbrushandchemical.com/wp-content/uploads/2021/01/LBCProducts2Revised.png",
                        tags: ["Chemicals", "Cleaners", "Hygiene"],
                    },
                    {
                        listing: "Brooms & Brushes",
                        description: "Crafted with durable materials, our brooms and brushes ensure long-lasting performance in tackling dirt, dust, and debris. Whether you need to sweep large areas or reach tight corners, our versatile range offers a solution for every task. With ergonomic handles for comfortable grip and superior bristles for effective cleaning, our products guarantee a spotless and hygienic environment. Upgrade your cleaning arsenal today and experience the difference with our Janitorial & Sanitation Brooms & Brushes.",
                        imageUrl: "https://www.cleaningshop.com.au/contents/media/eurolux-rake-broom-2.jpg",
                        tags: ["Brooms", "Brushes", "Cleaning"]
                    },
                    {
                        listing: "Supplies",
                        description: "We offer a comprehensive range of products, including cleaning chemicals, mops, brooms, trash bags, and more. Whether you need supplies for commercial, industrial, or residential use, our reliable and durable options will meet your needs. Maintain a hygienic environment with our trusted janitorial and sanitation supplies, ensuring cleanliness and peace of mind for you and your customers.",
                        imageUrl: "https://devmarproducts.com/wp-content/uploads/2018/02/Janitorial-Supplies.jpg",
                        tags: ["Supplies", "Janitorial", "Sanitation", "Cleaning"]
                    }
                ],
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725434241/Janitorial-Supplies_fs6eul.png"
            },
            {
                listing: "Farm Supplies",
                description: "We offer a wide range of high-quality products and equipment designed to enhance productivity and efficiency on your farm. Shop with confidence and let us help you achieve your farming goals with our reliable and affordable solutions.",
                imageUrl: "https://content.jdmagicbox.com/comp/chickballapur/h1/9999p8156.8156.130702165700.c5h1/catalogue/scientific-farm-supplies-chickballapur-vzmz9.jpg",
                tags: ["Farm Supplies", "Agriculture", "Productivity"],
                parts: [
                    {
                        listing: "Fluids & Lubrication",
                        description: "Discover high-quality farm supplies fluids and lubrication products at West Can Auto Parts. We offer a wide range of fluids and lubricants specifically designed for the agricultural industry. From tractor hydraulic fluids to engine oils and gear lubricants, our products ensure optimal performance and longevity for your farm machinery. With our reliable and efficient solutions, you can enhance the productivity and efficiency of your farming operations.",
                        imageUrl: "https://oconnorhf.com/wp-content/uploads/2022/01/HY046HV24-HV46-20L-scaled-1.jpg",
                        tags: ["Fluids", "Lubrication", "Farm"]
                    },
                    {
                        listing: "Hardware & Equipment",
                        description: "Whether you're a seasoned farmer or a hobbyist, we have everything you need to make your agricultural endeavors successful. From durable tools and machinery to reliable irrigation systems and fencing materials, we've got you covered. Our products are sourced from trusted brands and are designed to withstand the demands of the farm. Shop with us today and elevate your farming experience to new heights.",
                        imageUrl: "https://www.kcdfrs.com/wp-content/uploads/2017/12/scraper-640.jpg",
                        tags: ["Hardware", "Equipment", "Farm"]
                    },
                    {
                        listing: "Parts & Accessories",
                        description: "Our collection features everything you need to keep your farm running smoothly. From durable machinery parts to reliable tools and equipment, we have you covered. Enhance efficiency and productivity with our dependable products, designed to withstand rigorous farming tasks.",
                        imageUrl: "https://canadianfarmsupply.com/site-uploads/1001208/Slider/slide1.jpg",
                        tags: ["Accessories", "Farm"]
                    }
                ],
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725434270/scientific-farm-supplies-chickballapur-vzmz9_jwkql2.jpg"
            },
            {
                listing: "Heavy Duty Trucks Supplies",
                description: "Discover the ultimate source for Heavy Duty Truck Supplies. West Can Auto Parts is your go-to destination for top-of-the-line equipment, parts, and accessories to keep your fleet running smoothly. From engine components to towing gear, we offer a comprehensive selection of products designed to withstand the toughest challenges.",
                imageUrl: "https://img.forconstructionpros.com/files/base/acbm/fcp/image/2020/10/AXE.5f7dc0ab90e74.png?auto=format%2Ccompress&q=70",
                tags: ["Heavy Duty", "Trucks", "Fleet"],
                parts: [
                    {
                        listing: "Fasteners",
                        description: "Shop our wide selection of heavy-duty truck supplies fasteners for all your truck maintenance needs. Our high-quality fasteners are designed to withstand the toughest conditions, providing secure and reliable connections for your trucks. Whether you need bolts, nuts, screws, or washers, we have the right fasteners to keep your trucks running smoothly. With fast shipping and competitive prices, you can trust us to deliver the supplies you need, when you need them.",
                        imageUrl: "https://www.rapiddirect.com/wp-content/uploads/2023/02/metal-automotive-fasteners-.jpg",
                        tags: ["Fasteners", "Heavy Duty", "Trucks"]
                    },
                    {
                        listing: "Abrasives",
                        description: "Introducing Heavy Duty Trucks Supplies, your go-to destination for top-quality abrasives. Whether you're working on construction projects, automotive repairs, or industrial applications, our extensive range of abrasives is designed to tackle the toughest tasks with ease. From grinding wheels to sanding discs, our products are built to withstand heavy-duty use, providing exceptional durability and performance.",
                        imageUrl: "https://www.consulting-trading.com/wp-content/uploads/2018/03/consulting-trading-coated-abrasives.jpg",
                        tags: ["Abrasives", "Heavy Duty", "Trucks"]
                    },
                    {
                        listing: "Construction Supplies",
                        description: "Built to withstand the toughest jobs, our range of supplies is designed for durability and reliability. From heavy-duty tools and equipment to high-quality materials, we have everything you need to get the job done right. Whether you're working on a construction site, landscaping project, or any other heavy-duty task, our supplies are built to handle the toughest conditions.",
                        imageUrl: "https://www.spare-parts-trade.com/img/home/Supply_of_transmission_spare-parts_RAC-Germany.jpg",
                        tags: ["Construction Supplies", "Heavy Duty", "Trucks"]
                    },
                    {
                        listing: "Adhesives & Sealant",
                        description: "These high-performance solutions offer unparalleled strength and durability, ensuring a secure bond between parts and protecting against leaks, vibrations, and harsh environments. From repairing cracks to sealing joints, our adhesives and sealants provide a seamless finish that lasts.",
                        imageUrl: "https://multimedia.3m.com/mws/media/2282275J/a-group-of-3m-marine-grade-silicone-sealants.jpg?width=1200",
                        tags: ["Adhesives", "Sealant", "Heavy Duty", "Trucks"]
                    }
                ],
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725434425/AXE.5f7dc0ab90e74_xvhl5c.jpg"
            },
            {
                listing: "Industrial Supplies",
                description: "Whether you're looking to optimize efficiency, improve workplace safety, or enhance productivity, our comprehensive selection has you covered. Shop with confidence and equip your business with the tools and supplies it needs to thrive. Discover the convenience of online shopping for all your industrial needs today.",
                imageUrl: "https://static.wixstatic.com/media/7396b8_0b9b5cb129a549949004cdc262b2ad10~mv2.jpg/v1/fill/w_560,h_440,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Hose-Couplings_Industrial-Supply_JPG.jpg",
                tags: ["Industrial Supplies", "Efficiency", "Productivity"],
                parts: [
                    {
                        listing: "Filters & Fluids",
                        description: "At West Can Auto Parts, we offer a comprehensive selection of products designed to meet your industrial needs. From durable filters that ensure clean and efficient operations to high-performance fluids that optimize machinery performance, we have it all.",
                        imageUrl: "https://cdn11.bigcommerce.com/s-rsvmdxl/images/stencil/1280x1280/products/59146/65790/DNP561880__85781.1510693186.jpg?c=2",
                        tags: ["Filters", "Fluids", "Industrial"]
                    },
                    {
                        listing: "Brakes & Suspension",
                        description: "Upgrade your industrial machinery with our high-performance brakes and suspension systems. Designed for heavy-duty applications, our industrial brakes provide reliable stopping power, ensuring the safety of your operations. With advanced technology and durable construction, our suspension systems offer superior stability and smoothness, reducing vibrations and enhancing overall control. Improve productivity and minimize downtime by investing in our trusted solutions.",
                        imageUrl: "https://www.trebutechnology.com/wp-content/uploads/Electro-Hydraulic-Disc-Brake-1.jpg",
                        tags: ["Brakes", "Suspension", "Industrial"]
                    },
                    {
                        listing: "Parts & Accessories",
                        description: "We offer a diverse selection of products designed to meet your industrial needs. Whether you require reliable components for machinery, durable tools for repairs, or efficient accessories to enhance productivity, we have you covered. Our inventory includes trusted brands and ensures superior performance, durability, and compatibility. Shop with confidence and unlock the potential of your industrial operations with our top-notch parts and accessories.",
                        imageUrl: "https://images-cdn.ubuy.co.in/63b6018352faa118425b8776-annafi-floating-knurling-tool.jpg",
                        tags: ["Accessories", "Industrial"]
                    }
                ],
                imageUrl1:"https://res.cloudinary.com/dpeocx0yy/image/upload/v1725434462/Hose-Couplings_Industrial-Supply_JPG_cmwxa6.webp"
            }
        ]
    }

]





export default parts