Url base: https://bmarket-api.herokuapp.com/

El url base contiene información acerca de todos los endpoints disponibles. Todos los request son Get y las respuestas serán datos en formato json.

GET https://bmarket-api.herokuapp.com/

```json
{
  "error": "",
  "body": {
    "products": "https://bmarket-api.herokuapp.com/products",
    "categories": "https://bmarket-api.herokuapp.com/categories",
    "search": "https://bmarket-api.herokuapp.com/search"
  }
}
```

Existen 3 endpoints:

- Products: usado para obtener los productos
- Categorias: usado para obtener todas las categorias de productos
- Search: usado para buscar determinados productos

# Products

## Esquema de Products

| Key       | Tipo   | Descripción                           |
| --------- | ------ | ------------------------------------- |
| id        | int    | Identificador único del producto      |
| name      | string | Nombre del producto                   |
| url_image | string | URL de la imagen asociada al producto |
| price     | float  | Precio de venta del producto          |
| discount  | int    | Porcentaje de descuento del producto  |
| category  | int    | Identificador de la categoría         |

## Obtener productos

Puede acceder a la lista de productos utilizando el <code>/products</code> endpoint. Por defecto retornará los productos de la página 1 y categoría 1. Cada página contiene 10 productos.

- data: contiene el array de productos
- meta: contiene datos extra como la página que se está mostrando y el número de páginas de esa categoría.

GET https://bmarket-api.herokuapp.com/products

```json
{
  "error": "",
  "body": {
    "data": [
      {
        "id": 5,
        "name": "ENERGETICA MR BIG",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
        "price": 1490,
        "discount": 20,
        "category": 1
      }
      //...
    ],
    "meta": {
      "page": 1,
      "npages": 1
    }
  }
}
```

## Obtener productos según página y categoría

Puede acceder a la lista de productos de la categoría y página especificada. Si omite algún parámetro, este por defecto tomará el valor de 1.

GET https://bmarket-api.herokuapp.com/products?page=1&category=3

```json
{
  "error": "",
  "body": {
    "data": [
      {
        "id": 23,
        "name": "RON BACARDI AÑEJO",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardi9450.jpg",
        "price": 4990,
        "discount": 0,
        "category": 3
      }
      //...
    ],
    "meta": {
      "page": "1",
      "npages": 2
    }
  }
}
```

# Categories

## Esquema de Categories

| Key  | Tipo   | Descripción                         |
| ---- | ------ | ----------------------------------- |
| id   | int    | Identificador único de la categoría |
| name | string | Nombre de la categoría              |

## Obtener categorías

Puede acceder a la lista de todas las categorías.

GET https://bmarket-api.herokuapp.com/categories

```json
{
  "error": "",
  "body": {
    "categories": [
      {
        "id": 1,
        "name": "bebida energetica"
      },
      {
        "id": 2,
        "name": "pisco"
      },
      {
        "id": 3,
        "name": "ron"
      },
      {
        "id": 4,
        "name": "bebida"
      },
      {
        "id": 5,
        "name": "snack"
      },
      {
        "id": 6,
        "name": "cerveza"
      },
      {
        "id": 7,
        "name": "vodka"
      }
    ]
  }
}
```

# Search

## Realizar búsqueda

Puede acceder a los resultados de su búsqueda. El parámetro input siempre debe tener un valor.

GET https://bmarket-api.herokuapp.com/search/?input=ron

```json
{
  "error": "",
  "body": {
    "products": [
      {
        "id": 23,
        "name": "RON BACARDI AÑEJO",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/bacardi9450.jpg",
        "price": 4990,
        "discount": 0,
        "category": 3
      }
      //...
    ]
  }
}
```
