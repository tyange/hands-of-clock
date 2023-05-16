import { writable } from "svelte/store";

const PAGINATION = {
    currentPageNum: 1,
    pageNums: 0
}

const { set, subscribe, update } = writable(PAGINATION);

const updatePageNums = (pageNums: number) => update((prevPagination) => { return { ...prevPagination, pageNums } })

export default {
    subscribe,
    updatePageNums
}