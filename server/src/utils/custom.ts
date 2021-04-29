export const status = {
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

export const message = {
  NULL_VALUE: "값이 없습니다.",

  // Status code messages
  OK: "OK",
  CREATED: "CREATED",
  NO_CONTENT: "NO_CONTENT",
  BAD_REQUEST: "BAD_REQUEST",
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",
  NOT_FOUND: "NOT_FOUND",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  SERVICE_UNAVAILABLE: "SERVICE_UNAVAILABLE",

  // 데이터베이스
  DB_ERROR: "데이터베이스 연결 에러",
  DB_SUCCESS: "데이터베이스 연결 성공",

  // 유저 관련
  USER_SIGNUP_SUCCESS: "회원가입 성공",
  USER_SIGNUP_FAIL: "회원가입 실패",

  USER_LOGIN_FIND_USER_FAIL: "존재하지 않는 회원입니다.",
  USER_LOGIN_MISS_MATCH_PW: "비밀번호가 틀렸습니다.",
  USER_LOGIN_MISS_MATCH_VAL_PW: "비밀번호가 일치하지 않습니다.",
  USER_LOGIN_SUCCESS: "로그인 성공",
  USER_LOGIN_FAIL: "로그인 실패",

  USER_ALREADY_USED_NICKNAME: "이미 사용중인 닉네임입니다.",
  USER_ALREADY_USED_EMAIL: "이미 사용중인 이메일입니다.",
  USER_NO_DUPLICATE: "중복된 값이 없습니다.",
  USER_CHANGE_NICKNAME_SUCCESS: "닉네임 수정 성공",
  USER_CHANGE_EMAIL_SUCCESS: "닉네임 수정 성공",
  USER_CHANGE_PW_SUCCESS: "비밀번호 변경 성공",

  USER_WITHDRAW_SUCCESS: "회원탈퇴 성공",
  USER_WITHDRAW_FAIL: "회원탈퇴 실패",

  USER_FIND_ALL_SUCCESS: "회원 목록 조회 성공",
  USER_FIND_ALL_FAIL: "회원 목록 조회 실패",
  USER_FIND_ONE_SUCCESS: "회원 조회 성공",
  USER_FIND_ONE_FAIL: "회원 조회 실패",

  USER_NOT_AUTHENTICATED: "접근하기 위해서는 로그인이 필요합니다.",
  USER_AUTHENTICATED: "이미 로그인되어 있습니다.",

  // 포스트 관련
  POST_FIND_ALL_SUCCESS: "전체 글 조회 성공",
  POST_FIND_SUCCESS: "글 조회 성공",
  POST_FIND_ALL_FAIL: "전체 글 조회 실패",
  POST_CREATE_SUCCESS: "글 생성 성공",
  POST_CREATE_FAIL: "글 생성 실패",
  POST_UPDATE_SUCCESS: "글 업데이트 성공",
  POST_UPDATE_FAIL: "글 업데이트 실패",
  POST_DELETE_SUCCESS: "글 삭제 성공",
  POST_DELETE_FAIL: "글 삭제 실패",
  POST_NO_IDX: "해당 글이 없습니다.",
};

export class CustomError extends Error {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

interface APIResponse {
  status: number;
  message: string;
  data?: any;
}

// JSON Response: status, message, result-data
export const JSONResponse = (
  statusCode: number,
  statusMessage: string,
  data?: any,
): APIResponse => {
  return {
    status: statusCode,
    message: statusMessage,
    data: data,
  };
};
