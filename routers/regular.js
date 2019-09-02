const router = require('express').Router()
const {Wilayah, Agen} = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

/**
 * @apiGroup Wilayah
 * @api {get} /regular/wilayah?keyword=pabuaran Mencari Wilayah
 * @apiVersion 0.0.0
 * @apiDescription Untuk mencari data dari tabel wilayah berdasarkan param keyword.
 * @apiParam {String} keyword isikan nilai keyword dengan nama(kelurahan, kecamatan, kabupaten/kota, provinsi)
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *              "id": "TNG",
 *              "name": "KEL. PABUARAN, KEC. JAYANTI, KAB TANGERANG, PROV. BANTEN"
 *          },
 *          {
 *              "id": "TNG",
 *              "name": "KEL. PABUARAN TUMPENG, KEC. KARAWACI, KAB TANGERANG, PROV. BANTEN"
 *          },
 *          ...
 *     ]
 */
router.get('/wilayah', async (req, res) => {
    try{
        const {keyword} = req.query
        const wilayah = await Wilayah.findAll({
            where: {
                [Op.or]: [
                    {kelurahan: {[Op.like]: `%${keyword}%`}},
                    {kecamatan: {[Op.like]: `%${keyword}%`}},
                    {kab_kota: {[Op.like]: `%${keyword}%`}},
                    {provinsi: {[Op.like]: `%${keyword}%`}}
                ]
            }
        })
        let data = []
        for(let i in wilayah){
            data[i] = {
                id: wilayah[i]._3lc, name: `KEL. ${wilayah[i].kelurahan}, KEC. ${wilayah[i].kecamatan}, KAB ${wilayah[i].kab_kota}, PROV. ${wilayah[i].provinsi}`
            }
        }

        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})

/**
 * @apiGroup General
 * @api {get} /regular Tes Koneksi
 * @apiVersion 0.0.0
 * @apiDescription Untuk melakukan cek koneksi ke server.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "connection": "connected"
 *     }
 */
router.get('/', (req, res) => {
    res.status(200).json({connection: 'connected'})
});

module.exports = router