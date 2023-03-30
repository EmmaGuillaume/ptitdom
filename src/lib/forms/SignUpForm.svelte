<script lang="ts">
	import { goto } from '$app/navigation';
	import BackButton from '$lib/BackButton.svelte';
	import { nhost } from '$lib/utils/nhost';

	let error;
	let name: string;
	let email: string;
	let password: string;

	function submit() {
		console.log('submit');
		console.log('vars', email, password, name);

		nhost.auth
			.signUp({
				email,
				password,
				options: {
					displayName: name
				}
			})
			.then((res) => {
				console.log(res);

				goto('/');
			})
			.catch((e) => {
				error = e.response.data;
			});
	}
</script>

<form class="space-y-2 w-96 m-auto flex flex-col gap-2" method="POST" action="/sign-up">
	<h1 class="decoration-black text-5xl font-mono font-bold mt-28 mb-5">Inscription</h1>
	<label class="text-3xl" for="name">Pseudonyme*</label>
	<input
		type="text"
		id="name"
		class="bg-gray rounded-3xl h-10 indent-5"
		name="name"
		bind:value={name}
	/>

	<label class="text-3xl" for="password">Code confidentiel *</label>
	<input
		class="bg-gray rounded-3xl h-10 indent-5"
		id="password"
		type="password"
		name="password"
		bind:value={password}
	/>

	<p class="decoration-black text-2xl font-mono">* Champs obligatoires</p>

	<div class="pt-2">
		<button
			class="mb-9 flex items-center justify-center h-12 w-72 p-4 text-center rounded-2xl border-solid border-2 font-mono font-bold text-xl block mx-auto"
			type="submit"
			>S’inscrire
		</button>
		<BackButton href="../" name="retour" />
	</div>
</form>
