# Documentation API

Cette documentation fournit des exemples de requêtes à l'API de la cave.

## Exemples de requêtes

**Requête GET**

```javascript
const api = new FetchApi("http://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines");

const wines = await api.get();
```

**Requête POST**

```javascript
const api = new FetchApi("http://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines");

const wine = {
    name: "Château Latour",
    country: "France",
    year: 2023,
};

const wineId = await api.post(wine);
```

**Requête PUT**

```javascript
const api = new FetchApi("http://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines");

const wine = {
    name: "Château Latour 2023",
};

const updatedWine = await api.put(10, wine);
```

**Requête DELETE**

```javascript
const api = new FetchApi("http://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines");

const success = await api.delete(10);
```