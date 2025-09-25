// Configuración de URLs para FoodSaver App
const CONFIG = {
    // URLs del Backend API
    API_BASE_URL: 'http://127.0.0.1:8000',
    
    // Endpoints específicos
    ENDPOINTS: {
        // Predicción de imágenes con IA
        PREDICT_IMAGE: '/foods/predict-image/',
        
        // Guardar alimento con imagen
        SAVE_FOOD_WITH_IMAGE: '/foods/with-image/',
        
        // Guardar alimento (manual, sin imagen)
        SAVE_FOOD: '/foods/',
        
        // Obtener todos los alimentos del inventario
        GET_ALL_FOODS: '/foods/all',
        
        // Obtener recetas basadas en alimentos disponibles
        GET_RECIPES_FROM_FOODS: '/foods/recipes/from-foods/',
        
        // Eliminar alimento (usar/consumir)
        DELETE_FOOD: '/foods/'
    },
    
    // URLs completas (combinando base + endpoint)
    getFullUrl: function(endpoint) {
        return this.API_BASE_URL + this.ENDPOINTS[endpoint];
    },
    
    // URLs para desarrollo y producción
    ENVIRONMENTS: {
        development: {
            API_BASE_URL: 'http://127.0.0.1:8000',
            FRONTEND_URL: 'http://127.0.0.1:3000'
        },
        production: {
            API_BASE_URL: 'https://your-backend-domain.com',
            FRONTEND_URL: 'https://your-frontend-domain.com'
        },
        ngrok: {
            API_BASE_URL: 'http://127.0.0.1:8000', // Backend sigue en local
            FRONTEND_URL: 'https://your-ngrok-url.ngrok.io' // Frontend via ngrok
        }
    },
    
    // Configuración actual del entorno
    CURRENT_ENV: 'development',
    
    // Método para cambiar de entorno
    setEnvironment: function(env) {
        if (this.ENVIRONMENTS[env]) {
            this.CURRENT_ENV = env;
            this.API_BASE_URL = this.ENVIRONMENTS[env].API_BASE_URL;
            console.log(`Entorno cambiado a: ${env}`);
            console.log(`API Base URL: ${this.API_BASE_URL}`);
        } else {
            console.error(`Entorno no válido: ${env}`);
        }
    },
    
    // URLs de navegación (páginas HTML)
    PAGES: {
        CAPTURE: 'capture.html',
        MANUAL: 'manual.html',
        INVENTORY: 'inventory.html',
        RECIPES: 'recipes.html',
        CONFIRM: 'confirm.html'
    },
    
    // Configuración de la cámara
    CAMERA: {
        DEFAULT_FACING_MODE: 'environment', // 'user' para frontal, 'environment' para trasera
        IDEAL_WIDTH: 640,
        IDEAL_HEIGHT: 480,
        CANVAS_SIZE: 224 // Tamaño para el procesamiento de IA
    },
    
    // Configuración de imágenes
    IMAGE: {
        QUALITY: 0.8, // Calidad JPEG (0-1)
        FORMAT: 'image/jpeg',
        PLACEHOLDER: 'https://via.placeholder.com/150x150?text=Sin+Imagen'
    }
};

// Función de utilidad para obtener URL completa
function getApiUrl(endpoint) {
    return CONFIG.getFullUrl(endpoint);
}

// Función para debugging - mostrar configuración actual
function showConfig() {
    console.log('=== CONFIGURACIÓN ACTUAL ===');
    console.log('Entorno:', CONFIG.CURRENT_ENV);
    console.log('API Base URL:', CONFIG.API_BASE_URL);
    console.log('Endpoints disponibles:', Object.keys(CONFIG.ENDPOINTS));
    console.log('============================');
}

// Exportar para uso en módulos (si se usa)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}