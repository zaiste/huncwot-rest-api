# Huncwot REST API

## Usage

```
git clone https://github.com/zaiste/huncwot-rest-api
cd huncwot-rest-api
huncwot s
```

and then

```
curl :5544/rest/users
```

```
curl :5544/rest/users/1
```

```
curl -X POST -d '{"name": "Zaiste"}' -H "Content-Type: application/json" :5544/rest/users
```
