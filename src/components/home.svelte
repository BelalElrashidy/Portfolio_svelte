<script>
	import Comic from './comic.svelte';
</script>

<section class="flex row Bio">
	<div class="img">
		<img src="IMG-20220620-WA0287 (2).jpg" alt="Bilal Abdelaal" />
	</div>
	<div class="line" />
	<div class="des flex col">
		<h1>Bilal Abdelaal</h1>
		<p>
			I'm Bilal, a passionate Computer Science student and full stack developer. I have expertise in
			C++ and Flutter, and I enjoy creating innovative solutions. With a strong foundation in
			computer science and a problem-solving mindset, I strive to make a meaningful impact in the
			world of technology.
		</p>
	</div>
</section>
<main class="flex col">
	<h2>Projects</h2>
	<div class="flex row projects">
		<article>
			<h2>School Website</h2>
			<p>
				I created an impressive school admission website, offering a user-friendly interface and
				seamless navigation. Prospective students and their families can explore our programs,
				facilities, and easily submit applications. A personalized experience and responsive design
				ensure a smooth journey towards joining our esteemed school community.
			</p>
		</article>
		<article>
			<h2>Habit Tracker</h2>
			<p>
				Habit Tracker: Your key to building positive habits and achieving goals. Stay motivated,
				track progress, and create lasting habits with ease
			</p>
		</article>
	</div>
</main>
<Comic />

<style>
	.flex {
		display: flex;
	}
	.row {
		flex-direction: row;
		column-gap: 3rem;
	}
	.col {
		flex-direction: column;
		row-gap: 3rem;
	}

	.Bio {
		justify-content: center;
		margin-bottom: 100px;
	}
	.des {
		width: 600px;
		color: #000f08;
		row-gap: 2rem;
		justify-content: center;
	}
	.img {
		overflow: hidden;
		width: 200px;
		height: 200px;
		border-radius: 100%;
	}
	.Bio img {
		width: 200px;
		position: relative;
		top: -50px;
	}
	.line {
		width: 10px;
		height: 200px;
		background-color: #faa916;
		border-radius: 20px;
	}
	main {
		align-items: center;
		background-color: #3d3939;
		color: #f5f5f5;
		padding: 75px 200px;
		margin-bottom: 50px;
	}
	article {
		width: 600px;
		display: flex;
		flex-direction: column;
		row-gap: 2rem;

		padding: 30px;
	}
</style>
