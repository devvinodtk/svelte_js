<script>
  export let courseGoal;
</script>

<div>
  <h1 class={courseGoal && courseGoal.includes("!") ? "color-red" : ""}>
    {courseGoal}
  </h1>
</div>

<style>
  .color-red {
    color: red;
  }
</style>
