import Polaris from "../../assets/polaris.svg";
import GTBank from "../../assets/gt.svg";
import Providus from "../../assets/providus.svg";
import FirstBank from "../../assets/first.svg";

export const Banks = [
    {
        name: "Polaris Bank Limited",
        bankLogo: Polaris,
        bankLocation: "Ikeja",
        color:'#6C0BA9'
    },
    {
        name: "Guarantee Trust Holding",
        bankLogo: GTBank,
        bankLocation: "Lekki II",
        color:'#ffede3'
    },
    {
        name: "Providus Bank PLC",
        bankLogo: Providus,
        bankLocation: "Lekki II",
        color:'#fff'
    },
    {
        name: "First Bank of Nigeria",
        bankLogo: FirstBank,
        bankLocation: "Abuja",
        color:'#003B65'
    },


] as const;