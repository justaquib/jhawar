import { fetcher } from "../lib/api";
import { NextResponse } from "next/server";
import Global from '../constants/Global';

export default async function getNavBar(){
    const res = await fetcher(`${Global.API}/navbars`,Global.AUTHORIZATION);
    // console.log(res)
    // console.log('hello')
    return res;
};
