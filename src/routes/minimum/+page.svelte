<script lang="ts">
	import SubmitForm from "$lib/SubmitForm.svelte";
	import "svelte-schema-form/css/layout.scss";
	import "svelte-schema-form/css/basic-skin.scss";
	import { onMount } from "svelte";
    import type { get } from "lodash-es";

	export let data;

	let schema:any = data.category;


	let storedSchema = undefined;
	if (typeof window !== 'undefined') {
		storedSchema = window.localStorage.getItem('schema');
		if (storedSchema) schema = JSON.parse(storedSchema);
	}
	let jsonInvalid = false;

	let value = { };
	let valueJson = '';
	let collapsible = false;

	const schemaUpdate = (ev: any) => {
		const newSchema = ev.currentTarget.value;
		try {
			schema = JSON.parse(newSchema);
			jsonInvalid = false;
			if (typeof window !== 'undefined') {
				window.localStorage.setItem('schema', newSchema);
			}
		} catch {
			jsonInvalid = true;
		}
	}

	const submit = (e: CustomEvent) => {
		valueJson = JSON.stringify(e.detail.value, undefined, 2).trim();
	};

	const change = (e: CustomEvent) => {
		if (e.detail.op === "innerSubmit") {
			valueJson = JSON.stringify(e.detail.value, undefined, 2).trim();
		}
	}

	const componentContext = { currencySymbol: '£' };

</script>

<div class="container">


	<div class="schema" class:jsonInvalid>
		<div class="control">
			<input type="checkbox" id="collapsible" bind:checked={collapsible} />
			<label for="collapsible">Collapsible</label>
		</div>
		
		<textarea id="schema" on:keyup={schemaUpdate}>{JSON.stringify(schema, undefined, 2)}</textarea>
		
	</div>
	<div class="form">
		<SubmitForm {schema} {value} on:submit={submit} on:value={change} uploadBaseUrl="https://husky.local:5000/api/data" {collapsible} {componentContext} />
	</div>
	<div class="output">
		<pre>
			 {valueJson} 
		</pre>
	</div>


</div>

<style>
	* {
		box-sizing: border-box;
	}

	.container {
		display: flex;
		position: relative;
	}
	.schema, .form, .output {
		width: 32%;
		border: solid 1px black;
		height: 99vh;
		position: relative;
	}
	.schema {
		border: none;
		display: flex;
		flex-direction: column;
	}
	.form, .output {
		margin-left: 1%;
		padding: 1em;
	}
	#schema {
		width: 100%;
		height: 100%;
		gap: 1em;
	}
	.schema.jsonInvalid #schema {
		color: darkred;
	}

	#collapsible {
		margin-bottom: 6px;
	}
	
	.control {
		margin-bottom: 6px;
	}
</style>