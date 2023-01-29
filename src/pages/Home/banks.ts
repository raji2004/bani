import Polaris from "../../assets/polaris.svg";
import GTBank from "../../assets/gt.svg";
import Providus from "../../assets/providus.svg";
import FirstBank from "../../assets/first.svg";

export const Banks = [
    {
        name: "Polaris Bank Limited",
        bankLogo: Polaris,
        bankLocation: "Ikeja"
    },
    {
        name: "Guarantee Trust Holding",
        bankLogo: GTBank,
        bankLocation: "Lekki II"
    },
    {
        name: "Providus Bank PLC",
        bankLogo: Providus,
        bankLocation: "Lekki II"
    },
    {
        name: "First Bank of Nigeria",
        bankLogo: FirstBank,
        bankLocation: "Abuja"
    },


] as const;