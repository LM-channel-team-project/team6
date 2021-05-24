export const status = {
  // status code
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  DB_ERROR: 600,
};

export const resMSG = {
  // status code messages
  OK: "OK",
  CREATED: "CREATED",
  NO_CONTENT: "NO CONTENT",
  BAD_REQUEST: "BAD REQUEST",
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",
  NOT_FOUND: "NOT FOUND",
  INTERNAL_SERVER_ERROR: "INTERNAL SERVER_ERROR",
  SERVICE_UNAVAILABLE: "SERVICE UNAVAILABLE",
  DB_SUCCESS: "DB ACCESS SUCCESS",
  DB_ERROR: "DB ACCESS FAIL",

  // 유저 관련
  // success / fail
  AUTH_SIGNUP_SUCCESS: "회원가입 성공",
  AUTH_SIGNUP_FAIL: "회원가입 실패",
  AUTH_LOGIN_SUCCESS: "로그인 성공",
  AUTH_LOGIN_FAIL: "로그인 실패",
  AUTH_LOGOUT_SUCCESS: "로그아웃 성공",
  AUTH_LOGOUT_FAIL: "로그아웃 실패",
  AUTH_CHANGE_NICKNAME_SUCCESS: "닉네임 수정 성공",
  AUTH_CHANGE_NICKNAME_FAIL: "닉네임 수정 실패",
  AUTH_CHANGE_EMAIL_SUCCESS: "이메일 수정 성공",
  AUTH_CHANGE_EMAIL_FAIL: "이메일 수정 실패",
  AUTH_CHANGE_PW_SUCCESS: "비밀번호 변경 성공",
  AUTH_CHANGE_PW_FAIL: "비밀번호 변경 실패",
  AUTH_DELETE_SUCCESS: "회원탈퇴 성공",
  AUTH_DELETE_FAIL: "회원탈퇴 실패",

  AUTH_NOT_EXIST_USER: "존재하지 않는 회원입니다",
  AUTH_MISS_MATCH_PW: "비밀번호가 틀렸습니다",
  AUTH_ALREADY_USED_NICKNAME: "이미 사용중인 닉네임입니다",
  AUTH_ALREADY_USED_EMAIL: "이미 사용중인 이메일입니다",

  AUTH_FIND_ALL_SUCCESS: "회원 목록 조회 성공",
  AUTH_FIND_ALL_FAIL: "회원 목록 조회 실패",
  AUTH_FIND_ONE_SUCCESS: "회원 조회 성공",
  AUTH_FIND_ONE_FAIL: "회원 조회 실패",

  AUTH_NOT_AUTHENTICATED: "접근하기 위해서는 로그인이 필요합니다",
  AUTH_AUTHENTICATED: "이미 로그인되어 있습니다",
  AUTH_EXPIRED_TOKEN: "토큰이 만료되었습니다",

  // 포스트 관련
  POST_FIND_ALL_SUCCESS: "전체 글 조회 성공",
  POST_FIND_ALL_FAIL: "전체 글 조회 실패",
  POST_FIND_SUCCESS: "글 조회 성공",
  POST_FIND_FAIL: "글 조회 실패",
  POST_CREATE_SUCCESS: "글 생성 성공",
  POST_CREATE_FAIL: "글 생성 실패",
  POST_UPDATE_SUCCESS: "글 업데이트 성공",
  POST_UPDATE_FAIL: "글 업데이트 실패",
  POST_DELETE_SUCCESS: "글 삭제 성공",
  POST_DELETE_FAIL: "글 삭제 실패",
  POST_NOT_EXIST_POST: "해당 글이 없습니다",

  POST_NOT_MATCH_OWNER: "해당 글의 작성자가 아닙니다",
};

export class resError extends Error {
  success: boolean;
  status: number;
  message: string;
  data?: any;

  constructor(status: number, message: string, data?: any) {
    super(message);
    this.success = false;
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

interface ResponseJSON {
  success: boolean;
  message: string;
  data?: any;
}

// JSON Response: success, message, data(result)
export const resJSON = (
  success: boolean,
  resMessage: string,
  data?: any,
): ResponseJSON => {
  return {
    success: success,
    message: resMessage,
    data: data,
  };
};

export const getWeek = () => {
  const curr = new Date();
  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;

  var KR_TIME_DIFF = 9 * 60 * 60 * 1000; // KR TIMEZONE
  KR_TIME_DIFF = 0; // 임시
  const now = new Date(utc + KR_TIME_DIFF);

  now.setHours(0, 0, 0, 0);
  const weekstart = now.getDate() - now.getDay();
  const weekend = weekstart + 7;
  const start = new Date(now.setDate(weekstart) + KR_TIME_DIFF);
  const end = new Date(now.setDate(weekend) + KR_TIME_DIFF);

  return [start.toISOString(), end.toISOString()];
};
