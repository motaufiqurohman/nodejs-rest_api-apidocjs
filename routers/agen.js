const router = require('express').Router()
const {Agen} = require('../models')

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
 *              "data": {
 *                  "id_agent": 1933,
 *                  "nama_agent": "PT.MAIZAN AGUNG",
 *                  "alamat_agent": "JL.KOMP.BUMI ORANGE F8 NO.36-BANDUNG",
 *                  "jam_operasional": "00:00:00",
 *                  "no_telepon": "021-809897",
 *                  "foto_1": "https://rumahdijual.com/attachments/jakarta-selatan/26693241d1533874029-jakarta-selatan-jalan-kapten-tendean-no-49-mampang-prapatan-img-20180809-wa0003.jpg",
 *                  "foto_2": "https://3.bp.blogspot.com/-dPoPzNvgDRA/XBDNqLhTfpI/AAAAAAAAa4Q/KZ_c0A-CVRQCIIg6nm9HnqCQSYEpVnbZwCLcBGAs/s1600/agen%2Blion%2Bparcel%2Bbatam.png",
 *                  "foto_3": "https://rumahdijual.com/attachments/jakarta-selatan/26693241d1533874029-jakarta-selatan-jalan-kapten-tendean-no-49-mampang-prapatan-img-20180809-wa0003.jpg",
 *                  "latitude": "-6.913879871",
 *                  "longitude": "107.6102982",
 *                  "status": "",
 *                  "_3lc": null,
 *                  "rate": null
 *              }
 *          }
 */
router.get('/agen/:id', async (req, res) => {
    try{
        const {id} = req.params
        let agen = await Agen.findAll({where: {id_agent: id}})
        agen = agen[0]
        res.status(200).json({data: agen})
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router