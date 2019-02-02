<template>
<Layout>
<Header class="header">
    <Row>
        <i-col span="3" offset="1">
            <img src="..\..\static\logo1.png" alt="" class="logo">
        </i-col>
        <i-col span="14">
              <h1 style='font-weight: 400;font-size: 20px;margin-left:0'>保持进步,随时印象笔记</h1>
        </i-col>
        <i-col span="4" style='float: right'></i-col>
            <Row>
                <i-col span="8">

                </i-col>
            </Row>
    </Row>

</Header>
<Layout>
    <Sider></Sider>
    <Content></Content>
</Layout>
</Layout>
</template>

<style>
    .header{
        width: 100%;
        height: 60px;
        background: #fff;
        box-shadow: 0 1px rgba(0,0,0,.05);
        position: fixed;
        top:0;
        left:0;
        z-index:2
    }
    .logo{
        height:50px;
        margin-top:0;
    }
</style>