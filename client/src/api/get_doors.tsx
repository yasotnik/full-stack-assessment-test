import { DoorInterface } from "../constants/commons";
import API from "./api";

export function getDoors(page: number): any {
    API.get<DoorInterface[]>(`doors_detailed_list/page/${page}`)
        .then((res) => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.error(err);
        });
}
