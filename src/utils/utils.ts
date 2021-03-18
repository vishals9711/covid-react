import { IGlobalCountDateResponse } from "../services/covidapi";

export function returnLastDays(data: IGlobalCountDateResponse, days?: number): {
    labels: string[],
    confirmed: number[],
    deaths: number[],
    recovered: number[]
} {
    days = days || 10;
    const returnObj = {
        labels: [] as string[],
        confirmed: [] as number[],
        deaths: [] as number[],
        recovered: [] as number[]
    }

    const arr = Object.keys(data.result).slice(1).slice(-1 * days);
    const { result } = data;
    returnObj.labels = arr;
    arr.forEach(key => {
        const { confirmed, deaths, recovered } = result[key];
        returnObj.confirmed.push(confirmed);
        returnObj.deaths.push(deaths);
        returnObj.recovered.push(recovered);

    });
    return returnObj;
}