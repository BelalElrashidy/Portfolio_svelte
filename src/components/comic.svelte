<script context="module">
	import moment from 'moment';

	import { comic } from '$lib/index';
	const data = await comic();
	const date = moment(data.year).fromNow();
</script>

<script>
</script>

<div id="data" class="jokes">
	<h2>{data.safe_title}</h2>
	<img src={data.img} alt={data.alt} />
	<p>{date}</p>
</div>

<style>
	.jokes {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 3rem;
		margin-bottom: 100px;
		margin-top: 100px;
	}
	.jokes p {
		font-weight: 500;
		font-size: 25px;
	}

	.jokes h2 {
		font-weight: 600;
		font-size: 32px;
	}
	.jokes img {
		width: 400px;
	}
</style>
