<template>
    <div>
        <el-form class="detail-form-content" ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px">
            <div class="chat-content">
                <div v-bind:key="item.id" v-for="item in dataList">
                    <div v-if="item.zhixunshiChatIssueText" class="left-content">
                        <el-alert class="text-content" :title="item.zhixunshiChatIssueText" :closable="false"
                                  type="success">
                            <img v-if="item.zhixunshiChatIssuePhoto" :src="$base.url+item.zhixunshiChatIssuePhoto"
                                 width="100" height="100">
                        </el-alert>
                        <el-alert class="text-content" :title="item.issueTime" :closable="false" type="success"></el-alert>
                    </div>
                    <div v-if="item.zhixunshiChatReplyText" class="right-content">
                        <el-alert class="text-content" :title="item.zhixunshiChatReplyText" :closable="false"
                                  type="warning">
                            <img v-if="item.zhixunshiChatReplyPhoto" :src="$base.url+item.zhixunshiChatReplyPhoto"
                                 width="100" height="100">
                        </el-alert>
                        <el-alert class="text-content" :title="item.replyTime" :closable="false" type="warning"></el-alert>
                    </div>
                    <div class="clear-float"></div>
                </div>
            </div>
            <div class="clear-float"></div>
            <el-form-item label="回复" prop="zhixunshiChatReplyText">
                <el-input v-model="ruleForm.zhixunshiChatReplyText" placeholder="回复" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">回复</el-button>
                <el-button @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                id: "",
                ruleForm: {},
                dataList: [],
                chatDate: {},
                rules: {
                    zhixunshiChatReplyText: [{
                        required: true,
                        message: "回复内容不能为空",
                        trigger: "blur"
                    }]
                },
                inter: null
            };
        },
        props: ["parent"],
        methods: {
            // 初始化
            init(row) {
                this.chatDate = row
                this.id = row.yonghuId;
                var _this = this;
                var inter = setInterval(function() {
                    _this.getList();
                }, 5000)
                this.inter = inter;
            },

            getList() {
                let params = {
                    yonghuId: this.id,
                    order:'asc'
                }
                this.$http({
                    url: 'zhixunshiChat/page',
                    method: "get",
                    params: params
                }).then(({
                             data
                         }) => {
                    if (data && data.code === 0) {
                        this.ruleForm.yonghuId = this.id;
                        this.dataList = data.data.list;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            //图片
            zhixunshiChatReplyPhotoUploadChange(fileUrls) {
                this.ruleForm.zhixunshiChatReplyPhoto = fileUrls;
                this.addEditUploadStyleChange()
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    this.ruleForm.replyTime = this.getCurDateTime()
                    this.ruleForm.zhixunshiChatTypes = 2
                    this.ruleForm.replyTime = new Date().getTime()
                    if (valid) {
                        this.$http({
                            url: 'zhixunshiChat/save',
                            method: "post",
                            data: this.ruleForm
                        }).then(({
                                     data
                                 }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.getList();
                                        this.ruleForm.zhixunshiChatReplyText = "";
                                        this.ruleForm.zhixunshiChatReplyPhoto = "";

                                        this.chatDate.zhuangtaiTypes = 2
                                        this.$http({
                                            url: 'zhixunshiChat/update',
                                            method: "post",
                                            data: this.chatDate
                                        }).then(({
                                                     data
                                                 }) => {});
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 返回
            back() {
                this.parent.showFlag = false;
                this.parent.getDataList();
                if (this.inter) {
                    clearInterval(this.inter);
                }
            }
        }
    };
</script><style lang="scss">
    .chat-content {
        margin-left: 80px;
        padding-bottom: 60px;
        width: 500px;
        margin-bottom: 30px;
        max-height: 300px;
        height: 300px;
        overflow-y: scroll;
        border: 1px solid #eeeeee;

    .left-content {
        float: left;
        margin-bottom: 10px;
        padding: 10px;
    }

    .right-content {
        float: right;
        margin-bottom: 10px;
        padding: 10px;
    }
    }

    .clear-float {
        clear: both;
    }
</style>

