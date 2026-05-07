# SNS・販促素材展開チェック

social-promo-asset-rollout-checker は、AdobePlugin 領域の NON PICKUP Rank 10 アイデアをクローズドアルファとして実装したローカルファーストの検証ツールです。

## 目的

複数媒体向けのサイズ展開で、文言抜けや重要要素の切れが発生しやすい。

このリポジトリでは、1つのデザインからSNS、バナー、商品画像向け派生を作り、サイズと文言を検査する。 ための入力正規化、代表シナリオ検証、レビュー判断、レポート出力、導入・手動テスト手順、QCDS 証跡を一式で管理します。

## クローズドアルファ範囲

- 中核ロジック: `src/core`
- 入力検証: `src/validators`
- レポート生成: `src/report`
- 判断モデル: `src/review-model`
- CLI: `src/cli`
- ホスト/UI adapter: `src/host-adapter/adobe-host-adapter.js`
- 代表サンプル: `samples/representative-suite.json`

## 実行

```powershell
npm test
npm run validate
npm run build
```

## 公開位置づけ

- Version: v0.1.0-alpha.1
- GitHub prerelease: closed alpha
- 手動テスト: Codex 側では未実施。ユーザー実施用の手順は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` に記録。
- 主な公開先: BOOTH / GitHub Release

## 差別化

媒体別の確認項目を出し、PhotoshopやIllustratorで作った元素材の使用元も残す。
