// Created by iWeb 3.0.4 local-build-20190815

function createMediaStream_id3()
{return IWCreatePhotocast("http://web.science.mq.edu.au/%7Ejdenier/Jim/Honours_Projects_files/rss.xml",false);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://web.science.mq.edu.au/%7Ejdenier/Jim',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://web.science.mq.edu.au/%7Ejdenier/Jim',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(3,new IWSize(182,182),new IWSize(182,18),new IWSize(218,215),27,27,0,new IWSize(18,18)),new IWPhotoFrame([IWCreateImage('Honours_Projects_files/Hardcover_bevel_01.png'),IWCreateImage('Honours_Projects_files/Hardcover_bevel_02.png'),IWCreateImage('Honours_Projects_files/Hardcover_bevel_03.png'),IWCreateImage('Honours_Projects_files/Hardcover_bevel_06.png'),IWCreateImage('Honours_Projects_files/Hardcover_bevel_09.png'),IWCreateImage('Honours_Projects_files/Hardcover_bevel_08.png'),IWCreateImage('Honours_Projects_files/Hardcover_bevel_07.png'),IWCreateImage('Honours_Projects_files/Hardcover_bevel_04.png')],null,0,0.500000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,17.000000,403.000000,295.000000,403.000000,295.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,null,'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Honours_Projects_files/Honours_ProjectsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
