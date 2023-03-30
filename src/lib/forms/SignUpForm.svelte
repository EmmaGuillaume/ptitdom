<script lang="ts">
	import { goto } from '$app/navigation';
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

<form class="space-y-2" method="POST" action="/sign-up">
	<label for="">name</label>
	<input type="text" name="name" bind:value={name} />

	<label for="">password</label>
	<input type="password" name="password" bind:value={password} />
	<div class="pt-2">
		<button class="py-2 px-4 text-white bg-gray-700 rounded-md shadow-sm" type="submit"
			>Sign up
		</button>
	</div>
</form>
