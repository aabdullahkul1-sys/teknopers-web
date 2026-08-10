/**
 * api/cozum.js — TEKNOPERS · /cozum/:slug ve /cozumler
 * Elle yazılmış pazarlama içeriğini (cozumler.js) render eder. AI kullanmaz;
 * deterministik, hızlı ve güvenli. İçerik değişince sadece cozumler.js düzenlenir.
 */
'use strict';
var COZUMLER = require('../cozumler.js').COZUMLER;
var SORULAR = require('../sorular.js').SORULAR;
var URUNLER = require('../urunler.js').URUNLER;
var motor = require('../lib/cozum-motor.js');
var seo = require('../lib/seo-motor.js');

var HC = {}; COZUMLER.forEach(function(c){ HC[c.slug] = c; });
var HS = {}; SORULAR.forEach(function(s){ HS[s.slug] = s; });
// hangi ürün bu çözümü kapsıyor? (cozum slug -> ürün)
var COZUM_URUN = {};
URUNLER.forEach(function(u){ (u.kimlerIcin||[]).forEach(function(cs){ if(!COZUM_URUN[cs]) COZUM_URUN[cs] = { slug:u.slug, ad:u.ad }; }); });

function temizSlug(s){ return String(s||'').toLowerCase().replace(/[^a-z0-9-]/g,'').replace(/-+/g,'-').replace(/^-|-$/g,'').slice(0,140); }

module.exports = function(req, res){
  var ham = (req.query && req.query.slug) || '';
  if (ham === '__liste__') {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.setHeader('Cache-Control','public, s-maxage=86400, stale-while-revalidate=604800');
    return res.end(motor.cozumListeUret(COZUMLER));
  }
  var slug = temizSlug(ham);
  var o = HC[slug];
  if (!o) {
    res.statusCode = 404;
    res.setHeader('Content-Type','text/html; charset=utf-8');
    return res.end(seo.hataSayfasi('', 'Çözüm bulunamadı'));
  }
  var ilgiliSorular = (o.ilgiliSorular||[]).map(function(sl){ var s=HS[sl]; return s?{slug:s.slug,soru:s.soru}:null; }).filter(Boolean);
  var ilgiliCozumler = (o.ilgiliCozumler||[]).map(function(sl){ var c=HC[sl]; return c?{slug:c.slug,baslik:c.baslik}:null; }).filter(Boolean);
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html; charset=utf-8');
  res.setHeader('Cache-Control','public, s-maxage=86400, stale-while-revalidate=604800');
  return res.end(motor.cozumSayfaUret(o, ilgiliSorular, ilgiliCozumler, COZUM_URUN[slug] || null));
};
