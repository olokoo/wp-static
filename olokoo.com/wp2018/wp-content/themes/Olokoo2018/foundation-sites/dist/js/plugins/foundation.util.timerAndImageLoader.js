'use strict';!function($){function Timer(elem,options,cb){var _this=this,duration=options.duration,nameSpace=Object.keys(elem.data())[0]||'timer',remain=-1,start,timer;this.isPaused=false;this.restart=function(){remain=-1;clearTimeout(timer);this.start();};this.start=function(){this.isPaused=false;clearTimeout(timer);remain=remain<=0?duration:remain;elem.data('paused',false);start=Date.now();timer=setTimeout(function(){if(options.infinite){_this.restart();}
if(cb&&typeof cb==='function'){cb();}},remain);elem.trigger('timerstart.zf.'+nameSpace);};this.pause=function(){this.isPaused=true;clearTimeout(timer);elem.data('paused',true);var end=Date.now();remain=remain-(end-start);elem.trigger('timerpaused.zf.'+nameSpace);};}
function onImagesLoaded(images,callback){var self=this,unloaded=images.length;if(unloaded===0){callback();}
images.each(function(){if(this.complete||this.readyState===4||this.readyState==='complete'){singleImageLoaded();}
else{var src=$(this).attr('src');$(this).attr('src',src+(src.indexOf('?')>=0?'&':'?')+new Date().getTime());$(this).one('load',function(){singleImageLoaded();});}});function singleImageLoaded(){unloaded--;if(unloaded===0){callback();}}}
Foundation.Timer=Timer;Foundation.onImagesLoaded=onImagesLoaded;}(jQuery);