export default {
  qiniu:'qiniu/getToken',

  //新闻列表
  getNews: 'news/get',
  getAllNews:'news/getAll',
  getNewsEyes: 'news/newsEyes',//获取新闻眼
  getPoliticaLearn: 'news/politicaLearn',//获取政治学习
  getMadeEasy: 'news/madeEasy', //获取党建一点通
  getShowID: 'news/showID',//获取党员亮身份
  getStydy: 'news/everywhereStudy',
  getPic: 'news/everywherePic',
  getSystem: 'news/system',//获取制度建设
  getSpecialActivity: 'news/specialActivity',//获取特色活动
  getInform: 'news/inform',//获取通知早知道
  addNews: 'news/add',
  delNews: 'news/del',
  updateNews: 'news/update',

  historyToday:'partyToday',

  //轮播图
  getSwiper: 'swiper/get',
  addSwiper: 'swiper/add',
  delSwiper: 'swiper/del',
  updateSwiper: 'swiper/update',

  //图片
  uploadSi:'imgs/uploadSi',
  uploadXin:'imgs/uploadXin',
  isPass:'imgs/isPass',

  //用户
  register: 'users/register',
  getUsers: 'users/get',
  delUsers: 'users/del',
  userLogin:'users/login',
  userIsLogin:'users/isLogin',
  userLogout:'users/logout',
  getInfo:"users/information",
  updateInfo:'users/update',
  getScore:"users/getScore",
  getScoreDetail:'users/getScoreDetail',
  getMember:'users/getMember',
  changePwd:'users/changePwd',

  //留言
  getMsg:'messages/get',
  addMsg:'messages/add',
  addReply:'messages/reply', 


  //民主评议
  addPingyi:'pingyi/add',
  getPingyi:'pingyi/get',
  pingyiOpenOne:'pingyi/openOne',
  delPingyi:'pingyi/del',
  updatePingyi:'pingyi/update',
  closePingyi:'pingyi/close',
  openPingyi:'pingyi/open',

  //个人总结
  addSummary:'summary/add',
  getOneSummary:'summary/getOne',
  evaluateSummary:'summary/evaluate',
  getSummary:'summary/get',

  //管理员登录
  adminLogin:'admin/login',
  adminIsLogin:'admin/isLogin',
  adminLogout:'admin/logout'
}
