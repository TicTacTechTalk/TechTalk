const cheerio = require('cheerio')
const Promise = require('bluebird')
const request = require('request')

const scraperController = {
  getBuiltInLa: (req, res, next) => {
    return new Promise((resolve, reject) => {
      request('https://www.builtinla.com/events', (err, res, html) => {
        if (err) {
          reject(err);
        }

        const $ = cheerio.load(html);
        const array = []
        $('.container').each((i, e) => {
            array[i] = {}
            array[i]['name'] = $(e).find('.title').text()
            array[i]['organized_by'] = $(e).find('.organized-by').text()
            array[i]['data'] = $(e).find('.date').text().replace(/(^.{3})(\w+)/, '$1 $2')
        })
        
        resolve(array.slice(1))
      })
    })
  },

  getBuiltInNy: (req, res, next) => {
    return new Promise ((resolve, reject) => {
      request('https://www.builtinnyc.com/events', (err, res, html) => {
        if (err) {
          reject(err);
        }

        const $ = cheerio.load(html)
        const array = []
        $('.container').each((i, e) => {
          array[i] = {}
          array[i]['name'] = $(e).find('.title').text()
          array[i]['organized_by'] = $(e).find('.organized-by').text()
          array[i]['data'] = $(e).find('.date').text().replace(/(^.{3})(\w+)/, '$1 $2')
        })

        resolve(array.slice(1))
      })
    }) 
  }
}

module.exports = scraperController;