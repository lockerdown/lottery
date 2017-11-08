<template>
    <div class="wrapper">
        <el-row style="margin-bottom:10px;">
            <el-col :span="4" :offset="8">
                <el-input v-model="input" placeholder="请输入总人数" @change="resetNumber">
                </el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" @click="start">开始</el-button>
                <el-button type="danger" @click="end">结束</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <div class="machine">
                    <img src="../assets/number.png" alt="">
                    <h1 class="text">{{getNumber}}</h1>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-button type="text" @click="dialogVisible = true" class="record">中奖记录</el-button>
            </el-col>
        </el-row>
        <el-dialog title="中奖名单如下" :visible.sync="dialogVisible" size="tiny">
            <ul class="info-dialog">
                <li v-for="item in numberLog">{{item}}</li>
            </ul>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input: '',
            getNumber: '000',
            nIntervId: 0,
            allNumber: [],
            numberLog: [],
            dialogVisible: false
        }
    },
    props: ['level'],
    mounted() {
        if (window.sessionStorage.getItem(this.level)) {
            this.numberLog = JSON.parse(window.sessionStorage.getItem(this.level));
        }
        if (window.sessionStorage.getItem('total')) {
            this.input = window.sessionStorage.getItem('total');
        }
        if (window.sessionStorage.getItem('allNumber')) {
            this.allNumber = JSON.parse(window.sessionStorage.getItem('allNumber'));
        }
    },
    methods: {
        resetNumber() {
            this.allNumber = [];
        },
        start() {
            clearInterval(this.nIntervId);
            if (!this.input) return;
            window.sessionStorage.setItem('total', this.input);
            this.calcNumber();
        },
        end() {
            clearInterval(this.nIntervId);
            this.numberLog.push(this.getNumber);
            this.allNumber.splice(this.allNumber.indexOf(Number(this.getNumber)), 1);
            window.sessionStorage.setItem('allNumber', JSON.stringify(this.allNumber));
            window.sessionStorage.setItem(this.level, JSON.stringify(this.numberLog));
        },
        calcNumber() {
            var self = this;
            if (!self.allNumber.length) {
                self.allNumber = Array.from(new Array(Number(self.input)), (val, index) => index + 1);
                window.sessionStorage.setItem('allNumber', JSON.stringify(this.allNumber));
            }
            self.nIntervId = setInterval(function() {
                console.log(self.input);
                self.getNumber = ('00' + self.allNumber[Math.floor(Math.random() * self.allNumber.length)]).slice(-3);
            }, 30);
        }
    },

}
</script>
<style>
.wrapper {
    max-width: 1200px;
    margin: 0 auto;
}

.center {
    text-align: center;
}

.machine {
    width: 100%;
    height: auto;
    text-align: center;
    position: relative;
}

.machine img {
    width: 503px;
}

.machine .text {
    position: absolute;
    top: 90px;
    left: 50%;
    margin-left: -170px;
    width: 300px;
    text-align: center;
    font-size: 110px;
    letter-spacing: 35px;
}

.info-dialog li,
.info-dialog {
    padding: 0;
    margin: 0;
}

.info-dialog li {
    list-style: none;
    font-size: 16px;
    color: #999;
    margin: 5px 0;
    display: block;
}

.record {
    color: #fff;
}
</style>
