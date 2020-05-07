// Created by iWeb 3.0.4 local-build-20160111

function createMediaStream_id4()
{return IWCreatePhotocast("http://web.science.mq.edu.au/%7Ejdenier/Jim/Albums/Pages/Liams_First_Day_at_Kindy_files/rss.xml",false);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://web.science.mq.edu.au/%7Ejdenier/Jim/Albums/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://web.science.mq.edu.au/%7Ejdenier/Jim/Albums/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(3,new IWSize(183,183),new IWSize(183,35),new IWSize(218,233),27,27,0,new IWSize(39,40)),new IWPhotoFrame([IWCreateImage('Liams_First_Day_at_Kindy_files/Vintage_Inset_01.png'),IWCreateImage('Liams_First_Day_at_Kindy_files/Vintage_Inset_02.png'),IWCreateImage('Liams_First_Day_at_Kindy_files/Vintage_Inset_03.png'),IWCreateImage('Liams_First_Day_at_Kindy_files/Vintage_Inset_06.png'),IWCreateImage('Liams_First_Day_at_Kindy_files/Vintage_Inset_09.png'),IWCreateImage('Liams_First_Day_at_Kindy_files/Vintage_Inset_08.png'),IWCreateImage('Liams_First_Day_at_Kindy_files/Vintage_Inset_07.png'),IWCreateImage('Liams_First_Day_at_Kindy_files/Vintage_Inset_04.png')],null,2,0.700000,12.000000,13.000000,12.000000,12.000000,40.000000,41.000000,41.000000,42.000000,417.000000,310.000000,417.000000,310.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Liams_First_Day_at_Kindy_files/Liams_First_Day_at_KindyMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id4()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
