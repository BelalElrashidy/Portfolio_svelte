<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<body>
	<Header />
	<slot />
	<Footer />
</body>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	body {
		background-color: #f5f5f5;
		font-family: sans-serif;
	}
</style>
