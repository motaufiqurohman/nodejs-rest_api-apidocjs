# nodejs-rest_api-apidocjs / how to use apidocjs


## install apidoc
`apidocJS` :
[http://apidocjs.com/](http://apidocjs.com/)

## create file `apidoc.json` at root folder

`apidoc.json`

```
{
    "name": "<name project> API Documentation",
    "version": "0.0.0",
    "description": "Documentation of <name project> API",
    "title": "<name project> API",
    "url" : "http://localhost:3000 //(example base url)"
}
```

## add comment at above your enpoint

```js
/**
 * @apiGroup Agen
 * @api {get} /regular/agen/:id Mendapatkan Detail Agen
 * @apiVersion 0.0.0
 * @apiDescription Untuk mendapatkan detail agen berdasarkan id
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost:3000/regular/agen/1933
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *          {
 *              message: "hello world"
 *          }
 */
router.get('/', (req, res) => {
    try{
        res.status(200).json({message: "hello world"})
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})
```

## run this command on terminal
```bash
apidoc ".*\\.js$" -e node_modules -o apidoc/
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)