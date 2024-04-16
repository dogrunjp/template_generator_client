export function load({ fetch }) {  // 

    const schema_files = [
        "./example_schema_minimum.json",
        "./submission_category_dev.json",
    ]
    // データ取得の処理
    async function getdata() {
        //const x = await fetch('./example_schema_minimum.json')
        //console.log(await x.json())
        //return    await x.json()

        const responses  = await Promise.all(schema_files.map(url => fetch(url)));
        const results = await Promise.all(responses.map(response => response.json()));
        const schemas = {minimum: results[0], category: results[1]}
        return schemas

    }
    return getdata()
    // load関数はobjectを返す必要があるため、schemaとしてまとめたobjectを返す

}