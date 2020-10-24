<script>
	import { deck } from "./deck.js";

	let currentCard = deck.drawCard();
	let currentTeamClass = "team-a";
	let currentTeamName = "Team A";

	const drawCard = () => {
		currentCard = deck.drawCard();
	};

	const switchTeam = () => {
		if (currentTeamClass === "team-a") {
			currentTeamClass = "team-b";
			currentTeamName = "Team B";
		} else {
			currentTeamClass = "team-a";
			currentTeamName = "Team A";
		}
	};

	const switchTeamAndDraw = () => {
		gtag("event", "draw", {
			event_category: "card",
			event_label: currentCard,
		});
		switchTeam();
		drawCard();
	};

	const skip = () => {
		gtag("event", "skip", {
			event_category: "card",
			event_label: currentCard,
		});
		drawCard();
	};

	const draw = () => {
		gtag("event", "draw", {
			event_category: "card",
			event_label: currentCard,
		});
		drawCard();
	};
	let playingWithTeams = true;
</script>

<style>
	.splash-screen {
		z-index: 999;
		border-radius: 10px;
		background-color: #87c3f1;
		padding: 5%;
		margin: 3%;
	}

	/* My CSS */
	.flex-center {
		display: flex;
		align-items: center; /* Vertical center alignment */
		justify-content: center; /* Horizontal center alignment */
	}

	.card {
		background-color: #87c3f1;
		border-radius: 0.5rem;
		box-shadow: 2px 2px 10px #888888;
	}

	.card {
		width: 20rem;
		height: 10rem;
		padding: 1rem;
	}
	.lolbutton {
		padding: 1rem;
		margin: 1rem;
		border-radius: 0.5rem;
		border: 1px solid black;
	}
	.team {
		padding: 2rem;
		margin: 2rem;
		border-radius: 0.5rem;
	}
	.team-a {
		background: violet;
	}
	.team-b {
		background: skyblue;
	}
</style>

<div class="app">
	{#if playingWithTeams}
		<div class="flex-center">
			<div class="team {currentTeamClass}">{currentTeamName}</div>
			<button class="lolbutton" on:click={switchTeamAndDraw}>switch team
				and draw</button>
		</div>
		<div class="flex-center">
			<div class="card flex-center">{currentCard}</div>
			<button class="lolbutton" on:click={skip}>skip</button>
		</div>
	{:else}
		<div class="flex-center" />
		<div class="flex-center">
			<div class="card flex-center">{currentCard}</div>
			<button class="lolbutton" on:click={draw}>draw</button>
		</div>
	{/if}
</div>
