<script lang="ts">
	let error;
	let name: string;
	let email: string;
	let password: string;
</script>

<form class="space-y-2" method="POST" action="/sign-in">
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
