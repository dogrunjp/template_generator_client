export function load({ fetch }) {  // <- ここの引数 fetch は後述

    // データ取得の処理
    async function getdata() {
        const x = await fetch('./ddbj_submission_dev1.json')
        return    await x.json()
    }
    return getdata()
    // load 関数内で return した値が +page.svelte に渡される。

}