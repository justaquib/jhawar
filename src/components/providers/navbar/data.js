import Global from "../../../constants/Global";
import { fetcher } from "../../../lib/api";

export default async function NavBarData() {
    const res = await fetcher(`${Global.API}/navbars`,Global.AUTHORIZATION);
    // const res = 'I have access'
    return await res;
}