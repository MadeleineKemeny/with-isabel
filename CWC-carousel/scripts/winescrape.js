// winescrape.js
// Scrapes wine.com website

const axios = require("axios");
const cheerio = require("cheerio");


async function scrapeAll() {
    var allWines = [];
    var colors = ["red", "white", "rose", "sparkling"];
    for (var c = 0; c < colors.length; c++) {
        var color = colors[c];
        for (var i = 1; i <= 4; i++) {
            var wines = await scrapePage(color, i);
            allWines.push.apply(allWines, wines);
        }
    }
    return allWines;
}

var urlsByColor = {
    red: "https://www.wine.com/list/wine/california/red-wine/7155-106870-124/",
    white: "https://www.wine.com/list/wine/california/white-wine/7155-106870-125/",
    rose: "https://www.wine.com/list/wine/california/rose-wine/7155-106870-126/",
    sparkling: "https://www.wine.com/list/wine/california/champagne-and-sparkling/7155-106870-123/"
}

function scrapePage(color, pageNumber) {

    console.log("Scraping wine.com for " + color + " wines,  page " + pageNumber + "...");
    var url = urlsByColor[color] + pageNumber;
    return axios.get(url)
        .then((response) => {
            console.log("Received " + response.status + " " + response.statusText);
            const html = response.data;

            // Parse html using Cheerio library
            const $ = cheerio.load(html, { xmlMode: false });

            const scriptContents = $('script[name="sharify"]').get(0).children[0].data;
            const startIndex = scriptContents.indexOf('{');
            const stopIndex = scriptContents.lastIndexOf('}');
            const jsonString = scriptContents.substring(startIndex, stopIndex + 1);
            const json = JSON.parse(jsonString);
            const models = json.model.collection.models;

            // Holds the array of scraped wines
            var scrapedWines = [];

            for (var i = 0; i < models.length; i++) {
                var wine = models[i];
                // console.log("Name: " + wine.catalogModel.fullName);
                // console.log("Region: " + wine.catalogModel.region);
                // console.log("Nested region: " + wine.catalogModel.nestedRegionName);
                // console.log("Varietal: " + wine.catalogModel.varietal.shortDesc);
                // console.log("Alcohol %: " + wine.catalogModel.alcoholPercent);
                // console.log("Vintage: " + wine.catalogModel.vintage);
                // console.log("Volume: " + wine.catalogModel.volume);
                // console.log("Price: " + wine.catalogModel.regularPrice.whole);
                // console.log("Vineyard: " + wine.catalogModel.vineyard.fullName);
                // console.log("Stock: " + wine.catalogModel.stock);
                // console.log(wine.catalogModel.longDescription);
                // console.log("---");

                scrapedWines.push({
                    name: wine.catalogModel.fullName,
                    region: wine.catalogModel.region,
                    nested_region: wine.catalogModel.nestedRegionName,
                    varietal: wine.catalogModel.varietal.shortDesc,
                    alcohol_percent: wine.catalogModel.alcoholPercent ? parseInt(wine.catalogModel.alcoholPercent) : null,
                    vintage: wine.catalogModel.vintage,
                    price: parseInt(wine.catalogModel.regularPrice.whole) + parseInt(wine.catalogModel.regularPrice.fractional)/100,
                    vineyard: {
                        id: wine.catalogModel.vineyard.id,
                        fullName: wine.catalogModel.vineyard.fullName,
                        longDescription: wine.catalogModel.vineyard.longDescription,
                        region: wine.catalogModel.vineyard.region,
                        imageUrl: wine.catalogModel.vineyard.imageUrl,
                        geoLat:wine.catalogModel.vineyard.geoLat,
                        geoLong: wine.catalogModel.vineyard.geoLong
                    },
                    shortDescription: wine.catalogModel.shortDescription,
                    longDescription: wine.catalogModel.longDescription,
                    stock: wine.catalogModel.stock,
                    pictures: wine.productMediaModel.medias,
                    color: color,
                    volume: wine.catalogModel.volume
                });
            }

            return scrapedWines;

        });
};

module.exports = {
    scrapeAll: scrapeAll
};
