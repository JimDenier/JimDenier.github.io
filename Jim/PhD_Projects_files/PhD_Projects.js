// Created by iWeb 3.0.4 local-build-20190917

function createMediaStream_id3()
{return IWCreatePhotocast("http://web.science.mq.edu.au/%7Ejdenier/Jim/PhD_Projects_files/rss.xml",false);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://web.science.mq.edu.au/%7Ejdenier/Jim',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://web.science.mq.edu.au/%7Ejdenier/Jim',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(3,new IWSize(164,164),new IWSize(164,35),new IWSize(196,214),27,27,0,new IWSize(18,29)),new IWPhotoFrame([IWCreateImage('PhD_Projects_files/Pushpin_01.jpg'),IWCreateImage('PhD_Projects_files/Pushpin_02.jpg'),IWCreateImage('PhD_Projects_files/Pushpin_03.jpg'),IWCreateImage('PhD_Projects_files/Pushpin_06.jpg'),IWCreateImage('PhD_Projects_files/Pushpin_09.jpg'),IWCreateImage('PhD_Projects_files/Pushpin_02_1.jpg'),IWCreateImage('PhD_Projects_files/Pushpin_03_1.jpg'),IWCreateImage('PhD_Projects_files/Pushpin_04.jpg')],null,1,0.450000,0.000000,0.000000,0.000000,0.000000,18.000000,18.000000,18.000000,18.000000,298.000000,472.000000,298.000000,472.000000,'PhD_Projects_files/bullet_pp_3.png',new IWPoint(0.500000,-10),new IWSize(45,65),0.100000),imageStream,range,null,null,1.000000,null,'Media/slideshow.html','widget1','widget2','widget3')});}
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
loadMozillaCSS('PhD_Projects_files/PhD_ProjectsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
