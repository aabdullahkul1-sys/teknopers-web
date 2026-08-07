/**
 * api/sitemap.js — TEKNOPERS · /sitemap-sorular.xml
 * Yalnızca /soru/* sayfalarını listeler. Mevcut statik /sitemap.xml'e DOKUNMAZ;
 * robots.txt'e ikinci sitemap olarak eklenir (Google birden çok sitemap destekler).
 */
'use strict';
var SORULAR = require('../sorular.js').SORULAR;
var SITE = (process.env.SITE_URL || 'https://teknopers.com.tr').replace(/\/$/, '');

module.exports = function (req, res) {
  var bugun = new Date().toISOString().slice(0, 10);
  var girdi = ['<url><loc>' + SITE + '/sorular</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>']
    .concat(SORULAR.map(function (s) {
      return '<url><loc>' + SITE + '/soru/' + s.slug + '</loc><lastmod>' + bugun + '</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>';
    })).join('');
  var xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + girdi + '</urlset>';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  return res.end(xml);
};
