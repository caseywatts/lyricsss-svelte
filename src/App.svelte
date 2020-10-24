<script>
	import { deck } from "./deck.js";

	let currentCard = deck.drawCard();
	let currentTeamClass = "team-a-background";
	let currentTeamName = "Team A";

	const drawCard = () => {
		currentCard = deck.drawCard();
	};

	const switchTeam = () => {
		if (currentTeamClass === "team-a-background") {
			currentTeamClass = "team-b-background";
			currentTeamName = "Team B";
		} else {
			currentTeamClass = "team-a-background";
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
	.team-who-drew {
		padding: 0.2rem;
		margin: 0.2rem;
		border-radius: 0.5rem;
		display: inline-block;
	}
	.team-a {
		background: violet;
	}
	.team-b {
		background: skyblue;
	}
	.team-a-background {
		background: linear-gradient(63deg, #b2e6c9 23%, transparent 23%) 7px 0,
			linear-gradient(63deg, transparent 74%, #b2e6c9 78%),
			linear-gradient(
				63deg,
				transparent 34%,
				#b2e6c9 38%,
				#b2e6c9 58%,
				transparent 62%
			),
			#92c6a9;
		background-size: 16px 48px;
	}

	.team-b-background {
		background: linear-gradient(153deg, #cdb2e6 23%, transparent 23%) 7px 0,
			linear-gradient(153deg, transparent 74%, #cdb2e6 78%),
			linear-gradient(
				153deg,
				transparent 34%,
				#cdb2e6 38%,
				#cdb2e6 58%,
				transparent 62%
			),
			#e2c4ff;
		background-size: 16px 48px;
	}
	.app {
		min-height: 100vh;
	}
</style>

<div class="app {currentTeamClass}">
	{#if playingWithTeams}
		<div class="flex-center">
			<button class="lolbutton" on:click={switchTeamAndDraw}>switch team
				and draw</button>
		</div>
		<div class="flex-center">
			<div class="team-who-drew {currentTeamClass}">
				{currentTeamName}
				drew
			</div>
		</div>
		<div class="flex-center">
			<div class="card flex-center">
				<div class="">{currentCard}</div>
			</div>
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
