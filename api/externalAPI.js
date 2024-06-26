import fetch from 'node-fetch';
const API_URL = 'https://api.apyhub.com/data/convert/currency/multiple';
const API_KEY = 'APY0gHr2uc8Kyuo8pD3DO3qL2TKbYd9Tu8BAi5F84WokVKFDrbmYczY9uIlwERAvp4';
export const getExchangeRate = async (fromCurrency, toCurrency) => {//This function is responsible for calling the external API
  const requestBody = {
      source: fromCurrency,
      targets: [toCurrency]
  };

  const options = {
      method: 'POST',
      headers: {
          "Content-Type": 'application/json',
          "apy-token": API_KEY,
      },
      body: JSON.stringify(requestBody),
  };

  try {
      const response = await fetch(API_URL, options);
      if (!response.ok) {
          throw new Error(`Failed to fetch exchange rate: ${response.statusText}`);
      }
      const data = await response.json();
      return data[fromCurrency+'_'+toCurrency];
  } catch (error) {
      console.error(error);
      throw new Error('Error fetching the exchange rate');
  }
};
 export const currencyCodes = [
    '1inch',
    'aave',
    'ada',
    'aed',
    'afn',
    'algo',
    'all',
    'amd',
    'amp',
    'ang',
    'aoa',
    'ar',
    'ars',
    'atom',
    'aud',
    'avax',
    'awg',
    'axs',
    'azn',
    'bam',
    'bat',
    'bbd',
    'bch',
    'bdt',
    'bgn',
    'bhd',
    'bif',
    'bmd',
    'bnb',
    'bnd',
    'bob',
    'brl',
    'bsd',
    'bsv',
    'bsw',
    'btc',
    'btcb',
    'btg',
    'btn',
    'busd',
    'bwp',
    'byn',
    'byr',
    'bzd',
    'cad',
    'cake',
    'cdf',
    'celo',
    'chf',
    'chz',
    'clf',
    'clp',
    'cny',
    'comp',
    'cop',
    'crc',
    'cro',
    'crv',
    'cuc',
    'cup',
    'cve',
    'cvx',
    'czk',
    'dai',
    'dash',
    'dcr',
    'dfi',
    'djf',
    'dkk',
    'doge',
    'dop',
    'dot',
    'dzd',
    'egld',
    'egp',
    'enj',
    'eos',
    'ern',
    'etb',
    'etc',
    'eth',
    'eur',
    'fei',
    'fil',
    'fjd',
    'fkp',
    'flow',
    'frax',
    'ftm',
    'ftt',
    'gala',
    'gbp',
    'gel',
    'ggp',
    'ghs',
    'gip',
    'gmd',
    'gnf',
    'gno',
    'grt',
    'gt',
    'gtq',
    'gyd',
    'hbar',
    'hkd',
    'hnl',
    'hnt',
    'hot',
    'hrk',
    'ht',
    'htg',
    'huf',
    'icp',
    'idr',
    'ils',
    'imp',
    'inj',
    'inr',
    'iqd',
    'irr',
    'isk',
    'jep',
    'jmd',
    'jod',
    'jpy',
    'kava',
    'kcs',
    'kda',
    'kes',
    'kgs',
    'khr',
    'klay',
    'kmf',
    'knc',
    'kpw',
    'krw',
    'ksm',
    'kwd',
    'kyd',
    'kzt',
    'lak',
    'lbp',
    'leo',
    'link',
    'lkr',
    'lrc',
    'lrd',
    'lsl',
    'ltc',
    'ltl',
    'luna',
    'lvl',
    'lyd',
    'mad',
    'mana',
    'matic',
    'mdl',
    'mga',
    'mina',
    'miota',
    'mkd',
    'mkr',
    'mmk',
    'mnt',
    'mop',
    'mro',
    'mur',
    'mvr',
    'mwk',
    'mxn',
    'myr',
    'mzn',
    'nad',
    'near',
    'neo',
    'nexo',
    'ngn',
    'nio',
    'nok',
    'npr',
    'nzd',
    'okb',
    'omr',
    'one',
    'pab',
    'paxg',
    'pen',
    'pgk',
    'php',
    'pkr',
    'pln',
    'pyg',
    'qar',
    'qnt',
    'qtum',
    'ron',
    'rsd',
    'rub',
    'rune',
    'rwf',
    'sand',
    'sar',
    'sbd',
    'scr',
    'sdg',
    'sek',
    'sgd',
    'shib',
    'shp',
    'sle',
    'sll',
    'sol',
    'sos',
    'srd',
    'std',
    'stx',
    'svc',
    'syp',
    'szl',
    'thb',
    'theta',
    'tjs',
    'tmt',
    'tnd',
    'top',
    'trx',
    'try',
    'ttd',
    'ttt',
    'tusd',
    'twd',
    'tzs',
    'uah',
    'ugx',
    'uni',
    'usd',
    'usdc',
    'usdp',
    'usdt',
    'uyu',
    'uzs',
    'vef',
    'vet',
    'vnd',
    'vuv',
    'waves',
    'wbtc',
    'wemix',
    'wst',
    'xaf',
    'xag',
    'xau',
    'xcd',
    'xch',
    'xdc',
    'xdr',
    'xec',
    'xem',
    'xlm',
    'xmr',
    'xof',
    'xpf',
    'xrp',
    'xtz',
    'yer',
    'zar',
    'zec',
    'zil',
    'zmk',
    'zmw',
    'zwl'
  ];