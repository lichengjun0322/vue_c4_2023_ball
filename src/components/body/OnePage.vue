<template>
    <el-carousel :interval="5000" arrow="always">       
      <el-carousel-item v-for="item in 4" :key="item">
        <!-- <h3>{{ item }}</h3> -->
        <img src="../../../public/img/1.jpg">
      </el-carousel-item>
    </el-carousel>
  </template>
<!-- interval为自动切换时间 -->

<script>
export default {

}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  img {
    width:100%;
    height:100%;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
<!-- <template>

    <div class="aaa">
        <div class="scroll"> -->
            <!-- 图片展示
            <img src="../../../public/img/1.jpg" alt="scrollImage" class="img current">
            <img src="../../../public/img/2.jpg" alt="scrollImage" class="img">
            <img src="../../../public/img/3.jpg" alt="scrollImage" class="img">
            <img src="../../../public/img/4.jpg" alt="scrollImage" class="img">
            <img src="../../../public/img/5.jpg" alt="scrollImage" class="img">

            -->
            
            <!-- <div class="lf"></div>
            <div class="lr"></div> -->

            <!-- 小圆点展示 -->
           <!-- <div class="dots">
                <span class="square"></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>-->
<!--
<script>

document.querySelector("#app").addEventListener('load', function () {

    var leftArrow = this.document.querySelector('.lf');
    var rightArrow = this.document.querySelector('.lr');

    // 鼠标移动到左右箭头的位置更换图片 有灰色背景的图片
    leftArrow.addEventListener('mouseenter', function () {
        this.style.backgroundPosition = '0 0';
    });

    leftArrow.addEventListener('mouseleave', function () {
        this.style.backgroundPosition = '-83px 0';
    });

    rightArrow.addEventListener('mouseenter', function () {
        this.style.backgroundPosition = '-42px 0';
    });

    rightArrow.addEventListener('mouseleave', function () {
        this.style.backgroundPosition = '-123px 0';
    });

    // 获取图片 和 小点
    var imgs = this.document.querySelectorAll('.img');
    var dots = this.document.querySelector('.dots').querySelectorAll('span');

    // 给图片设置index 属性，好判断当前的图片是哪一张
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute('data-index', i);
    }

    // 获取当前图片 和 图片的index（数组下标）
    var current = this.document.querySelector('.current');
    var currentIndex = current.getAttribute('data-index');

    // 左箭头的点击事件，点击了就返回前一张图片 
    // 如果当前图片为第一张那么需要更换到最后一张图片也就是第四张
    leftArrow.addEventListener('click', function () {
        if (currentIndex > 0) {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            imgs[--currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        } else {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            currentIndex = 4;
            imgs[currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        }
    });

    // 点击右箭头下一张图片切换
    // 如果当前为第五张图片，那么切换回第一张图片
    rightArrow.addEventListener('click', changeImage);

    //var timer = this.setInterval(changeImage, 8000);

    function changeImage() {
        if (currentIndex < 4) {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            imgs[++currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        } else {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            currentIndex = 0;
            imgs[currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        }
    }

    // 小圆点的点击事件
    for (let k = 0; k < dots.length; k++) {
        dots[k].setAttribute('data-index', k);
        dots[k].addEventListener('click', function () {
            var index = this.getAttribute('data-index');
            if (index != currentIndex) {
                imgs[currentIndex].classList.remove('current');
                dots[currentIndex].classList.remove('square');
                imgs[index].classList.add('current');
                dots[index].classList.add('square');
                currentIndex = index;
            }

        })
    }

});


export default {

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
/* 这里是图片的宽度太大了  后期再改 */
.aaa {
    width: 100%;
    margin: 0 auto;
    text-align: center;                  
}

.aaa .scroll {
    position: relative;
    display: inline-block;
    width: 1226px;
    height: 460px;
}

.aaa .scroll .img {
    display: none;
    width: 100%;
}

.aaa .scroll .current {
    display: block;
}

.scroll .lf {
    position: absolute;
    top: 50%;
    left: 10px;
    background-image: url('../../../public/img/6.jpg');
    background-position: -83px 0;
    width: 41px;
    height: 69px;
    cursor: pointer;
    transform: translateY(-50%);
}

.scroll .lr {
    position: absolute;
    top: 50%;
    right: 10px;
    background-image: url('../../../public/img/7.jpg');
    background-position: -123px 0;
    width: 41px;
    height: 69px;
    cursor: pointer;
    transform: translateY(-50%);
}

.dots {
    position: absolute;
    bottom: 15px;
    right: 20px;
    width: 160px;
}

.dots>span {
    display: inline-block;
    box-sizing: border-box;
    width: 11px;
    height: 11px;
    border: 3px solid rgba(204, 204, 204, 0.2);
    border-radius: 15px;
    cursor: pointer;
}

.dots>span:not(:last-child) {
    margin-right: 5px;
}

/* 小圆点的颜色 */
.dots .square {
    background: #f46;
}
</style> -->