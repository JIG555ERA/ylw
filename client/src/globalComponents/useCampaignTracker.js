import { useEffect } from "react";
import { CAMPAIGN_URL } from "../constants/constants";

export default function useCampaignTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    const isTsunamiCampaign = 
    params.get("utm_source") === "LLIM" &&
    params.get("utm_medium") === "offline" &&
    params.get("utm_campaign") === "tsunami" &&
    params.get("utm_id") === "tsunami-jan-2026";

    if (localStorage.getItem("tsunami_tracked")) return;

    if (isTsunamiCampaign) {
      fetch(CAMPAIGN_URL,
        {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              url: window.location.search,
              publicip: ""
            }),
        }
       )
       .then(() => {
        localStorage.setItem("tsunami_tracked", "true");
       })
       .catch(console.error)
    }

  }, [])
}