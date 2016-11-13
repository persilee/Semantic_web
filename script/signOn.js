$(function(){
	$('.ui.shape ').on('click','.side.active .signOn .column .ui.header.icon.on',function(){
		$('.shape')
		.shape('set next side', '.first.side')
		.shape('flip over');
	})
	$('.ui.shape ').on('click','.side.active .signOn .column .ui.header.icon.up',function(){
		console.log('aaa');
		$('.shape')
		.shape('set next side', '.second.side')
		.shape('flip down');
	})
	$('.ui.shape ').on('click','.side.active .signOn .column .ui.header.icon.other',function(){
		console.log('aaa');
		$('.shape')
		.shape('set next side', '.third.side')
		.shape('flip back');
	})







});
