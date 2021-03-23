<template>
  <div class="category">
    <h3>分类</h3>
    <div class="wrapper">
      <ul>      
        <li>我是你大爷1</li>
        <li>我是你大爷2</li>
        <li>我是你大爷3</li>
        <li>我是你大爷4</li>
        <li>我是你大爷5</li>
        <li>我是你大爷6</li>
        <li>我是你大爷7</li>
        <li>我是你大爷8</li>
        <li>我是你大爷9</li>
        <li>我是你大爷10</li>
        <li>我是你大爷11</li>
        <li>我是你大爷12</li>
        <li>我是你大爷13</li>
        <li>我是你大爷14</li>
        <li>我是你大爷15</li>
        <li>我是你大爷16</li>
        <li>我是你大爷17</li>
        <li>我是你大爷18</li>
        <li>我是你大爷19</li>
        <li>我是你大爷20</li>
        <li>我是你大爷21</li>
        <li>我是你大爷22</li>
        <li>我是你大爷23</li>
        <li>我是你大爷24</li>
        <li>我是你大爷25</li>
        <li>我是你大爷26</li>
        <li>我是你大爷27</li>
        <li>我是你大爷28</li>
        <li>我是你大爷29</li>
        <li>我是你大爷30</li>
        <li>我是你大爷31</li>
        <li>我是你大爷32</li>
        <li>我是你大爷33</li>
        <li>我是你大爷34</li>
        <li>我是你大爷35</li>
        <li>我是你大爷36</li>
        <li>我是你大爷37</li>
        <li>我是你大爷38</li>
        <li>我是你大爷39</li>
        <li>我是你大爷40</li>
        <li>我是你大爷41</li>
        <li>我是你大爷42</li>
        <li>我是你大爷43</li>
        <li>我是你大爷44</li>
        <li>我是你大爷45</li>
        <li>我是你大爷46</li>
        <li>我是你大爷47</li>
        <li>我是你大爷48</li>
        <li>我是你大爷49</li>
        <li>我是你大爷50</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "category",
  data(){
    return{
      scroll:null
    }
  },
  mounted() {
    this.scroll= new BScroll(document.querySelector('.wrapper') ,{
      probeType:3,   //随着见面的滑动位置，监听坐标
      click:false,   //在用BS管理的时候，里面的事件是否可以监听的到
      pullUpLoad:true
    }),
    this.scroll.on('scroll',(position)=>{
      // console.log(position.y);
    }),
    this.scroll.on('pullingUp',()=>{
      console.log('大爷，您已经划拉到底了，别再划拉了，轻点啊，疼');

      setTimeout(()=>{
        this.scroll.finishPullUp()
      },2000)
      
    })

  },  
}
</script>


<style scoped>
.wrapper {
  height: 300px;
  background-color: cadetblue;
  overflow: hidden;
}
</style>