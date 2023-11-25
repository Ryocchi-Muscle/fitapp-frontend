//バックエンドのAPIと通信するためのURLやリクエストの設定を行うファイル
import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

const options = {
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  axios.create({
    baseURL: "http://localhost:3000", //リクエスト先(Rails)のルートエンドポイントの設定
  }),
  options,
);

export default client;
