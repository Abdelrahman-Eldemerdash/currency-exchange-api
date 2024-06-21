import express from "express";
import NodeCache from 'node-cache';
const myCache = new NodeCache();
import { getExchangeRate, currencyCodes } from '../externalAPI.js';
export const router = express.Router();

router.get('/', (req, res) => {
    res.send("Currency exchange server");
})


/**
 * @swagger
 * tags:
 *   - name: Currency Exchange
 *     description: Currency exchange operations
 */
/**
 * @swagger
 * /api/exchangeRate/{fromCurrency}/{toCurrency}:
 *   get:
 *     tags:
 *        - Currency Exchange
 *     summary: Get exchange rate
 *     description: Retrieve the exchange rate from one currency to another.
 *     parameters:
 *       - in: path
 *         name: fromCurrency
 *         required: true
 *         description: Code of the source currency.
 *         schema:
 *           type: string
 *           example: USD
 *       - in: path
 *         name: toCurrency
 *         required: true
 *         description: Code of the target currency.
 *         schema:
 *           type: string
 *           example: EUR
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 fromCurrency:
 *                   type: string
 *                   example: usd
 *                 toCurrency:
 *                   type: string
 *                   example: eur
 *                 rate:
 *                   type: number
 *                   example: 0.85
 *       404:
 *         description: Currency not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: One or both of the Currencies were not found
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: An error occurred while retrieving the exchange rate
 */
router.get('/api/exchangeRate/:fromCurrency/:toCurrency', async (req, res) => {
    let { fromCurrency, toCurrency } = req.params;
    fromCurrency = fromCurrency.toLowerCase();
    toCurrency = toCurrency.toLowerCase();
    if (currencyCodes.includes(fromCurrency) && currencyCodes.includes(toCurrency)) {
        //Check if they exist in currency codes list to avoid calling 
        //The external API with wrong codes otherwise return status 404 with appropiate error
        let rate = myCache.get((fromCurrency + toCurrency));
        if (rate == undefined) {
            //Cache Miss
            try {
                rate = await getExchangeRate(fromCurrency, toCurrency);//External API calling
                const success = myCache.set((fromCurrency + toCurrency), rate, 60 * 60);
                if (success) {
                    console.log("Rate cached");
                }
                else {
                    console.log("Failed to cache the Rate");
                }
                res.json({ fromCurrency, toCurrency, rate });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        }
        else {//Cache Hit
            console.log('Cache Hit')
            res.json({ fromCurrency, toCurrency, rate })
        }
    }
    else {
        res.status(404).json({ error: 'One or both of the Currencies were not found' });
    }
})