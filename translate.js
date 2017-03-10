var Translate = (function(){
	refreshTrans = function(){
		var source = $('#input_text').val();
		var type = $('#target').val();
		var ggurl="https://translate.google.com/#auto/"+type+"/"+source;
		var bdurl="https://fanyi.baidu.com/#auto/"+type+"/"+source;
		$('#ggt').attr('src', ggurl);
		$('#bdt').attr('src', bdurl);
	};
	
	bindEvent = function(){
		$('#input_text').on('blur',function(){
			refreshTrans();
		});
		
		$('#target').on('change',function(){
			refreshTrans();
		});
	};
	
	return {
		init:function(){
			bindEvent();
		}
	}
})();

jQuery(document).ready(function () {
    Translate.init();
});