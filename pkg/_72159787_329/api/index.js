var e = require("./config.js"), t = require("./request.js"), r = require("./../common/js/util.js");

module.exports = {
    Login: function(t) {
        return new Promise(function(t, u) {
            wx.login({
                success: function(a) {
                    if (a.code) {
                        var n = {
                            code: a.code
                        }, i = (0, r.getPublicParam)(n);
                        wx.request({
                            url: e.baseUrl + "/v1/auth/loginRequest",
                            data: i,
                            method: "POST",
                            success: function(e) {
                                if ((0, r.log)("-----\x3e", e), e && 2e5 == e.data.code) {
                                    (0, r.log)("loginRequest成功"), wx.setStorageSync("sessionId", e.data.data.sessionId);
                                    var a = e.data.data.sessionId;
                                    t(a);
                                } else u(), (0, r.alert)("登录失败", "", "./../common/images/warning.png");
                            },
                            fail: function(e) {
                                u(), (0, r.alert)("请求超时", "", "./../common/images/warning.png");
                            }
                        });
                    } else console.log("登录失败！" + a.errMsg), (0, r.alert)("登录失败", "", "./../common/images/warning.png");
                }
            });
        });
    },
    DecrypUserInfo: function(e) {
        return (0, t.request)({
            url: "/v1/auth/decryptUserInfo",
            data: e
        });
    },
    GetUid: function(e) {
        return (0, t.request)({
            url: "/v1/auth/getUid",
            data: e
        });
    },
    GetHomeUserInfo: function(e) {
        return (0, t.request)({
            url: "/v1/baseUser/getHomeUserInfo",
            data: e
        });
    },
    UserInfo: function(e) {
        return (0, t.request)({
            url: "/v1/baseUser/getUserInfo",
            data: e
        });
    },
    GetMyData: function(e) {
        return (0, t.request)({
            url: "/v1/baseUser/myData",
            data: e
        });
    },
    SavePhone: function(e) {
        return (0, t.request)({
            url: "/v1/baseUser/savePhone",
            data: e
        });
    },
    SaveUserInfo: function(e) {
        return (0, t.request)({
            url: "/v1/baseUser/saveUserInfo",
            data: e
        });
    },
    PhoneCheck: function(e) {
        return (0, t.request)({
            url: "/v1/baseUser/sendBindMobileCode",
            data: e
        });
    },
    Attention: function(e) {
        return (0, t.request)({
            url: "/v1/userFollower/getMyFollower",
            data: e
        });
    },
    DoAttention: function(e) {
        return (0, t.request)({
            url: "/v1/userFollower/doFollower",
            data: e
        });
    },
    BgMusicType: function(e) {
        return (0, t.request)({
            url: "/v1/music/queryBgMusicType",
            data: e
        });
    },
    BgMusicList: function(e) {
        return (0, t.request)({
            url: "/v1/music/queryBgMusicsByType",
            data: e
        });
    },
    MyHotOpus: function(e) {
        return (0, t.request)({
            url: "/v1/plan/myHotOpus",
            data: e
        });
    },
    NearDevice: function(e) {
        return (0, t.request)({
            url: "/v1/plan/nearDevice",
            data: e
        });
    },
    GetNewOpusRank: function(e) {
        return (0, t.request)({
            url: "/v1/plan/newOpusVoteRank",
            data: e
        });
    },
    SearchActivityOpus: function(e) {
        return (0, t.request)({
            url: "/v1/plan/opusSearch",
            data: e
        });
    },
    GetOpusRank: function(e) {
        return (0, t.request)({
            url: "/v1/plan/opusVoteRank",
            data: e
        });
    },
    GetPromotion: function(e) {
        return (0, t.request)({
            url: "/v1/plan/getPromotion",
            data: e
        });
    },
    GetCompetitorRank: function(e) {
        return (0, t.request)({
            url: "/v1/plan/participantVoteRank",
            data: e
        });
    },
    ParticipateActivity: function(e) {
        return (0, t.request)({
            url: "/v1/plan/participateActivity",
            data: e
        });
    },
    GetActivityDetail: function(e) {
        return (0, t.request)({
            url: "/v1/plan/planDetail",
            data: e
        });
    },
    GetActivityList: function(e) {
        return (0, t.request)({
            url: "/v2/plan/queryActivityLists",
            data: e
        });
    },
    SignUp: function(e) {
        return (0, t.request)({
            url: "/v1/plan/signUp",
            data: e
        });
    },
    DefaultBgImages: function(e) {
        return (0, t.request)({
            url: "/v1/readingcard/defaultBgImages",
            data: e
        });
    },
    ImagesMerged: function(e) {
        return (0, t.request)({
            url: "/v1/readingcard/imagesMerged",
            data: e
        });
    },
    ObtainOrgaCardSetup: function(e) {
        return (0, t.request)({
            url: "/v1/readingcard/obtainOrgaCardSetup",
            data: e
        });
    },
    ObtainQRcode: function(e) {
        return (0, t.request)({
            url: "/v1/readingcard/obtainQRcode",
            data: e
        });
    },
    AddShareRecord: function(e) {
        return (0, t.request)({
            url: "/v1/opus/addShareRecord",
            data: e
        });
    },
    SaveFavorite: function(e) {
        return (0, t.request)({
            url: "/v1/opus/favorite",
            data: e
        });
    },
    MyOpus: function(e) {
        return (0, t.request)({
            url: "/v1/opus/myOpus",
            data: e
        });
    },
    GetNewestList: function(e) {
        return (0, t.request)({
            url: "/v1/opus/newest",
            data: e
        });
    },
    OpusAction: function(e) {
        return (0, t.request)({
            url: "/v1/opus/opusAction",
            data: e
        });
    },
    GetOpusDetail: function(e) {
        return (0, t.request)({
            url: "/v1/opus/opusDetail",
            data: e
        });
    },
    EnjoyOpus: function(e) {
        return (0, t.request)({
            url: "/v1/opus/opusOperationPage",
            data: e
        });
    },
    GetOtherUserOpus: function(e) {
        return (0, t.request)({
            url: "/v1/opus/otherUserOpus",
            data: e
        });
    },
    PreviewPage: function(e) {
        return (0, t.request)({
            url: "/v1/opus/previewPage",
            data: e
        });
    },
    OpusDel: function(e) {
        return (0, t.request)({
            url: "/v1/opus/publish",
            data: e
        });
    },
    GetRecommendList: function(e) {
        return (0, t.request)({
            url: "/v1/opus/recommend",
            data: e
        });
    },
    ReportOpus: function(e) {
        return (0, t.request)({
            url: "/v1/opus/reportOpus",
            data: e
        });
    },
    Savetestimonials: function(e) {
        return (0, t.request)({
            url: "/v1/opus/saveDesc",
            data: e
        });
    },
    SaveOpus: function(e) {
        return (0, t.request)({
            url: "/v1/opus/saveOpus",
            data: e
        });
    },
    SaveParticipateOpus: function(e) {
        return (0, t.request)({
            url: "/v1/opus/saveParticipateOpus",
            data: e
        });
    },
    SearchOpus: function(e) {
        return (0, t.request)({
            url: "/v1/opus/searchReadOpus",
            data: e
        });
    },
    OpusVote: function(e) {
        return (0, t.request)({
            url: "/v1/opus/voteAction",
            data: e
        });
    },
    OpusVoteResult: function(e) {
        return (0, t.request)({
            url: "/v1/opus/newVoteResult",
            data: e
        });
    },
    AddMyMaterial: function(e) {
        return (0, t.request)({
            url: "/v1/resource/addMyResource",
            data: e
        });
    },
    DelMyMaterial: function(e) {
        return (0, t.request)({
            url: "/v1/resource/delMyResource",
            data: e
        });
    },
    GetMaterialDetail: function(e) {
        return (0, t.request)({
            url: "/v1/resource/detail",
            data: e
        });
    },
    MyMaterial: function(e) {
        return (0, t.request)({
            url: "/v1/resource/myResource",
            data: e
        });
    },
    HotMaterial: function(e) {
        return (0, t.request)({
            url: "/v1/resource/queryHotResource",
            data: e
        });
    },
    RecommendMaterial: function(e) {
        return (0, t.request)({
            url: "/v1/resource/queryRecommendResource",
            data: e
        });
    },
    SearchMaterial: function(e) {
        return (0, t.request)({
            url: "/v1/resource/searchResource",
            data: e
        });
    },
    ResourceTypes: function(e) {
        return (0, t.request)({
            url: "/v1/resource/queryIndexModule",
            data: e
        });
    },
    MaterialChildTypes: function(e) {
        return (0, t.request)({
            url: "/v1/resource/queryChildTypes",
            data: e
        });
    },
    TypeResouces: function(e) {
        return (0, t.request)({
            url: "/v1/resource/typeResouces",
            data: e
        });
    },
    GetBannerList: function(e) {
        return (0, t.request)({
            url: "/v1/banner/indexBanner",
            data: e
        });
    },
    SaveFeedback: function(e) {
        return (0, t.request)({
            url: "/v1/feedback/saveFeedback",
            data: e
        });
    },
    GetFeedBack: function(e) {
        return (0, t.request)({
            url: "/v1/feedback/feedbackcountPage",
            data: e
        });
    },
    GetRecommendPlan: function(e) {
        return (0, t.request)({
            url: "/v1/plan/recommendPlanList",
            data: e
        });
    },
    GetSearchLog: function(e) {
        return (0, t.request)({
            url: "/v2/plan/getSearchLog",
            data: e
        });
    },
    GetHotSearchActivity: function(e) {
        return (0, t.request)({
            url: "/v2/plan/getHotSearchPActivity",
            data: e
        });
    },
    SaveSearchLog: function(e) {
        return (0, t.request)({
            url: "/v2/plan/saveSearchLog",
            data: e
        });
    },
    DelSearchLog: function(e) {
        return (0, t.request)({
            url: "/v2/plan/delSearchLog",
            data: e
        });
    },
    GetMyActivitys: function(e) {
        return (0, t.request)({
            url: "/v2/plan/myActivitys",
            data: e
        });
    },
    GetNearbyDevs: function(e) {
        return (0, t.request)({
            url: "/v1/device/getNearbyDevs",
            data: e
        });
    },
    GetActivity: function(e) {
        return (0, t.request)({
            url: "/v2/plan/planDetail",
            data: e
        });
    },
    GetScoreRank: function(e) {
        return (0, t.request)({
            url: "/v2/plan/activityOpusScoreRank",
            data: e
        });
    },
    GetScoreState: function(e) {
        return (0, t.request)({
            url: "/v2/plan/isScoreState",
            data: e
        });
    },
    GetMyParticipate: function(e) {
        return (0, t.request)({
            url: "/v2/plan/myParticipate",
            data: e
        });
    },
    MatchDivision: function(e) {
        return (0, t.request)({
            url: "/v2/plan/matchPlanAddress",
            data: e
        });
    },
    GetRegFromInfo: function(e) {
        return (0, t.request)({
            url: "/v2/plan/regFromInfo",
            data: e
        });
    },
    submitCompetition: function(e) {
        return (0, t.request)({
            url: "/v2/plan/submitCompetition",
            data: e
        });
    },
    OtherUserOpusRank: function(e) {
        return (0, t.request)({
            url: "/v1/opus/otherUserOpusRank",
            data: e
        });
    },
    GetDistrict: function(e) {
        return (0, t.request)({
            url: "/v1/plan/getDistrict",
            data: e
        });
    },
    GetSchool: function(e) {
        return (0, t.request)({
            url: "/v1/plan/getSchool",
            data: e
        });
    },
    GetOpusReply: function(e) {
        return (0, t.request)({
            url: "/v1/reply/findbyopusid",
            data: e
        });
    },
    GetMyOpusReply: function(e) {
        return (0, t.request)({
            url: "/v1/reply/findbyuid",
            data: e
        });
    },
    GetReplySave: function(e) {
        return (0, t.request)({
            url: "/v1/reply/save",
            data: e
        });
    },
    GetReplyDel: function(e) {
        return (0, t.request)({
            url: "/v1/reply/updatestatusdel",
            data: e
        });
    },
    GetReplySwitch: function(e) {
        return (0, t.request)({
            url: "/v1/reply/updateisreply",
            data: e
        });
    },
    GetReplyStatus: function(e) {
        return (0, t.request)({
            url: "/v1/reply/updatestatus",
            data: e
        });
    },
    GetLikeList: function(e) {
        return (0, t.request)({
            url: "/v1/opususeroperation/dzList",
            data: e
        });
    },
    GetResume: function(e) {
        return (0, t.request)({
            url: "/v1/videoopus/queryAll",
            data: e
        });
    },
    GetMyResume: function(e) {
        return (0, t.request)({
            url: "/v1/videoopus/myVideoResume",
            data: e
        });
    },
    delOrPub: function(e) {
        return (0, t.request)({
            url: "/v1/videoopus/delOrPub",
            data: e
        });
    },
    isShowPhone: function(e) {
        return (0, t.request)({
            url: "/v1/videoopus/isShowPhone",
            data: e
        });
    },
    GetResumeDetail: function(e) {
        return (0, t.request)({
            url: "/v1/videoopus/videoDetail",
            data: e
        });
    },
    MergedResumeCard: function(e) {
        return (0, t.request)({
            url: "/v1/videocardmerged/imagesMerged",
            data: e
        });
    },
    GetResumeQRcode: function(e) {
        return (0, t.request)({
            url: "/v1/videocardmerged/obtainQRcode",
            data: e
        });
    },
    uploadResumeImage: function(e) {
        return (0, t.request)({
            url: "/v1/videocardmerged/uploadImage",
            data: e
        });
    },
    GetResumeInfo: function(e) {
        return (0, t.request)({
            url: "/v1/videoopus/display",
            data: e
        });
    },
    SaveResumeInfo: function(e) {
        return (0, t.request)({
            url: "/v1/videoopus/saveOrUpdate",
            data: e
        });
    },
    GetCodeInfo: function(e) {
        return (0, t.request)({
            url: "/v1/resume/display",
            data: e
        });
    },
    SaveCodeInfo: function(e) {
        return (0, t.request)({
            url: "/v1/resume/saveOrUpdate",
            data: e
        });
    },
    GetStageLists: function(e) {
        return (0, t.request)({
            url: "/v1/stage/queryStageLists",
            data: e
        });
    },
    GetStageDetail: function(e) {
        return (0, t.request)({
            url: "/v1/stage/stageDetail",
            data: e
        });
    },
    GetStageOpusRank: function(e) {
        return (0, t.request)({
            url: "/v1/stage/stageOpusRank",
            data: e
        });
    },
    UploadReply: function(e) {
        return (0, t.request)({
            url: "/v1/stage/upReply",
            data: e
        });
    },
    GetReplyLists: function(e) {
        return (0, t.request)({
            url: "/v1/stage/replyList",
            data: e
        });
    },
    GetRecommendMusic: function(e) {
        return (0, t.request)({
            url: "/v1/music/queryResourceBgMusic",
            data: e
        });
    },
    GetHotDubOpus: function(e) {
        return (0, t.request)({
            url: "/v1/hot/hotDubOpus",
            data: e
        });
    },
    GetHotFollower: function(e) {
        return (0, t.request)({
            url: "/v1/hot/hotFollower",
            data: e
        });
    },
    GetHotReadCards: function(e) {
        return (0, t.request)({
            url: "/v1/hot/hotReadCards",
            data: e
        });
    },
    GetHotResource: function(e) {
        return (0, t.request)({
            url: "/v1/hot/hotResource",
            data: e
        });
    },
    GetHotType: function(e) {
        return (0, t.request)({
            url: "/v1/hot/hotType",
            data: e
        });
    },
    GetHotVFOpus: function(e) {
        return (0, t.request)({
            url: "/v1/hot/hotVFOpus",
            data: e
        });
    },
    GetOrgaOpusRank: function(e) {
        return (0, t.request)({
            url: "/v1/hot/orgaOpusRank",
            data: e
        });
    },
    GetPictureBook: function(e) {
        return (0, t.request)({
            url: "/v1/hot/pictureBook",
            data: e
        });
    },
    GetProfessionalUser: function(e) {
        return (0, t.request)({
            url: "/v1/hot/queryProfessionalUser",
            data: e
        });
    },
    GetProfessionalOpus: function(e) {
        return (0, t.request)({
            url: "/v1/hot/queryProfessionalOpus",
            data: e
        });
    },
    GetProfessionalOpusAction: function(e) {
        return (0, t.request)({
            url: "/v1/hot/professionalOpusAction",
            data: e
        });
    },
    GetProfessionals: function(e) {
        return (0, t.request)({
            url: "/v1/professional/queryProfessionalUserOwn",
            data: e
        });
    },
    GetReadCardAction: function(e) {
        return (0, t.request)({
            url: "/v1/hot/readCardAction",
            data: e
        });
    },
    GetReadCards: function(e) {
        return (0, t.request)({
            url: "/v1/hot/readCards",
            data: e
        });
    },
    GetHotReader: function(e) {
        return (0, t.request)({
            url: "/v1/hot/reader",
            data: e
        });
    },
    GetHotReaderRoom: function(e) {
        return (0, t.request)({
            url: "/v1/hot/readingPavilion",
            data: e
        });
    },
    GetActivityList2: function(e) {
        return (0, t.request)({
            url: "/v2/plan/queryActivityLists2",
            data: e
        });
    },
    AddCollect: function(e) {
        return (0, t.request)({
            url: "/v1/music/collect/add",
            data: e
        });
    },
    CancelCollect: function(e) {
        return (0, t.request)({
            url: "/v1/music/collect/cancel",
            data: e
        });
    },
    GetCollectList: function(e) {
        return (0, t.request)({
            url: "/v1/music/collect/list",
            data: e
        });
    },
    GetOrgaList: function(e) {
        return (0, t.request)({
            url: "/v1/music/audit/orgaList",
            data: e
        });
    },
    GetQueryByOrgaId: function(e) {
        return (0, t.request)({
            url: "/v1/music/audit/queryByOrgaId",
            data: e
        });
    },
    GetResourceList: function(e) {
        return (0, t.request)({
            url: "/v1/resource/collect/list",
            data: e
        });
    },
    AddResource: function(e) {
        return (0, t.request)({
            url: "/v1/resource/collect/add",
            data: e
        });
    },
    CancelResource: function(e) {
        return (0, t.request)({
            url: "/v1/resource/collect/cancel",
            data: e
        });
    },
    GetOrgaCardList: function(e) {
        return (0, t.request)({
            url: "/v1/readingcard/orgaCardLists",
            data: e
        });
    },
    GetOrgaUserAuth: function(e) {
        return (0, t.request)({
            url: "/v1/readingcard/userAuthOrgas",
            data: e
        });
    },
    GetSoundWallSave: function(e) {
        return (0, t.request)({
            url: "/v1/readingcard/saveReadingWallAuth",
            data: e
        });
    },
    GetOrgaDetail: function(e) {
        return (0, t.request)({
            url: "/v1/readingcard/readingWallOrgaDetail",
            data: e
        });
    },
    UpSoundWall: function(e) {
        return (0, t.request)({
            url: "/v1/readingcard/toReadingWall",
            data: e
        });
    },
    ProfessionalVoiceDetail: function(e) {
        return (0, t.request)({
            url: "/v1/professional/professionalVoiceDetail",
            data: e
        });
    },
    ProfessionalVoiceAction: function(e) {
        return (0, t.request)({
            url: "/v1/professional/professionalVoiceAction",
            data: e
        });
    },
    ProfessionalVoiceRank: function(e) {
        return (0, t.request)({
            url: "/v1/professional/otherUserOpusRank",
            data: e
        });
    },
    GetHotVideoOpus: function(e) {
        return (0, t.request)({
            url: "/v1/hot/hotVideoOpus",
            data: e
        });
    },
    GetQueryWorkDetailLists: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/queryWorkDetailLists",
            data: e
        });
    },
    GetQueryClassesLists: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/queryClassesLists",
            data: e
        });
    },
    SetSaveClasses: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/saveClasses",
            data: e
        });
    },
    UpdateClasses: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/updateClasses",
            data: e
        });
    },
    deleteClasses: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/deleteClasses",
            data: e
        });
    },
    QueryWorkSituation: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/queryWorkSituation",
            data: e
        });
    },
    QueryWorkSituationLists: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/queryWorkSituationLists",
            data: e
        });
    },
    QueryStudentSituationLists: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/queryStudentSituationLists",
            data: e
        });
    },
    AddStudent: function(e) {
        return (0, t.request)({
            url: "/v1/recite/addStudent",
            data: e
        });
    },
    DeleteStudent: function(e) {
        return (0, t.request)({
            url: "/v1/recite/deleteStudent",
            data: e
        });
    },
    FindChildrenClass: function(e) {
        return (0, t.request)({
            url: "/v1/recite/findClass",
            data: e
        });
    },
    FindStudent: function(e) {
        return (0, t.request)({
            url: "/v1/recite/findStudent",
            data: e
        });
    },
    FindStudentHomeWork: function(e) {
        return (0, t.request)({
            url: "/v1/recite/findStudentHomeWork",
            data: e
        });
    },
    FindStudentInfo: function(e) {
        return (0, t.request)({
            url: "/v1/recite/findStudentInfo",
            data: e
        });
    },
    SubmitHomeWork: function(e) {
        return (0, t.request)({
            url: "/v1/recite/submitHomeWork",
            data: e
        });
    },
    UpdateStudentInfo: function(e) {
        return (0, t.request)({
            url: "/v1/recite/updateStudentInfo",
            data: e
        });
    },
    ReciteResourceDetail: function(e) {
        return (0, t.request)({
            url: "/v1/recite/reciteResourceDetail",
            data: e
        });
    },
    QueryWorkLists: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/queryWorkLists",
            data: e
        });
    },
    StudentHistoryClasses: function(e) {
        return (0, t.request)({
            url: "/v1/recite/studentHistoryClasses",
            data: e
        });
    },
    FindStudentHomeWorkHistory: function(e) {
        return (0, t.request)({
            url: "/v1/recite/findStudentHomeWorkHistory",
            data: e
        });
    },
    GetReciteResTypeList: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/reciteResTypeList",
            data: e
        });
    },
    GetReciteResourceList: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/reciteResourceByType",
            data: e
        });
    },
    GetClassesList: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/queryClassesLists",
            data: e
        });
    },
    AssignHomeWork: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/assignHomeWork",
            data: e
        });
    },
    GetWorkClassesList: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/queryWorkClassesLists",
            data: e
        });
    },
    GetHomeworkList: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/queryWorkDetailLists",
            data: e
        });
    },
    updateEndTime: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/updateEndTime",
            data: e
        });
    },
    GetHomeWorkReport: function(e) {
        return (0, t.request)({
            url: "/v1/recite/HomeWorkReport",
            data: e
        });
    },
    AnswerandIndex: function(e) {
        return (0, t.request)({
            url: "/v1/answerandquestion/index",
            data: e
        });
    },
    AnswerandQueryChance: function(e) {
        return (0, t.request)({
            url: "/v1/answerandquestion/queryChance",
            data: e
        });
    },
    AnswerandQuestion: function(e) {
        return (0, t.request)({
            url: "/v1/answerandquestion/questions",
            data: e
        });
    },
    AnswerandRank: function(e) {
        return (0, t.request)({
            url: "/v1/answerandquestion/rank",
            data: e
        });
    },
    AnswerandRankOwer: function(e) {
        return (0, t.request)({
            url: "/v1/answerandquestion/rankOwer",
            data: e
        });
    },
    AnswerandSubmit: function(e) {
        return (0, t.request)({
            url: "/v1/answerandquestion/submit",
            data: e
        });
    },
    getMyOrganization: function(e) {
        return (0, t.request)({
            url: "/v1/baseUser/findUserCollectOrgas",
            data: e
        });
    },
    GetUserLogInOrga: function(e) {
        return (0, t.request)({
            url: "/v1/baseUser/getUserLogInOrga",
            data: e
        });
    },
    SwitchUserLogInOrga: function(e) {
        return (0, t.request)({
            url: "/v1/baseUser/switchUserLogInOrga",
            data: e
        });
    },
    GetOrgaStatus: function(e) {
        return (0, t.request)({
            url: "/v1/baseUser/getOrgaMpStatus",
            data: e
        });
    },
    UserCollectOrgaAction: function(e) {
        return (0, t.request)({
            url: "/v1/baseUser/userCollectOrgaAction",
            data: e
        });
    },
    TakeActiveOrga: function(e) {
        return (0, t.request)({
            url: "/v2/plan/partakeOrga",
            data: e
        });
    },
    CreateCGWxaCodeUnlimit: function(e) {
        return (0, t.request)({
            url: "/v1/answerandquestion/createCGWxaCodeUnlimit",
            data: e
        });
    },
    SearchOrga: function(e) {
        return (0, t.request)({
            url: "/v1/hot/searchOrga",
            data: e
        });
    },
    GetApplyLeadOpusList: function(e) {
        return (0, t.request)({
            url: "/v1/opus/getUsersCanApplyOpus",
            data: e
        });
    },
    ApplyLeadOpus: function(e) {
        return (0, t.request)({
            url: "/v1/opus/applyForLeadRead",
            data: e
        });
    },
    GetLeadOpus: function(e) {
        return (0, t.request)({
            url: "/v1/opus/superbOpus",
            data: e
        });
    },
    GetQueryProfessionalType: function(e) {
        return (0, t.request)({
            url: "/v1/professional/queryProfessionalType",
            data: e
        });
    },
    GetOtherUserOpusRank: function(e) {
        return (0, t.request)({
            url: "/v1/professional/otherUserOpusRank",
            data: e
        });
    },
    GetProfessionalVoiceAction: function(e) {
        return (0, t.request)({
            url: "/v1/professional/professionalVoiceAction",
            data: e
        });
    },
    GetProfessionalVoiceDetail: function(e) {
        return (0, t.request)({
            url: "/v1/professional/professionalVoiceDetail",
            data: e
        });
    },
    GetQueryProfessionalOpus: function(e) {
        return (0, t.request)({
            url: "/v1/professional/queryProfessionalOpus",
            data: e
        });
    },
    GetQueryProfessionalUser: function(e) {
        return (0, t.request)({
            url: "/v1/professional/queryProfessionalUser",
            data: e
        });
    },
    ExpertImagesMerged: function(e) {
        return (0, t.request)({
            url: "/v1/professional/imagesMerged",
            data: e
        });
    },
    QueryExpertCardInfo: function(e) {
        return (0, t.request)({
            url: "/v1/professional/queryCardInfo",
            data: e
        });
    },
    ProfessionalVoiceListen: function(e) {
        return (0, t.request)({
            url: "/v1/professional/professionalVoiceListen",
            data: e
        });
    },
    TYisJoinQuestionnaire: function(e) {
        return (0, t.request)({
            url: "/v1/questionnaire/isJoinQuestionnaire",
            data: e
        });
    },
    TYquestionnaireInfo: function(e) {
        return (0, t.request)({
            url: "/v1/questionnaire/questionnaireInfo",
            data: e
        });
    },
    TYquestionnaireQuestions: function(e) {
        return (0, t.request)({
            url: "/v1/questionnaire/questionnaireQuestions",
            data: e
        });
    },
    TYsubmit: function(e) {
        return (0, t.request)({
            url: "/v1/questionnaire/submit",
            data: e
        });
    },
    TYActivityLists: function(e) {
        return (0, t.request)({
            url: "/v1/tyActivity/queryTyActivityLists",
            data: e
        });
    },
    TYScoreBoards: function(e) {
        return (0, t.request)({
            url: "/v1/tyActivity/queryScoreBoard",
            data: e
        });
    },
    GetPoster: function(e) {
        return (0, t.request)({
            url: "/v1/activity423/getPoster",
            data: e
        });
    },
    GetPoster_single: function(e) {
        return (0, t.request)({
            url: "/v1/activity423/getPlanDatailPoster",
            data: e
        });
    },
    Get423video: function(e) {
        return (0, t.request)({
            url: "/v1/activity423/getSp",
            data: e
        });
    },
    Get423data: function(e) {
        return (0, t.request)({
            url: "/v1/activity423/masterSlaveActivityInfos",
            data: e
        });
    },
    Subscribe423: function(e) {
        return (0, t.request)({
            url: "/v1/activity423/liveNewsSubscribe",
            data: e
        });
    },
    GetFamousBookDetail: function(e) {
        return (0, t.request)({
            url: "/v1/activity423/famousBookDetail",
            data: e
        });
    },
    GetFamousBookPrizeList: function(e) {
        return (0, t.request)({
            url: "/v1/activity423/famousBookPrizeList",
            data: e
        });
    },
    GetLottery: function(e) {
        return (0, t.request)({
            url: "/v1/activity423/lottery",
            data: e
        });
    },
    QueryLottery: function(e) {
        return (0, t.request)({
            url: "/v1/activity423/querylottery",
            data: e
        });
    },
    GetOwnPrizeList: function(e) {
        return (0, t.request)({
            url: "/v1/activity423/ownPrizeList",
            data: e
        });
    },
    SaveReceiveAddr: function(e) {
        return (0, t.request)({
            url: "/v1/activity423/saveReceiveAddr",
            data: e
        });
    },
    GetReceiveAddr: function(e) {
        return (0, t.request)({
            url: "/v1/activity423/getReceiveAddr",
            data: e
        });
    },
    GetFamousBookList: function(e) {
        return (0, t.request)({
            url: "/v1/activity423/famousBookList",
            data: e
        });
    },
    GetNewPrizeBanner: function(e) {
        return (0, t.request)({
            url: "/v1/activity423/newPrizeBanner",
            data: e
        });
    },
    TYPoster: function(e) {
        return (0, t.request)({
            url: "/v1/tyActivity/getTyPoster",
            data: e
        });
    },
    ShareRecord: function(e) {
        return (0, t.request)({
            url: "/v1/activity423/shareRecord",
            data: e
        });
    },
    Get423LiveState: function(e) {
        return (0, t.request)({
            url: "/v1/activity423/liveStart",
            data: e
        });
    },
    QueryHomeMenu: function(e) {
        return (0, t.request)({
            url: "/v1/hot/queryHomeMenu",
            data: e
        });
    },
    QueryOrgaTheme: function(e) {
        return (0, t.request)({
            url: "/v1/hot/queryOrgaTheme",
            data: e
        });
    },
    QueryIndexModule: function(e) {
        return (0, t.request)({
            url: "/v1/resource/queryIndexModule",
            data: e
        });
    },
    GetInvitationCode: function(e) {
        return (0, t.request)({
            url: "/v2/plan/queryInvitationCode",
            data: e
        });
    },
    myWorks: function(e) {
        return (0, t.request)({
            url: "/v1/opus/dynamic/me",
            data: e
        });
    },
    GetNewestDynamic: function(e) {
        return (0, t.request)({
            url: "/v1/opus/dynamic/newest",
            data: e
        });
    },
    DeleteDynamic: function(e) {
        return (0, t.request)({
            url: "/v1/opus/dynamic/delete",
            data: e
        });
    },
    GetAttentionDynamic: function(e) {
        return (0, t.request)({
            url: "/v1/opus/dynamic/follow",
            data: e
        });
    },
    GetHotDynamic: function(e) {
        return (0, t.request)({
            url: "/v1/opus/dynamic/hot",
            data: e
        });
    },
    AddDynamic: function(e) {
        return (0, t.request)({
            url: "/v1/opus/dynamic/add",
            data: e
        });
    },
    GetReplyDetails: function(e) {
        return (0, t.request)({
            url: "/v1/reply/queryDetails",
            data: e
        });
    },
    SearchSchool: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/searchSchool",
            data: e
        });
    },
    EstablishSave: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/save",
            data: e
        });
    },
    SetUpdate: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/update",
            data: e
        });
    },
    QueryActivityPrizes: function(e) {
        return (0, t.request)({
            url: "/v1/activityPrize/queryActivityPrizes",
            data: e
        });
    },
    GetNewRecipient: function(e) {
        return (0, t.request)({
            url: "/v1/activityPrize/newRecipientBanner",
            data: e
        });
    },
    GetPrizeLottery: function(e) {
        return (0, t.request)({
            url: "/v1/activityPrize/lottery",
            data: e
        });
    },
    GetPrizeLotteryCheck: function(e) {
        return (0, t.request)({
            url: "/v1/activityPrize/lotteryCheck",
            data: e
        });
    },
    QueryPrizeLottery: function(e) {
        return (0, t.request)({
            url: "/v1/activityPrize/queryLottery",
            data: e
        });
    },
    GetChildrenDayPrizeDrawList: function(e) {
        return (0, t.request)({
            url: "/v1/activityPrize/activityPrizeRecipients",
            data: e
        });
    },
    GetChildrenDayAddress: function(e) {
        return (0, t.request)({
            url: "/v1/activityPrize/getReceiveAddr",
            data: e
        });
    },
    SaveChildrenDayAddress: function(e) {
        return (0, t.request)({
            url: "/v1/activityPrize/saveReceiveAddr",
            data: e
        });
    },
    GetRecitePracticeRankList: function(e) {
        return (0, t.request)({
            url: "/v1/reciteExercise/reciteRank",
            data: e
        });
    },
    GetRecitePracticeReport: function(e) {
        return (0, t.request)({
            url: "/v1/reciteExercise/reciteReport",
            data: e
        });
    },
    GetRecitePracticeResource: function(e) {
        return (0, t.request)({
            url: "/v1/reciteExercise/reciteResourceByType",
            data: e
        });
    },
    GetReciteRecord: function(e) {
        return (0, t.request)({
            url: "/v1/reciteExercise/userReciteRecordList",
            data: e
        });
    },
    SubmitRecitePractice: function(e) {
        return (0, t.request)({
            url: "/v1/reciteExercise/submitReciteRecord",
            data: e
        });
    },
    TakeActiveOrgaByVote: function(e) {
        return (0, t.request)({
            url: "/v2/plan/partakeOrgaByVote",
            data: e
        });
    },
    SetActivityPrize: function(e) {
        return (0, t.request)({
            url: "/v1/activityPrize/activityPrizeSite",
            data: e
        });
    },
    QueryIndexHbOrPyModule: function(e) {
        return (0, t.request)({
            url: "/v1/resource/queryIndexHbOrPyModule",
            data: e
        });
    },
    QueryHotHOPTypeResouces: function(e) {
        return (0, t.request)({
            url: "/v1/resource/queryHotHOPTypeResouces",
            data: e
        });
    },
    QueryHOPTypes: function(e) {
        return (0, t.request)({
            url: "/v1/resource/queryHOPTypes",
            data: e
        });
    },
    QueryHOPTypeResouces: function(e) {
        return (0, t.request)({
            url: "/v1/resource/queryHOPTypeResouces",
            data: e
        });
    },
    VideoResourceDetail: function(e) {
        return (0, t.request)({
            url: "/v1/resource/videoResourceDetail",
            data: e
        });
    },
    PictureResourceDetail: function(e) {
        return (0, t.request)({
            url: "/v1/resource/pictureResourceDetail",
            data: e
        });
    },
    GetResOpusRank: function(e) {
        return (0, t.request)({
            url: "/v1/opus/resOpusRank",
            data: e
        });
    },
    SaveBaseUserInfo: function(e) {
        return (0, t.request)({
            url: "/v1/baseUser/saveBaseUserInfo",
            data: e
        });
    },
    GetCardImgType: function(e) {
        return (0, t.request)({
            url: "/v1/readingcard/getCardImgType",
            data: e
        });
    },
    GetCardImg: function(e) {
        return (0, t.request)({
            url: "/v1/readingcard/getCardImg",
            data: e
        });
    },
    QueryGraduationInfo: function(e) {
        return (0, t.request)({
            url: "/activity/graduation/graduationActivityInfo",
            data: e
        });
    },
    QueryMyCard: function(e) {
        return (0, t.request)({
            url: "/activity/graduation/myReadCard",
            data: e
        });
    },
    GetGraduationCardList: function(e) {
        return (0, t.request)({
            url: "/activity/graduation/graduationReadingCardList",
            data: e
        });
    },
    MergeGraduationCard: function(e) {
        return (0, t.request)({
            url: "/activity/graduation/imagesMerged",
            data: e
        });
    },
    GetUserMergeOpus: function(e) {
        return (0, t.request)({
            url: "/activity/graduation/getUserUnMergedOpus",
            data: e
        });
    },
    GetGraduationPoster: function(e) {
        return (0, t.request)({
            url: "/activity/graduation/getGraduationPlanDatailPoster",
            data: e
        });
    },
    GetReadCardsGraduation: function(e) {
        return (0, t.request)({
            url: "/activity/graduation/readCards",
            data: e
        });
    },
    QueryGraduationInfos: function(e) {
        return (0, t.request)({
            url: "/activity/graduation/graMasterSlaveActivityInfos",
            data: e
        });
    },
    SaveOpusNoticApply: function(e) {
        return (0, t.request)({
            url: "/v1/opus/saveOpusNoticApply",
            data: e
        });
    },
    GetApplyInfo: function(e) {
        return (0, t.request)({
            url: "/v1/opus/getApplyInfo",
            data: e
        });
    },
    PostResourceErrorMark: function(e) {
        return (0, t.request)({
            url: "/v1/resource/resourceErrorMark",
            data: e
        });
    },
    SubmitReadHomework: function(e) {
        return (0, t.request)({
            url: "/v1/recite/submitReadHomeWork",
            data: e
        });
    },
    SetTeacherComment: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/comment",
            data: e
        });
    },
    QueryReadWorkDetailLists: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/queryReadWorkDetailLists",
            data: e
        });
    },
    MyReciteResource: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/myReciteResource",
            data: e
        });
    },
    DeleteMyReciteResource: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/deleteMyReciteResource",
            data: e
        });
    },
    SaveReciteResource: function(e) {
        return (0, t.request)({
            url: "/v1/teacher/saveReciteResource",
            data: e
        });
    },
    GetMpAppid: function(e) {
        return (0, t.request)({
            url: "/v1/auth/getMpAppid",
            data: e
        });
    },
    GetUserRank: function(e) {
        return (0, t.request)({
            url: "/v1/activityPoints/getUserRank",
            data: e
        });
    },
    PointsRank: function(e) {
        return (0, t.request)({
            url: "/v1/activityPoints/pointsRank",
            data: e
        });
    },
    UserSign: function(e) {
        return (0, t.request)({
            url: "/v1/activityPoints/userSign",
            data: e
        });
    },
    UserSignHistory: function(e) {
        return (0, t.request)({
            url: "/v1/activityPoints/userSignHistory",
            data: e
        });
    },
    UserSignToDay: function(e) {
        return (0, t.request)({
            url: "/v1/activityPoints/userSignToDay",
            data: e
        });
    },
    GetResLabelSetup: function(e) {
        return (0, t.request)({
            url: "/v1/resource/indexResLabelSetup",
            data: e
        });
    },
    CJActivityLists: function(e) {
        return (0, t.request)({
            url: "/v1/hitoffActivity/queryActivityLists",
            data: e
        });
    },
    CJActivityPoster: function(e) {
        return (0, t.request)({
            url: "/v1/hitoffActivity/getPlanDatailPoster",
            data: e
        });
    },
    CJActivityRank_voke: function(e) {
        return (0, t.request)({
            url: "/v1/hitoffActivity/getWeekVoteRank",
            data: e
        });
    },
    CJActivityRank_opus: function(e) {
        return (0, t.request)({
            url: "/v1/hitoffActivity/getWeekOpusRank",
            data: e
        });
    },
    CJActivityOrgaList: function(e) {
        return (0, t.request)({
            url: "/v1/hitoffActivity/partakeOrga",
            data: e
        });
    },
    CJActivityOrgaUserList: function(e) {
        return (0, t.request)({
            url: "/v1/hitoffActivity/userOpusRank",
            data: e
        });
    },
    GetThemeActivities: function(e) {
        return (0, t.request)({
            url: "/nationalday/activity/info",
            data: e
        });
    },
    GetNewestopus: function(e) {
        return (0, t.request)({
            url: "/nationalday/activity/query/newestopus",
            data: e
        });
    },
    MidafPoster: function(e) {
        return (0, t.request)({
            url: "/nationalday/activity/mpQrCodeUrl",
            data: e
        });
    },
    MidafClick: function(e) {
        return (0, t.request)({
            url: "/nationalday/activity/addParticipateCount",
            data: e
        });
    },
    HeroPlanSign: function(e) {
        return (0, t.request)({
            url: "/v2/plan/heroPlanSign",
            data: e
        });
    },
    bindCardPage: function(e) {
        return (0, t.request)({
            url: "/v1/baseUserCard/bindCardPage",
            data: e
        });
    },
    bindCardUserEvaluationOpus: function(e) {
        return (0, t.request)({
            url: "/v1/baseUserCard/bindCardUserEvaluationOpus",
            data: e
        });
    },
    bindCardUserOpus: function(e) {
        return (0, t.request)({
            url: "/v1/baseUserCard/bindCardUserOpus",
            data: e
        });
    },
    checkCardNo: function(e) {
        return (0, t.request)({
            url: "/v1/baseUserCard/checkCardNo",
            data: e
        });
    },
    delBindCard: function(e) {
        return (0, t.request)({
            url: "/v1/baseUserCard/delBindCard",
            data: e
        });
    },
    saveBindCard: function(e) {
        return (0, t.request)({
            url: "/v1/baseUserCard/saveBindCard",
            data: e
        });
    },
    ChangeOrgas: function(e) {
        return (0, t.request)({
            url: "/v1/baseUser/changeOrgas",
            data: e
        });
    },
    getMyFans: function(e) {
        return (0, t.request)({
            url: "/v1/userFollower/getMyFans",
            data: e
        });
    },
    GetPrizeList: function(e) {
        return (0, t.request)({
            url: "/v1/awardsRecord/getAwardsRecordList",
            data: e
        });
    },
    GetPrizeDetails: function(e) {
        return (0, t.request)({
            url: "/v1/activityPush/getActivityPushDetail",
            data: e
        });
    },
    GetActivityScheduleDetail: function(e) {
        return (0, t.request)({
            url: "/v1/activitySchedule/activityScheduleDetail",
            data: e
        });
    },
    GetActivitySchedulePoster: function(e) {
        return (0, t.request)({
            url: "/v1/activitySchedule/getPlanDatailPoster",
            data: e
        });
    },
    GetMyMsgData: function(e) {
        return (0, t.request)({
            url: "/v1/baseUser/myMsgData",
            data: e
        });
    },
    CheckNeedParty: function(e) {
        return (0, t.request)({
            url: "/v1/oathActivity/isBlacklist",
            data: e
        });
    },
    GetPartakeOrgaInfo: function(e) {
        return (0, t.request)({
            url: "/v2/plan/partakeOrgaInfo",
            data: e
        });
    },
    GetUserSignOrgaInfo: function(e) {
        return (0, t.request)({
            url: "/v2/plan/getUserSignOrgaInfo",
            data: e
        });
    },
    GetAudioType: function(e) {
        return (0, t.request)({
            url: "/v1/pb-study/getAudioType",
            data: e
        });
    },
    GetVideoType: function(e) {
        return (0, t.request)({
            url: "/v1/pb-study/getVideoType",
            data: e
        });
    },
    GetResourceByAudioType: function(e) {
        return (0, t.request)({
            url: "/v1/pb-study/getResourceByAudioType",
            data: e
        });
    },
    GetResourceByVideoType: function(e) {
        return (0, t.request)({
            url: "/v1/pb-study/getResourceByVideoType",
            data: e
        });
    },
    AddListenCount: function(e) {
        return (0, t.request)({
            url: "/v1/pb-study/addListenCount",
            data: e
        });
    },
    GetOrgaStudyCount: function(e) {
        return (0, t.request)({
            url: "/v1/pb-study/orgaStudyCount",
            data: e
        });
    },
    GetOrgaStudyOpusRank: function(e) {
        return (0, t.request)({
            url: "/v1/pb-study/orgaOpusRank",
            data: e
        });
    },
    GetOrgaOutlets: function(e) {
        return (0, t.request)({
            url: "/v1/pb-study/getOrgaOutlets",
            data: e
        });
    },
    GetAudioResourceDetail: function(e) {
        return (0, t.request)({
            url: "/v1/pb-study/getAudioResourceDetail",
            data: e
        });
    },
    GetSimilarAudioList: function(e) {
        return (0, t.request)({
            url: "/v1/pb-study/getSimilarAudioList",
            data: e
        });
    },
    GetSimilarVideoList: function(e) {
        return (0, t.request)({
            url: "/v1/pb-study/getSimilarVideoList",
            data: e
        });
    },
    GetVideoResourceDetail: function(e) {
        return (0, t.request)({
            url: "/v1/pb-study/getVideoResourceDetail",
            data: e
        });
    },
    SaveResourceAction: function(e) {
        return (0, t.request)({
            url: "/v1/pb-study/saveResourceAction",
            data: e
        });
    },
    SaveCollectAction: function(e) {
        return (0, t.request)({
            url: "/v1/pb-study/saveCollectAction",
            data: e
        });
    },
    GetOrgaVideoOpusRank: function(e) {
        return (0, t.request)({
            url: "/v1/pb-study/orgaVideoOpusRank",
            data: e
        });
    },
    GetResourceCollect: function(e) {
        return (0, t.request)({
            url: "/v1/pb-study/resourceCollectList",
            data: e
        });
    },
    GetMineStudyCount: function(e) {
        return (0, t.request)({
            url: "/v1/pb-study/studyCount",
            data: e
        });
    },
    GetCulturalMePostcard: function(e) {
        return (0, t.request)({
            url: "/v1/voicepostcard/myPostCardPage",
            data: e
        });
    },
    GetAllCulturalMePostcard: function(e) {
        return (0, t.request)({
            url: "/v1/voicepostcard/postCardPage",
            data: e
        });
    },
    GetCulturalFinishPostCard: function(e) {
        return (0, t.request)({
            url: "/v1/voicepostcard/finishPostCard",
            data: e
        });
    },
    getPostCardInfo: function(e) {
        return (0, t.request)({
            url: "/v1/voicepostcard/getPostCardInfo",
            data: e
        });
    },
    getDrawCardMaterial: function(e) {
        return (0, t.request)({
            url: "/v1/voicepostcard/getDrawCardMaterial",
            data: e
        });
    },
    getPostCardStatus: function(e) {
        return (0, t.request)({
            url: "/v1/voicepostcard/getPostCardStatus",
            data: e
        });
    },
    savePostCardInfo: function(e) {
        return (0, t.request)({
            url: "/v1/voicepostcard/savePostCardInfo",
            data: e
        });
    },
    uploadMpReadingCardImage: function(e) {
        return (0, t.request)({
            url: "/v1/voicepostcard/uploadMpReadingCardImage",
            data: e
        });
    },
    getlistenPostCard: function(e) {
        return (0, t.request)({
            url: "/v1/voicepostcard/listenPostCard",
            data: e
        });
    },
    GetHomeSoundSpaceList: function(e) {
        return (0, t.request)({
            url: "/v2/pb-study/getSoundSpaceList",
            data: e
        });
    },
    GetHomeOrgaList: function(e) {
        return (0, t.request)({
            url: "/v2/pb-study/getOrgaList",
            data: e
        });
    },
    GetOrgaNavigationList: function(e) {
        return (0, t.request)({
            url: "/v2/pb-study/getOrgaNavigation",
            data: e
        });
    },
    GetHomeDeviceLists: function(e) {
        return (0, t.request)({
            url: "/v2/pb-study/getDeviceList",
            data: e
        });
    },
    GetDeviceOrgaLists: function(e) {
        return (0, t.request)({
            url: "/v2/pb-study/getDeviceOrgaList",
            data: e
        });
    },
    GetProductUsedesc: function(e) {
        return (0, t.request)({
            url: "/v2/pb-study/getProductDesc",
            data: e
        });
    },
    GetOrganzationDetails: function(e) {
        return (0, t.request)({
            url: "/v2/pb-study/getOrgaDetail",
            data: e
        });
    },
    GetOrgaPersonList: function(e) {
        return (0, t.request)({
            url: "/v2/pb-study/getOrgaPersonnels",
            data: e
        });
    },
    GetReadCardsList: function(e) {
        return (0, t.request)({
            url: "/v2/pb-study/getReadCards",
            data: e
        });
    },
    SaveAuthCode: function(e) {
        return (0, t.request)({
            url: "/v1/baseUser/saveAuthCode",
            data: e
        });
    },
    GetUserReadCard: function(e) {
        return (0, t.request)({
            url: "/activity/graduation/userReadCard",
            data: e
        });
    },
    GetReadCardItemData: function(e) {
        return (0, t.request)({
            url: "/activity/graduation/getReadCard",
            data: e
        });
    },
    GetCarouselVideoList: function(e) {
        return (0, t.request)({
            url: "/activity/graduation/carouselVideoList",
            data: e
        });
    },
    GetPlanActivityRule: function(e) {
        return (0, t.request)({
            url: "/activity/graduation/getPlanActivityRule",
            data: e
        });
    }
};