# Configuración de URLs - FoodSaver App

## 📁 Archivo: `config.js`

Este archivo centraliza todas las URLs y configuraciones del proyecto para facilitar el mantenimiento y el cambio entre entornos (desarrollo, producción, ngrok, etc.).

## 🔧 **Uso básico**

### Incluir en HTML
```html
<script src="config.js"></script>
```

### Usar en JavaScript
```javascript
// Obtener URL completa de un endpoint
const predictUrl = getApiUrl('PREDICT_IMAGE');
// Resultado: http://127.0.0.1:8000/foods/predict-image/

// Usar directamente
fetch(getApiUrl('GET_ALL_FOODS'))
```

## 🌍 **Entornos disponibles**

### Development (por defecto)
- Backend: `http://127.0.0.1:8000`
- Frontend: `http://127.0.0.1:3000`

### Production
- Backend: `https://your-backend-domain.com`
- Frontend: `https://your-frontend-domain.com`

### Ngrok
- Backend: `http://127.0.0.1:8000` (local)
- Frontend: `https://your-ngrok-url.ngrok.io`

## 🔄 **Cambiar entorno**

```javascript
// Cambiar a producción
CONFIG.setEnvironment('production');

// Cambiar a ngrok
CONFIG.setEnvironment('ngrok');

// Ver configuración actual
showConfig();
```

## 📡 **Endpoints disponibles**

| Nombre | Endpoint | Descripción |
|--------|----------|-------------|
| `PREDICT_IMAGE` | `/foods/predict-image/` | Predicción de alimentos con IA |
| `SAVE_FOOD_WITH_IMAGE` | `/foods/with-image/` | Guardar alimento con imagen |
| `SAVE_FOOD` | `/foods/` | Guardar alimento (manual) |
| `GET_ALL_FOODS` | `/foods/all` | Obtener inventario completo |
| `GET_RECIPES_FROM_FOODS` | `/foods/recipes/from-foods/` | Generar recetas basadas en inventario |
| `DELETE_FOOD` | `/foods/` | Eliminar alimento (marcar como usado) |

## 📱 **Configuración de cámara**

```javascript
// Acceder a configuración de cámara
CONFIG.CAMERA.DEFAULT_FACING_MODE // 'environment' o 'user'
CONFIG.CAMERA.IDEAL_WIDTH         // 640
CONFIG.CAMERA.IDEAL_HEIGHT        // 480
CONFIG.CAMERA.CANVAS_SIZE         // 224
```

## 🖼️ **Configuración de imágenes**

```javascript
CONFIG.IMAGE.QUALITY      // 0.8 (80% calidad JPEG)
CONFIG.IMAGE.FORMAT       // 'image/jpeg'
CONFIG.IMAGE.PLACEHOLDER  // URL de imagen placeholder
```

## 🚀 **Para deployment**

1. **Ngrok**: Cambiar solo `FRONTEND_URL` en entorno ngrok
2. **Producción**: Actualizar ambas URLs en entorno production
3. **API diferente**: Modificar `API_BASE_URL` según necesidad

## 📝 **Ejemplos de uso**

### En capture.html
```javascript
// Antes
fetch('http://127.0.0.1:8000/foods/predict-image/', {...})

// Después
fetch(getApiUrl('PREDICT_IMAGE'), {...})
```

### En inventory.html
```javascript
// Antes
const imageUrl = `http://127.0.0.1:8000${food.image_url}`;

// Después
const imageUrl = `${CONFIG.API_BASE_URL}${food.image_url}`;
```

## ⚠️ **Importante**

- Incluir `config.js` ANTES de otros scripts que lo usen
- Verificar que el entorno esté configurado correctamente antes del deployment
- Usar `showConfig()` para debugging