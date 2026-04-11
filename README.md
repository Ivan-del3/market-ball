## ESTRUCUTRA
```
market-ball/
│
├── backend/                  # API REST en PHP puro
│   ├── .htaccess             # Redirección de todas las peticiones a public/index.php
│   ├── public/               # Document Root del servidor (punto de entrada)
│   │   └── index.php         # Front Controller: intercepta todas las peticiones
│   │
│   ├── config/               # Configuraciones globales
│   │   ├── database.php      # Credenciales de BD
│   │   └── config.php        # Constantes globales (CORS, URLs, etc.)
│   │
│   ├── core/                 # Clases base del sistema (Motor de la API)
│   │   ├── Router.php        # Enrutador personalizado
│   │   ├── Database.php      # Conexión PDO Singleton
│   │   ├── Request.php       # Manejador de la petición HTTP
│   │   └── Response.php      # Formateador de salidas JSON
│   │
│   ├── middlewares/          # Interceptores de peticiones
│   │   ├── AuthMiddleware.php # Valida JWT y sesión
│   │   └── RoleMiddleware.php # Valida roles (admin vs customer)
│   │
│   ├── controllers/          # Lógica de negocio (MVC)
│   │   ├── AuthController.php
│   │   ├── UserController.php
│   │   ├── ProductController.php
│   │   ├── OrderController.php
│   │   ├── ChatController.php
│   │   ├── WalletController.php
│   │   ├── ReviewController.php
│   │   └── NotificationController.php
│   │
│   ├── models/               # Interacción con la Base de Datos (MVC)
│   │   ├── User.php
│   │   ├── Product.php
│   │   ├── Order.php
│   │   ├── Message.php       # Para el chat
│   │   ├── Transaction.php   # Para el wallet
│   │   ├── Review.php
│   │   └── Favorite.php
│   │
│   └── utils/                # Funciones de ayuda compartidas
│       ├── JwtHandler.php    # Generación y validación de tokens
│       ├── Validator.php     # Sanitización y validación de inputs
│       └── FileUploader.php  # Subida de imágenes de productos/avatars
│
└── frontend/                 # Aplicación cliente (Vanilla JS o mínimo framework)
    ├── public/
    │   ├── index.html        # SPA principal (Single Page Application)
    │   ├── css/
    │   │   └── style.css
    │   └── assets/           # Imágenes estáticas, iconos
    │
    └── src/
        ├── js/
        │   ├── main.js       # Punto de entrada de JS
        │   ├── router.js     # Enrutador del frontend (Navegación sin recargar)
        │   ├── api.js        # Servicio centralizado para llamadas fetch()
        │   │
        │   ├── views/        # Lógica de renderizado por pantalla
        │   │   ├── home.js
        │   │   ├── login.js
        │   │   ├── productDetail.js
        │   │   └── dashboard.js
        │   │
        │   └── components/   # Fragmentos de UI reutilizables
        │       ├── navbar.js
        │       ├── productCard.js
        │       └── chatBox.js
        │
        └── .env.example      # Ejemplo de variables de entorno (URL de la API)
```