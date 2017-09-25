<template>
<div>
    <h1>水平排列的布局</h1>
    <Row>
        <Col span="12">col-12</Col>
        <Col span="12">col-12</Col>
    </Row>
    <br>
    <Row>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
    </Row>
    <br>
    <Row>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
    </Row>
        <h1>区块间隔 #</h1>

    <Row :gutter="16">
        <Col span="6">
            <div>col-6</div>
        </Col>
        <Col span="6">
            <div>col-6</div>
        </Col>
        <Col span="6">
            <div>col-6</div>
        </Col>
        <Col span="6">
            <div>col-6</div>
        </Col>
    </Row>
            <h1>栅格顺序(Flex) #</h1>
        <Row type="flex">
            <Col span="6" order="4">1 | order-4</Col>
            <Col span="6" order="3">2 | order-3</Col>
            <Col span="6" order="2">3 | order-2</Col>
            <Col span="6" order="1">4 | order-1</Col>
        </Row>
        <h1>左右偏移 </h1>
         <Row>
            <Col span="8">col-8</Col>
            <Col span="8" offset="8">col-8 | offset-8</Col>
        </Row>
        <br>
        <Row>
            <Col span="6" offset="8">col-6 | offset-8</Col>
            <Col span="6" offset="4">col-6 | offset-4</Col>
        </Row>
        <br>
        <Row>
            <Col span="12" offset="8">col-12 | offset-8</Col>
        </Row>
        <h1>Flex布局</h1>
        <h3>子元素向左排列</h3>
        <Row type="flex" justify="start" class="code-row-bg">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <h3>子元素向右排列</h3>
        <Row type="flex" justify="end" class="code-row-bg">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <h3>子元素居中排列</h3>
        <Row type="flex" justify="center" class="code-row-bg">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <h3>子元素等宽排列</h3>
        <Row type="flex" justify="space-between" class="code-row-bg">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <h3>子元素分散排列</h3>
        <Row type="flex" justify="space-around" class="code-row-bg">
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
        <h1>Flex对齐</h1>
        <h3>顶部对齐</h3>
        <Row type="flex" justify="center" align="top" class="code-row-bg">
            <Col span="4"><p style="height: 80px">col-4</p></Col>
            <Col span="4"><p style="height: 30px">col-4</p></Col>
            <Col span="4"><p style="height: 100px">col-4</p></Col>
            <Col span="4"><p style="height: 60px">col-4</p></Col>
        </Row>
        <h3>底部对齐</h3>
        <Row type="flex" justify="center" align="bottom" class="code-row-bg">
            <Col span="4"><p style="height: 80px">col-4</p></Col>
            <Col span="4"><p style="height: 30px">col-4</p></Col>
            <Col span="4"><p style="height: 100px">col-4</p></Col>
            <Col span="4"><p style="height: 60px">col-4</p></Col>
        </Row>
        <h3>居中对齐</h3>
        <Row type="flex" justify="center" align="middle" class="code-row-bg">
            <Col span="4"><p style="height: 80px">col-4</p></Col>
            <Col span="4"><p style="height: 30px">col-4</p></Col>
            <Col span="4"><p style="height: 100px">col-4</p></Col>
            <Col span="4"><p style="height: 60px">col-4</p></Col>
        </Row>
        <h1>响应式布局</h1>
        <Row>
            <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
            <Col :xs="20" :sm="16" :md="12" :lg="8">Col</Col>
            <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
        </Row>
        <h1>其它属性的响应式</h1>
         <Row>
            <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
            <Col :xs="{ span: 9, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
            <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
        </Row>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="">
.ivu-col:nth-child(odd) {
    color: #fff;
    padding: 10px 0;
    text-align: center;
    background: rgba(0,153,229,.3);
    }
    .ivu-col:nth-child(even) {
    color: #fff;
    padding: 10px 0;
    text-align: center;
    background: rgba(0,153,229,.9);}
</style>