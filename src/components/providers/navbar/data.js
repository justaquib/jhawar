import Global from "../../../constants/Global";
import { fetcher } from "../../../lib/api";

export default async function NavBarData() {
    const res = await fetcher(`${Global.API}/navbars`,Global.AUTHORIZATION);
    return res;
}