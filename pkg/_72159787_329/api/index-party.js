var t = require("./request.js"), e = require("./../common/js/util.js");

module.exports = {
    GetActivityDetail: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/activityIntroduction",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetOrgaSwiperList: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/orgaCarousel",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetMediaList: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/mediaPropagandaList",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetMediaDetail: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/mediaPropaganda",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetRankList: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/userRanking",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetMyRank: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/myRanking",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetOrgaList: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/partakeOrga",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetRule: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/rankingRule",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetOrgaOpus: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/orgaAchievements",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetSwearList: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/oathCarousel",
            data: (0, e.getPublicParam)(a)
        });
    },
    Sign: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/userSign",
            data: (0, e.getPublicParam)(a)
        });
    },
    PostSaveOath: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/saveOath",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetOathTemplate: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/oathTemplate",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetOathDetails: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/oathDetails",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetUserOathList: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/userOathList",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetMyRanking: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/myRanking",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetPoster: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/getPoster",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetChildOrgaList: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/sonOrgaList",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetMyActivityList: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/getMyReadActivityList",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetReadActivityList: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/getReadActivityList",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetGraMasterSlaveActivityInfos: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/graMasterSlaveActivityInfos",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetQueryRootTypes: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/queryRootTypes",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetQueryChildTypes: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/queryChildTypes",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetResourceByTypeId: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/getResourceByTypeId",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetResourceDetail: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/getResourceDetail",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetPerceptionDetail: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/perceptionDetail",
            data: (0, e.getPublicParam)(a)
        });
    },
    SavePerception: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/savePerception",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetHistorRank: function(a) {
        return (0, t.request)({
            url: "/v1/answerandquestion/rank",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetHistorPerception: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/findPerceptionByBaseUserId",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetALLHistorPerception: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/findPerceptionByOrgaId",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetFindPerceptionByResourceId: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/findPerceptionByResourceId",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetAnswerandquestion: function(a) {
        return (0, t.request)({
            url: "/v1/answerandquestion/rankOwer",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetRankOwer: function(a) {
        return (0, t.request)({
            url: "/v1/answerandquestion/rankOwer",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetAnswerSheetRule: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/answerSheetRule",
            data: (0, e.getPublicParam)(a)
        });
    },
    GetUserSignInfo: function(a) {
        return (0, t.request)({
            url: "/v1/oathActivity/getUserSignInfo",
            data: (0, e.getPublicParam)(a)
        });
    }
};