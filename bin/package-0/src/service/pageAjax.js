import axios from './axios'
// import qs from 'qs' // 注意: post, put提交方式需要采用该写法: qs.stringify(params)
// const url = 'http://114.115.210.56:10061' // 测试环境
const url = 'http://49.4.89.232:10061' // 正式环境
/***
 * ****** 用户登陆接口 ******
 * api/login
 * @param params
 * params = {
 *    loginID: '', 帐号
 *    password:'' 密码
 * }
 * 此接口关联node(节点表)
 * @return Result
 */
export const loginAPI = params => axios.post(url + '/api/login', params)

/***
 * ****** 用户登出接口 ******
 * /api/loginout
 *
 */
export const loginOutAPI = () => axios.get(url + '/api/loginOut')

/***
 * ****** 日志列表接口 ******
 * /api/log/list
 * 此接口关联node(日志表)
 * @return Result
 */
export const logListAPI = (params) => axios.post(url + '/api/log/list', params)

/***
 * ****** 节点列表接口 ******
 * /api/node/list
 * 此接口关联log(节点表)
 * @return Result
 */
export const nodeListAPI = () => axios.post(url + '/api/node/list')

/***
 * ****** 用户列表统计接口 ******
 * /api/user/total
 * 此接口关联userTotal(用户统计返回实体)
 * @return Result
 */
export const userTotalAPI = () => axios.post(url + '/api/user/total')

/***
 * ****** 用户列表接口 ******
 * /api/user/list allianceUsersType
 *  const params = {
 *              current: 1, // 当前第几页
 *              size: 10, // 每页多少条
 *              allianceUsersType: null, // 联盟用户类型 默认传null '' 或者直接不要这个参数
 *              userType: null, // 用户类型
 *              belongNodeId: [], // 隶属节点ID
 *              consensusItems: [], // 履行共识项
 *              title: '',// 标题
 *              shape: '', // 形状 参数为 circle（圆）  square （方） 当这个参数有值时，识别 参数start 和 end
 *              start: '', // 起始经纬度
 *              end: '' // 当shape参数为  circle 时，end为半径，参数为  square 时，end为方形的右下脚 经纬度
 *          }
 * 此接口关联user(用户返回实体)
 */
export const userListAPI = params => axios.post(url + '/api/user/list', params)

/***
 * ****** 合约列表接口 ******
 * /api/contract/list
 * @param params
 * params = {
 *      current: 1, // 当前第几页
 *      size: 10, // 每页多少条
 *      releaseId: '', 发布方Id  查我发布的时候这个字段传值，其它时候可以忽略此字段或为空
 *      signedId:'' 签署用户ID 查我签署的时候这个字段传值，其它时候可以忽略此字段或为空
 *      notSignedId:'' 待签署用户ID 查待签署的时候这个字段传值，其它时候可以忽略此字段或为空
 *      status:2 查已经生效的时候这个字段固定传值2，其它时候可以忽略此字段或为空
 *      storage:'' 暂存时传 发布方Id，其它时候可以忽略此字段或为空
 *      keyWord:'' 搜索关键字
 * }
 * 此接口关联contract(合约实体)
 * @return Page
 */
export const contractListApi = params => axios.post(url + '/api/contract/list', params)

/***
 * ****** 单个合约接口 ******
 * /api/contract/findById
 * @param params
 * params = {
 *    id: 0, 合约ID
 * }
 * 此接口关联contract(合约实体)
 * @return Result
 */
export const contractFindByIdApi = params => axios.post(url + '/api/contract/findById', params)

/***
 * ****** 合约操作接口 ******
 * /api/contract/handle
 * @param params
 * params = contract(合约实体)
 * @return Result
 */
export const contractHandleApi = params => axios.post(url + '/api/contract/handle', params)

/***
 * ****** 根据合约ID查询上链数据接口 ******
 * /api/chain/search
 * @param params
 * params = {
 *      current: 1,
 *      size: 10,
 *      contractId: 0, // 合约ID
 *      seq: [0,20], // 区块高度由一个二纬数组构成，第一个是起始seq,第二个是结束seq
 *      userName: '', // 上链用户名称
 *      dataLinkCode: 0 // 数据链码
 * }
 * 此接口关联chain（上链数据实体）
 * @return Page
 */
export const chainSearchApi = params => axios.post(url + '/api/chain/search', params)

/***
 * ****** 根据合约ID查询上链数据接口 ******
 * /api/chain/relation
 * @param params
 * params = {
 *    id: 0, 链数据ID
 * }
 * 此接口关联链表关联数据返回实体集
 * @return Result
 */
export const chainRelationApi = params => axios.post(url + '/api/chain/relation', params)

/***
 * ****** 字典表接口 ******
 * /api/dic/list
 * @param params
 * params = {
 *    type: '', 合约类型（contractType） 联盟用户（allianceUsers） 用户类型（userType）字段类型（fieldType）资料类型（dataType）
 * }
 * 此接口关联dic(字典实体+数据)
 * @return Result
 */
export const dicListApi = params => axios.post(url + '/api/dic/list', params)

export const mapPointsAPI = () => axios.get('/data/yunnanMap.json')
/**
 * **** 合约签署 ****
 * //api/contractSign/sign
 * @param {*} params
 * params = {
 *     'contractId': "", //合约ID
 *     'signType': 'signType' // 签署类型 1:同意 -1:拒签
 * }
 */
export const contractSignApi = params => axios.post(url + '/api/contractSign/sign', params)
/**
 * 合约记录删除
 * api/contract/remove?contractId=123123
 */
export const removeContractById = id => axios.get(url + '/api/contract/remove?contractId=' + id)
