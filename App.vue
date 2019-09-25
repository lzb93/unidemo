<script>
    export default {
        onLaunch: function() {
            console.log('App Launch');
        },
        onShow: function() {
            console.log('App Show');
        },
        onHide: function() {
            console.log('App Hide');
        }
    }
</script>

<style lang="scss">
    /*每个页面公共css */
    /* uni-app默认全局使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。如不了解flex布局，请参考http://www.w3.org/TR/css3-flexbox/。如不使用flex布局，请删除或注释掉本行。*/
    body,
    page {
        min-height: 100%;
        display: flex;
		background: #f8f8f8; //主背景色
    }	
    page {
        width: 100%;
        display: block;
		font-size: 24upx;	
    }
		
	page,view,image,input,button,label{
		box-sizing: border-box;
	}

    swan-template {
        width: 100%;
        min-height: 100%;
        display: flex;
    }
	/* lzb样式全局 */
	.row{
		display: flex;
		flex-wrap:wrap;
		position: relative;
	}
	.col-1{
	   width: 100%;	
	}
	.col-2{
	   width: 50%;	
	}
	.col-3{
	   width: 33.3333333%;	
	}
	.col-4{
	   width: 25%;	
	}
	.col-5{
	   width: 20%;	
	}
	.tc{
		text-align: center;
	}
	.tr{
		text-align: right;
	}
    .tl{
		text-align: left;
	}
	.fr{
		float: right;
	}
	.fl{
		float: left;
	}
	.bgfff{
		background: #ffffff;
	}
	.mt10{
		margin-top: 10upx;
	}
		
		
	
	/* 组件样式 */
	.h80{
		height: 80upx;
		line-height: 80upx;
	}
	
	// 图标
	.icon-right{
		background: url("static/img/backgo.png")no-repeat;
		padding-right:30upx; 
		background-size: 20upx auto;
		background-position:right;
		padding-right: 30upx  !important;
		width: 100%;
		height: 100%
	}
	.mizf{  //米字符
		font-size:36upx;
		// font-weight: 600;
		margin-left: 8upx;
		color: red;
	}
	
	.btn{
		background-color: #007aff;
		width: 90%;
		margin:10upx 5%;
		height: 80upx;
		padding: 0;
		line-height: 80upx;
		font-size: 26upx;
	}
		
		
	// 上图下字
	.iconwarp{
		padding: 15upx;
		font-size: 24upx;
		image{
			width: 100upx;
			height: 100upx;
		}
	 	
	}
	// 头部
	  .navtabs {
	    display: flex;
	    flex-direction: column;
		line-height: 88upx;
		text-align: center;
		width: 100%;
		font-size: 16px;
		font-weight: 600;
		background: rgb(15, 174, 255);
		color: #fff;
	}
	// ulist样式
	.ulist{
		height: 80upx;
		line-height: 80upx;
		background: #FFFFFF;
		border-bottom: 1px solid #f8f8f8;
		
		.icon{
			width: 12%;	
			padding-left: 20upx;
			image{
				margin-top: 10upx;
				width: 60upx;
				height: 60upx;
				
			}
		}
		.left{
			width: 48%;	
		}	
		.right{
			width: 40%;	
			padding-right: 20upx;
		}
		view{
			font-size: 28upx;
		}
		input{
			height: 60upx;
			line-height: 60upx;
		}
			
		
	}
	.headlist{
		.left{
			width: 48%;	
			display: flex
		}	
		line-height: 160upx;
		height: 160upx;
		.heads{
			width: 120upx;
			height: 120upx;
			margin-top: 20upx;
			image{
				width: 120upx;
				height: 120upx;
			}
		}
		.head-name{
			line-height: 60upx;
			margin:20upx;
			text{
				color: #ccc;
			}
			view{
				font-size: 28upx;
			}
				
				
			
		}
			
		
	}
	
    /* #endif */
    .content {
        display: flex;
        flex: 1;
        flex-direction: column;
        background-color: #f8f8f8;
        padding: 20upx;
    }

    .input-group {
        background-color: #ffffff;
        margin-top: 40upx;
        position: relative;
    }

    .input-group::before {
        position: absolute;
        right: 0;
        top: 0;
        left: 0;
        height: 1upx;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .input-group::after {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 1upx;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .input-row {
        display: flex;
        flex-direction: row;
        position: relative;
    }

    .input-row .title {
        width: 20%;
        height: 50upx;
        min-height: 50upx;
        padding: 15upx 0;
        padding-left: 30upx;
        line-height: 50upx;
    }

    .input-row.border::after {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 15upx;
        height: 1upx;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .btn-row {
        margin-top: 50upx;
        padding: 20upx;
    }

    button.primary {
        background-color: #0faeff;
    }
</style>
