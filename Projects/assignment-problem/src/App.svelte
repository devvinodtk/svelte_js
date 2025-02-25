<script>
  import NewComponent from "./NewComponent.svelte";
  let courseGoal;
</script>

<h1>Assignment</h1>

<p>Solve these tasks.</p>

<ol>
  <li>Add an input field that allows users to enter a course goal.</li>
  <input type="text" bind:value={courseGoal} />
  <li>Output the user input in a h1 tag.</li>
  Course Goal:
  <h1>{courseGoal}</h1>
  <li>
    Color the output red (e.g. by adding a class) if it contains at least one
    exclamation mark.
  </li>
  <h1 class={courseGoal && courseGoal.includes("!") ? "color-red" : ""}>
    {courseGoal}
  </h1>
  <li>
    Put the h1 tag + output into a separate component to which you pass the user
    input
  </li>
  <NewComponent {courseGoal} />
</ol>

<style>
  .color-red {
    color: red;
  }
</style>
