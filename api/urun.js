/**
 * api/urun.js — TEKNOPERS · /urun/:slug ve /urunler
 * Ürün hub sayfalarını (urunler.js) render eder; sektör çözümlerini ve soruları
 * çözerek bağlar. AI kullanmaz, deterministik.
 */
'use strict';
var URUNLER = require('../urunler.js').URUNLER;
var COZUMLER = require('../cozumler.js').COZUMLER;
var SORULAR = require('../sorular.js').SORULAR;
var motor = require('../lib/urun-motor.js');
var seo = require('../lib/seo-motor.js');

var HU={}; URUNLER.forEach(function(u){HU[u.slug]=u;});
var HC={}; COZUMLER.forEach(function(c){HC[c.slug]=c;});
var HS={}; SORULAR.forEach(function(s){HS[s.slug]=s;});

function temizSlug(s){ return String(s||'').toLowerCase().replace(/[^a-z0-9-]/g,'').replace(/-+/g,'-').replace(/^-|-$/g,'').slice(0,140); }

module.exports = function(req,res){
  var ham=(req.query&&req.query.slug)||'';
  if(ham==='__liste__'){
    res.statusCode=200; res.setHeader('Content-Type','text/html; charset=utf-8');
    res.setHeader('Cache-Control','public, s-maxage=86400, stale-while-revalidate=604800');
    return res.end(motor.urunListeUret(URUNLER));
  }
  var slug=temizSlug(ham);
  var o=HU[slug];
  if(!o){ res.statusCode=404; res.setHeader('Content-Type','text/html; charset=utf-8'); return res.end(seo.hataSayfasi('','Ürün bulunamadı')); }
  var sektorler=(o.kimlerIcin||[]).map(function(sl){var c=HC[sl];return c?{slug:c.slug,baslik:c.baslik,sektor:c.sektor}:null;}).filter(Boolean);
  var sorular=(o.sorular||[]).map(function(sl){var s=HS[sl];return s?{slug:s.slug,soru:s.soru}:null;}).filter(Boolean);
  res.statusCode=200; res.setHeader('Content-Type','text/html; charset=utf-8');
  res.setHeader('Cache-Control','public, s-maxage=86400, stale-while-revalidate=604800');
  return res.end(motor.urunSayfaUret(o,sektorler,sorular));
};
