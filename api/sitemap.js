/**
 * api/sitemap.js — TEKNOPERS · /sitemap-sorular.xml
 * /urun/*, /cozum/*, /soru/* ve hub sayfaları. Statik /sitemap.xml'e dokunmaz.
 */
'use strict';
var SORULAR = require('../sorular.js').SORULAR;
var COZUMLER = require('../cozumler.js').COZUMLER;
var URUNLER = require('../urunler.js').URUNLER;
var SITE = (process.env.SITE_URL || 'https://teknopers.com.tr').replace(/\/$/, '');

module.exports = function (req, res) {
  var bugun = new Date().toISOString().slice(0, 10);
  var g = [
    '<url><loc>'+SITE+'/urunler</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>',
    '<url><loc>'+SITE+'/cozumler</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>',
    '<url><loc>'+SITE+'/sorular</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>'
  ];
  URUNLER.forEach(function(u){ g.push('<url><loc>'+SITE+'/urun/'+u.slug+'</loc><lastmod>'+bugun+'</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>'); });
  COZUMLER.forEach(function(c){ g.push('<url><loc>'+SITE+'/cozum/'+c.slug+'</loc><lastmod>'+bugun+'</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>'); });
  SORULAR.forEach(function(s){ g.push('<url><loc>'+SITE+'/soru/'+s.slug+'</loc><lastmod>'+bugun+'</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>'); });
  var xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+g.join('')+'</urlset>';
  res.statusCode=200; res.setHeader('Content-Type','application/xml; charset=utf-8');
  res.setHeader('Cache-Control','public, s-maxage=3600, stale-while-revalidate=86400');
  return res.end(xml);
};
