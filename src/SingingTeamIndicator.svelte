<script>
    export let team = "A";
    export let activeTeam = "B";
    $: classIfActive = team === activeTeam ? team : "";
</script>

<style>
    .who-is-singing {
        padding: 0.7rem;
        margin: 0.7rem;
        border-radius: 0.5rem;
        display: inline-block;
        border: 1px solid black;
        box-shadow: 1px 1px black;
        background: silver;
    }
    .A {
        background: #b2e6c9;
    }
    .B {
        background: #cdb2e6;
    }
</style>

<div class="who-is-singing {classIfActive}">Team {team}</div>
