export function load({ fetch }) {  // +page.svelteと連動してデータを引き渡すための関数
    async function getdata() {
        const x = await fetch('./ddbj_submission_dev1.json')
        return    await x.json()
    }
    return getdata()
    // load 関数内で return した値が +page.svelte に渡される。

}