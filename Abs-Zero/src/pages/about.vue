<template>
  <div class="page" id="page" @click="clickTips">
      <div class="wrapper">
        <el-row>
            <el-col :xs="24" :sm="4" :md="18" :lg="18" :xl="18">
              <div class="main">
                <p class="title">About</p>
                <!-- <list_article :items="items" type="archives"></list_article> -->
                <div class="card">
                  <p class="card-title" id="anchor-about">关于我</p>
                  <p class="txt">大学生一枚，现在就读于厦门大学（马来西亚分校）</p>
                  <p class="txt">暂时在弄前端和Node js，之前学过一些后端技术，Java，SSM框架，MySQL,Python爬虫等等一些都有涉猎，但......好像都不是很精通</p>
                  <p class="txt">希望我越变越强，逐步迈向人生巅峰！！！</p>
                </div>
                <div class="card">
                  <p class="card-title" id="anchor-contact">联系我</p>
                  <ul>
                    <li>个人主页：<a href="http://47.107.82.70" target="_blank">Absolute-Zero</a>（暂时没域名，有点中二的主页名）</li>
                    <li>Github：<a href="https://github.com/liao-zihao" target="_blank">liao-zihao</a></li>
                    <li>网易云：<a href="https://music.163.com/#/user/home?id=115022895" target="_blank">流泪的戏子</a></li>
                    <li>Email： <a href="mailto:342060286@qq.com">1737540084@qq.com</a></li>
                    <li>QQ：1737540084</li>
                  </ul>
                </div>
              </div>
            </el-col>
            <el-col :xs="0" :sm="4" :md="6" :lg="6" :xl="6">
              <div class="aside">
                <p class="title">Content</p>
                <!-- <list_content :items="items"></list_content> -->
                  <div class="content">
                    <ul>
                      <li><a href="javascript:;" class="title" @click="anchor('about')">关于我</a></li>
                      <li><a href="javascript:;" class="title" @click="anchor('contact')">联系我</a></li>
                    </ul>
                  </div>
              </div>
            </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
import { anchor } from "../../static/js/public.js";

const arr = [
  "富强",
  "民主",
  "文明",
  "和谐",
  "自由",
  "平等",
  "公正",
  "法治",
  "爱国",
  "敬业",
  "诚信",
  "友善"
];
const setStyle = (obj, json) => {
  for (var i in json) {
    obj.style[i] = json[i];
  }
};

let index = 0;

export default {
  mixins: [anchor],
  data() {
    return {
      // items:[]
    };
  },
  components: {},
  created() {
    // this.$http.get('/api/goods').then((data)=>{
    //   this.items=data.body.data;
    // })
  },
  methods: {
    clickTips: function(e) {
      if (index >= arr.length) {
        index = 0;
      }
      let newA = document.createElement("a");
      newA.className = "click_tips";
      let styles = {
        left: `${e.pageX}px`,
        top: `${e.pageY - 20}px`
      };
      newA.innerHTML = arr[index];
      setStyle(newA, styles);
      document.getElementById("page").appendChild(newA);
      index++;
      newA.addEventListener("animationend", () => {
        document.getElementById("page").removeChild(newA);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  background: #f8f8fd;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
  margin: 0 10px;
  padding: 10px;
  > .title {
    font-size: 18px;
    padding: 5px 0;
  }
  .card {
    border-top: 1px solid #eee;
    .card-title {
      margin: 20px 0 10px;
      font-size: 26px;
    }
    .txt {
      font-size: 16px;
      margin: 0 20px 10px;
    }
    > ul {
      padding: 20px 30px;
      > li {
        padding: 10px 0;
      }
    }
    a {
      color: #4d6dad;
      &:hover {
        color: #223253;
        background-color: #f4efeb;
      }
    }
    .update {
      padding: 20px;
      h3 {
        margin: 0;
      }
      > p {
        margin: 10px;
      }
      > ul {
        padding: 0 30px;
      }
    }
    .row-link {
      padding: 20px;
      .link {
        margin: 5px;
        &:hover {
          color: #0085a1;
        }
      }
    }
  }
}
.aside {
  background: #f8f8fd;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
  > .title {
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid #ddd;
    padding: 10px 15px;
  }
  .content {
    padding: 15px 30px;
    li {
      list-style-type: none;
      padding: 5px 16px;
      position: relative;
      &::before {
        content: "";
        width: 6px;
        height: 6px;
        background: #333;
        position: absolute;
        left: 0;
        top: 13px;
        border-radius: 50%;
      }
      > a {
        color: #4d6dad;
        &:hover {
          color: #223253;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  //pc
  .main {
    margin: 0 20px;
    padding: 20px;
    > .title {
      font-size: 30px;
    }
  }
}
</style>
<style>
/* click_tips */
.click_tips {
  color: red;
  position: absolute;
  transition: all 0.3s;
  animation: click_translateTop 1s;
}

@keyframes click_translateTop {
  0%,
  100% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateY(-30px);
  }
}
</style>

