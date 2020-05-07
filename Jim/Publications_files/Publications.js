// Created by iWeb 3.0.4 local-build-20190917

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,140),url:'Publications_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Publications_files/stroke_1.png'},{rect:new IWRect(2,-2,91,4),url:'Publications_files/stroke_2.png'},{rect:new IWRect(93,-2,4,4),url:'Publications_files/stroke_3.png'},{rect:new IWRect(93,2,4,140),url:'Publications_files/stroke_4.png'},{rect:new IWRect(93,142,4,5),url:'Publications_files/stroke_5.png'},{rect:new IWRect(2,142,91,5),url:'Publications_files/stroke_6.png'},{rect:new IWRect(-2,142,4,5),url:'Publications_files/stroke_7.png'}],new IWSize(95,144))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Publications_files/PublicationsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
