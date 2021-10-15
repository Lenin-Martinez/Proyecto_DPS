const Productos =[
    {
        "Categoria": "Promocion", 
        "Nombre": "Hamburguesa", 
        "Descripcion": "Deliciosa hamburguesa especial de la temporada, solo por tiempo limitado",
        "Precio": 5.00, 
        "Imagen": 'https://www.titicupon.com/sites/default/files/buger_ajust_1.jpg' 
    },
    {
        "Categoria": "Promocion", 
        "Nombre": "Alitas", 
        "Descripcion": "Combo de alitas fritas, una opcion perfecta para disfrutar a cualquier hora",
        "Precio": 2.50, 
        "Imagen": 'https://i0.wp.com/recetastips.com/wp-content/uploads/2020/08/Alitas-de-Pollo-Picante-Buffalo-Wings.jpg' 
    },
    {
        "Categoria": "Promocion", 
        "Nombre": "Burrito", 
        "Descripcion": "Un para de burritos mexicanos, con exelente sabor para disfrutar un almuerzo al estilo latino",
        "Precio": 3.00, 
        "Imagen":'https://kingkebabkintore.com/SiteContent/ScrollerPic/Shop531/Scroller2075_73814.jpg' 
    },
    {
        "Categoria": "Promocion", 
        "Nombre": "Sandwich", 
        "Descripcion": "Un sandwich de jamon para una comida mas rapida y tranquila",
        "Precio": 1.50, 
        "Imagen": 'https://www.vanguardia.com/binrepository/716x477/0c0/0d0/none/12204/LBHF/web_sandwich_jamo_big_tp_VL403410_MG18566209.jpg' 
    },
    {
        "Categoria": "Promocion", 
        "Nombre": "Pizza", 
        "Descripcion": "Una pizza gigante de jamon y peperoni, perfecta para compartir con amigos o familia",
        "Precio": 7.00, 
        "Imagen": 'https://static.ideal.es/www/multimedia/201812/02/media/cortadas/pizza-krVE-U6017271750624sC-624x385@Ideal.jpg' 
    },
    {
        "Categoria": "Promocion", 
        "Nombre": "Ensalada", 
        "Descripcion": "Ensalada de vegetales y trozos de pollo que forman una comida fuerte y saludable",
        "Precio": 4.50, 
        "Imagen": 'https://eatgreen.com.mx/wp-content/uploads/2018/05/Ensalada-blanco-sinaderezo.jpg' 
    },
    
    {
        "Categoria": "Entrada", 
        "Nombre": "Mariscos al ajillo", 
        "Descripcion": "Un platillo de entrada exquisito en especial si tu aficion es el sabor del mar",
        "Precio": 5.00, 
        "Imagen": 'https://centralinformativa.tv/wp-content/uploads/2018/03/spanish-garlic-shrimp.jpg' 
    },
    {
        "Categoria": "Entrada", 
        "Nombre": "Pasteles de queso", 
        "Descripcion": "Pasteles fritos de queso, una excelente opcion para abrir el apetito o si tienes solo un antojo",
        "Precio": 2.50, 
        "Imagen": 'https://mui.today/__export/1597184724117/sites/mui/img/2020/08/11/empanada-empanaditas.jpg_951304162.jpg' },
    {
        "Categoria": "Entrada", 
        "Nombre": "Croquetas de jamon", 
        "Descripcion": "Delicioso trozos de jamon empanizado en una presentacion muy comoda de ingerir",
        "Precio": 2.00, 
        "Imagen": 'https://www.euroresidentes.com/alimentacion/comida/wp-content/uploads/sites/3/2018/01/croquetas-recetas-faciles-euroresidentes.jpg' },
    {
        "Categoria": "Entrada", 
        "Nombre": "Arepas", 
        "Descripcion": "Un para de arepas, una entrada mas solida si el apetito es fuerte y se antoja ango delicioso",
        "Precio": 1.50, 
        "Imagen": 'https://2.bp.blogspot.com/-5cBP0XrMq3U/WtS-LB1fbII/AAAAAAAAlts/ZNNY0BspU-AMlFP0NWFpViUToNNZu-FJgCEwYBhgL/s1600/IMG_20180416_141834.jpg' },
    {
        "Categoria": "Entrada", 
        "Nombre": "Tequeños", 
        "Descripcion": "Pequeños rollitos de queso con un excelente sabor, una excelente opcion para iniciar una deliciosa comida",
        "Precio": 2.00, 
        "Imagen": 'https://img.bekia.es/cocina/0000/443/2.jpg' },
    {
        "Categoria": "Entrada", 
        "Nombre": "Hallacas", 
        "Descripcion": "Quiza lo conozcas como un ´Tamal´, pero, lo que no puedes, es negar su delicioso sabor tradicional ",
        "Precio": 1.50, 
        "Imagen": 'https://http2.mlstatic.com/ricas-hallacas-y-bollos-por-encargo-D_NQ_NP_948302-MLV32297893657_092019-F.jpg' 
    },
    
    {
        "Categoria": "Desayuno", 
        "Nombre": "Huevo toreado", 
        "Descripcion": "Delicioso platillo de huevos toreados acompañados de un par de rodajas de pan tostado, perfecto para empezar tu mañana",
        "Precio": 2.00, 
        "Imagen": 'https://healthifyme-blog-prod.s3-ap-southeast-1.amazonaws.com/blog/wp-content/uploads/2015/12/Perfect-scrambled-eggs.jpg' 
    },
    {
        "Categoria": "Desayuno", 
        "Nombre": "Tostadas francesas", 
        "Descripcion": "Tres porciones de tostadas de pan al estilo frances, con jarabe de mapple y frutas para un desayuno suave y delicioso",
        "Precio": 1.50, 
        "Imagen": 'https://images.ecestaticos.com/eBsJCStE2c3OnkqCX7_D4s1ahgU=/128x0:2013x1411/1200x900/filters:fill(white):format(JPG)/f.elconfidencial.com/original/38d/94a/7ce/38d94a7ce3b4c37a7c73d130e98496f2.jpg' 
    },
    {
        "Categoria": "Desayuno", 
        "Nombre": "Pizza sushi", 
        "Descripcion": "Un desayuno nutritivo en pequeñas porciones, uniendo la cocina italiana y japonesa, la pizza sushi es una comida ideal.",
        "Precio": 4.00, 
        "Imagen": 'https://cdn.tasteatlas.com/images/dishrestaurants/02614495e3c0452ca2b62007312da0d0.jpg' 
    },
    {
        "Categoria": "Desayuno", 
        "Nombre": "Sandwish de atun", 
        "Descripcion": "Un sandwich de atun cargado de nutrientes y poca grasa, para iniciar un dia saludable con el pie derecho ",
        "Precio": 2.50, 
        "Imagen": 'https://oleoo.com.br/wp-content/uploads/2016/05/cozinha-simples-sanduiche-de-atum.jpg' 
    },
    {
        "Categoria": "Desayuno", 
        "Nombre": "Dobladas de pollo", 
        "Descripcion": "Un desayuno perfecto para los amantes de la comida frita, una tortilla delgada con un interior relleno de pollo y complemento de vegetales",
        "Precio": 7.00, 
        "Imagen": 'https://masecacentroamerica.com/wp-content/uploads/2019/09/Maseca-Dobladas1.jpg' 
    },
    
    {
        "Categoria": "Desayuno", 
        "Nombre": "Ensalada caesar", 
        "Descripcion": "Deliciosa ensalada caesar, una opcion saludable y nutritiva para empezar yu mañana con toda la actitud positiva",
        "Precio": 5.00, 
        "Imagen": 'https://1.bp.blogspot.com/-ULKcyhguwPc/VNGBD9Hkn5I/AAAAAAAADQE/JPuvM8GaCzc/s1600/7368790678_571395cde9_o.jpg' 
    },

    {
        "Categoria": "Almuerzo", 
        "Nombre": "Pollo rostizado", 
        "Descripcion": "Un almuerzo perfecto, pollo rostizado cocinado a su punto acompañado con ensada fresca y pure de papa",
        "Precio": 4.00, 
        "Imagen": 'https://gourmet.com.co/wp-content/uploads/2020/01/PolloConPureDePapa-Gourmet-3.jpg' 
    },
    {
        "Categoria": "Almuerzo", 
        "Nombre": "Asado de carne", 
        "Descripcion": "Una porcion de carne asada de res, con ensalada fresca y guacamole, un almuerzo fuerte y nutritivo",
        "Precio": 5.00, 
        "Imagen": 'https://i1.wp.com/voxpopulislp.com/wp-content/uploads/2013/11/carne-asada.jpg?ssl=1' 
    },
    {
        "Categoria": "Almuerzo", 
        "Nombre": "Ramen coreano", 
        "Descripcion": "Un almuerzo al estilo de asia, el ramen son fideos en caldo de res o cerdo, acompañado de un huevo duro y complemento de verduras",
        "Precio": 4.50, 
        "Imagen": 'https://www.israelhayom.co.il/sites/default/files/u56161/8%20(3).jpg' 
    },
    {
        "Categoria": "Almuerzo", 
        "Nombre": "Pizza", 
        "Descripcion": "Una pizza de peperoni de 8 piezas para comparir con amigos o familia, una opcion mas sencilla de comer en cualquier lugar ",
        "Precio": 7.00, 
        "Imagen": 'https://www.guadapress.es/fotos/60/PIZZA_HUT_GUADALAJARA_GUADANEWS.jpg' 
    },
    {
        "Categoria": "Almuerzo", 
        "Nombre": "Hamburguesa", 
        "Descripcion": "Una hamburguesa de res con tocino y doble queso, con cebolla y pepinillos frescos, un excelente almuerzo para continuar el dia con animos",
        "Precio": 5.00, 
        "Imagen": 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dka1w16hwopmiogsiosu' 
    },
    {
        "Categoria": "Almuerzo", 
        "Nombre": "Tacos mexicanos", 
        "Descripcion": "Un par de tacos mexicanos al pastor, acompañados de salsa verde y limon, un delicioso almuerzo al estilo mexicano",
        "Precio": 3.50, 
        "Imagen": 'https://nopasanada.mx/wp-content/uploads/2018/03/taco-660x330.png' 
    },
    
    {
        "Categoria": "Postre", 
        "Nombre": "Pastel 3 leches", 
        "Descripcion": "Una deliciosa porcion de pastes 3 leches, bastante cremoso acompañado de frutas para una ezperiencia completa",
        "Precio": 2.00, 
        "Imagen": 'https://thehappening.com/wp-content/uploads/2019/05/pasteles-tres-leches-cdmx.jpg' },
    {
        "Categoria": "Postre", 
        "Nombre": "Quesadilla dulce", 
        "Descripcion": "Quesadilla dulce artesanal, una excelente opcion de postre con un sabor delicioso",
        "Precio": 1.50, 
        "Imagen": 'https://planetapolska.com/images/2020/10/16/psD79SEhmNxnHPs3cTkPR7goIZufFIZWIsxuWIHr.jpeg' },
    {
        "Categoria": "Postre", 
        "Nombre": "Pastel de chocolate", 
        "Descripcion": "Pastel de pan de chocolate, un postre excelente para los aficionados de los sabores dulces",
        "Precio": 3.00, 
        "Imagen": 'https://minichef.net/wp-content/uploads/2020/05/pastel-de-chocolate-mexicano.jpg' },
    {
        "Categoria": "Postre", 
        "Nombre": "Pastel dulce de queso", 
        "Descripcion": "Una porciocion de pastel dulce de queso cubierto de jarabe de frambuesa",
        "Precio": 2.50, 
        "Imagen": 'https://imagenes.heraldo.es/files/image_990_v1/files/fp/uploads/imagenes/2020/01/09/tarta-de-queso.r_d.270-585-15815.jpeg' },
    {
        "Categoria": "Postre", 
        "Nombre": "Flan de vainilla", 
        "Descripcion": "Un postre bastante ligero pero delicioso, un flan cubierto con miel natural",
        "Precio": 1.00, 
        "Imagen": 'https://jptradingimports.com/wp-content/uploads/2019/12/39354.jpg' },
    {
        "Categoria": "Postre", 
        "Nombre": "Dumplings dulce", 
        "Descripcion": "Un delicioso postre asiatico, consta de un pequeño coctel de frutas envuelto en masa dulce de maiz",
        "Precio": 3.50, 
        "Imagen": 'https://www.33cy.cn/uploads/allimg/201225/1-201225112H35W.jpg' 
    }
    ]

export default Productos;