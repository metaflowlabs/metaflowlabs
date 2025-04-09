<script lang="ts" setup>
</script>

<template>
  <div class="mx-auto max-w-5xl w-full lg:max-w-6xl xl:max-w-7xl">
    <!--
      Metadata header section removed.
      This will now be rendered directly in the [...slug].vue page template
      using the fetched data object.
    -->

    <!-- Slots remain for rendering content sections -->
    <div class="rfc-section">
      <h2 class="rfc-section-title">
        Summary
      </h2>
      <slot mdc-unwrap="p" name="summary" />
    </div>

    <div class="rfc-section">
      <h2 class="rfc-section-title">
        Motivation
      </h2>
      <slot mdc-unwrap="p" name="motivation" />
    </div>

    <div class="rfc-section">
      <h2 class="rfc-section-title">
        Detailed Design
      </h2>
      <!-- Note: The design slot often contains code blocks, ensure styling works -->
      <slot name="design" />
    </div>

    <div class="rfc-section">
      <h2 class="rfc-section-title">
        Alternatives Considered
      </h2>
      <slot mdc-unwrap="p" name="alternatives" />
    </div>

    <div class="rfc-section">
      <h2 class="rfc-section-title">
        Implementation Plan
      </h2>
      <slot mdc-unwrap="p" name="implementation" />
    </div>

    <div class="rfc-section">
      <h2 class="rfc-section-title">
        Testing Plan
      </h2>
      <slot mdc-unwrap="p" name="testing" />
    </div>

    <div class="rfc-section">
      <h2 class="rfc-section-title">
        Rollout and Adoption
      </h2>
      <slot mdc-unwrap="p" name="rollout" />
    </div>

    <div class="rfc-section">
      <h2 class="rfc-section-title">
        Risks and Mitigations
      </h2>
      <slot mdc-unwrap="p" name="risks" />
    </div>

    <div class="rfc-section">
      <h2 class="rfc-section-title">
        Success Metrics
      </h2>
      <slot mdc-unwrap="p" name="metrics" />
    </div>

    <div class="rfc-section">
      <h2 class="rfc-section-title">
        Open Questions
      </h2>
      <slot mdc-unwrap="p" name="questions" />
    </div>

    <div class="rfc-section">
      <h2 class="rfc-section-title">
        References
      </h2>
      <slot mdc-unwrap="p" name="references" />
    </div>
  </div>
</template>
