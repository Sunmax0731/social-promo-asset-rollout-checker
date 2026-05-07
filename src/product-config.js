export const productConfig = {
  "product": {
    "rank": 10,
    "tier": "P0",
    "score": 69,
    "domain": "AdobePlugin",
    "ideaNo": 9,
    "ideaName": "SNS・販促素材展開チェック",
    "repository": "social-promo-asset-rollout-checker",
    "publish": "BOOTH / GitHub Release",
    "priorityReason": "サイズ展開と文言抜け検査は用途が広く、素材販売の販促導線にも効く。",
    "surface": "AdobeExpress 向け host adapter とローカル証跡レポート CLI",
    "integration": "Adobe Express",
    "overview": "1つのデザインからSNS、バナー、商品画像向け派生を作り、サイズと文言を検査する。",
    "problem": "複数媒体向けのサイズ展開で、文言抜けや重要要素の切れが発生しやすい。",
    "differentiation": "媒体別の確認項目を出し、PhotoshopやIllustratorで作った元素材の使用元も残す。",
    "adobeHost": "AdobeExpress",
    "adobeHostReason": "ZIP metadata の integration が Adobe Express で、SNS/販促素材展開が中心。"
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
