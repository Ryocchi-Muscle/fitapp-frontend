//認証関連の処理（Rails で作成してきた API の設定を行うファイル）
import Cookies from "js-cookie";
import client from "./client";

// サインアップ
export const signUp = (params: string) => {
  return client.post("/auth", params);
};

// サインイン
export const signIn = (params: string) => {
  return client.post("/auth/sign_in", params);
};

// サインアウト
export const signOut = () => {
  return client.delete("/auth/sign_out", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

// ログインユーザーの取得
export const getCurrentUser = () => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  )
    return;

  return client.get("/auth/sessions", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

//ゲストログインユーザーの取得
// export const getGuestCurrentUser = () => {
//   if (!Cookies.get('_access_token') || !Cookies.get('_client') || !Cookies.get('_uid')) return;

//   return client.get('/auth/guest_sessions', {
//     headers: {
//       'access-token': Cookies.get('_access_token'),
//       client: Cookies.get('_client'),
//       uid: Cookies.get('_uid'),
//     },
//   });
// };
